import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check, ExternalLink, Heart, RefreshCw, X } from 'lucide-react'

import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { libraryEntries } from '../data/library'
import { sourceById } from '../data/sources'
import { includesQuery } from '../lib/search'
import type { LibraryEntry } from '../lib/types'
import { useAppState } from '../state/AppStateProvider'
import { reviewLegislation, withUpdatedFavourite } from '../state/actions'

const TABS = ['Commonwealth', 'Queensland', 'Industry/Umwelt', 'Tool/Database', 'Restoration framework'] as const

export function LibraryPage() {
  const { state, persist } = useAppState()
  const [params] = useSearchParams()
  const focusId = params.get('focus')
  const mode = params.get('mode') // drill

  const [q, setQ] = useState('')
  const [tab, setTab] = useState<(typeof TABS)[number]>('Queensland')

  const items = useMemo(() => {
    let entries = libraryEntries
    entries = entries.filter((e) => e.jurisdiction === tab)
    if (q.trim()) entries = entries.filter((e) => includesQuery(`${e.name} ${e.whatItIs} ${e.usedFor}`, q))
    if (focusId) {
      const idx = entries.findIndex((e) => e.id === focusId)
      if (idx > 0) entries = [entries[idx], ...entries.slice(0, idx), ...entries.slice(idx + 1)]
    }
    return entries
  }, [q, tab, focusId])

  const fav = (id: string) => !!state.favourites.legislation[id]

  return (
    <div>
      <PageHeader
        title="Legislation / Policy / Framework Library"
        subtitle="Queensland + EPBC essentials, plus Umwelt’s published service language. Each entry is source-tagged with official links."
        right={
          <Button variant="secondary" asChild>
            <a href="/library?mode=drill">Legislation drill</a>
          </Button>
        }
      />

      {mode === 'drill' ? (
        <LegislationDrill
          items={libraryEntries}
          onReview={(id, res) => persist(reviewLegislation(state, id, res))}
        />
      ) : (
        <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
          <Card className="h-fit">
            <CardContent className="space-y-3 p-4">
              <div>
                <div className="text-xs font-semibold text-muted-foreground">Search</div>
                <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. EPBC, Offsets Act, MSES" />
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground">Category</div>
                <Tabs value={tab} onValueChange={(v) => setTab(v as (typeof TABS)[number])}>
                  <TabsList className="mt-2 grid h-auto w-full grid-cols-2">
                    {TABS.map((t) => (
                      <TabsTrigger key={t} value={t} className="text-xs">
                        {t}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <TabsContent value={tab} />
                </Tabs>
              </div>
              <div className="rounded-lg border bg-muted/40 p-3 text-xs text-muted-foreground">
                <div className="font-semibold text-foreground">Interview drill prompt</div>
                <div className="mt-1">“Name it, jurisdiction, what it’s used for, typical trigger, typical output.”</div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="text-xs text-muted-foreground">
              Loaded <span className="font-semibold text-foreground">{libraryEntries.length}</span> entries • Showing{' '}
              <span className="font-semibold text-foreground">{items.length}</span>
            </div>
            {items.map((e) => (
              <EntryCard
                key={e.id}
                entry={e}
                favourite={fav(e.id)}
                onToggleFav={() => persist(withUpdatedFavourite(state, 'legislation', e.id))}
              />
            ))}
            {items.length === 0 ? (
              <div className="rounded-lg border bg-card p-4 text-sm text-muted-foreground">No matches.</div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}

function EntryCard({
  entry,
  favourite,
  onToggleFav,
}: {
  entry: LibraryEntry
  favourite: boolean
  onToggleFav: () => void
}) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="muted">{entry.jurisdiction}</Badge>
          {entry.year ? <Badge variant="secondary">{entry.year}</Badge> : null}
          {entry.needsVerification ? <Badge variant="outline">Needs verification</Badge> : null}
          {entry.topics.slice(0, 4).map((t) => (
            <Badge key={t} variant="muted">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle>{entry.name}</CardTitle>
            <CardDescription className="mt-1">{entry.whatItIs}</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onToggleFav}>
            <Heart className={cn('h-4 w-4', favourite ? 'fill-current' : '')} />
            Save
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <Field title="Used for">{entry.usedFor}</Field>
        <Field title="Typical trigger / when relevant">{entry.trigger}</Field>
        <Field title="Why mention in interview">{entry.interviewMention}</Field>
        <Field title="Common consultant outputs">{entry.typicalOutputs.join(' • ')}</Field>
        <div className="flex flex-wrap items-center gap-2">
          {entry.officialLink ? (
            <Button asChild variant="outline" size="sm">
              <a href={entry.officialLink} target="_blank" rel="noreferrer">
                Official link <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
          <div className="text-xs text-muted-foreground">
            Sources:{' '}
            {entry.sources
              .map((sid) => sourceById[sid]?.title ?? sid)
              .filter(Boolean)
              .join(' • ')}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Field({ title, children }: { title: string; children: string }) {
  return (
    <div>
      <div className="text-xs font-semibold text-muted-foreground">{title}</div>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  )
}

function cn(...s: (string | false | undefined)[]) {
  return s.filter(Boolean).join(' ')
}

function LegislationDrill({
  items,
  onReview,
}: {
  items: LibraryEntry[]
  onReview: (id: string, res: { correct: boolean; confidence01: number }) => void
}) {
  const [i, setI] = useState(() => Math.floor(Math.random() * items.length))
  const [revealed, setRevealed] = useState(false)

  const entry = items[i]
  if (!entry) return null

  const next = () => {
    setRevealed(false)
    setI(Math.floor(Math.random() * items.length))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Legislation drill</CardTitle>
        <CardDescription>Say it out loud: name → jurisdiction → purpose → trigger → typical output.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="rounded-lg border bg-background p-4">
          <div className="text-xs font-semibold text-muted-foreground">Prompt</div>
          <div className="mt-2 text-lg font-semibold">{entry.name}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="muted">{entry.jurisdiction}</Badge>
            {entry.year ? <Badge variant="secondary">{entry.year}</Badge> : null}
            {entry.needsVerification ? <Badge variant="outline">Needs verification</Badge> : null}
          </div>
        </div>

        {!revealed ? (
          <Button variant="secondary" className="w-full" onClick={() => setRevealed(true)}>
            Reveal
          </Button>
        ) : (
          <div className="space-y-3">
            <div className="rounded-lg border bg-muted/30 p-4">
              <div className="text-xs font-semibold text-muted-foreground">Reference</div>
              <div className="mt-2 space-y-2 text-sm">
                <div>
                  <span className="font-semibold">What it is:</span> {entry.whatItIs}
                </div>
                <div>
                  <span className="font-semibold">Used for:</span> {entry.usedFor}
                </div>
                <div>
                  <span className="font-semibold">Trigger:</span> {entry.trigger}
                </div>
                <div>
                  <span className="font-semibold">Outputs:</span> {entry.typicalOutputs.join(' • ')}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  onReview(entry.id, { correct: false, confidence01: 0.2 })
                  next()
                }}
              >
                <X className="h-4 w-4" /> Missed it
              </Button>
              <Button
                onClick={() => {
                  onReview(entry.id, { correct: true, confidence01: 0.8 })
                  next()
                }}
              >
                <Check className="h-4 w-4" /> Got it
              </Button>
            </div>

            <Button variant="ghost" className="w-full" onClick={next}>
              <RefreshCw className="h-4 w-4" /> Next random
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


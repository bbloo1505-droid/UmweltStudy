import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { PageHeader } from '../components/PageHeader'
import { PhotoHero } from '../components/PhotoHero'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { glossaryCards } from '../data/glossary'
import { includesQuery } from '../lib/search'
import { isDue } from '../lib/srs'
import type { TopicTag } from '../lib/types'
import { useAppState } from '../state/AppStateProvider'
import { reviewGlossaryCard, withUpdatedFavourite } from '../state/actions'
import { FlashcardPlayer, type FlashcardMode } from '../components/study/FlashcardPlayer'

export const GLOSSARY_TOPIC_TAGS: TopicTag[] = [
  'restoration',
  'offsets',
  'approvals',
  'desktop-review',
  'gis',
  'monitoring',
  'threatened-species',
  'consulting',
  'nature-positive',
  'umwelt',
  'policy',
  'legislation',
]

function topicFromSearch(params: URLSearchParams): TopicTag | 'all' {
  const t = params.get('topic')
  if (!t) return 'all'
  return GLOSSARY_TOPIC_TAGS.includes(t as TopicTag) ? (t as TopicTag) : 'all'
}

export function GlossaryPage() {
  const { state, persist } = useAppState()
  const [params, setParams] = useSearchParams()
  const [q, setQ] = useState('')
  const [topic, setTopic] = useState<TopicTag | 'all'>(() => topicFromSearch(new URLSearchParams(window.location.search)))
  const [mode, setMode] = useState<FlashcardMode>('flip')

  const focusId = params.get('focus')
  const session = params.get('session')

  useEffect(() => {
    setTopic(topicFromSearch(params))
  }, [params])

  const filtered = useMemo(() => {
    let items = glossaryCards

    if (topic !== 'all') items = items.filter((c) => c.topics.includes(topic))
    if (q.trim()) items = items.filter((c) => includesQuery(`${c.term} ${c.plainEnglish} ${c.consultantDefinition}`, q))

    if (session === 'today') items = items.filter((c) => isDue(state.glossaryProgress[c.id]))

    // If focus is provided, put it first.
    if (focusId) {
      const idx = items.findIndex((c) => c.id === focusId)
      if (idx > 0) items = [items[idx], ...items.slice(0, idx), ...items.slice(idx + 1)]
    }

    return items
  }, [q, topic, session, state.glossaryProgress, focusId])

  const favourite = (id: string) => !!state.favourites.glossary[id]

  const startRandomDue = () => {
    setParams((p) => {
      p.set('session', 'today')
      p.delete('focus')
      return p
    })
  }

  const applyTopicFilter = (t: TopicTag | 'all') => {
    setTopic(t)
    setParams(
      (p) => {
        if (t === 'all') p.delete('topic')
        else p.set('topic', t)
        return p
      },
      { replace: true },
    )
  }

  return (
    <div>
      <PhotoHero
        kind="glossary"
        emoji="📚"
        title="Glossary Flashcards"
        subtitle="Learn each term in plain English, then the consultant version — so you can say both in the interview."
      />

      <div className="mt-4">
        <PageHeader
          title="Study"
          subtitle="Pick a mode below the filters: flip cards, quick quiz, or type the answer."
          tip="Filters narrow the list. “Daily review” shows cards that are due for revision (built-in spaced repetition)."
          right={
            <div className="flex gap-2">
              <Button variant="secondary" onClick={startRandomDue}>
                Daily review ✅
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setQ('')
                  setParams(new URLSearchParams())
                }}
              >
                Reset ♻️
              </Button>
            </div>
          }
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
        <Card className="h-fit">
          <CardContent className="space-y-3 p-4">
            <div>
              <div className="text-xs font-semibold text-muted-foreground">Search</div>
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. PMST, residual impact, ACT-D" />
            </div>

            <div>
              <div className="text-xs font-semibold text-muted-foreground">Topic</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Chip active={topic === 'all'} onClick={() => applyTopicFilter('all')} label="All" />
                {GLOSSARY_TOPIC_TAGS.map((t) => (
                  <Chip key={t} active={topic === t} onClick={() => applyTopicFilter(t)} label={t} />
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-muted-foreground">Mode</div>
              <Tabs value={mode} onValueChange={(v) => setMode(v as FlashcardMode)}>
                <TabsList className="mt-2 w-full">
                  <TabsTrigger value="flip" className="flex-1">
                    Flip
                  </TabsTrigger>
                  <TabsTrigger value="quiz" className="flex-1">
                    Quiz
                  </TabsTrigger>
                  <TabsTrigger value="type" className="flex-1">
                    Type
                  </TabsTrigger>
                </TabsList>
                <TabsContent value={mode} />
              </Tabs>
            </div>

            <div className="rounded-lg border bg-muted/40 p-3 text-xs text-muted-foreground">
              <div className="font-semibold text-foreground">Interview tip</div>
              <div className="mt-1">
                Aim for: “What it is” → “Why it matters” → “How a consultant uses it” → “Limits / next steps” 🧠
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="min-w-0">
          <div className="mb-2 text-xs text-muted-foreground">
            Loaded <span className="font-semibold text-foreground">{glossaryCards.length}</span> glossary cards • Showing{' '}
            <span className="font-semibold text-foreground">{filtered.length}</span>
            {session === 'today' ? ' due today ✅' : ''}
          </div>
          <FlashcardPlayer
            cards={filtered}
            mode={mode}
            isFavourite={favourite}
            onToggleFavourite={(id) => persist(withUpdatedFavourite(state, 'glossary', id))}
            onReview={(id, res) => persist(reviewGlossaryCard(state, id, res))}
          />
          <div className="mt-4 text-xs text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> cards.
            {session === 'today' ? ' (Due today)' : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={[
        'rounded-full border px-3 py-1 text-xs transition-colors',
        active ? 'bg-primary text-primary-foreground border-transparent' : 'bg-background hover:bg-muted/60',
      ].join(' ')}
    >
      {label}
    </button>
  )
}


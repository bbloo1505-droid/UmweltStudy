import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Check, Heart, X } from 'lucide-react'

import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { scenarios } from '../data/scenarios'
import { includesQuery } from '../lib/search'
import { isDue } from '../lib/srs'
import type { ScenarioDrill } from '../lib/types'
import { useAppState } from '../state/AppStateProvider'
import { reviewScenario, withUpdatedFavourite } from '../state/actions'

export function ScenariosPage() {
  const { state, persist } = useAppState()
  const [params] = useSearchParams()
  const focusId = params.get('focus')
  const session = params.get('session')

  const [q, setQ] = useState('')

  const items = useMemo(() => {
    let items = scenarios
    if (q.trim()) items = items.filter((s) => includesQuery(`${s.title} ${s.setup}`, q))
    if (session === 'today') items = items.filter((s) => isDue(state.scenarioProgress[s.id]))
    if (focusId) {
      const idx = items.findIndex((it) => it.id === focusId)
      if (idx > 0) items = [items[idx], ...items.slice(0, idx), ...items.slice(idx + 1)]
    }
    return items
  }, [q, focusId, session, state.scenarioProgress])

  const fav = (id: string) => !!state.favourites.scenarios[id]

  return (
    <div>
      <PageHeader
        title="Scenario Drills"
        subtitle="Short “client-style” problems — answer as if you’re in a meeting, not writing an essay."
        tip="Use the sidebar prompts on each card: strong answer, red flags, and simple language you could say aloud."
        right={
          <Button variant="secondary" asChild>
            <Link to="/scenarios?session=today">Today’s due scenarios</Link>
          </Button>
        }
      />

      <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
        <Card className="h-fit">
          <CardContent className="space-y-3 p-4">
            <div>
              <div className="text-xs font-semibold text-muted-foreground">Search</div>
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. weeds, mapping vs field" />
            </div>
            <div className="rounded-lg border bg-muted/40 p-3 text-xs text-muted-foreground">
              <div className="font-semibold text-foreground">Pressure drill</div>
              <div className="mt-1">
                Deliver in 90 seconds: “what matters” → “what evidence” → “what risks” → “what next”.
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="text-xs text-muted-foreground">
            Loaded <span className="font-semibold text-foreground">{scenarios.length}</span> scenarios • Showing{' '}
            <span className="font-semibold text-foreground">{items.length}</span>
            {session === 'today' ? ' due today ✅' : ''}
          </div>
          {items.map((s) => (
            <ScenarioCard
              key={s.id}
              s={s}
              favourite={fav(s.id)}
              onToggleFav={() => persist(withUpdatedFavourite(state, 'scenarios', s.id))}
              onReview={(res) => persist(reviewScenario(state, s.id, res))}
            />
          ))}
          {items.length === 0 ? (
            <div className="rounded-lg border bg-card p-4 text-sm text-muted-foreground">No matches.</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function ScenarioCard({
  s,
  favourite,
  onToggleFav,
  onReview,
}: {
  s: ScenarioDrill
  favourite: boolean
  onToggleFav: () => void
  onReview: (res: { correct: boolean; confidence01: number }) => void
}) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={s.difficulty === 'hard' ? 'default' : 'secondary'}>{s.difficulty}</Badge>
          {s.needsVerification ? <Badge variant="outline">Needs verification</Badge> : null}
          {s.topics.slice(0, 4).map((t) => (
            <Badge key={t} variant="muted">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-base">{s.title}</CardTitle>
            <CardDescription className="mt-1">{s.setup}</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onToggleFav}>
            <Heart className={favourite ? 'h-4 w-4 fill-current' : 'h-4 w-4'} />
            Save
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <List title="Strong answer should cover" items={s.strongAnswerCovers} />
        <List title="Red flags" items={s.redFlags} />
        <List title="Consultant-style response framework" items={s.consultantFramework} />
        <List title="Best language to use" items={s.bestLanguage} />
        <div className="rounded-lg border bg-muted/30 p-3">
          <div className="text-xs font-semibold text-muted-foreground">Say it simply</div>
          <div className="mt-1 text-sm">{s.sayItSimply}</div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" onClick={() => onReview({ correct: false, confidence01: 0.25 })}>
            <X className="h-4 w-4" /> I struggled
          </Button>
          <Button onClick={() => onReview({ correct: true, confidence01: 0.8 })}>
            <Check className="h-4 w-4" /> Strong answer
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs font-semibold text-muted-foreground">{title}</div>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
        {items.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  )
}


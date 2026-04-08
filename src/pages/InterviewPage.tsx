import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Clock, Heart, RefreshCw } from 'lucide-react'

import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { interviewQuestions } from '../data/interview'
import { includesQuery } from '../lib/search'
import type { InterviewQuestion } from '../lib/types'
import { useAppState } from '../state/AppStateProvider'
import { reviewInterview, withUpdatedFavourite } from '../state/actions'

export function InterviewPage() {
  const { state, persist } = useAppState()
  const [params] = useSearchParams()
  const focusId = params.get('focus')
  const mode = params.get('mode') // mock

  const [q, setQ] = useState('')

  const items = useMemo(() => {
    let qs = interviewQuestions
    if (q.trim()) qs = qs.filter((it) => includesQuery(`${it.question} ${it.category} ${it.whatTheyTest}`, q))
    if (focusId) {
      const idx = qs.findIndex((it) => it.id === focusId)
      if (idx > 0) qs = [qs[idx], ...qs.slice(0, idx), ...qs.slice(idx + 1)]
    }
    return qs
  }, [q, focusId])

  const fav = (id: string) => !!state.favourites.interview[id]

  return (
    <div>
      <PageHeader
        title="Interview Questions Bank"
        subtitle="Designed for speaking out loud: each question includes what they’re testing, answer structure, common mistakes, and harder follow-ups."
        right={
          <Button variant="secondary" asChild>
            <a href="/interview?mode=mock">Mock interview mode</a>
          </Button>
        }
      />

      {mode === 'mock' ? (
        <MockInterview
          items={interviewQuestions}
          onReview={(id, res) => persist(reviewInterview(state, id, res))}
        />
      ) : (
        <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
          <Card className="h-fit">
            <CardContent className="space-y-3 p-4">
              <div>
                <div className="text-xs font-semibold text-muted-foreground">Search</div>
                <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. offsets, PMST, uncertainty" />
              </div>
              <div className="rounded-lg border bg-muted/40 p-3 text-xs text-muted-foreground">
                <div className="font-semibold text-foreground">Speaking drill</div>
                <div className="mt-1">
                  Answer in 60–90 seconds. Then add one “defensible next step” and one “risk/caveat”.
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="text-xs text-muted-foreground">
              Loaded <span className="font-semibold text-foreground">{interviewQuestions.length}</span> questions • Showing{' '}
              <span className="font-semibold text-foreground">{items.length}</span>
            </div>
            {items.map((it) => (
              <QuestionCard
                key={it.id}
                q={it}
                favourite={fav(it.id)}
                onToggleFav={() => persist(withUpdatedFavourite(state, 'interview', it.id))}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function QuestionCard({
  q,
  favourite,
  onToggleFav,
}: {
  q: InterviewQuestion
  favourite: boolean
  onToggleFav: () => void
}) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="muted">{q.category}</Badge>
          <Badge variant={q.difficulty === 'hard' ? 'default' : 'secondary'}>{q.difficulty}</Badge>
          {q.needsVerification ? <Badge variant="outline">Needs verification</Badge> : null}
        </div>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-base">{q.question}</CardTitle>
            <CardDescription className="mt-1">{q.whatTheyTest}</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onToggleFav}>
            <Heart className={favourite ? 'h-4 w-4 fill-current' : 'h-4 w-4'} />
            Save
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <Block title="Strong answer structure">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {q.answerStructure.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Block>
        <Block title="Common mistake">{q.commonMistake}</Block>
        {q.followUps?.length ? (
          <Block title="Harder follow-ups">{q.followUps.join(' • ')}</Block>
        ) : null}
      </CardContent>
    </Card>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold text-muted-foreground">{title}</div>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  )
}

function MockInterview({
  items,
  onReview,
}: {
  items: InterviewQuestion[]
  onReview: (id: string, res: { correct: boolean; confidence01: number }) => void
}) {
  const [i, setI] = useState(() => Math.floor(Math.random() * items.length))
  const [showTest, setShowTest] = useState(false)
  const [showFramework, setShowFramework] = useState(false)
  const [seconds, setSeconds] = useState(90)

  const q = items[i]
  if (!q) return null

  const next = () => {
    setShowTest(false)
    setShowFramework(false)
    setI(Math.floor(Math.random() * items.length))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mock interview</CardTitle>
        <CardDescription>Random question generator + self-rating. Speak out loud.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="rounded-lg border bg-background p-4">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="muted">{q.category}</Badge>
            <Badge variant={q.difficulty === 'hard' ? 'default' : 'secondary'}>{q.difficulty}</Badge>
          </div>
          <div className="mt-3 text-lg font-semibold">{q.question}</div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowTest((v) => !v)}>
              {showTest ? 'Hide what they test' : 'Show what they test'}
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowFramework((v) => !v)}>
              {showFramework ? 'Hide answer framework' : 'Show answer framework'}
            </Button>
          </div>
          {showTest ? <div className="mt-3 text-sm text-muted-foreground">{q.whatTheyTest}</div> : null}
          {showFramework ? (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {q.answerStructure.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="rounded-lg border bg-muted/30 p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs font-semibold text-muted-foreground">Timer (seconds)</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-4 w-4" /> Aim: 60–90s
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Input
              type="number"
              value={seconds}
              min={30}
              max={240}
              onChange={(e) => setSeconds(Number(e.target.value))}
            />
            <Button
              variant="secondary"
              onClick={() => {
                const end = Date.now() + seconds * 1000
                const tick = () => {
                  const remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000))
                  setSeconds(remaining)
                  if (remaining > 0) requestAnimationFrame(tick)
                }
                tick()
              }}
            >
              Start
            </Button>
          </div>
          <div className="mt-3">
            <Textarea placeholder="Optional: jot your structure/talking points." />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            onClick={() => {
              onReview(q.id, { correct: false, confidence01: 0.25 })
              next()
            }}
          >
            I struggled
          </Button>
          <Button
            onClick={() => {
              onReview(q.id, { correct: true, confidence01: 0.8 })
              next()
            }}
          >
            Strong answer
          </Button>
        </div>

        <Button variant="ghost" className="w-full" onClick={next}>
          <RefreshCw className="h-4 w-4" /> Next random
        </Button>
      </CardContent>
    </Card>
  )
}


import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Heart, RotateCw, X } from 'lucide-react'

import type { GlossaryCard } from '../../lib/types'
import { cn } from '../../lib/utils'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Progress } from '../ui/progress'

export type FlashcardMode = 'flip' | 'quiz' | 'type'

export function FlashcardPlayer({
  cards,
  mode,
  isFavourite,
  onToggleFavourite,
  onReview,
}: {
  cards: GlossaryCard[]
  mode: FlashcardMode
  isFavourite: (id: string) => boolean
  onToggleFavourite: (id: string) => void
  onReview: (id: string, res: { correct: boolean; confidence01: number }) => void
}) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [confidence, setConfidence] = useState(0.7)

  const card = cards[idx]

  const quiz = useMemo(() => {
    if (!card || mode !== 'quiz') return null
    const pool = cards.filter((c) => c.id !== card.id)
    const distractors = shuffle(pool).slice(0, 3)
    const options = shuffle([card, ...distractors]).map((c) => ({
      id: c.id,
      label: c.plainEnglish,
      correct: c.id === card.id,
    }))
    return { prompt: `Which definition best matches: “${card.term}”?`, options }
  }, [card, cards, mode])

  if (!card) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No cards in this session</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Try broadening filters, or start a “random session” from the page header.
        </CardContent>
      </Card>
    )
  }

  const donePct = Math.round(((idx + 1) / cards.length) * 100)

  const advance = () => {
    setFlipped(false)
    setIdx((i) => Math.min(cards.length - 1, i + 1))
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-muted-foreground">
          Card <span className="font-semibold text-foreground">{idx + 1}</span> / {cards.length}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => onToggleFavourite(card.id)}>
            <Heart className={cn('h-4 w-4', isFavourite(card.id) ? 'fill-current' : '')} />
            Favourite
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setFlipped(false)}>
            <RotateCw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>

      <Progress value={donePct} />

      <motion.div layout>
        <Card className="overflow-hidden">
          <CardHeader className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={card.difficulty === 'hard' ? 'default' : 'secondary'}>{card.difficulty}</Badge>
              {card.needsVerification ? <Badge variant="outline">Needs verification</Badge> : null}
              {card.topics.slice(0, 4).map((t) => (
                <Badge key={t} variant="muted">
                  {t}
                </Badge>
              ))}
            </div>
            <CardTitle className="text-lg">{card.term}</CardTitle>
          </CardHeader>

          <CardContent>
            {mode === 'flip' ? (
              <div>
                {!flipped ? (
                  <div className="space-y-3">
                    <div className="rounded-lg border bg-background p-3 text-sm text-muted-foreground">
                      Tap “Show answer”, then rate your confidence.
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold">Prompt</div>
                      <div className="mt-1 text-muted-foreground">
                        Define it plainly, then in consultant language. Say why it matters for the role.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Section title="Plain English">{card.plainEnglish}</Section>
                    <Section title="Consultant-style">{card.consultantDefinition}</Section>
                    <Section title="Why it matters (Umwelt role)">{card.whyItMatters}</Section>
                    <Section title="Example in practice">{card.exampleInPractice}</Section>
                    <Section title="Related terms">{card.related.join(' • ')}</Section>
                  </div>
                )}
              </div>
            ) : null}

            {mode === 'quiz' && quiz ? (
              <div className="space-y-3">
                <div className="text-sm font-semibold">{quiz.prompt}</div>
                <div className="space-y-2">
                  {quiz.options.map((o) => (
                    <Button
                      key={o.id}
                      variant="outline"
                      className="h-auto w-full justify-start whitespace-normal text-left"
                      onClick={() => {
                        onReview(card.id, { correct: o.correct, confidence01: o.correct ? 0.8 : 0.2 })
                        advance()
                      }}
                    >
                      {o.label}
                    </Button>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">
                  Tip: after choosing, say the consultant definition out loud in one sentence.
                </div>
              </div>
            ) : null}

            {mode === 'type' ? (
              <div className="space-y-3">
                <div className="rounded-lg border bg-background p-3 text-sm text-muted-foreground">
                  Say your answer out loud first, then type a tight “consultant sentence”. Use “evidence + caveat + next
                  step” if uncertain.
                </div>
                <textarea
                  className="min-h-[120px] w-full rounded-lg border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Type your best consultant answer here…"
                />
                <div className="rounded-lg border bg-muted/40 p-3">
                  <div className="text-xs font-semibold text-muted-foreground">Reference answer (compare)</div>
                  <div className="mt-2 text-sm">{card.consultantDefinition}</div>
                </div>
              </div>
            ) : null}
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            {mode === 'flip' ? (
              <div className="flex w-full gap-2">
                <Button className="flex-1" variant="secondary" onClick={() => setFlipped((v) => !v)}>
                  {flipped ? 'Hide answer' : 'Show answer'}
                </Button>
                <Button className="flex-1" variant="outline" onClick={advance} disabled={idx >= cards.length - 1}>
                  Next
                </Button>
              </div>
            ) : null}

            <div className="flex w-full flex-col gap-2 rounded-lg border bg-background p-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-muted-foreground">Confidence</div>
                <div className="text-xs text-muted-foreground">{Math.round(confidence * 100)}%</div>
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={confidence}
                onChange={(e) => setConfidence(Number(e.target.value))}
              />
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    onReview(card.id, { correct: false, confidence01: confidence })
                    advance()
                  }}
                >
                  <X className="h-4 w-4" />
                  Missed it
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => {
                    onReview(card.id, { correct: true, confidence01: confidence })
                    advance()
                  }}
                >
                  <Check className="h-4 w-4" />
                  Got it
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <div>
      <div className="text-xs font-semibold text-muted-foreground">{title}</div>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  )
}

function shuffle<T>(arr: T[]) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}


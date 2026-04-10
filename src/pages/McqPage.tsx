import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { HelpCallout } from '../components/HelpCallout'
import { PageHeader } from '../components/PageHeader'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { mcqQuestions } from '../data/mcq'
import { withShuffledMcqOptions } from '../lib/shuffleMcq'
import { cn } from '../lib/utils'

const LABELS = ['A', 'B', 'C', 'D'] as const

export function McqPage() {
  const [mode, setMode] = useState<'full' | 'single'>('full')
  const [answers, setAnswers] = useState<Record<string, number | null>>({})
  const [submitted, setSubmitted] = useState(false)
  const [singleIdx, setSingleIdx] = useState(0)
  const [singleSelected, setSingleSelected] = useState<number | null>(null)

  const questions = useMemo(() => withShuffledMcqOptions(mcqQuestions), [])
  const total = questions.length

  const result = useMemo(() => {
    if (!submitted) return null
    let correct = 0
    for (const q of questions) {
      const a = answers[q.id]
      if (a === q.correctIndex) correct += 1
    }
    return { correct }
  }, [submitted, answers, questions])

  const pick = (id: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [id]: optionIndex }))
    if (submitted) setSubmitted(false)
  }

  const resetQuiz = () => {
    setAnswers({})
    setSubmitted(false)
  }

  const current = questions[singleIdx]!

  return (
    <div>
      <PageHeader
        title="Multiple choice quiz"
        subtitle={`${total} questions on restoration, Queensland offsets, EPBC, and desktop ecology — with short explanations.`}
        tip="Use “Full quiz” to answer everything then score. Use “One at a time” for immediate feedback while you learn."
      />

      <div className="mb-4">
        <HelpCallout variant="muted">
          This is for learning, not an exam: read explanations, then cross-check uncertain points in the{' '}
          <strong>Glossary</strong> or <strong>Library</strong>.
        </HelpCallout>
      </div>

      <Tabs
        value={mode}
        onValueChange={(v) => {
          setMode(v as 'full' | 'single')
          setSubmitted(false)
          setSingleIdx(0)
          setSingleSelected(null)
        }}
        className="w-full"
      >
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="full">Full quiz ({total})</TabsTrigger>
          <TabsTrigger value="single">One at a time</TabsTrigger>
        </TabsList>

        <TabsContent value="full" className="mt-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              Answered{' '}
              <span className="font-semibold text-foreground">
                {Object.values(answers).filter((v) => v !== null && v !== undefined).length}
              </span>{' '}
              / {total}
            </p>
            <div className="flex gap-2">
              <Button type="button" variant="outline" size="sm" onClick={resetQuiz}>
                Clear all
              </Button>
              <Button type="button" size="sm" onClick={() => setSubmitted(true)}>
                Score quiz
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((q, i) => (
              <Card key={q.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium leading-snug">
                    {i + 1}. {q.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {q.options.map((opt, oi) => {
                    const selected = answers[q.id] === oi
                    const show = submitted
                    const isCorrect = oi === q.correctIndex
                    return (
                      <button
                        key={oi}
                        type="button"
                        onClick={() => pick(q.id, oi)}
                        className={cn(
                          'flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                          selected ? 'border-primary bg-primary/10' : 'border-transparent bg-muted/50 hover:bg-muted',
                          show && isCorrect && 'border-emerald-500/60 bg-emerald-500/10',
                          show && selected && !isCorrect && 'border-destructive/50 bg-destructive/10',
                        )}
                      >
                        <span className="mt-0.5 font-mono text-xs font-semibold text-muted-foreground">{LABELS[oi]}</span>
                        <span>{opt}</span>
                      </button>
                    )
                  })}
                  {submitted ? (
                    <p className="mt-2 border-t pt-2 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Why:</span> {q.explanation}
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>

          {result ? (
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-base">Your score</CardTitle>
                <CardDescription>
                  {result.correct} correct out of {total} ({Math.round((result.correct / total) * 100)}%). Review explanations
                  above for any missed questions.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : null}
        </TabsContent>

        <TabsContent value="single" className="mt-4 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-muted-foreground">
              Question {singleIdx + 1} of {total}
            </span>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={singleIdx <= 0}
                onClick={() => {
                  setSingleIdx((i) => i - 1)
                  setSingleSelected(null)
                }}
                aria-label="Previous question"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={singleIdx >= total - 1}
                onClick={() => {
                  setSingleIdx((i) => i + 1)
                  setSingleSelected(null)
                }}
                aria-label="Next question"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base leading-snug">{current.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {current.options.map((opt, oi) => {
                const picked = singleSelected === oi
                const reveal = singleSelected !== null
                const isCorrect = oi === current.correctIndex
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => setSingleSelected(oi)}
                    className={cn(
                      'flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors',
                      !reveal && 'border-transparent bg-muted/50 hover:bg-muted',
                      !reveal && picked && 'border-primary bg-primary/10',
                      reveal && isCorrect && 'border-emerald-500/60 bg-emerald-500/10',
                      reveal && picked && !isCorrect && 'border-destructive/50 bg-destructive/10',
                    )}
                  >
                    <span className="mt-0.5 font-mono text-xs font-semibold text-muted-foreground">{LABELS[oi]}</span>
                    <span>{opt}</span>
                  </button>
                )
              })}
              {singleSelected !== null ? (
                <div className="mt-3 rounded-lg border bg-muted/40 p-3 text-sm">
                  <div className="font-semibold text-foreground">Explanation</div>
                  <p className="mt-1 text-muted-foreground">{current.explanation}</p>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">Tap an answer to see if you’re right and read the explanation.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { useCallback, useEffect, useId, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'
import type { FillExercise } from '../../data/languageLabFill'

type WordChip = { id: string; text: string }

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildInitialBank(exercise: FillExercise): WordChip[] {
  const all = [...exercise.answers, ...exercise.distractors]
  return shuffle(
    all.map((text) => ({
      id: crypto.randomUUID(),
      text,
    })),
  )
}

type Props = {
  exercise: FillExercise
}

export function FillInTheBlanks({ exercise }: Props) {
  const n = exercise.answers.length
  const labelId = useId()

  const [slots, setSlots] = useState<(WordChip | null)[]>(() => Array(n).fill(null))
  const [bank, setBank] = useState<WordChip[]>(() => buildInitialBank(exercise))
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)
  const [result, setResult] = useState<'idle' | 'correct' | 'wrong'>('idle')

  useEffect(() => {
    setSlots(Array(n).fill(null))
    setBank(buildInitialBank(exercise))
    setSelectedSlot(null)
    setResult('idle')
  }, [exercise, n])

  const filledCount = useMemo(() => slots.filter(Boolean).length, [slots])

  const placeChip = useCallback(
    (chip: WordChip) => {
      const target =
        selectedSlot !== null && slots[selectedSlot] === null
          ? selectedSlot
          : slots.findIndex((s) => s === null)

      if (target === -1) return

      setSlots((prev) => {
        const next = [...prev]
        if (next[target]) return prev
        next[target] = chip
        return next
      })
      setBank((b) => b.filter((c) => c.id !== chip.id))
      setSelectedSlot(null)
      setResult('idle')
    },
    [selectedSlot, slots],
  )

  const clearSlot = useCallback((index: number) => {
    const chip = slots[index]
    if (!chip) return
    setSlots((prev) => {
      const next = [...prev]
      next[index] = null
      return next
    })
    setBank((b) => shuffle([...b, chip]))
    setResult('idle')
  }, [slots])

  const reset = useCallback(() => {
    setSlots(Array(n).fill(null))
    setBank(buildInitialBank(exercise))
    setSelectedSlot(null)
    setResult('idle')
  }, [exercise, n])

  const check = useCallback(() => {
    if (filledCount < n) return
    const ok = slots.every((s, i) => s && s.text === exercise.answers[i])
    setResult(ok ? 'correct' : 'wrong')
  }, [filledCount, n, slots, exercise.answers])

  return (
    <div
      className="rounded-xl border bg-card p-4 shadow-soft"
      role="group"
      aria-labelledby={labelId}
    >
      <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h4 id={labelId} className="text-sm font-semibold text-foreground">
            {exercise.title}
          </h4>
          {exercise.hint ? (
            <p className="mt-0.5 text-xs text-muted-foreground">{exercise.hint}</p>
          ) : null}
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="outline" size="sm" onClick={reset}>
            Reset
          </Button>
          <Button type="button" size="sm" onClick={check} disabled={filledCount < n}>
            Check
          </Button>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-foreground">
        {exercise.parts.map((part, i) => (
          <span key={`${exercise.id}-p-${i}`}>
            {part}
            {i < n ? (
              <button
                type="button"
                onClick={() => {
                  if (slots[i]) {
                    clearSlot(i)
                  } else {
                    setSelectedSlot((s) => (s === i ? null : i))
                    setResult('idle')
                  }
                }}
                className={cn(
                  'mx-0.5 inline-flex min-h-[2rem] min-w-[6rem] items-center justify-center rounded-md border-2 border-dashed px-2 text-left align-middle text-sm transition-colors',
                  slots[i]
                    ? 'border-primary/50 bg-primary/5 font-medium text-foreground'
                    : selectedSlot === i
                      ? 'border-primary bg-primary/10 ring-2 ring-primary/30'
                      : 'border-muted-foreground/35 bg-muted/40 text-muted-foreground',
                )}
              >
                {slots[i] ? slots[i]!.text : '—'}
              </button>
            ) : null}
          </span>
        ))}
      </p>

      <div className="mb-2 text-xs font-medium text-muted-foreground">Tap a gap to select it, then tap a word card</div>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence initial={false}>
          {bank.map((chip) => (
            <motion.button
              key={chip.id}
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.15 }}
              onClick={() => placeChip(chip)}
              className={cn(
                'rounded-lg border bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors',
                'hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98]',
              )}
            >
              {chip.text}
            </motion.button>
          ))}
        </AnimatePresence>
        {bank.length === 0 ? (
          <span className="text-xs text-muted-foreground">All words placed — tap a filled gap to move a word back.</span>
        ) : null}
      </div>

      {result !== 'idle' ? (
        <div
          className={cn(
            'mt-4 rounded-lg border px-3 py-2 text-sm',
            result === 'correct'
              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100'
              : 'border-amber-500/40 bg-amber-500/10 text-amber-950 dark:text-amber-100',
          )}
        >
          {result === 'correct'
            ? 'Correct — that reads like defensible consultant language.'
            : 'Not quite — tap gaps to adjust words, or Reset to try a new order.'}
        </div>
      ) : null}
    </div>
  )
}

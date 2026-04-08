import type { CardState, SrsCardProgress } from './types'

function addDays(date: Date, days: number) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n))
}

const STATE_ORDER: CardState[] = ['new', 'learning', 'shaky', 'strong', 'mastered']

function promote(state: CardState): CardState {
  const idx = STATE_ORDER.indexOf(state)
  return STATE_ORDER[Math.min(STATE_ORDER.length - 1, idx + 1)]
}

function demote(state: CardState): CardState {
  const idx = STATE_ORDER.indexOf(state)
  return STATE_ORDER[Math.max(0, idx - 1)]
}

function intervalDaysFor(state: CardState) {
  // Intentionally simple + editable: tuned for interview prep cadence.
  switch (state) {
    case 'new':
      return 0
    case 'learning':
      return 1
    case 'shaky':
      return 2
    case 'strong':
      return 5
    case 'mastered':
      return 14
  }
}

export type ReviewResult = {
  correct: boolean
  confidence01: number // 0..1
}

export function nextProgress(prev: SrsCardProgress | undefined, result: ReviewResult): SrsCardProgress {
  const now = new Date()
  const base: SrsCardProgress = prev ?? {
    state: 'new',
    totalReviews: 0,
    correctCount: 0,
    avgConfidence: 0,
  }

  const confidence01 = clamp01(result.confidence01)
  const totalReviews = base.totalReviews + 1
  const correctCount = base.correctCount + (result.correct ? 1 : 0)
  const avgConfidence =
    totalReviews === 1 ? confidence01 : clamp01((base.avgConfidence * base.totalReviews + confidence01) / totalReviews)

  const state = result.correct ? promote(base.state) : demote(base.state === 'new' ? 'learning' : base.state)
  const intervalDays = intervalDaysFor(state)
  const lastReviewedISO = now.toISOString()
  const nextReviewISO = addDays(now, intervalDays).toISOString()

  return { state, lastReviewedISO, nextReviewISO, totalReviews, correctCount, avgConfidence }
}

export function isDue(progress: SrsCardProgress | undefined, now = new Date()) {
  if (!progress?.nextReviewISO) return true
  return new Date(progress.nextReviewISO).getTime() <= now.getTime()
}


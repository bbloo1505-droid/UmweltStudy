import type { McqQuestion } from './types'

function shuffleIndices(length: number, rng: () => number): number[] {
  const indices = Array.from({ length }, (_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j]!, indices[i]!]
  }
  return indices
}

/** Seeded RNG from question id so option order is stable across re-renders and visits. */
function rngForString(seed: string): () => number {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return () => {
    h |= 0
    h = Math.imul(h ^ (h >>> 15), h | 1)
    h ^= h + Math.imul(h ^ (h >>> 7), h | 61)
    return ((h ^ (h >>> 14)) >>> 0) / 4294967296
  }
}

/** Reorders options and updates `correctIndex` so the right answer is not always slot A. */
export function withShuffledMcqOptions(questions: McqQuestion[]): McqQuestion[] {
  return questions.map((q) => {
    const rng = rngForString(q.id)
    const order = shuffleIndices(q.options.length, rng)
    const options = order.map((i) => q.options[i]!) as McqQuestion['options']
    const correctIndex = order.indexOf(q.correctIndex) as McqQuestion['correctIndex']
    return { ...q, options, correctIndex }
  })
}

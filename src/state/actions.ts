import type { AppState, SrsCardProgress, UserFavourites } from '../lib/types'
import { bumpStudyStreak } from '../lib/storage'
import { nextProgress, type ReviewResult } from '../lib/srs'

export function toggleFavourite(favs: Record<string, boolean>, id: string) {
  const next = { ...favs }
  next[id] = !next[id]
  if (!next[id]) delete next[id]
  return next
}

export function setDarkModeClass(enabled: boolean) {
  const root = document.documentElement
  if (enabled) root.classList.add('dark')
  else root.classList.remove('dark')
}

export function withUpdatedFavourite(
  state: AppState,
  kind: keyof UserFavourites,
  id: string,
): AppState {
  return {
    ...state,
    favourites: {
      ...state.favourites,
      [kind]: toggleFavourite(state.favourites[kind], id),
    },
  }
}

export function reviewGlossaryCard(state: AppState, cardId: string, result: ReviewResult): AppState {
  const prev = state.glossaryProgress[cardId]
  const next = nextProgress(prev, result)
  return bumpStudyStreak({
    ...state,
    glossaryProgress: { ...state.glossaryProgress, [cardId]: next },
  })
}

export function reviewInterview(state: AppState, id: string, result: ReviewResult): AppState {
  const prev = state.interviewProgress[id]
  const next = nextProgress(prev, result)
  return bumpStudyStreak({ ...state, interviewProgress: { ...state.interviewProgress, [id]: next } })
}

export function reviewLegislation(state: AppState, id: string, result: ReviewResult): AppState {
  const prev = state.legislationProgress[id]
  const next = nextProgress(prev, result)
  return bumpStudyStreak({ ...state, legislationProgress: { ...state.legislationProgress, [id]: next } })
}

export function reviewScenario(state: AppState, id: string, result: ReviewResult): AppState {
  const prev = state.scenarioProgress[id]
  const next = nextProgress(prev, result)
  return bumpStudyStreak({ ...state, scenarioProgress: { ...state.scenarioProgress, [id]: next } })
}

export function accuracy(progress: SrsCardProgress | undefined) {
  if (!progress?.totalReviews) return 0
  return progress.correctCount / progress.totalReviews
}


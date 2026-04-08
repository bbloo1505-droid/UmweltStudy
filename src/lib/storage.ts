import type { AppState } from './types'

const KEY = 'umwelt-interview-study-hub:v1'
const VERSION = 1

export function defaultAppState(): AppState {
  return {
    version: VERSION,
    createdAtISO: new Date().toISOString(),
    streak: { current: 0 },
    favourites: { glossary: {}, legislation: {}, interview: {}, scenarios: {} },
    glossaryProgress: {},
    interviewProgress: {},
    legislationProgress: {},
    scenarioProgress: {},
  }
}

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultAppState()
    const parsed = JSON.parse(raw) as AppState
    if (!parsed?.version) return defaultAppState()
    return { ...defaultAppState(), ...parsed }
  } catch {
    return defaultAppState()
  }
}

export function saveState(state: AppState) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function dayKeyISO(d = new Date()) {
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

export function bumpStudyStreak(prev: AppState): AppState {
  const today = dayKeyISO()
  const last = prev.streak.lastStudyDayISO
  if (last === today) return prev

  // If yesterday, increment; else reset.
  const yesterday = (() => {
    const d = new Date()
    d.setDate(d.getDate() - 1)
    return dayKeyISO(d)
  })()

  const nextCount = last === yesterday ? prev.streak.current + 1 : 1
  return { ...prev, streak: { current: nextCount, lastStudyDayISO: today } }
}


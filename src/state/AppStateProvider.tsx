/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo, useState } from 'react'
import type { AppState } from '../lib/types'
import { loadState, saveState } from '../lib/storage'

type Ctx = {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
  persist: (next: AppState) => void
}

const AppStateContext = createContext<Ctx | null>(null)

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(() => loadState())

  const persist = (next: AppState) => {
    setState(next)
    saveState(next)
  }

  const value = useMemo<Ctx>(() => ({ state, setState, persist }), [state])
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}

export function useAppState() {
  const ctx = useContext(AppStateContext)
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider')
  return ctx
}


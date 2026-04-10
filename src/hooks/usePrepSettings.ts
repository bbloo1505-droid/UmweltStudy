import { useEffect, useMemo, useState } from 'react'
import { loadPrepSettings, type PrepSettings } from '../lib/prepSettings'

/** Re-renders when prep settings change (same tab via custom event). */
export function usePrepSettings(): PrepSettings {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const on = () => setTick((t) => t + 1)
    window.addEventListener('umwelt-prep-settings-changed', on)
    return () => window.removeEventListener('umwelt-prep-settings-changed', on)
  }, [])
  return useMemo(() => loadPrepSettings(), [tick])
}

/** Local-only prep preferences (interview date, profile overrides). Not part of SRS state. */

export type PrepSettings = {
  /** YYYY-MM-DD */
  interviewDateISO?: string
  /** Replaces default GIS line from learningProfile when set */
  gisFramingOverride?: string
  /** Extra rhythm bullets (one per line) appended after defaults */
  rhythmExtraLines?: string
}

const KEY = 'umwelt-prep-settings:v1'

export function loadPrepSettings(): PrepSettings {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as PrepSettings
    return typeof parsed === 'object' && parsed ? parsed : {}
  } catch {
    return {}
  }
}

export function savePrepSettings(next: PrepSettings) {
  localStorage.setItem(KEY, JSON.stringify(next))
  window.dispatchEvent(new Event('umwelt-prep-settings-changed'))
}

export function parseRhythmExtra(raw: string): string[] {
  return raw
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
}

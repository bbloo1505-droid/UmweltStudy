import { glossaryCards } from '../data/glossary'
import { interviewQuestions } from '../data/interview'
import { libraryEntries } from '../data/library'
import { scenarios } from '../data/scenarios'

export function DebugDataBanner() {
  // Visible only in dev; helps diagnose “empty pages”.
  if (!import.meta.env.DEV) return null

  return (
    <div className="border-b bg-amber-50 px-4 py-2 text-xs text-amber-900">
      <span className="font-semibold">Debug:</span> glossary={glossaryCards.length} • library={libraryEntries.length} •
      interview={interviewQuestions.length} • scenarios={scenarios.length}
    </div>
  )
}


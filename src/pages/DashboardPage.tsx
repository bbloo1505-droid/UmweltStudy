import { Link } from 'react-router-dom'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { HelpCallout } from '../components/HelpCallout'
import { InterviewCountdown } from '../components/InterviewCountdown'
import { PersonalizedPrepCard } from '../components/PersonalizedPrepCard'
import { PageHeader } from '../components/PageHeader'
import { PhotoHero } from '../components/PhotoHero'
import { useAppState } from '../state/AppStateProvider'
import { glossaryCards } from '../data/glossary'
import { interviewQuestions } from '../data/interview'
import { libraryEntries } from '../data/library'
import { scenarios } from '../data/scenarios'
import { isDue } from '../lib/srs'
import type { SrsCardProgress } from '../lib/types'

function dueCount<T extends { id: string }>(items: T[], progress: Record<string, SrsCardProgress | undefined>) {
  return items.filter((i) => isDue(progress[i.id])).length
}

export function DashboardPage() {
  const { state } = useAppState()

  const dueGlossary = dueCount(glossaryCards, state.glossaryProgress)
  const dueInterview = dueCount(interviewQuestions, state.interviewProgress)
  const dueLibrary = dueCount(libraryEntries, state.legislationProgress)
  const dueScenarios = dueCount(scenarios, state.scenarioProgress)

  return (
    <div>
      <PhotoHero
        kind="dashboard"
        emoji="🧭"
        title="Dashboard"
        subtitle="Your home base — pick a quick action below, or scroll down for the full menu of topics."
      />

      <div className="mt-4">
        <InterviewCountdown />
      </div>

      <div className="mt-4">
        <HelpCallout title="How this app is organised">
          <strong>Study</strong> = learn (words, laws, company context). <strong>Practice</strong> = rehearse out loud
          (interviews, scenarios, language). <strong>Tools</strong> = workflows and official links. Use the{' '}
          <strong>☰ menu</strong> on your phone to see every page.
        </HelpCallout>
      </div>

      <div className="mt-4">
        <PersonalizedPrepCard />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button asChild>
          <Link to="/glossary?session=today">Study what’s due today ✅</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to="/cram">Quick revision (cram) ⚡</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/desktop-workflow">Desktop review steps 🗺️</Link>
        </Button>
      </div>

      <div className="mt-6">
        <PageHeader
          title="Today"
          subtitle="Cards and questions the app thinks you should revisit (spaced repetition — like Anki, but built in here)."
          tip="Zero due? Great — try Glossary or open “Last‑minute cram” before the interview."
          right={
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link to="/resources">Official links 🔗</Link>
            </Button>
          }
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Ready to review</CardTitle>
            <CardDescription>Tap a box — each one opens the right study mode.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              <MiniStat
                title="Glossary (flashcards) 📚"
                value={dueGlossary}
                to="/glossary?session=today"
                hint="Terms & definitions"
              />
              <MiniStat
                title="Laws & policies 🏛️"
                value={dueLibrary}
                to="/library?mode=drill"
                hint="Drill mode"
              />
              <MiniStat
                title="Interview questions 🗣️"
                value={dueInterview}
                to="/interview?mode=mock"
                hint="Mock mode"
              />
              <MiniStat
                title="Scenarios 🧩"
                value={dueScenarios}
                to="/scenarios?session=today"
                hint="Practice answers"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study streak 🔥</CardTitle>
            <CardDescription>Days in a row you’ve opened a study session — small habit, big payoff.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold tracking-tight">{state.streak.current}</div>
            <div className="mt-1 text-sm text-muted-foreground">days in a row</div>
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full">
                <Link to="/resources">Open official resources 🔗</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <PageHeader title="Explore everything" subtitle="Shortcuts — same pages as the left menu (or ☰ on mobile)." />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <QuickTile to="/glossary" title="Glossary 📚" desc="Flip cards: plain English vs consultant wording." />
        <QuickTile to="/library" title="Legislation & policies 🏛️" desc="EPBC, QLD offsets, tools — with official links." />
        <QuickTile to="/desktop-workflow" title="Desktop workflow 🗺️" desc="Step-by-step: what to check before fieldwork." />
        <QuickTile to="/interview" title="Interview questions 🗣️" desc="Likely questions + how to structure answers." />
        <QuickTile to="/quiz" title="Multiple choice quiz ✅" desc="30 quick checks on EPBC, QLD offsets, restoration." />
        <QuickTile to="/scenarios" title="Scenarios 🧩" desc="Short “what would you do?” practice cases." />
        <QuickTile to="/language-lab" title="Language lab ✨" desc="Plain talk → consultant-style phrases." />
        <QuickTile to="/why-umwelt" title="Why Umwelt 🌿" desc="Company facts for “why this firm?” answers." />
        <QuickTile to="/stories" title="Story bank 📖" desc="Map your experience to interview themes." />
        <QuickTile to="/resources" title="Resources 🔗" desc="Curated government & Umwelt pages." />
      </div>
    </div>
  )
}

function MiniStat({
  title,
  value,
  to,
  hint,
}: {
  title: string
  value: number
  to: string
  hint?: string
}) {
  return (
    <Link to={to} className="rounded-lg border bg-background p-3 hover:bg-muted/50">
      <div className="text-xs font-semibold text-muted-foreground">{title}</div>
      {hint ? <div className="mt-0.5 text-[10px] text-muted-foreground/90">{hint}</div> : null}
      <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">Tap to open</div>
    </Link>
  )
}

function QuickTile({ to, title, desc }: { to: string; title: string; desc: string }) {
  return (
    <Link to={to} className="rounded-lg border bg-card p-4 shadow-soft hover:bg-muted/30">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
    </Link>
  )
}


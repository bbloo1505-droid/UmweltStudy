import { Link } from 'react-router-dom'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
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
        subtitle="A calm, practical prep space for the Umwelt Ecologist (Restoration), QLD interview."
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <Button asChild>
          <Link to="/glossary?session=today">Start today’s study session ✅</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to="/cram">Last‑minute cram ⚡</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/desktop-workflow">Desktop workflow 🗺️</Link>
        </Button>
      </div>

      <div className="mt-6">
        <PageHeader
          title="Today"
          subtitle="Due items across your study system."
          right={
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link to="/resources">Official sources 🔗</Link>
            </Button>
          }
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Due now</CardTitle>
            <CardDescription>Tap a tile to jump straight in.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              <MiniStat title="Glossary cards due 📚" value={dueGlossary} to="/glossary?session=today" />
              <MiniStat title="Legislation drill due 🏛️" value={dueLibrary} to="/library?mode=drill" />
              <MiniStat title="Interview questions due 🗣️" value={dueInterview} to="/interview?mode=mock" />
              <MiniStat title="Scenario drills due 🧩" value={dueScenarios} to="/scenarios?session=today" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Streak 🔥</CardTitle>
            <CardDescription>Consistency beats cramming.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold tracking-tight">{state.streak.current}</div>
            <div className="mt-1 text-sm text-muted-foreground">days</div>
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full">
                <Link to="/resources">Open official resources 🔗</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <QuickTile to="/glossary" title="Glossary 📚" desc="Term mastery + interview wording." />
        <QuickTile to="/library" title="Legislation / Policy 🏛️" desc="Queensland + EPBC essentials." />
        <QuickTile to="/desktop-workflow" title="Desktop workflow 🗺️" desc="A practical offsets desktop simulator." />
        <QuickTile to="/interview" title="Interview Qs 🗣️" desc="Bank + mock mode + follow-ups." />
        <QuickTile to="/scenarios" title="Scenarios 🧩" desc="Consultant-style frameworks under pressure." />
        <QuickTile to="/why-umwelt" title="Why Umwelt 🌿" desc="Company-aligned, interview-ready points." />
      </div>
    </div>
  )
}

function MiniStat({ title, value, to }: { title: string; value: number; to: string }) {
  return (
    <Link to={to} className="rounded-lg border bg-background p-3 hover:bg-muted/50">
      <div className="text-xs font-semibold text-muted-foreground">{title}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">Tap to study</div>
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


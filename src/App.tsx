import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { DashboardPage } from './pages/DashboardPage'
import { LibraryPage } from './pages/LibraryPage'
import { InterviewPage } from './pages/InterviewPage'
import { ScenariosPage } from './pages/ScenariosPage'
import { DesktopWorkflowPage } from './pages/DesktopWorkflowPage'
import { WhyUmweltPage } from './pages/WhyUmweltPage'
import { StoriesPage } from './pages/StoriesPage'
import { ResourcesPage } from './pages/ResourcesPage'

const GlossaryPage = lazy(() => import('./pages/GlossaryPage').then((m) => ({ default: m.GlossaryPage })))
const LanguageLabPage = lazy(() => import('./pages/LanguageLabPage').then((m) => ({ default: m.LanguageLabPage })))
const CramPage = lazy(() => import('./pages/CramPage').then((m) => ({ default: m.CramPage })))
const McqPage = lazy(() => import('./pages/McqPage').then((m) => ({ default: m.McqPage })))
const PrepSettingsPage = lazy(() => import('./pages/PrepSettingsPage').then((m) => ({ default: m.PrepSettingsPage })))

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-4 text-sm text-muted-foreground">
      Loading study page…
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/scenarios" element={<ScenariosPage />} />
          <Route path="/desktop-workflow" element={<DesktopWorkflowPage />} />
          <Route path="/why-umwelt" element={<WhyUmweltPage />} />
          <Route path="/language-lab" element={<LanguageLabPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/cram" element={<CramPage />} />
          <Route path="/quiz" element={<McqPage />} />
          <Route path="/prep-settings" element={<PrepSettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

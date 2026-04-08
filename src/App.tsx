import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { DashboardPage } from './pages/DashboardPage'
import { GlossaryPage } from './pages/GlossaryPage'
import { LibraryPage } from './pages/LibraryPage'
import { InterviewPage } from './pages/InterviewPage'
import { ScenariosPage } from './pages/ScenariosPage'
import { DesktopWorkflowPage } from './pages/DesktopWorkflowPage'
import { WhyUmweltPage } from './pages/WhyUmweltPage'
import { LanguageLabPage } from './pages/LanguageLabPage'
import { StoriesPage } from './pages/StoriesPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { CramPage } from './pages/CramPage'

export default function App() {
  return (
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

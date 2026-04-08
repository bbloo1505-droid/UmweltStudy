import {
  BookOpen,
  LayoutDashboard,
  Landmark,
  MessagesSquare,
  Map,
  Building2,
  Sparkles,
  Library,
  ClipboardList,
  Zap,
} from 'lucide-react'

export type NavItem = {
  to: string
  label: string
  shortLabel: string
  Icon: React.ComponentType<{ className?: string }>
  group: 'Study' | 'Practice' | 'Tools'
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Dashboard', shortLabel: 'Home', Icon: LayoutDashboard, group: 'Study' },
  { to: '/glossary', label: 'Glossary Flashcards', shortLabel: 'Glossary', Icon: BookOpen, group: 'Study' },
  { to: '/library', label: 'Legislation / Policy / Frameworks', shortLabel: 'Library', Icon: Landmark, group: 'Study' },
  { to: '/interview', label: 'Interview Questions', shortLabel: 'Interview', Icon: MessagesSquare, group: 'Practice' },
  { to: '/scenarios', label: 'Scenario Drills', shortLabel: 'Scenarios', Icon: ClipboardList, group: 'Practice' },
  { to: '/desktop-workflow', label: 'Desktop Review Workflow', shortLabel: 'Workflow', Icon: Map, group: 'Tools' },
  { to: '/why-umwelt', label: 'Why Umwelt', shortLabel: 'Umwelt', Icon: Building2, group: 'Study' },
  { to: '/language-lab', label: 'Consultant Language Lab', shortLabel: 'Language', Icon: Sparkles, group: 'Practice' },
  { to: '/stories', label: 'Story Bank', shortLabel: 'Stories', Icon: Library, group: 'Study' },
  { to: '/resources', label: 'Resources', shortLabel: 'Resources', Icon: Library, group: 'Tools' },
  { to: '/cram', label: 'Last‑Minute Cram', shortLabel: 'Cram', Icon: Zap, group: 'Practice' },
]


/**
 * Personal prep profile — tuned from your learning-style answers (read→notes→quiz→repeat,
 * longer blocks, mixed memory, direct feedback, weak areas: law, language, offsets, GIS;
 * in-person interview; technical + fit).
 * Edit this file anytime to change defaults.
 */
export type LearningProfile = {
  label: string
  rhythm: string[]
  priorityTopics: { label: string; detail: string }[]
  interviewFormat: 'in-person' | 'video' | 'phone' | 'unknown'
  goals: string[]
  pressureTips: string[]
  gisFraming: string
  quickLinks: { to: string; label: string; why: string }[]
}

export const learningProfile: LearningProfile = {
  label: 'Your prep profile',
  rhythm: [
    'Prefer one or two longer study blocks per day (not lots of tiny fragments).',
    'Work topic-by-topic: read → take notes (type or write) → test yourself with Quiz / flashcards → repeat next day.',
    'Best focus time varies — schedule blocks when your energy is usually highest.',
  ],
  priorityTopics: [
    { label: 'Law & policy names', detail: 'Use Legislation library + drill mode; say jurisdiction + purpose out loud.' },
    { label: 'Consultant phrasing', detail: 'Language lab + glossary “consultant” definitions; steal structures, not jargon piles.' },
    { label: 'Offset ecology & HQA', detail: 'Glossary (offsets, monitoring) + Library QEOP / habitat quality entries + Desktop workflow.' },
    { label: 'GIS / spatial', detail: 'Basic skills now, growth in role — one honest sentence beats overselling.' },
  ],
  interviewFormat: 'in-person',
  goals: [
    'Sound credible on Queensland offsets / HQA / approvals at a junior-consultant level.',
    'Show fit: collaborative, field-to-report, willing to learn.',
  ],
  pressureTips: [
    'You sometimes blank or ramble — use a fixed 60s frame: one-sentence thesis → three bullets → what you’d verify next.',
    'Pause before speaking; in-person, steady eye contact and one breath beats filling silence with noise.',
  ],
  gisFraming:
    '“I use GIS for site maps, buffers, and overlaying constraints — I’m building speed on [X] and want to deepen consultant-grade workflows in a team like this.”',
  quickLinks: [
    { to: '/library', label: 'Legislation & policies', why: 'Law/policy gaps' },
    { to: '/language-lab', label: 'Language lab', why: 'Consultant phrasing' },
    { to: '/glossary?topic=offsets', label: 'Glossary · offsets', why: 'Offset ecology terms' },
    { to: '/glossary?topic=gis', label: 'Glossary · GIS', why: 'Spatial / desktop language' },
    { to: '/desktop-workflow', label: 'Desktop workflow', why: 'Ties PMST → field priorities' },
    { to: '/quiz', label: 'MCQ quiz', why: 'Fast recall checks' },
    { to: '/why-umwelt', label: 'Why Umwelt', why: 'Fit + company facts' },
    { to: '/interview?mode=mock', label: 'Mock interview', why: 'Speak under time pressure' },
  ],
}

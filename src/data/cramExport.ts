import { glossaryCards } from './glossary'
import { libraryEntries } from './library'
import { interviewQuestions } from './interview'
import { scenarios } from './scenarios'

export const CRAM_MISTAKES = [
  'Over-claiming certainty from desktop tools (PMST/MSES) without field verification.',
  'Skipping the mitigation hierarchy and jumping straight to offsets.',
  'Using “restoration” loosely when you mean revegetation or rehabilitation.',
  'No mention of success criteria, monitoring, or adaptive management.',
  'Not translating data into a recommendation (so what? what next?).',
  'Vague “I love the environment” answers without company-aligned specifics.',
]

/** Plain-text cram sheet for copy / print — matches CramPage lists. */
export function buildCramPlainText(): string {
  const topTerms = glossaryCards.slice(0, 12)
  const topLaws = libraryEntries.slice(0, 10)
  const topQs = interviewQuestions.slice(0, 10)
  const topScenarios = scenarios.slice(0, 8)

  const lines: string[] = [
    'Umwelt Interview Study Hub — Last-minute cram',
    '========================================',
    '',
    'TOP TERMS',
    '---------',
    ...topTerms.map((t, i) => `${i + 1}. ${t.term}`),
    '',
    'TOP LAWS / POLICIES / TOOLS',
    '---------------------------',
    ...topLaws.map((l, i) => `${i + 1}. ${l.name}`),
    '',
    'TOP LIKELY QUESTIONS',
    '--------------------',
    ...topQs.map((q, i) => `${i + 1}. ${q.question}`),
    '',
    'TOP SCENARIO REMINDERS',
    '----------------------',
    ...topScenarios.map((s, i) => `${i + 1}. ${s.title}`),
    '',
    'MISTAKES TO AVOID',
    '-----------------',
    ...CRAM_MISTAKES.map((m, i) => `${i + 1}. ${m}`),
    '',
    '60s answer frame: thesis → 3 bullets → what you would verify next.',
    '',
  ]
  return lines.join('\n')
}

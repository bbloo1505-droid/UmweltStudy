import { glossaryCards } from '../../data/glossary'
import { interviewQuestions } from '../../data/interview'
import { libraryEntries } from '../../data/library'
import { scenarios } from '../../data/scenarios'
import { includesQuery } from '../../lib/search'

export type OmniResult = {
  key: string
  title: string
  subtitle: string
  to: string
}

export function omniSearch(query: string): OmniResult[] {
  const results: OmniResult[] = []

  for (const c of glossaryCards) {
    if (includesQuery(`${c.term} ${c.plainEnglish} ${c.consultantDefinition} ${c.related.join(' ')}`, query)) {
      results.push({
        key: `g:${c.id}`,
        title: c.term,
        subtitle: `Glossary • ${c.topics.join(', ')}`,
        to: `/glossary?focus=${encodeURIComponent(c.id)}`,
      })
    }
  }

  for (const e of libraryEntries) {
    if (includesQuery(`${e.name} ${e.whatItIs} ${e.usedFor} ${e.related.join(' ')}`, query)) {
      results.push({
        key: `l:${e.id}`,
        title: e.name,
        subtitle: `Library • ${e.jurisdiction}`,
        to: `/library?focus=${encodeURIComponent(e.id)}`,
      })
    }
  }

  for (const q of interviewQuestions) {
    if (includesQuery(`${q.question} ${q.category} ${q.whatTheyTest}`, query)) {
      results.push({
        key: `i:${q.id}`,
        title: q.question,
        subtitle: `Interview • ${q.category}`,
        to: `/interview?focus=${encodeURIComponent(q.id)}`,
      })
    }
  }

  for (const s of scenarios) {
    if (includesQuery(`${s.title} ${s.setup} ${s.strongAnswerCovers.join(' ')}`, query)) {
      results.push({
        key: `s:${s.id}`,
        title: s.title,
        subtitle: `Scenario • ${s.difficulty}`,
        to: `/scenarios?focus=${encodeURIComponent(s.id)}`,
      })
    }
  }

  return results
}


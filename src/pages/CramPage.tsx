import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { glossaryCards } from '../data/glossary'
import { libraryEntries } from '../data/library'
import { interviewQuestions } from '../data/interview'
import { scenarios } from '../data/scenarios'

export function CramPage() {
  const topTerms = glossaryCards.slice(0, 12)
  const topLaws = libraryEntries.slice(0, 10)
  const topQs = interviewQuestions.slice(0, 10)
  const topScenarios = scenarios.slice(0, 8)

  return (
    <div>
      <PageHeader
        title="Last‑Minute Cram"
        subtitle="Use this the night before or morning-of. Read out loud. Keep it tight and confident."
        badge="High yield"
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Section
          title="Top terms to know cold"
          subtitle="Be able to define plainly + consultant-style, then say why it matters."
          items={topTerms.map((t) => t.term)}
        />
        <Section
          title="Top laws / policies / tools"
          subtitle="Name + jurisdiction + what it’s used for + typical trigger."
          items={topLaws.map((l) => l.name)}
        />
        <Section
          title="Top likely questions"
          subtitle="Answer in 60–90 seconds with a clear structure."
          items={topQs.map((q) => q.question)}
        />
        <Section
          title="Top scenario reminders"
          subtitle="Framework first, then evidence, then next steps."
          items={topScenarios.map((s) => s.title)}
        />
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Top mistakes to avoid</CardTitle>
            <CardDescription>These lose points fast in consulting ecology interviews.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 md:grid-cols-2">
            {[
              'Over-claiming certainty from desktop tools (PMST/MSES) without field verification.',
              'Skipping the mitigation hierarchy and jumping straight to offsets.',
              'Using “restoration” loosely when you mean revegetation or rehabilitation.',
              'No mention of success criteria, monitoring, or adaptive management.',
              'Not translating data into a recommendation (so what? what next?).',
              'Vague “I love the environment” answers without company-aligned specifics.',
            ].map((x) => (
              <div key={x} className="rounded-lg border bg-muted/30 p-3 text-sm">
                {x}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Section({ title, subtitle, items }: { title: string; subtitle: string; items: string[] }) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="text-base">{title}</CardTitle>
          <Badge variant="muted">Cram</Badge>
        </div>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal space-y-1 pl-5 text-sm">
          {items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}


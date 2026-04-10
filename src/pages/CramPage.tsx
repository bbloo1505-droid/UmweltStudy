import { useState } from 'react'
import { Copy, Printer } from 'lucide-react'

import { AnswerFrameCard } from '../components/AnswerFrameCard'
import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { buildCramPlainText, CRAM_MISTAKES } from '../data/cramExport'
import { glossaryCards } from '../data/glossary'
import { libraryEntries } from '../data/library'
import { interviewQuestions } from '../data/interview'
import { scenarios } from '../data/scenarios'

export function CramPage() {
  const [copyDone, setCopyDone] = useState(false)
  const topTerms = glossaryCards.slice(0, 12)
  const topLaws = libraryEntries.slice(0, 10)
  const topQs = interviewQuestions.slice(0, 10)
  const topScenarios = scenarios.slice(0, 8)

  const copyAll = async () => {
    const text = buildCramPlainText()
    try {
      await navigator.clipboard.writeText(text)
      setCopyDone(true)
      window.setTimeout(() => setCopyDone(false), 2000)
    } catch {
      window.prompt('Copy this text:', text)
    }
  }

  const printCram = () => window.print()

  return (
    <div>
      <PageHeader
        title="Last‑Minute Cram"
        subtitle="One screen of high-yield lists — use the night before or morning of the interview."
        tip="Read terms and questions out loud. If something feels fuzzy, tap through to Glossary or Interview for the full card."
        badge="High yield"
        right={
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" size="sm" className="print:hidden" onClick={copyAll}>
              <Copy className="mr-1 h-4 w-4" />
              {copyDone ? 'Copied' : 'Copy all'}
            </Button>
            <Button type="button" variant="outline" size="sm" className="print:hidden" onClick={printCram}>
              <Printer className="mr-1 h-4 w-4" />
              Print
            </Button>
          </div>
        }
      />

      <div className="mb-4 print:hidden">
        <AnswerFrameCard variant="compact" />
      </div>

      <div id="cram-print-area" className="grid gap-4 lg:grid-cols-2">
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
            {CRAM_MISTAKES.map((x) => (
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


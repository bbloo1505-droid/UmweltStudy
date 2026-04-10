import { PageHeader } from '../components/PageHeader'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { stories } from '../data/stories'

export function StoriesPage() {
  return (
    <div>
      <PageHeader
        title="Story Bank"
        subtitle="Pre-filled examples you can copy from — replace with your own projects using Situation → Task → Action → Result."
        tip="For each story, note what skill it proves (leadership, field method, GIS, etc.) so you can drop it into different questions."
      />

      <div className="space-y-4">
        {stories.map((s) => (
          <Card key={s.id}>
            <CardHeader>
              <CardTitle className="text-base">{s.title}</CardTitle>
              <CardDescription>Use this as a base, then customise it with specifics (dates, metrics, stakeholders).</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2">
              <Block title="Situation">{s.sections.situation}</Block>
              <Block title="Task">{s.sections.task}</Block>
              <Block title="Action">{s.sections.action}</Block>
              <Block title="Result">{s.sections.result}</Block>
              <List title="What it proves" items={s.sections.whatItProves} />
              <List title="Fits these questions" items={s.sections.fitsQuestions} />
              <List title="Stronger consultant framing" items={s.sections.strongerConsultantFraming} />
              <List title="Technical themes" items={s.sections.technicalThemes} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function Block({ title, children }: { title: string; children: string }) {
  return (
    <div>
      <div className="text-xs font-semibold text-muted-foreground">{title}</div>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  )
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs font-semibold text-muted-foreground">{title}</div>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  )
}


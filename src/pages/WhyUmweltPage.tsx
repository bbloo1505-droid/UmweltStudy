import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Textarea } from '../components/ui/textarea'
import { sources } from '../data/sources'

const whyPoints = [
  {
    title: 'They do the work you want to grow into',
    bullets: [
      'Ecology and biodiversity: constraints analyses, impact assessment, approvals support, and strategic offsets planning.',
      'Restoration and rehabilitation: plans grounded in pre-disturbance context, site data, performance/completion criteria, and regulatory requirements.',
      'Monitoring and site management: fit-for-purpose programs, clear criteria, and recommendations to maximise biodiversity gain.',
    ],
    source: 'umwelt-ecology-biodiversity',
  },
  {
    title: 'They’re explicit about modern tools and evidence',
    bullets: ['Rehab monitoring, inspections and mapping including LiDAR, remote sensing and drone-based surveys.'],
    source: 'umwelt-ecology-biodiversity',
  },
  {
    title: 'They position “Nature Positive” as a serious capability',
    bullets: [
      'ACT-D framework (Assess, Commit, Transform, Disclose) for nature strategy.',
      'IUCN Global Standard for Nature-based Solutions as a quality bar.',
      'Natural capital accounting aligned to the UN System of Environmental Economic Accounting (UN SEEA).',
      'Nature-related disclosures via TNFD guidance.',
    ],
    source: 'umwelt-nature-positive',
  },
]

export function WhyUmweltPage() {
  const src = (id: string) => sources.find((s) => s.id === id)

  return (
    <div>
      <PageHeader
        title="Why Umwelt"
        subtitle="Company-aligned, interview-ready points built from Umwelt’s official services pages."
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_420px]">
        <div className="space-y-4">
          {whyPoints.map((p) => (
            <Card key={p.title}>
              <CardHeader className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-base">{p.title}</CardTitle>
                  <Badge variant="muted">Official source</Badge>
                </div>
                <CardDescription>
                  Source:{' '}
                  {src(p.source)?.url ? (
                    <a className="underline" href={src(p.source)!.url} target="_blank" rel="noreferrer">
                      {src(p.source)!.title}
                    </a>
                  ) : (
                    src(p.source)?.title
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Build my “Why Umwelt” answer</CardTitle>
              <CardDescription>Write a 30-second and a 90-second version. Keep it concrete.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-xs font-semibold text-muted-foreground">30 seconds</div>
              <Textarea placeholder="1) Why Umwelt  2) Why this role  3) Your value (skills bridge)  4) Close" />
              <div className="text-xs font-semibold text-muted-foreground">90 seconds</div>
              <Textarea placeholder="Add one example: constraints analysis, offsets thinking, restoration planning, monitoring discipline." />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="sticky top-20 h-fit">
            <CardHeader>
              <CardTitle>Interview-ready phrasing</CardTitle>
              <CardDescription>Use their language, not generic “I love nature”.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Quote text="“I’m drawn to Umwelt’s field-to-office ecology delivery: robust survey data, defensible constraints analysis, and clear recommendations that support approvals.”" />
              <Quote text="“I’m keen to build depth in Queensland offsets and monitoring frameworks, and I’m comfortable communicating uncertainty with a clear next step.”" />
              <Quote text="“I like that Umwelt talks explicitly about restoration planning grounded in pre-disturbance context, performance criteria, and regulatory requirements.”" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function Quote({ text }: { text: string }) {
  return <div className="rounded-lg border bg-muted/30 p-3">{text}</div>
}


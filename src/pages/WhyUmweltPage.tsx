import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Textarea } from '../components/ui/textarea'
import { sources } from '../data/sources'

type WhyBlock = {
  title: string
  bullets: string[]
  source: string
  badge?: string
}

const whyPoints: WhyBlock[] = [
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
    title: 'Scale, licensing & depth',
    bullets: [
      'Umwelt describes having one of the largest nationwide teams of qualified and accredited ecologists in Australia.',
      'Staff are selected so outcomes work for clients, regulators, and communities; capabilities span field through to analysis and legislation.',
      'Ecologists are licensed for flora/fauna survey work (including specimen collection and fauna trapping/handling where required).',
    ],
    source: 'umwelt-ecology-biodiversity',
  },
  {
    title: 'Complex projects & strategic ecology',
    bullets: [
      'Positioned for complex and major projects: high-level ecological constraints analyses, strategic offset planning, and assessments aligned to legislation and industry best practice.',
      'Described as leaders in biodiversity offset strategy development and implementation across the country.',
      'Deep experience across renewable energy, infrastructure, mining, quarrying, urban development, defence, and government planning.',
    ],
    source: 'umwelt-ecology-biodiversity',
  },
  {
    title: 'Offsets, restoration & monitoring (your lane)',
    bullets: [
      'Offsets: survey, suitability analyses / calculations, and reporting across state, territory, and Commonwealth policy frameworks.',
      'Restoration/rehab: vegetation and site management plans, large-scale bush regeneration, mine rehabilitation — linked to pre-disturbance understanding and regulatory requirements.',
      'Monitoring: LiDAR, remote sensing, and drone-based surveys; floristic, condition, and fauna monitoring; clear performance and completion criteria.',
    ],
    source: 'umwelt-ecology-biodiversity',
  },
  {
    title: 'They’re explicit about modern tools and evidence',
    bullets: ['Rehab monitoring, inspections and mapping including LiDAR, remote sensing and drone-based surveys.'],
    source: 'umwelt-ecology-biodiversity',
  },
  {
    title: 'Renewable energy & fauna (talking point)',
    bullets: [
      'Dedicated ecological work for renewable energy — including bird and bat utilisation surveys, assessments, and adaptive management for wind farms, with bespoke risk assessment methodology applied nationally.',
      'Ecologists work with Umwelt environmental planners on approvals at local, state, and federal levels.',
    ],
    source: 'umwelt-ecology-biodiversity',
  },
  {
    title: 'Integrated disciplines & policy credibility',
    bullets: [
      'Aquatic/marine ecology can be integrated with terrestrial ecology, hydrogeology, geomorphology, and NRM — relevant when projects cross land and water.',
      'National team provides independent biodiversity policy advice to agencies and companies; contributes to expert panels on threatened species, offsets, restoration, and impact assessment.',
    ],
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
  {
    title: 'People & culture (careers)',
    bullets: [
      '“Amplify your career” — diverse projects that matter; supportive of graduates through to experienced hires.',
      '“We invest in you”: respectful, encouraging workplace; people described as the number one asset.',
      'Competitive salaries plus additional benefits (details listed on their careers page).',
    ],
    source: 'umwelt-careers',
    badge: 'Culture',
  },
  {
    title: 'Ecologist (Restoration), QLD — role alignment',
    bullets: [
      'Brisbane-based; national biodiversity team with strong growth in renewable energy, infrastructure, and resources.',
      'Role mixes fieldwork, data analysis, GIS, and reporting with a primary focus on offset-related deliverables.',
      'Expect: vegetation/habitat mapping, fauna surveys, offset property assessments, Habitat Quality Assessments.',
      'Technical work: threats, disturbances, regenerative capacity, restoration interventions; spatial analysis for regional to property-scale assessments.',
      'Contribute to technical reports, restoration planning, implementation frameworks, and monitoring programmes on offset sites.',
      'Ideal background: bush regeneration and/or ecological restoration experience; consulting experience desirable; collaborative team, flexible hours and travel for fieldwork.',
    ],
    source: 'umwelt-careers',
    badge: 'This role',
  },
]

export function WhyUmweltPage() {
  const src = (id: string) => sources.find((s) => s.id === id)

  return (
    <div>
      <PageHeader
        title="Why Umwelt"
        subtitle="Talking points for “why this company?” — drawn from Umwelt’s own service descriptions, not guesswork."
        tip="Skim the bullets, then use the text box at the bottom to write your own 60-second answer in your voice."
      />

      <div className="mb-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm text-foreground/90">
        <strong className="text-foreground">Interview rule:</strong> Tie “why Umwelt” to{' '}
        <strong>what they publish they do</strong> (ecology, offsets, restoration, monitoring) and{' '}
        <strong>what they publish they want from you</strong> (field + analysis + reporting). Avoid generic “I love nature”
        without linking to their services.
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_420px]">
        <div className="space-y-4">
          {whyPoints.map((p) => (
            <Card key={p.title}>
              <CardHeader className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-base">{p.title}</CardTitle>
                  {p.badge ? <Badge variant="secondary">{p.badge}</Badge> : null}
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
              <Quote text="“The Ecologist (Restoration) role lines up with what I’ve done in bush regeneration — I want to formalise that in HQA, offset monitoring, and GIS-backed reporting at national-project scale.”" />
              <Quote text="“Umwelt’s national ecology footprint and offset experience means I’d learn from people who’ve seen the same approval problems across sectors — not just one project type.”" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick checklist (from the role)</CardTitle>
              <CardDescription>Tick mentally — you don’t need every box.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <span className="text-muted-foreground">✓</span>
                <span>Field + desktop balance (surveys, GIS, reports)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">✓</span>
                <span>Offsets / habitat quality / restoration outcomes</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">✓</span>
                <span>Land management & restoration thinking (weeds, disturbance, recovery)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">✓</span>
                <span>Clear technical writing & collaborative delivery</span>
              </div>
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

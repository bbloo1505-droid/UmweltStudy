import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const steps = [
  {
    title: 'Define project and footprint',
    notes: [
      'Get the “action” definition clear: what’s being built, where, when, and what temporary works are included.',
      'Capture alternatives early (layout options). Avoidance is easier before design hardens.',
    ],
    consultantWording: [
      '“At this stage the footprint is indicative; we’ve assumed X for temporary access and laydown.”',
      '“We recommend early micro-siting to avoid mapped constraints prior to survey mobilisation.”',
    ],
    commonMistakes: ['Not including temporary impacts', 'No buffer/uncertainty allowance on early maps'],
  },
  {
    title: 'Identify likely ecological values (baseline hypothesis)',
    notes: [
      'Use aerial imagery + landforms + vegetation context to form a hypothesis before you touch databases.',
      'Ask: what would be surprising here? That becomes your verification focus.',
    ],
    consultantWording: ['“The landscape context suggests potential riparian values and connectivity features.”'],
    commonMistakes: ['Jumping straight to a tool without understanding landscape context'],
  },
  {
    title: 'Check PMST (Commonwealth screening)',
    notes: [
      'Run PMST for the footprint and a justified buffer.',
      'Treat results as indicative; use it to guide significance thinking and survey scoping.',
    ],
    consultantWording: [
      '“PMST is a screening tool; results are not exhaustive and require field verification.”',
      '“Potential MNES identified in PMST will be assessed for likelihood of occurrence and significance.”',
    ],
    commonMistakes: ['Treating PMST as presence/absence', 'No rationale for buffer size'],
  },
  {
    title: 'Check SPRAT (species/community context)',
    notes: [
      'Confirm listing status and habitat associations for any MNES returned by PMST.',
      'Extract: key habitat features, threats, seasonality, and relevant survey considerations.',
    ],
    consultantWording: ['“SPRAT indicates habitat associations with X; field verification will focus on Y.”'],
    commonMistakes: ['Copying species lists without translating into survey priorities'],
  },
  {
    title: 'Check Queensland mapping (MSES, wetlands, regulated vegetation, etc.)',
    notes: [
      'Use the official mapping method page to understand what MSES layers represent and their limitations.',
      'Cross-check against the correct trigger system and local planning overlays.',
    ],
    consultantWording: [
      '“MSES mapping is indicative and supports planning; it is not automatically a development trigger.”',
    ],
    commonMistakes: ['Treating mapping products as triggers without cross-checking the right framework'],
  },
  {
    title: 'Check local planning overlays (council mapping)',
    notes: [
      'Use the local planning scheme overlays to identify local constraints and assessment triggers.',
      'Keep it separate from MNES/MSES: local overlays are their own layer of decision context.',
    ],
    consultantWording: [
      '“Local overlay mapping indicates potential planning constraints; we’ll cross-check triggers and confirm via field evidence where relevant.”',
    ],
    commonMistakes: ['Mixing local overlays with MNES/MSES as if they are the same trigger system'],
  },
  {
    title: 'Identify likely triggers, constraints, and red flags',
    notes: [
      'Summarise what could drive approvals, offsets, timing risk, and survey requirements.',
      'Use the mitigation hierarchy language explicitly.',
    ],
    consultantWording: [
      '“Key constraints are likely to include X; we recommend avoidance/minimisation via Y design changes.”',
    ],
    commonMistakes: ['A list of layers with no decision implications'],
  },
  {
    title: 'Identify data gaps and field verification priorities',
    notes: [
      'Turn uncertainty into a plan: what needs verification, what method, what season, what specialist input.',
      'Be explicit about assumptions and consequences if wrong.',
    ],
    consultantWording: [
      '“This conclusion is contingent on field verification of X; if confirmed, it may alter Y pathway.”',
    ],
    commonMistakes: ['Hedging without a next step', 'No prioritisation'],
  },
  {
    title: 'Form a preliminary view on restoration approach and offset suitability (high-level)',
    notes: [
      'Keep it high-level: avoid promising outcomes without baseline data.',
      'Frame options: ANR vs targeted infill vs reconstruction, with monitoring and adaptive management triggers.',
    ],
    consultantWording: ['“Preliminary view only; final recommendations will be informed by baseline condition data.”'],
    commonMistakes: ['Over-committing to planting without regeneration capacity assessment'],
  },
]

export function DesktopWorkflowPage() {
  return (
    <div>
      <PageHeader
        title="Desktop Review Workflow"
        subtitle="Walk through the same checks you’d do on a real project — maps first, then field priorities — before anyone goes on site."
        tip="Work top to bottom. Each step has plain notes, consultant-style wording, and mistakes juniors often make."
        badge="Study simulator"
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {steps.map((s, idx) => (
            <Card key={s.title}>
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Step {idx + 1}</Badge>
                  <CardTitle className="text-base">{s.title}</CardTitle>
                </div>
                <CardDescription>Use this as your spoken workflow in interview answers.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <List title="Notes" items={s.notes} />
                <List title="Consultant wording examples" items={s.consultantWording} />
                <List title="Common junior mistakes" items={s.commonMistakes} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <Card className="sticky top-20 h-fit">
            <CardHeader>
              <CardTitle>Flow snapshot</CardTitle>
              <CardDescription>Memorise this chain.</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-sm">
                {steps.map((s, idx) => (
                  <li key={s.title} className="rounded-md border bg-background px-3 py-2">
                    <span className="text-xs font-semibold text-muted-foreground">Step {idx + 1}</span>
                    <div className="font-semibold">{s.title}</div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
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


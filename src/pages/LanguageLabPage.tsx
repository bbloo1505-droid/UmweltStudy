import { useState } from 'react'
import { HelpCallout } from '../components/HelpCallout'
import { PageHeader } from '../components/PageHeader'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { FillInTheBlanks } from '../components/study/FillInTheBlanks'
import { fillInExercises } from '../data/languageLabFill'

type LanguagePair = {
  id: string
  category: string
  plain: string
  consultant: string
}

const pairs: LanguagePair[] = [
  // Threats & degrading processes
  {
    id: 'threat-1',
    category: 'Threats & degrading processes',
    plain: 'We need to weed everything straight away.',
    consultant:
      'We should prioritise threat abatement in line with regeneration capacity: control high-impact weeds first, but sequence work so we don’t remove habitat value without a plan for native recovery.',
  },
  {
    id: 'threat-2',
    category: 'Threats & degrading processes',
    plain: 'The weeds are bad but they’re just plants.',
    consultant:
      'Weeds are degrading processes as well as structure: they can alter fire, hydrology and competition, and may be masking whether native regeneration is viable once threats are reduced.',
  },
  {
    id: 'threat-3',
    category: 'Threats & degrading processes',
    plain: 'Remove the lantana and we’re done.',
    consultant:
      'Lantana control is one threat response; we still need to confirm whether other limiting factors (grazing, compaction, altered drainage) remain and whether recruitment targets are achievable post-control.',
  },
  {
    id: 'threat-4',
    category: 'Threats & degrading processes',
    plain: 'Cattle aren’t that bad for the bush.',
    consultant:
      'Grazing is a chronic degrading process here: it suppresses recruitment, compacts soils and can maintain weed dominance; exclusion or managed grazing may be a prerequisite to recovery.',
  },
  {
    id: 'threat-5',
    category: 'Threats & degrading processes',
    plain: 'We should poison the weeds first, then worry about fences.',
    consultant:
      'We need to sequence interventions so we remove or manage the source of degradation where feasible—often that means stopping ongoing damage (e.g. access, grazing) before large-scale treatment, otherwise recovery reverts.',
  },
  {
    id: 'threat-6',
    category: 'Threats & degrading processes',
    plain: 'The client wants planting next month.',
    consultant:
      'Planting before addressing ongoing threats risks poor survival and weak defensible outcomes; the priority is to confirm threat status and regeneration capacity, then align planting with an evidence-based intervention pathway.',
  },

  // Disturbance & site context
  {
    id: 'dist-1',
    category: 'Disturbance & site context',
    plain: 'The site was disturbed a while ago.',
    consultant:
      'We should characterise disturbance type, intensity, duration and whether legacy effects (soil, hydrology, weed seedbank) still constrain natural recovery.',
  },
  {
    id: 'dist-2',
    category: 'Disturbance & site context',
    plain: 'It’s been slashed so it’s “clean”.',
    consultant:
      'Slashing can reduce structural complexity and favour exotic grasses; “tidy” doesn’t equal ecologically functional—we need to assess recruitment, native richness and ongoing management.',
  },
  {
    id: 'dist-3',
    category: 'Disturbance & site context',
    plain: 'There was a fire; it’ll come back.',
    consultant:
      'Fire is a disturbance with context-dependent outcomes; we need to assess severity, season, weed response, and whether the community has enough resilience to recover without intervention.',
  },
  {
    id: 'dist-4',
    category: 'Disturbance & site context',
    plain: 'Fill and drainage changed the site.',
    consultant:
      'Irreversible physical alteration can shift the reference condition; we may be looking at rehabilitation or type conversion rather than full restoration to the pre-disturbance community.',
  },
  {
    id: 'dist-5',
    category: 'Disturbance & site context',
    plain: 'The creek line looks natural.',
    consultant:
      'Visual appearance can mask hydrological modification; we should verify connectivity, flow regime cues and riparian function, especially where stormwater or channelisation is present.',
  },

  // Regeneration capacity & resilience
  {
    id: 'regen-1',
    category: 'Regeneration capacity & resilience',
    plain: 'It’ll grow back if we leave it.',
    consultant:
      'Recovery depends on regeneration capacity: propagule availability, soil condition and whether degrading processes are still active—passive recovery is only viable where those enabling conditions exist.',
  },
  {
    id: 'regen-2',
    category: 'Regeneration capacity & resilience',
    plain: 'There are no seedlings, so we need tubes.',
    consultant:
      'Low recruitment may reflect limiting factors rather than absence of intent to recover; we should diagnose whether the bottleneck is competition, grazing, moisture, or lack of seed sources before defaulting to planting.',
  },
  {
    id: 'regen-3',
    category: 'Regeneration capacity & resilience',
    plain: 'The bush is resilient.',
    consultant:
      'Resilience is site- and community-specific; I’d support that statement with indicators—native regeneration, soil stability, weed trajectory—and define what “recovery” means against a reference or rehabilitation target.',
  },
  {
    id: 'regen-4',
    category: 'Regeneration capacity & resilience',
    plain: 'Some natives are coming up under the weeds.',
    consultant:
      'That’s a positive signal for assisted natural regeneration: it suggests propagule pressure and partial recruitment; the management question is staged threat reduction to release those recruits without triggering collapse.',
  },
  {
    id: 'regen-5',
    category: 'Regeneration capacity & resilience',
    plain: 'We can’t tell if it will recover.',
    consultant:
      'Under uncertainty, we frame a testable management response: short-term monitoring of recruitment and weed response after staged intervention, with decision rules for escalation to reconstruction if thresholds aren’t met.',
  },

  // Intervention sequencing (threats before techniques)
  {
    id: 'seq-1',
    category: 'Intervention sequencing',
    plain: 'Weed first, ask questions later.',
    consultant:
      'We should remove or control the drivers of degradation where they’re ongoing, then align weed treatment with recruitment risk—otherwise we can increase bare ground or lose habitat without a recovery pathway.',
  },
  {
    id: 'seq-2',
    category: 'Intervention sequencing',
    plain: 'Planting fixes degraded sites.',
    consultant:
      'Planting is a tool, not the default first step; where natural regeneration is viable, the priority is often threat abatement and assisted recovery, with planting targeted to gaps once limiting factors are addressed.',
  },
  {
    id: 'seq-3',
    category: 'Intervention sequencing',
    plain: 'We already fenced, so we can skip monitoring.',
    consultant:
      'Exclusion is a threat response; we still need to verify outcomes against success criteria—recruitment, weed trajectory, and whether additional interventions are triggered under adaptive management.',
  },
  {
    id: 'seq-4',
    category: 'Intervention sequencing',
    plain: 'Let’s mulch and plant everywhere.',
    consultant:
      'Mulch and planting alter microsite conditions and can interfere with natural regeneration on intact edges; interventions should be zoned by regeneration capacity and objective (release recruits vs infill vs reconstruction).',
  },
  {
    id: 'seq-5',
    category: 'Intervention sequencing',
    plain: 'The weeds are habitat for birds.',
    consultant:
      'That’s a valid trade-off conversation: we quantify fauna use, avoid critical breeding windows where feasible, and stage removal so native structure can replace weed structure without creating an ecological vacuum.',
  },

  // Succession & ecological trajectory
  {
    id: 'succ-1',
    category: 'Succession & trajectory',
    plain: 'It’s early successional so it’s meant to look scrappy.',
    consultant:
      'Successional stage explains structure, but doesn’t excuse weed dominance if degrading processes are steering the trajectory away from the target community; we define desired trajectory and indicators.',
  },
  {
    id: 'succ-2',
    category: 'Succession & trajectory',
    plain: 'In ten years it’ll be forest.',
    consultant:
      'Long-term composition depends on seed sources, disturbance regime and management; without those enabling conditions, the site may stall in a weedy steady state—success criteria and monitoring make that testable.',
  },
  {
    id: 'succ-3',
    category: 'Succession & trajectory',
    plain: 'Pioneers went in, so succession is working.',
    consultant:
      'Pioneer establishment is one milestone; we still assess whether mid- and late-stage species are recruiting and whether weeds are declining relative to defined performance indicators.',
  },
  {
    id: 'succ-4',
    category: 'Succession & trajectory',
    plain: 'We need to speed up nature.',
    consultant:
      'We can accelerate recovery where reconstruction is justified, but the intervention level should match degradation and regeneration capacity—otherwise we risk high-cost inputs with weak ecological return.',
  },

  // Restoration interventions & pathways
  {
    id: 'intv-1',
    category: 'Restoration interventions',
    plain: 'This is full restoration.',
    consultant:
      'I’d align language to evidence: if we can’t reinstate the original community, the defensible framing may be rehabilitation or type conversion against agreed objectives and reference benchmarks.',
  },
  {
    id: 'intv-2',
    category: 'Restoration interventions',
    plain: 'We’ll do ANR because it’s cheaper.',
    consultant:
      'Assisted natural regeneration is selected where regeneration processes exist but are inhibited—not only on cost grounds; we document inhibiting factors and expected response to intervention.',
  },
  {
    id: 'intv-3',
    category: 'Restoration interventions',
    plain: 'Revegetation equals restoration.',
    consultant:
      'Revegetation is a technique; restoration targets ecosystem structure, function and trajectory toward a reference or agreed rehabilitation outcome—those require defined criteria and monitoring.',
  },
  {
    id: 'intv-4',
    category: 'Restoration interventions',
    plain: 'The offset site just needs more trees.',
    consultant:
      'Offset delivery depends on habitat quality, management and conservation outcomes against the approved methodology—not tree count alone; we align interventions with the habitat quality framework and legal obligations.',
  },
  {
    id: 'intv-5',
    category: 'Restoration interventions',
    plain: 'Adaptive management means we wing it.',
    consultant:
      'Adaptive management is structured: predefined triggers, monitoring against indicators, and documented decisions when results deviate— not ad hoc changes without rationale.',
  },

  // Original high-value pairs (approvals / desktop)
  {
    id: 'legacy-1',
    category: 'Approvals & desktop review',
    plain: 'I think there might be a threatened species here.',
    consultant:
      'Desktop screening indicates potential habitat for EPBC-listed species; this requires targeted field verification to confirm presence and inform impact significance.',
  },
  {
    id: 'legacy-2',
    category: 'Approvals & desktop review',
    plain: 'The site is really weedy.',
    consultant:
      'The understorey is weed-dominated, which is likely suppressing recruitment; restoration outcomes will depend on threat control and evidence of regeneration capacity.',
  },
  {
    id: 'legacy-3',
    category: 'Approvals & desktop review',
    plain: 'We should just plant a lot of natives.',
    consultant:
      'A staged approach is recommended: address limiting factors first, then use targeted infill planting where recruitment remains below defined thresholds.',
  },
  {
    id: 'legacy-4',
    category: 'Approvals & desktop review',
    plain: 'The map says it’s important habitat.',
    consultant:
      'Mapping is indicative; we’ll treat it as a constraint flag and confirm on-ground condition and extent via field evidence before finalising design decisions.',
  },
]

const uncertaintyPatterns = [
  'State what you know (evidence + date + source).',
  'State what you don’t know (specific gap).',
  'State why it matters (trigger / cost / time / risk).',
  'Recommend the next step (proportionate).',
  'Define decision points (“if X, then Y”).',
]

const categoryOrder = [
  'Threats & degrading processes',
  'Disturbance & site context',
  'Regeneration capacity & resilience',
  'Intervention sequencing',
  'Succession & trajectory',
  'Restoration interventions',
  'Approvals & desktop review',
]

function pairsByCategory(): { category: string; items: LanguagePair[] }[] {
  const map = new Map<string, LanguagePair[]>()
  for (const p of pairs) {
    const list = map.get(p.category) ?? []
    list.push(p)
    map.set(p.category, list)
  }
  return categoryOrder
    .filter((c) => map.has(c))
    .map((category) => ({ category, items: map.get(category)! }))
}

export function LanguageLabPage() {
  const sections = pairsByCategory()
  const [fillIdx, setFillIdx] = useState(0)
  const fillExercise = fillInExercises[fillIdx]!
  const fillMax = fillInExercises.length - 1

  return (
    <div>
      <PageHeader
        title="Consultant Language Lab"
        subtitle="Practice sounding like a junior consultant: clear, careful, evidence-based — not exam essays."
      />

      <div className="mb-4">
        <HelpCallout variant="muted">
          Scroll down for <strong>phrase pairs</strong> (plain → professional), then <strong>fill-in-the-blank</strong>{' '}
          exercises. Use the blocks to rehearse out loud.
        </HelpCallout>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Fill in the blanks</CardTitle>
            <CardDescription>
              Tap an empty box, then tap a word below to fill it — or tap words in order and they fill the next free space.
              Wrong order? Tap a filled box to send the word back. <strong>Reset</strong> shuffles a new set.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={fillIdx <= 0}
                  onClick={() => setFillIdx((i) => Math.max(0, i - 1))}
                >
                  Previous
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={fillIdx >= fillMax}
                  onClick={() => setFillIdx((i) => Math.min(fillMax, i + 1))}
                >
                  Next
                </Button>
              </div>
              <span className="text-xs text-muted-foreground">
                Exercise {fillIdx + 1} of {fillInExercises.length}
              </span>
            </div>
            <FillInTheBlanks key={fillExercise.id} exercise={fillExercise} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Plain → consultant-style</CardTitle>
            <CardDescription>
              Themes: threats, disturbance, regeneration capacity, sequencing (remove ongoing degradation before defaulting
              to planting or broad weed control), succession, and intervention pathways.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {sections.map((section) => (
              <div key={section.category}>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-foreground">{section.category}</h3>
                  <Badge variant="secondary" className="text-xs font-normal">
                    {section.items.length} cards
                  </Badge>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {section.items.map((p) => (
                    <div key={p.id} className="rounded-lg border bg-background p-3">
                      <div className="text-xs font-semibold text-muted-foreground">Plain</div>
                      <div className="mt-1 text-sm">{p.plain}</div>
                      <div className="mt-3 text-xs font-semibold text-muted-foreground">Consultant-style</div>
                      <div className="mt-1 text-sm">{p.consultant}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">How to describe uncertainty properly</CardTitle>
            <CardDescription>This is a core consulting skill in approvals/offsets.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal space-y-2 pl-5 text-sm">
              {uncertaintyPatterns.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ol>
            <div className="mt-4 rounded-lg border bg-muted/30 p-3 text-sm">
              Example: “Based on PMST screening (8 Apr 2026), potential MNES may be present. This is not exhaustive and
              requires field verification; if confirmed, it may alter referral pathway and schedule. Recommend targeted
              habitat assessment and survey scoping before design is finalised.”
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

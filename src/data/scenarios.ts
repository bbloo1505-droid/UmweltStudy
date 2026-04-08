import type { ScenarioDrill } from '../lib/types'

export const scenarios: ScenarioDrill[] = [
  {
    id: 'weeds-remnant-canopy',
    title: 'Offset site with heavy weeds but remnant canopy',
    setup:
      'You’re assessing a proposed offset site. Desktop imagery shows intact canopy in patches, but the understorey is weed-dominated. The client wants to “plant it out” quickly.',
    strongAnswerCovers: [
      'Clarify objective: what prescribed matter is being offset and what outcomes/criteria apply',
      'Describe current condition in a defensible way (structure, composition, threats, regeneration capacity)',
      'Explain why assisted natural regeneration (ANR) may be more cost-effective/robust than blanket planting',
      'Prioritise threat management (weeds, grazing pressure, soil compaction, hydrology)',
      'Define measurable success criteria and monitoring triggers (adaptive management)',
      'Flag survey gaps (reference ecosystem selection; baseline plot data; seasonality)',
    ],
    redFlags: [
      'Assuming “weeds = no value” or “weeds = worthless” without assessing habitat function',
      'Recommending immediate large-scale planting without understanding regeneration capacity',
      'No plan for follow-up maintenance and monitoring',
    ],
    consultantFramework: [
      '1) Define the matter + obligation',
      '2) Baseline condition + key limiting factors',
      '3) Options: ANR vs targeted infill vs reconstruction',
      '4) Risks and assumptions',
      '5) Recommendation with staged actions + monitoring',
    ],
    bestLanguage: [
      '“The canopy suggests residual ecological function; the limiting factor is currently the understorey competition and recruitment.”',
      '“I’d recommend a staged approach: stabilise threats first, then infill planting where recruitment remains below thresholds.”',
      '“We can design criteria around trajectory toward a defined reference, not just planting counts.”',
    ],
    sayItSimply:
      'Because there’s still canopy, the site may recover well if we remove the main blockers (weeds, grazing, soil issues). I’d treat planting as targeted support, not the whole strategy.',
    difficulty: 'medium',
    topics: ['restoration', 'offsets', 'monitoring', 'consulting'],
    sources: ['umwelt-ecology-biodiversity', 'seq-restoration-framework-attached'],
    needsVerification: true,
  },
  {
    id: 'desktop-vs-field',
    title: 'Desktop mapping says one thing; field evidence says another',
    setup:
      'MSES mapping and desktop layers suggest a value is present, but your field observations contradict the mapped extent/condition. The PM wants a quick answer today.',
    strongAnswerCovers: [
      'Acknowledge mapping is indicative; field observations are evidence but need documentation',
      'Describe what you observed (GPS points, photos, plots, time/date/conditions)',
      'Explain implications for triggers, impact area, and offsets risk (without legal overreach)',
      'Recommend next step: targeted verification, data request, or specialist review',
      'Communicate uncertainty and decision points clearly to PM/client',
    ],
    redFlags: ['Overruling mapping with a casual observation', 'Overstating regulatory conclusions without evidence trail'],
    consultantFramework: [
      'Evidence → Interpretation → Risk → Recommendation',
      '“What I saw / What it could mean / What we should do next”',
    ],
    bestLanguage: [
      '“Mapping is indicative; our field evidence suggests the mapped layer may not represent current on-ground condition at this location.”',
      '“I can provide a preliminary view today, but I recommend we verify with X before locking design.”',
    ],
    sayItSimply:
      'Maps are a starting point. If the ground is telling a different story, we document it properly and do a quick verification step before making a high-stakes call.',
    difficulty: 'hard',
    topics: ['desktop-review', 'gis', 'consulting', 'approvals'],
    sources: ['qld-mses-method', 'umwelt-ecology-biodiversity'],
  },
  {
    id: 'mini-desktop-case-morayfield',
    title: 'Mini desktop review case: light industrial estate (Upper Caboolture / Morayfield South)',
    setup:
      'A private developer proposes a 19‑lot light industrial estate + access road upgrade in the Upper Caboolture / Morayfield South district (Moreton Bay, SEQ). Site is 24.6 ha. Estimated impact footprint is 18.9 ha after avoiding the main drainage line. You’re the graduate ecologist supporting a preliminary offsets desktop review before fieldwork.',
    strongAnswerCovers: [
      'Likely ecological values and likely triggers (Commonwealth + QLD + local) — but clearly separated',
      'Desktop sources/layers checked first, in a defensible order',
      'Preliminary view on residual impacts and whether offsets may be relevant (after mitigation hierarchy)',
      'Key constraints and red flags (stormwater, drainage, vegetation remnants, mapped values)',
      'Biggest data gaps and field verification priorities',
      'Preliminary restoration pathway logic: ANR vs reconstruction vs hybrid (based on regeneration capacity)',
      'Professional uncertainty language: what’s indicative vs what needs confirmation',
    ],
    redFlags: [
      'Mixing MNES/MSES/local overlays as if they are the same trigger system',
      'Claiming “no significance” from desktop only',
      'Skipping avoidance/minimisation and jumping to offsets',
      'Recommending “planting” without discussing regeneration capacity and follow-up',
    ],
    consultantFramework: [
      '1) Footprint + alternatives + assumptions',
      '2) Desktop evidence summary (Commonwealth/State/Local) + limitations',
      '3) Likely impact pathways (direct + indirect)',
      '4) Mitigation hierarchy opportunities',
      '5) Data gaps + field priorities',
      '6) Preliminary recommendations + next steps',
    ],
    bestLanguage: [
      '“This is a screening‑level view based on current mapping; findings are indicative and subject to field confirmation.”',
      '“Key next step is targeted field verification of mapped values and condition to support a defensible pathway decision.”',
      '“Offsets, if required, are a response to significant residual impacts after avoidance and minimisation.”',
    ],
    sayItSimply:
      'First I’d use desktop tools to work out what might be there and what could drive approvals/offsets. Then I’d list the top uncertainties and design fieldwork to confirm them before making strong claims.',
    difficulty: 'hard',
    topics: ['desktop-review', 'offsets', 'approvals', 'gis', 'consulting', 'qld'],
    sources: ['umwelt-active-recall-workbook', 'umwelt-interview-study-notes'],
  },
]


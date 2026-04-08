/** Sentence fragments: parts[0] + blank0 + parts[1] + blank1 + ... + parts[n] */
export type FillExercise = {
  id: string
  title: string
  hint?: string
  parts: string[]
  answers: string[]
  distractors: string[]
}

export const fillInExercises: FillExercise[] = [
  {
    id: 'mitigation-hierarchy',
    title: 'Mitigation order',
    hint: 'EPBC / offsets thinking — order matters.',
    parts: [
      'After desktop review, we apply the mitigation hierarchy: first ',
      ', then ',
      ', then rehabilitation where feasible, and only then consider offsets for ',
      ' impacts.',
    ],
    answers: ['avoidance', 'minimisation', 'significant residual'],
    distractors: ['planting', 'PMST', 'baseline', 'referral'],
  },
  {
    id: 'regeneration-anr',
    title: 'Regeneration pathway',
    parts: [
      'Where native ',
      ' exists but recovery is blocked by weeds or grazing, ',
      ' is often appropriate before full ',
      '.',
    ],
    answers: ['regeneration capacity', 'assisted natural regeneration', 'reconstruction'],
    distractors: ['offsets', 'referral', 'SPRAT', 'clearing'],
  },
  {
    id: 'desktop-pmst',
    title: 'Federal screening',
    parts: [
      'We use ',
      ' as an indicative screen for ',
      '; results are cross-checked with SPRAT and ',
      ' data.',
    ],
    answers: ['PMST', 'MNES', 'field'],
    distractors: ['MSES', 'VMA', 'EIS', 'council'],
  },
  {
    id: 'qld-offsets',
    title: 'Queensland offsets',
    parts: [
      'Under Queensland’s offsets framework, ',
      ' are central to offset triggers; habitat quality is often assessed using ',
      '-aligned methods and the prescribed policy version.',
    ],
    answers: ['prescribed environmental matters', 'BioCondition'],
    distractors: ['EPBC', 'Ramsar', 'SPRAT', 'EIS'],
  },
  {
    id: 'threat-sequencing',
    title: 'Threat control sequencing',
    parts: [
      'Before broad weed treatment, we address ongoing ',
      ' (e.g. grazing, access) where possible, because otherwise ',
      ' processes can quickly return.',
    ],
    answers: ['degradation', 'degrading'],
    distractors: ['succession', 'baseline', 'referral', 'canopy'],
  },
  {
    id: 'structure-function',
    title: 'Structure and function',
    parts: [
      'A site can look “clean” in ',
      ' yet still fail in ',
      ' if recruitment and self-sustaining processes are absent.',
    ],
    answers: ['structure', 'function'],
    distractors: ['offsets', 'SPRAT', 'referral', 'EIS'],
  },
  {
    id: 'succession-trajectory',
    title: 'Succession language',
    parts: [
      'Successional stage explains current ',
      ', but we still define the desired ecological ',
      ' and monitor indicators.',
    ],
    answers: ['structure', 'trajectory'],
    distractors: ['referral', 'VMA', 'PMST', 'clearing'],
  },
]

import type { McqQuestion } from '../lib/types'

export const mcqQuestions: McqQuestion[] = [
  {
    id: 'mcq-01',
    question: 'Under the mitigation hierarchy used in impact assessment, what should usually come first?',
    options: [
      'Avoid the impact (e.g. change design or location)',
      'Pay for an offset immediately',
      'Plant compensation trees on any available land',
      'Complete detailed field surveys only after construction starts',
    ],
    correctIndex: 0,
    explanation:
      'Avoidance is the first step, then minimisation, then rehabilitation/restoration where relevant; offsets address significant residual impacts after that.',
    topics: ['offsets', 'approvals', 'consulting'],
  },
  {
    id: 'mcq-02',
    question: 'The Protected Matters Search Tool (PMST) is best described as:',
    options: [
      'Indicative screening — not a guarantee every protected matter is captured',
      'A legally exhaustive list of all species on a site',
      'A Queensland-only vegetation clearing register',
      'A substitute for SPRAT when listing threatened species',
    ],
    correctIndex: 0,
    explanation:
      'Official material describes PMST as a screening aid; results should be cross-checked with other data and field verification.',
    topics: ['approvals', 'desktop-review', 'tool'],
  },
  {
    id: 'mcq-03',
    question: 'Matters of National Environmental Significance (MNES) are protected under:',
    options: [
      'The Environment Protection and Biodiversity Conservation Act 1999 (Cwlth)',
      'The Planning Act 2016 (Qld) only',
      'Local council biodiversity overlays only',
      'The Vegetation Management Act 1999 (Qld) only',
    ],
    correctIndex: 0,
    explanation: 'MNES are the EPBC Act protected-matter categories that can trigger referral and assessment pathways.',
    topics: ['legislation', 'approvals'],
  },
  {
    id: 'mcq-04',
    question: 'In Queensland’s offsets framework, “prescribed environmental matters” are primarily defined through:',
    options: [
      'The Environmental Offsets Act / Regulation and prescribed policy versions',
      'The EPBC Act alone',
      'Only the local planning scheme',
      'Informal council guidelines with no statutory basis',
    ],
    correctIndex: 0,
    explanation:
      'QLD offsets operate under statute and subordinate instruments; the prescribed policy version must be checked for current requirements.',
    topics: ['offsets', 'legislation', 'qld'],
  },
  {
    id: 'mcq-05',
    question: 'BioCondition in Queensland is most accurately described as:',
    options: [
      'A structured vegetation condition assessment method against reference benchmarks',
      'A federal threatened species listing process',
      'A weed identification smartphone app',
      'The same thing as PMST',
    ],
    correctIndex: 0,
    explanation:
      'BioCondition compares site attributes to benchmarks for regional ecosystems and underpins much habitat quality work.',
    topics: ['qld', 'offsets', 'monitoring'],
  },
  {
    id: 'mcq-06',
    question: 'Terrestrial habitat quality assessment under the Queensland offsets habitat quality guide is used to:',
    options: [
      'Assess and compare habitat condition for impact and offset matter areas using structured attributes',
      'Replace the need for any field survey',
      'Determine council rates for rural land',
      'Map MSES layers for the whole state automatically',
    ],
    correctIndex: 0,
    explanation:
      'The guide sets out how habitat quality scores support offset calculations, baselines, and monitoring — not desktop mapping alone.',
    topics: ['offsets', 'qld', 'monitoring'],
  },
  {
    id: 'mcq-07',
    question: 'Matters of State Environmental Significance (MSES) mapping in Queensland is mainly for:',
    options: [
      'Supporting biodiversity information in planning — interpret triggers via planning/assessment pathways, not the map alone',
      'Automatically refusing every development application',
      'Replacing EPBC referrals',
      'Listing species on SPRAT',
    ],
    correctIndex: 0,
    explanation:
      'Official guidance stresses understanding how MSES information is used in the planning system versus other trigger checks.',
    topics: ['qld', 'policy', 'desktop-review'],
  },
  {
    id: 'mcq-08',
    question: 'An EPBC Act referral is about whether an action:',
    options: [
      'Is likely to have a significant impact on a matter protected under the EPBC Act',
      'Requires a local development permit only',
      'Is popular with the local community',
      'Uses more than 10 hectares of land',
    ],
    correctIndex: 0,
    explanation:
      'Referral turns on likely significant impact on MNES (and the statutory process), not area alone or popularity.',
    topics: ['approvals', 'legislation'],
  },
  {
    id: 'mcq-09',
    question: '“Residual impact” in approvals/offsets language usually means:',
    options: [
      'Impact remaining after reasonable avoidance and minimisation (and mitigation where applicable)',
      'Any weed on site',
      'Impact that only occurs in the wet season',
      'Impact that is automatically insignificant',
    ],
    correctIndex: 0,
    explanation:
      'Residual impact is what is left after the mitigation hierarchy — it drives offset consideration when impacts remain significant.',
    topics: ['offsets', 'approvals'],
  },
  {
    id: 'mcq-10',
    question: 'Assisted natural regeneration (ANR) is most appropriate when:',
    options: [
      'Natural regeneration processes exist but are inhibited by threats such as weeds or grazing',
      'The site has no native seedbank and no recruitment potential',
      'The only goal is aesthetic garden planting',
      'EPBC referral is not required',
    ],
    correctIndex: 0,
    explanation:
      'ANR targets release of natural recovery where processes are present but limited by manageable factors.',
    topics: ['restoration', 'consulting'],
  },
  {
    id: 'mcq-11',
    question: 'Reconstruction is typically indicated when:',
    options: [
      'The site is so degraded that recovery by natural means is not realistic without major intervention',
      'Weeds are present but native recruitment is strong',
      'The client wants the cheapest option',
      'Only aquatic ecology is involved',
    ],
    correctIndex: 0,
    explanation:
      'Reconstruction applies where disturbance and legacy effects prevent recovery without planting, earthworks, or similar.',
    topics: ['restoration'],
  },
  {
    id: 'mcq-12',
    question: 'The Vegetation Management Act 1999 (Qld) is primarily concerned with:',
    options: [
      'Regulating clearing of vegetation and related mapping/categories',
      'Listing migratory birds under EPBC',
      'Marine park zoning',
      'National park naming',
    ],
    correctIndex: 0,
    explanation:
      'VMA is central to clearing regulation and remnant/regulated vegetation concepts in Queensland.',
    topics: ['legislation', 'qld', 'approvals'],
  },
  {
    id: 'mcq-13',
    question: 'A Regional Ecosystem (RE) in Queensland is best described as:',
    options: [
      'A vegetation/ecosystem mapping unit used for vegetation management and ecological assessment',
      'A federal threatened species rank',
      'A type of development approval',
      'A water quality score',
    ],
    correctIndex: 0,
    explanation:
      'RE classifications link vegetation types to land zones and underpin BioCondition benchmarks and clearing context.',
    topics: ['qld', 'gis', 'desktop-review'],
  },
  {
    id: 'mcq-14',
    question: 'The EPBC Act (Environment Protection and Biodiversity Conservation Act) was enacted in:',
    options: ['1999', '2014', '1971', '2006'],
    correctIndex: 0,
    explanation: 'EPBC Act 1999 is the core Commonwealth environmental law for MNES and approvals.',
    topics: ['legislation'],
  },
  {
    id: 'mcq-15',
    question: 'Queensland’s Environmental Offsets Act that establishes the state offsets framework was enacted in:',
    options: ['2014', '1999', '2016', '1992'],
    correctIndex: 0,
    explanation: 'The Environmental Offsets Act 2014 (Qld) is the core statute for prescribed environmental matters and offsets.',
    topics: ['legislation', 'qld', 'offsets'],
  },
  {
    id: 'mcq-16',
    question: 'The Queensland Environmental Offsets Policy (QEOP) is applied under the offsets framework as:',
    options: [
      'The prescribed policy version set out under the Regulation (check current version)',
      'A voluntary blog post',
      'An EPBC-only document',
      'A replacement for the Planning Act 2016',
    ],
    correctIndex: 0,
    explanation:
      'The Regulation prescribes the current policy version — always confirm the in-force version for assessments.',
    topics: ['offsets', 'policy', 'qld'],
  },
  {
    id: 'mcq-17',
    question: 'SPRAT is:',
    options: [
      'The Australian Government species and ecological community profiles database (EPBC-listed matters)',
      'The same tool as PMST',
      'A Queensland clearing code',
      'A social media monitoring tool',
    ],
    correctIndex: 0,
    explanation:
      'SPRAT supports species- and community-specific desktop review and survey scoping after screening.',
    topics: ['threatened-species', 'tool', 'approvals'],
  },
  {
    id: 'mcq-18',
    question: 'For EPBC significance, “presence of a listed species” on desktop:',
    options: [
      'Does not automatically mean a significant impact — significance depends on impact pathways, context, and evidence',
      'Always forces a referral with no further analysis',
      'Is irrelevant to federal law',
      'Is decided only by local council',
    ],
    correctIndex: 0,
    explanation:
      'Significance is assessed with guidelines and evidence; presence alone is not the end of the analysis.',
    topics: ['approvals', 'consulting'],
  },
  {
    id: 'mcq-19',
    question: 'In Queensland offsets thinking, “significant residual impact” is important because it:',
    options: [
      'Helps determine when offset obligations may be triggered for prescribed matters after mitigation',
      'Replaces the need for baseline surveys',
      'Applies only to marine turtles',
      'Is identical to PMST output',
    ],
    correctIndex: 0,
    explanation:
      'The Significant Residual Impact Guideline supports testing whether residual impacts are significant for offset triggers.',
    topics: ['offsets', 'qld', 'policy'],
  },
  {
    id: 'mcq-20',
    question: 'A “conservation outcome” in offsets language generally refers to:',
    options: [
      'The environmental gain/protection the offset is designed to deliver under policy and legal settings',
      'Planting any trees anywhere',
      'Avoiding all future monitoring',
      'Winning a community popularity vote',
    ],
    correctIndex: 0,
    explanation:
      'Offsets are framed around delivering outcomes for impacted matters — secured, managed, and often monitored.',
    topics: ['offsets', 'consulting'],
  },
  {
    id: 'mcq-21',
    question: 'A “matter area” in Queensland habitat/offsets work is best understood as:',
    options: [
      'The spatial area where a prescribed matter is assessed for impact/offset calculations',
      'The entire local government area',
      'Only the project office footprint',
      'Any national park boundary',
    ],
    correctIndex: 0,
    explanation:
      'Matter areas are mapped assessment units tied to the matter being offset or impacted — not the whole region by default.',
    topics: ['offsets', 'qld', 'gis'],
  },
  {
    id: 'mcq-22',
    question: 'On Umwelt’s Nature Positive service material, nature strategy development is explicitly linked to:',
    options: [
      'The ACT-D framework (Assess, Commit, Transform, Disclose)',
      'LEAP only, with no other frameworks',
      'Local council zoning maps only',
      'ISO 9001 quality certification',
    ],
    correctIndex: 0,
    explanation:
      'Umwelt’s published Nature Positive page references ACT-D alongside NbS, SEEA, and TNFD themes.',
    topics: ['nature-positive', 'umwelt'],
  },
  {
    id: 'mcq-23',
    question: '“Nature positive” in corporate/strategic language is often aligned with:',
    options: [
      'Measurable improvement in the state of nature relative to a baseline (e.g. global policy targets)',
      'Removing all development',
      'Planting only exotic species',
      'Avoiding all ecological monitoring',
    ],
    correctIndex: 0,
    explanation:
      'Nature positive is about measurable outcomes and governance — not a vague slogan.',
    topics: ['nature-positive', 'policy'],
  },
  {
    id: 'mcq-24',
    question: 'A sensible desktop review sequence early in a project often includes:',
    options: [
      'Define footprint → screen PMST → refine with SPRAT and state layers → list field verification priorities',
      'Skip PMST and rely only on social media photos',
      'Assume no federal matters if the site is small',
      'Complete all planting before any mapping',
    ],
    correctIndex: 0,
    explanation:
      'Structured desktop workflows reduce surprises and scope field effort proportionately.',
    topics: ['desktop-review', 'approvals'],
  },
  {
    id: 'mcq-25',
    question: '“Field verification priorities” exist because:',
    options: [
      'Desktop layers can be wrong, outdated, or interpreted incorrectly — some uncertainties must be checked on site',
      'Fieldwork is never needed',
      'SPRAT replaces field surveys entirely',
      'MSES maps are always 100% accurate at parcel scale',
    ],
    correctIndex: 0,
    explanation:
      'Good consulting explicitly names what must be verified on the ground and why it affects decisions.',
    topics: ['desktop-review', 'consulting'],
  },
  {
    id: 'mcq-26',
    question: 'Adaptive management in restoration/offset monitoring means:',
    options: [
      'Monitoring against indicators and adjusting management when outcomes deviate from targets',
      'Changing methods randomly with no records',
      'Avoiding monitoring to save money',
      'Only using one survey season ever',
    ],
    correctIndex: 0,
    explanation:
      'Adaptive management is structured learning: triggers, responses, and documented decisions.',
    topics: ['monitoring', 'restoration'],
  },
  {
    id: 'mcq-27',
    question: 'A “reference ecosystem” in restoration planning is used to:',
    options: [
      'Set realistic composition/structure/function targets based on least-disturbed analogues and/or historic information',
      'Copy a garden catalogue',
      'Guarantee identical species lists without survey',
      'Replace legal approvals',
    ],
    correctIndex: 0,
    explanation:
      'Reference ecosystems anchor targets, indicators, and completion criteria.',
    topics: ['restoration', 'monitoring'],
  },
  {
    id: 'mcq-28',
    question: 'Large-scale weed removal without addressing ongoing degradation (e.g. grazing) may:',
    options: [
      'Fail to achieve recovery or cause unintended ecological risks — sequencing matters',
      'Always be the best first step in every ecosystem',
      'Eliminate the need for monitoring',
      'Guarantee instant canopy closure',
    ],
    correctIndex: 0,
    explanation:
      'Threat abatement and addressing drivers of degradation are often sequenced before or alongside weed work.',
    topics: ['restoration', 'consulting'],
  },
  {
    id: 'mcq-29',
    question: 'A formal Environmental Impact Statement (EIS) process in Queensland is most commonly associated with:',
    options: [
      'Declared coordinated / major-project pathways (e.g. State Development and Public Works Organisation Act framework)',
      'Every backyard shed application',
      'Automatic EPBC approval without assessment',
      'Local dog registration',
    ],
    correctIndex: 0,
    explanation:
      'Large coordinated projects can trigger EIS processes; ordinary DA work typically follows different assessment tracks.',
    topics: ['approvals', 'qld'],
  },
  {
    id: 'mcq-30',
    question: 'Under the Australian Government’s EPBC Act environmental offsets policy, offsets are generally considered:',
    options: [
      'For residual significant impacts after avoidance and mitigation — not a substitute for them',
      'The first and preferred response before avoidance',
      'Optional for all MNES impacts',
      'Managed only by local councils',
    ],
    correctIndex: 0,
    explanation:
      'Offsets sit within the mitigation hierarchy after avoidance/mitigation; policy is explicit about sequencing.',
    topics: ['offsets', 'approvals', 'policy'],
  },
]

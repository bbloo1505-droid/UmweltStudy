import type { LibraryEntry } from '../lib/types'

export const libraryEntries: LibraryEntry[] = [
  {
    id: 'epbc-act',
    name: 'Environment Protection and Biodiversity Conservation Act 1999 (EPBC Act)',
    jurisdiction: 'Commonwealth',
    year: '1999',
    whatItIs: "Australia’s primary national environmental law protecting matters of national environmental significance (MNES) and regulating actions likely to have a significant impact.",
    usedFor:
      'Determining whether a project needs referral and assessment/approval; setting conditions; guiding surveys and significance assessments.',
    interviewMention:
      'Use it to explain your referral thinking: “I’d use PMST/SPRAT, then assess significance against guidelines and decide whether a referral is likely required.”',
    trigger:
      'When an action may significantly impact MNES (e.g., threatened species/communities, Ramsar wetlands, heritage, migratory species) or affects Commonwealth land/agency actions.',
    typicalOutputs: ['PMST report summary', 'EPBC self-assessment memo', 'Referral support appendix / impact assessment sections'],
    related: ['MNES', 'PMST', 'SPRAT', 'Significant Impact Guidelines'],
    officialLink: 'https://www.dcceew.gov.au/environment/epbc/our-role/what-is-protected',
    sources: ['dcceew-epbc-protected', 'dcceew-epbc-publications', 'dcceew-epbc-self-assess'],
    topics: ['approvals', 'legislation', 'threatened-species', 'policy'],
  },
  {
    id: 'pmst-tool',
    name: 'Protected Matters Search Tool (PMST)',
    jurisdiction: 'Tool/Database',
    year: 'Ongoing',
    whatItIs: 'A free mapping and reporting tool to identify EPBC protected matters in/around a project area.',
    usedFor: 'Early risk screening; documenting potential MNES presence; supporting survey scoping and referral self-assessment.',
    interviewMention:
      'A crisp line: “PMST is a screening tool; I treat results as indicative, then validate via SPRAT, state datasets and field verification.”',
    trigger: 'Used at the start of desktop review and before pre-referral/referral decisions.',
    typicalOutputs: ['PMST PDF report', 'Desktop review constraints map', 'Table of potential MNES with evidence and gaps'],
    related: ['SPRAT', 'EPBC referral', 'Self-assessment'],
    officialLink: 'https://www.dcceew.gov.au/environment/epbc/protected-matters-search-tool',
    sources: ['dcceew-pmst', 'pmst-map'],
    topics: ['approvals', 'desktop-review', 'threatened-species', 'tool'],
  },
  {
    id: 'sprat-db',
    name: 'SPRAT (Species Profile and Threats Database)',
    jurisdiction: 'Tool/Database',
    year: 'Ongoing',
    whatItIs: 'Australian Government database of EPBC-listed species and ecological communities.',
    usedFor:
      'Confirm listing status; understand habitat, threats and conservation advice; support likelihood of occurrence and survey rationale.',
    interviewMention:
      'Mention it as your “evidence bridge” from PMST outputs to field verification: “SPRAT helps confirm habitat associations and key threats.”',
    trigger: 'When PMST or other datasets suggest EPBC-listed matters may be present or relevant.',
    typicalOutputs: ['Likelihood of occurrence table', 'Survey rationale and timing', 'Threats/management context section'],
    related: ['PMST', 'Threatened species', 'Conservation advice'],
    officialLink: 'https://www.environment.gov.au/cgi-bin/sprat/public/sprat.pl',
    sources: ['sprat', 'dcceew-epbc-publications'],
    topics: ['approvals', 'desktop-review', 'threatened-species', 'tool'],
    needsVerification: true,
  },
  {
    id: 'qld-offsets-act',
    name: 'Environmental Offsets Act 2014 (Qld)',
    jurisdiction: 'Queensland',
    year: '2014',
    whatItIs:
      'Queensland legislation establishing the offsets framework to counterbalance significant residual impacts on prescribed environmental matters.',
    usedFor:
      'Determining whether offset conditions may be imposed; setting principles for offset delivery and achieving conservation outcomes.',
    interviewMention:
      'Use it to show you know the QLD context: “Offsets in QLD only apply to significant residual impacts on prescribed environmental matters, within the Act’s framework.”',
    trigger:
      'When a project has significant residual impacts on prescribed environmental matters under Queensland law and an offset condition may be applied under an authority.',
    typicalOutputs: ['Offset strategy / options analysis', 'Offset delivery plan (where required)', 'Offsets register documentation support'],
    related: ['Environmental Offsets Regulation 2014', 'Queensland Environmental Offsets Policy', 'Significant residual impact'],
    officialLink: 'https://www.legislation.qld.gov.au/view/pdf/current/act-2014-033',
    sources: ['qld-offsets-act-pdf'],
    topics: ['offsets', 'qld', 'legislation', 'policy'],
  },
  {
    id: 'qld-offsets-reg',
    name: 'Environmental Offsets Regulation 2014 (Qld)',
    jurisdiction: 'Queensland',
    year: '2014',
    whatItIs:
      'Queensland subordinate legislation supporting the Environmental Offsets Act 2014 by prescribing activities, matters, and policy references.',
    usedFor:
      'Interpreting prescribed activities/matters; understanding policy versions prescribed as offsets policy and administrative requirements (e.g., offset delivery plans).',
    interviewMention:
      'A useful detail: the Regulation prescribes the “Queensland Environmental Offsets Policy” version (current in regulation text) — show you understand the hierarchy.',
    trigger: 'When you need regulatory detail beyond the Act: prescribed matters, policy version, or process requirements.',
    typicalOutputs: ['Regulatory basis notes in an offsets memo', 'Offset delivery plan requirements checklist'],
    related: ['Environmental Offsets Act 2014', 'Queensland Environmental Offsets Policy'],
    officialLink: 'https://www.legislation.qld.gov.au/view/pdf/inforce/current/sl-2014-0145',
    sources: ['qld-offsets-reg-pdf'],
    topics: ['offsets', 'qld', 'legislation', 'policy'],
  },
  {
    id: 'qld-offsets-policy',
    name: 'Queensland Environmental Offsets Policy (v1.17 current; v1.16 superseded)',
    jurisdiction: 'Queensland',
    year: '2014–current (versioned)',
    whatItIs:
      'A whole-of-government decision-support policy for assessing offset proposals to satisfy offset conditions under the QLD offsets framework.',
    usedFor:
      'Assessing and designing offsets; supporting consistent decision-making across administering agencies; describing delivery options and calculation methods (incl. financial settlement methodologies in appendices).',
    interviewMention:
      'Mention versioning: “I’d check the current policy version and note if earlier documents were used in previous assessments.”',
    trigger:
      'When an offset condition exists or may be imposed, and you need to assess whether proposed offsets meet requirements.',
    typicalOutputs: ['Offset suitability analysis', 'Financial settlement calculation support', 'Offsets proposal assessment tables'],
    related: ['Environmental Offsets Act 2014', 'Environmental Offsets Regulation 2014'],
    officialLink: 'https://www.qld.gov.au/environment/management/environmental/offsets/legislation',
    sources: ['qld-offsets-legislation-page', 'qld-offsets-overview'],
    topics: ['offsets', 'qld', 'policy'],
  },
  {
    id: 'qld-mses-mapping-method',
    name: 'Method for mapping Matters of State Environmental Significance (MSES)',
    jurisdiction: 'Queensland',
    year: 'Ongoing (updated datasets)',
    whatItIs:
      'An official Queensland method describing data layers and processes used to produce indicative MSES mapping products used in planning and related contexts.',
    usedFor:
      'Understanding what MSES mapping represents; knowing its limitations; identifying datasets, update cadence, and how to view/download layers (SPP IMS, QGlobe, QSpatial).',
    interviewMention:
      'It shows you understand mapping nuance: “MSES mapping supports planning; it’s not automatically a trigger — you cross-check with the right assessment mapping system and local schemes.”',
    trigger: 'Used during desktop review and constraints analysis in Queensland projects.',
    typicalOutputs: ['Constraints map with MSES layers', 'Mapping methodology caveats section', 'Data provenance notes'],
    related: ['State Planning Policy mapping', 'QSpatial', 'Queensland Globe'],
    officialLink: 'https://environment.qld.gov.au/management/planning-guidelines/method-mapping-mses',
    sources: ['qld-mses-method'],
    topics: ['qld', 'gis', 'desktop-review', 'policy'],
  },
  {
    id: 'umwelt-restoration-monitoring',
    name: 'Umwelt ecology: restoration, monitoring, LiDAR / remote sensing / drones',
    jurisdiction: 'Industry/Umwelt',
    year: 'Current (web)',
    whatItIs:
      'Umwelt’s published description of their ecology and biodiversity capabilities, including restoration planning, monitoring, constraints analysis, offsets, and renewable energy ecology.',
    usedFor:
      'Tailoring your interview language to their services: show you understand their delivery (field-to-office, mapping, monitoring, approvals).',
    interviewMention:
      'Use it for “why Umwelt” and “how you’ll add value” as a junior: “I’m comfortable moving between field data and defensible desktop analysis, and I’m keen to build skills in constraints mapping and offsets work.”',
    trigger: 'Used for interview prep and aligning with Umwelt service language and priorities.',
    typicalOutputs: ['Interview “Why Umwelt” notes', 'Service-aligned talking points', 'Skills gap plan'],
    related: ['Offsets', 'Constraints analysis', 'Monitoring', 'Renewable energy ecology'],
    officialLink: 'https://www.umwelt.com.au/services/ecology-and-biodiversity/',
    sources: ['umwelt-ecology-biodiversity'],
    topics: ['umwelt', 'consulting', 'restoration', 'offsets', 'gis', 'monitoring'],
  },
  {
    id: 'umwelt-nature-positive-entry',
    name: 'Umwelt Nature Positive: ACT-D, IUCN NbS standard, NCA, TNFD',
    jurisdiction: 'Industry/Umwelt',
    year: 'Current (web)',
    whatItIs:
      'Umwelt’s Nature Positive services page describing their approach to nature strategy, nature-based solutions (IUCN standard), natural capital accounting (UN SEEA), restoration planning, and nature-related disclosures (TNFD).',
    usedFor:
      'Connecting restoration/offsets work to broader client strategies, targets, and disclosure drivers; using correct named frameworks in conversation.',
    interviewMention:
      'It’s a strong “company research” move: cite ACT-D and TNFD accurately and link them to the value of robust baseline data, monitoring, and defensible recommendations.',
    trigger: 'Interview preparation; projects involving nature strategy, reporting, or integrated ESG/nature outcomes.',
    typicalOutputs: ['Nature strategy workshop outputs', 'NbS options analysis', 'NCA summary and metrics', 'Disclosure-ready indicators'],
    related: ['Nature Positive', 'ACT-D', 'TNFD', 'Natural capital accounting'],
    officialLink: 'https://www.umwelt.com.au/services/nature-positive/',
    sources: ['umwelt-nature-positive'],
    topics: ['umwelt', 'nature-positive', 'consulting', 'restoration'],
  },
]


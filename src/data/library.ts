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
    officialLink: 'https://www.legislation.gov.au/Series/C2004A00485',
    sources: ['fed-leg-epbc-act', 'dcceew-epbc-protected', 'dcceew-epbc-publications', 'dcceew-epbc-self-assess'],
    topics: ['approvals', 'legislation', 'threatened-species', 'policy'],
  },
  {
    id: 'sig-impact-1-1',
    name: 'Significant Impact Guidelines 1.1 – Matters of National Environmental Significance',
    jurisdiction: 'Commonwealth',
    year: '2013 (page updated 2021)',
    whatItIs:
      'Primary Commonwealth guidance for self-assessing whether an action is likely to have a significant impact on MNES under the EPBC Act.',
    usedFor: 'Significance testing, referral advice, and impact rationale once MNES are flagged via PMST/desktop review.',
    interviewMention:
      'A crisp line: “I’d use Significant Impact Guidelines 1.1 to test whether our likely impacts cross the federal significance threshold before recommending a referral position.”',
    trigger: 'After PMST/desktop screening suggests MNES may be present or potentially impacted.',
    typicalOutputs: ['Significant impact assessment memo', 'Referral justification narrative', 'Avoidance/minimisation advice'],
    related: ['EPBC Act', 'PMST', 'MNES', 'Significant impact'],
    officialLink:
      'https://www.dcceew.gov.au/environment/epbc/publications/significant-impact-guidelines-11-matters-national-environmental-significance',
    sources: ['dcceew-sig-impact-1-1', 'dcceew-sig-impact-1-1-pdf'],
    topics: ['approvals', 'legislation', 'policy', 'consulting'],
  },
  {
    id: 'epbc-offsets-policy-2012',
    name: 'EPBC Act Environmental Offsets Policy (2012)',
    jurisdiction: 'Commonwealth',
    year: '2012',
    whatItIs:
      'Commonwealth policy guiding the use of offsets under the EPBC Act: offsets compensate for residual impacts after avoidance and mitigation.',
    usedFor: 'Designing and testing federal offset proposals during EPBC assessments where residual significant impacts remain.',
    interviewMention:
      'It signals you understand the mitigation hierarchy: offsets come after avoidance and mitigation, not before.',
    trigger: 'Where residual significant impacts on protected matters remain after avoidance and mitigation measures.',
    typicalOutputs: ['Federal offset strategy', 'Offset proposal summary', 'Offsets assessment guide inputs'],
    related: ['Mitigation hierarchy', 'Residual impact', 'EPBC assessment'],
    officialLink: 'https://www.dcceew.gov.au/environment/epbc/publications/epbc-act-environmental-offsets-policy',
    sources: ['dcceew-epbc-offsets-policy-2012'],
    topics: ['offsets', 'approvals', 'policy', 'legislation'],
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
    id: 'qld-sri-guideline',
    name: 'Significant Residual Impact Guideline (Queensland Environmental Offsets Policy)',
    jurisdiction: 'Queensland',
    year: '2014',
    whatItIs:
      'A Queensland guideline to help determine whether an impact on a prescribed environmental matter is a significant residual impact (the threshold question before offsets).',
    usedFor:
      'Assessing whether residual impacts are “significant” (after avoidance and mitigation) for matters of State environmental significance under relevant Queensland legislation.',
    interviewMention:
      'Use it to show you understand the threshold question: “Before designing offsets, I’d assess whether the residual impact is significant using the SRI guideline.”',
    trigger:
      'After avoidance and mitigation, when residual impacts remain on prescribed matters and you need to determine if an offset condition may apply.',
    typicalOutputs: ['SRI assessment table', 'Impact significance memo', 'Approvals strategy advice note'],
    related: ['Environmental Offsets Act 2014', 'Queensland Environmental Offsets Policy'],
    officialLink: 'https://environment.des.qld.gov.au/__data/assets/pdf_file/0017/90404/significant-residual-impact-guide.pdf',
    sources: ['qld-sri-guideline-2014', 'qld-offsets-resources'],
    topics: ['offsets', 'qld', 'policy', 'approvals'],
  },
  {
    id: 'qld-terrestrial-hqa-guide',
    name: 'Guide to determining terrestrial habitat quality (QEOP) – v1.3 (Feb 2020)',
    jurisdiction: 'Queensland',
    year: '2020',
    whatItIs:
      'Queensland’s practical guide for terrestrial habitat quality assessment under the Queensland Environmental Offsets Policy, based on BioCondition methods and benchmarks.',
    usedFor:
      'Assessing offset site suitability relative to impact site; determining offset size/scale; baseline assessments for advanced offsets; and monitoring progress toward conservation outcomes.',
    interviewMention:
      'If asked “HQA in QLD”, this is the clean method name to reference — and you can link it to BioCondition and consistent repeatable scoring.',
    trigger:
      'Land-based offset assessment and monitoring where habitat quality scoring is required under the Queensland offsets framework.',
    typicalOutputs: ['Habitat quality score sheets', 'Offset delivery plan calculations', 'Monitoring report habitat quality results'],
    related: ['BioCondition', 'Queensland Environmental Offsets Policy', 'Offsets suitability'],
    officialLink: 'https://environment.des.qld.gov.au/__data/assets/pdf_file/0017/102833/habitat-quality-assessment-guide-v1-3.pdf',
    sources: ['qld-terrestrial-habitat-quality-guide', 'qld-biocondition-page', 'qld-offsets-resources'],
    topics: ['offsets', 'monitoring', 'qld', 'policy'],
  },
  {
    id: 'qld-planning-act',
    name: 'Planning Act 2016 (Qld)',
    jurisdiction: 'Queensland',
    year: '2016',
    whatItIs:
      'Queensland’s core planning system legislation for land-use planning and development assessment to facilitate ecological sustainability.',
    usedFor:
      'Understanding how biodiversity issues enter the planning system; interpreting where state interests, regional plans and local planning instruments influence assessment.',
    interviewMention:
      'A simple line: “Ecology advice often sits inside planning pathways, not just ecology-only approvals.”',
    trigger: 'Development applications; planning scheme interpretation; early constraints reviews involving planning instruments.',
    typicalOutputs: ['Planning due diligence', 'Trigger tables (state/local)', 'Planning ecology advice notes'],
    related: ['State Planning Policy', 'Local planning scheme overlays', 'MSES mapping method'],
    officialLink: 'https://www.legislation.qld.gov.au/view/html/inforce/current/act-2016-025',
    sources: ['qld-planning-act-2016'],
    topics: ['qld', 'policy', 'approvals', 'desktop-review'],
  },
  {
    id: 'qld-vma',
    name: 'Vegetation Management Act 1999 (Qld)',
    jurisdiction: 'Queensland',
    year: '1999',
    whatItIs:
      'Queensland legislation regulating vegetation clearing to maintain ecological processes and prevent biodiversity loss.',
    usedFor: 'Clearing constraints, regulated vegetation interpretation, and desktop review for projects involving clearing.',
    interviewMention:
      'It shows you understand the clearing side of ecology work (REs/regrowth/remnant constraints) that often drives project design and approvals.',
    trigger: 'Projects involving vegetation clearing or regulated vegetation constraints.',
    typicalOutputs: ['Clearing constraints memo', 'Regulated vegetation mapping review', 'Vegetation impact assessment sections'],
    related: ['Regional ecosystems (RE mapping)', 'Offsets framework (where residual impacts are significant)'],
    officialLink: 'https://www.legislation.qld.gov.au/view/html/inforce/current/act-1999-090',
    sources: ['qld-vma-1999'],
    topics: ['qld', 'legislation', 'approvals', 'desktop-review'],
  },
  {
    id: 'qld-nca',
    name: 'Nature Conservation Act 1992 (Qld)',
    jurisdiction: 'Queensland',
    year: '1992',
    whatItIs: 'Queensland’s core conservation law underpinning protected areas and protection of native wildlife and habitat.',
    usedFor: 'Protected area context, protected plants/animals, permits, and state species status checks.',
    interviewMention:
      'It shows you know state-listed biodiversity matters don’t sit only under planning/offsets — there’s broader species and protected area context too.',
    trigger: 'Threatened flora/fauna; protected areas; permit pathways; state-listed species status checks.',
    typicalOutputs: ['Species status summary', 'Protected area constraints notes', 'Permit pathway summary'],
    related: ['MSES mapping', 'Offsets framework (MSES matters)', 'Planning constraints'],
    officialLink: 'https://www.legislation.qld.gov.au/view/html/inforce/current/act-1992-020',
    sources: ['qld-nca-1992'],
    topics: ['qld', 'legislation', 'approvals'],
  },
  {
    id: 'qld-ep-act',
    name: 'Environmental Protection Act 1994 (Qld)',
    jurisdiction: 'Queensland',
    year: '1994',
    whatItIs:
      'Queensland’s key environmental protection legislation; supports environmental authorities (EAs) and regulation of environmentally relevant activities (ERAs).',
    usedFor: 'Understanding EA pathways and how ecology advice feeds into broader environmental approvals and conditions.',
    interviewMention:
      'Useful for resources/industrial contexts: it shows you understand ecology integrates into wider approvals packages (not just ecology-only reports).',
    trigger: 'Mining, industrial or other ERA-related projects; environmental authority processes.',
    typicalOutputs: ['EA supporting ecology sections', 'Impact/mitigation content', 'Monitoring requirements support'],
    related: ['Offsets framework (where MSES impacts are significant)', 'EIS pathways (where relevant)'],
    officialLink: 'https://www.legislation.qld.gov.au/view/html/inforce/current/act-1994-062',
    sources: ['qld-ep-act-1994'],
    topics: ['qld', 'legislation', 'approvals'],
  },
  {
    id: 'qld-sdpwo',
    name: 'State Development and Public Works Organisation Act 1971 (Qld)',
    jurisdiction: 'Queensland',
    year: '1971',
    whatItIs:
      'Queensland’s major-projects / Coordinator-General pathway used for coordinated projects and Environmental Impact Statements (EIS).',
    usedFor: 'Understanding big-project assessment framework where projects are declared coordinated and require an EIS process.',
    interviewMention:
      'Good to recognise for infrastructure/energy/resources: “If a project is a coordinated project, ecology inputs often sit within EIS chapters and the CG evaluation process.”',
    trigger: 'Declared coordinated projects with formal EIS requirements.',
    typicalOutputs: ['EIS ecology chapters', 'Impact assessment appendices', 'Response-to-submissions support'],
    related: ['EPBC Act (MNES)', 'Queensland approvals pathways'],
    officialLink: 'https://www.legislation.qld.gov.au/view/html/inforce/current/act-1971-055',
    sources: ['qld-sdpwo-act-1971'],
    topics: ['qld', 'approvals', 'legislation'],
  },
  {
    id: 'local-planning-schemes',
    name: 'Local planning schemes and biodiversity overlays (council-specific)',
    jurisdiction: 'Queensland',
    year: 'Varies by council',
    whatItIs:
      'Local planning instruments that can contain biodiversity overlays, local environmental significance layers, waterways/wetlands/bushfire overlays and other constraints.',
    usedFor: 'Checking local triggers and constraints during desktop review and early project planning.',
    interviewMention:
      'A strong nuance: MSES mapping supports planning but local triggers sit in the local planning scheme.',
    trigger: 'Any project subject to local development assessment in Queensland.',
    typicalOutputs: ['Local overlay constraints review', 'Local trigger summary table', 'Map pack for PM/client'],
    related: ['State Planning Policy', 'MSES mapping method', 'Desktop review workflow'],
    officialLink: 'https://environment.qld.gov.au/management/planning-guidelines/method-mapping-mses',
    sources: ['qld-mses-method'],
    topics: ['qld', 'desktop-review', 'approvals', 'policy'],
    needsVerification: true,
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


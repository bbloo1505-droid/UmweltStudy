import type { GlossaryCard } from '../lib/types'

export const glossaryCards: GlossaryCard[] = [
  {
    id: 'ecological-restoration-ser',
    term: 'Ecological restoration',
    plainEnglish:
      'Helping an ecosystem recover after it’s been degraded, damaged or destroyed — so it can function again over time.',
    consultantDefinition:
      'The process of assisting the recovery of an ecosystem that has been degraded, damaged or destroyed; effective restoration focuses on returning structure and function so that natural processes become increasingly self‑sustaining and maintenance needs reduce over time.',
    whyItMatters:
      'This is the foundation term for the role. Interviewers listen for structure + function + trajectory language (not just “weeding” or “planting”).',
    exampleInPractice:
      'A riparian corridor is restored by removing key weeds, protecting recruits, stabilising banks, and setting monitoring criteria so the site can move toward a self‑sustaining state.',
    related: ['Structure', 'Function', 'Succession', 'Monitoring', 'Follow-up'],
    difficulty: 'easy',
    topics: ['restoration', 'monitoring', 'consulting'],
    sources: ['seq-restoration-framework-manual-2012', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'structure-and-function',
    term: 'Structure vs function (restoration)',
    plainEnglish:
      'Structure is what the ecosystem looks like (layers, cover, habitat features). Function is what it does (regeneration, nutrient cycling, self-sustaining processes).',
    consultantDefinition:
      'Structure includes vegetation height/density, canopy cover, appropriate species assemblages, and habitat features (e.g. fallen logs). Function refers to natural and self‑sustaining processes such as regeneration capacity, succession and nutrient cycling. Restoration aims to recover both.',
    whyItMatters:
      'It’s an easy way to sound technically grounded when explaining why a “clean-looking” site may still be ecologically weak.',
    exampleInPractice:
      'A site can have low weed cover (structure looks better) but still fail to recruit natives (function) unless limiting factors are addressed.',
    related: ['Ecological restoration', 'Regeneration capacity', 'Succession'],
    difficulty: 'medium',
    topics: ['restoration', 'monitoring'],
    sources: ['seq-restoration-framework-manual-2012'],
  },
  {
    id: 'restoration-vs-rehabilitation-seq',
    term: 'Restoration vs rehabilitation (SEQ Framework)',
    plainEnglish:
      'Restoration aims to recover the original vegetation community. Rehabilitation improves structure and function but may not recreate the original community.',
    consultantDefinition:
      'Restoration requires the re‑establishing plant community to be similar to the original vegetation in structure, function and composition. Rehabilitation creates structure and function without reinstating the original vegetation community; it aims for a naturally occurring community of the same type under changed conditions.',
    whyItMatters:
      'This precision is interview gold. It shows you won’t over-promise “restoration” when the correct goal is rehabilitation under irreversible site change.',
    exampleInPractice:
      'If hydrology is irreversibly altered, you may rehabilitate to a different but locally appropriate community (type conversion) rather than claim full restoration.',
    related: ['Fabrication (type conversion)', 'Reconstruction', 'Assisted natural regeneration'],
    difficulty: 'medium',
    topics: ['restoration', 'consulting'],
    sources: ['seq-restoration-framework-manual-2012', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'regeneration-capacity',
    term: 'Regeneration capacity (resilience)',
    plainEnglish:
      'How able a site is to recover naturally — whether native vegetation can re-establish without heavy intervention.',
    consultantDefinition:
      'A measure of the natural capacity for re‑establishment of vegetation on a site (commonly referred to as resilience). Regeneration capacity influences whether natural regeneration/assisted regeneration is viable, and how much planting or reconstruction is needed.',
    whyItMatters:
      'Your workbook explicitly flags this as a key decision driver. It’s also how you justify ANR vs reconstruction in offsets/restoration planning.',
    exampleInPractice:
      'If seedbank and nearby propagule sources exist and limiting factors are weeds/grazing, you can often trigger recovery with targeted interventions (ANR).',
    related: ['Assisted natural regeneration', 'Disturbance', 'Succession'],
    difficulty: 'hard',
    topics: ['restoration', 'monitoring', 'consulting'],
    sources: ['seq-restoration-framework-manual-2012', 'umwelt-interview-study-notes', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'natural-regeneration',
    term: 'Natural regeneration',
    plainEnglish:
      'Letting a healthy native area recover mostly on its own, with minimal intervention to stop ongoing damage.',
    consultantDefinition:
      'An approach suited to relatively intact, weed‑free native vegetation where native plants are healthy and able to regenerate without human intervention; preventative actions (e.g. fencing to stop cattle) may be sufficient, and planting can sometimes interfere with recovery.',
    whyItMatters:
      'It shows you understand that planting isn’t always the best or “most restoration-y” option.',
    exampleInPractice:
      'A large intact patch with good native recruitment may only need exclusion fencing and hygiene controls.',
    related: ['Assisted natural regeneration', 'Regeneration capacity'],
    difficulty: 'medium',
    topics: ['restoration'],
    sources: ['seq-restoration-framework-manual-2012'],
  },
  {
    id: 'assisted-natural-regeneration',
    term: 'Assisted natural regeneration (ANR)',
    plainEnglish:
      'Helping a site recover naturally by removing what’s blocking regeneration (usually weeds, grazing, compaction).',
    consultantDefinition:
      'An approach used where natural regeneration processes (seedling germination, root suckering, etc.) are being inhibited by external factors such as weed invasion, soil compaction, grazing or slashing. Limited intervention can trigger recovery; planting may be counterproductive except where key species cannot return without assistance.',
    whyItMatters:
      'This is a common offsets/restoration pathway decision. Interviewers love candidates who can justify ANR with evidence and define when it won’t work.',
    exampleInPractice:
      'A site with native seedbank and nearby remnant sources but heavy lantana may recover after staged weed control + exclusion fencing, with targeted infill for missing species.',
    related: ['Regeneration capacity', 'Reconstruction', 'Weeds as habitat'],
    difficulty: 'easy',
    topics: ['restoration', 'offsets', 'monitoring'],
    sources: ['seq-restoration-framework-manual-2012', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'reconstruction',
    term: 'Reconstruction',
    plainEnglish:
      'Rebuilding an ecosystem when it’s too degraded to recover naturally — usually requiring planting/seeding and bigger site works.',
    consultantDefinition:
      'A restoration approach for highly degraded or altered sites where disturbance has been so great/long‑standing that the original community cannot recover by natural means; requires a greater degree of intervention (e.g. soil amelioration, reshaping, drainage works) and importation of native species via planting or direct seeding.',
    whyItMatters:
      'This is the “when ANR isn’t enough” pathway. Knowing the trigger conditions helps you sound realistic and defensible.',
    exampleInPractice:
      'Fill and stormwater impacts mean natural recruitment is insufficient, so you stabilise, re-shape microtopography, and plant pioneers to restart processes.',
    related: ['Assisted natural regeneration', 'Fabrication (type conversion)', 'Site assessment'],
    difficulty: 'medium',
    topics: ['restoration', 'consulting'],
    sources: ['seq-restoration-framework-manual-2012'],
  },
  {
    id: 'fabrication-type-conversion',
    term: 'Fabrication (type conversion)',
    plainEnglish:
      'Creating a different but appropriate ecosystem type because the original conditions are permanently changed.',
    consultantDefinition:
      'A rehabilitation approach used where site conditions have been irreversibly changed and it is not possible to restore the original vegetation community; instead, a better-adapted local plant community is established that can function under the changed conditions (e.g. constructed wetland for stormwater mitigation).',
    whyItMatters:
      'This gives you confident language when the honest answer is “full restoration isn’t possible here”.',
    exampleInPractice:
      'Urban stormwater changes hydrology; you design a constructed wetland community that functions within those conditions instead of claiming pre-disturbance restoration.',
    related: ['Rehabilitation', 'Reference ecosystem', 'Success criteria'],
    difficulty: 'hard',
    topics: ['restoration', 'consulting', 'policy'],
    sources: ['seq-restoration-framework-manual-2012', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'residual-impact',
    term: 'Residual impact',
    plainEnglish:
      'The impacts that remain after you’ve avoided and minimised what you reasonably can. It’s what’s left over.',
    consultantDefinition:
      'The remaining direct/indirect consequences of an action after application of the mitigation hierarchy (avoid, minimise, rehabilitate/restore where applicable), forming the basis for determining whether significant residual impacts require offsets.',
    whyItMatters:
      'Offsets and approval decisions are driven by what’s left after avoidance and minimisation. In consulting, you’re expected to explain residual impact clearly, defensibly, and with evidence.',
    exampleInPractice:
      'A wind farm layout is shifted to avoid a mapped wetland and reduce clearing, but 12 ha of regulated vegetation still needs clearing. That 12 ha is the residual impact that may trigger offset requirements.',
    related: ['Mitigation hierarchy', 'Significant residual impact', 'Offsets'],
    difficulty: 'medium',
    topics: ['offsets', 'approvals', 'policy'],
    sources: ['qld-offsets-act-pdf', 'qld-offsets-legislation-page'],
  },
  {
    id: 'mitigation-hierarchy',
    term: 'Mitigation hierarchy',
    plainEnglish: 'A structured way to deal with impacts: avoid first, then minimise, then repair, then offset.',
    consultantDefinition:
      'A decision logic used in impact assessment and approvals: prioritise avoidance, then minimisation, then rehabilitation/restoration where relevant, and only then consider offsets for significant residual impacts.',
    whyItMatters:
      'It’s a core “consultant thinking style” anchor. Interviewers expect you to use this language when discussing design changes, approvals, offsets, and constraints.',
    exampleInPractice:
      'During constraints analysis you identify a potential threatened species habitat patch. You propose a micro-siting change (avoid), reduce edge effects (minimise), implement rehabilitation of temporary impacts (repair), and quantify any remaining offset obligation (offset).',
    related: ['Residual impact', 'Constraints analysis', 'Offsets'],
    difficulty: 'easy',
    topics: ['offsets', 'approvals', 'desktop-review', 'consulting'],
    sources: ['dcceew-epbc-self-assess', 'qld-offsets-overview'],
  },
  {
    id: 'mnes',
    term: 'MNES',
    plainEnglish: 'Matters of National Environmental Significance protected under Australia’s national environment law.',
    consultantDefinition:
      'The nine categories of protected matters under the EPBC Act that may trigger referral/assessment/approval when an action is likely to have a significant impact.',
    whyItMatters:
      'A junior ecologist needs to recognise when MNES might be present and what that means for referrals, surveys, and reporting.',
    exampleInPractice:
      'You run PMST for a solar farm footprint and identify threatened ecological community habitat and a migratory species matter within the search area. You flag potential MNES and recommend a self-assessment and possible referral pathway.',
    related: ['EPBC Act', 'PMST', 'Significant impact'],
    difficulty: 'easy',
    topics: ['approvals', 'threatened-species', 'policy', 'legislation'],
    sources: ['dcceew-epbc-protected', 'dcceew-pmst'],
  },
  {
    id: 'mses',
    term: 'MSES',
    plainEnglish: 'Matters of State Environmental Significance in Queensland mapping and planning context.',
    consultantDefinition:
      'Queensland state-significant environmental values used across planning system products and the offsets framework; mapping products are indicative and require careful interpretation against the relevant trigger system.',
    whyItMatters:
      'In QLD consulting, you’ll routinely interpret MSES mapping alongside local overlays and offsets triggers to form an early constraints view.',
    exampleInPractice:
      'You generate an environmental report for the project site and see MSES layers for important wetlands and regulated vegetation. You capture that as a constraint and list field verification priorities.',
    related: ['MSES mapping method', 'Constraints analysis', 'Offsets'],
    difficulty: 'medium',
    topics: ['qld', 'desktop-review', 'offsets', 'gis'],
    sources: ['qld-mses-method'],
  },
  {
    id: 'pmst',
    term: 'PMST',
    plainEnglish:
      'Protected Matters Search Tool — a free Australian Government map/report tool to check what EPBC-protected matters may be near a site.',
    consultantDefinition:
      'A DCCEEW tool used early in project planning and EPBC self-assessment to identify potential EPBC protected matters and to generate a report that informs survey scoping and referral thinking.',
    whyItMatters:
      'PMST is standard practice in desktop reviews. Being able to describe what it does (and its limits) signals you understand approvals workflows.',
    exampleInPractice:
      'You draw the project footprint and a buffer in PMST, export a PDF report, then use it to identify likely MNES to investigate further via SPRAT, guidelines, and targeted surveys.',
    related: ['SPRAT', 'MNES', 'EPBC referral', 'Desktop review'],
    difficulty: 'easy',
    topics: ['approvals', 'desktop-review', 'threatened-species'],
    sources: ['dcceew-pmst', 'pmst-map'],
  },
  {
    id: 'sprat-term',
    term: 'SPRAT',
    plainEnglish:
      'Species Profile and Threats Database — an Australian Government database of EPBC-listed species and ecological communities.',
    consultantDefinition:
      'A reference database used to confirm listing status, habitat associations, threats, and conservation advice for EPBC-listed species and ecological communities when interpreting desktop results and scoping surveys.',
    whyItMatters:
      'Interviewers will expect you to know how to go from “PMST suggests species X” to “here’s what we know and what we need to verify.” SPRAT is central to that.',
    exampleInPractice:
      'PMST returns potential habitat for a threatened species. You consult SPRAT for habitat preferences and known threats, then propose survey timing and methods appropriate to the ecology and season.',
    related: ['PMST', 'Threatened species', 'Likelihood of occurrence'],
    difficulty: 'easy',
    topics: ['threatened-species', 'desktop-review', 'approvals'],
    sources: ['sprat', 'dcceew-epbc-publications'],
  },
  {
    id: 'baseline-data',
    term: 'Baseline data',
    plainEnglish:
      'The “starting point” evidence about the environment before impacts — what’s actually there and in what condition.',
    consultantDefinition:
      'Good-quality, defensible environmental data that provides the basis for assessing likely and actual impacts and supporting referrals/assessments; typically collected by or under supervision of qualified experts, and documented with methods and limitations.',
    whyItMatters:
      'Your notes explicitly call out baseline data as a key strengthener of referrals. It’s also the backbone of offset/restoration success criteria and monitoring.',
    exampleInPractice:
      'Before claiming significance (or no significance), you compile vegetation condition, habitat features, targeted survey results, and mapped layers with an evidence trail.',
    related: ['EPBC referral', 'Significant impact', 'Monitoring', 'Success criteria'],
    difficulty: 'easy',
    topics: ['approvals', 'consulting', 'monitoring'],
    sources: ['umwelt-interview-study-notes', 'dcceew-epbc-self-assess'],
  },
  {
    id: 'direct-vs-indirect-impacts',
    term: 'Direct vs indirect impacts',
    plainEnglish:
      'Direct impacts happen where you do the work. Indirect impacts happen as knock-on effects (like altered water, edge effects, noise).',
    consultantDefinition:
      'A framing used in impact assessment: direct impacts arise from the primary action (e.g. clearing). Indirect impacts are secondary consequences (e.g. hydrological change, fragmentation, edge effects) that can still drive significance and mitigation design.',
    whyItMatters:
      'Your notes explicitly prompt you to recognise both direct and indirect impacts when writing a submission/referral thinking.',
    exampleInPractice:
      'Even if you avoid a drainage line, altered stormwater flows can indirectly impact downstream wetlands or riparian function.',
    related: ['Significant impact', 'EIA', 'Desktop review'],
    difficulty: 'medium',
    topics: ['approvals', 'desktop-review', 'consulting'],
    sources: ['umwelt-interview-study-notes'],
  },
  {
    id: 'field-verification-priorities',
    term: 'Field verification priorities',
    plainEnglish:
      'The top things you need to confirm on the ground because desktop tools are indicative or uncertain.',
    consultantDefinition:
      'A ranked set of on-ground checks derived from desktop screening to reduce key uncertainties affecting triggers, significance, and design/offset decisions; typically includes verifying mapped extents/condition, habitat features, and likelihood of occurrence for priority matters.',
    whyItMatters:
      'This is a “consultant thinking style” tell. It turns a desktop list into a practical plan.',
    exampleInPractice:
      'You prioritise confirming whether the mapped habitat patch is actually present and in what condition, then target threatened species habitat checks in the highest-risk zones.',
    related: ['Desktop ecological review', 'Baseline data', 'Constraints analysis'],
    difficulty: 'easy',
    topics: ['desktop-review', 'consulting', 'gis'],
    sources: ['umwelt-active-recall-workbook', 'umwelt-interview-study-notes'],
  },
  {
    id: 'significant-impact',
    term: 'Significant impact',
    plainEnglish: 'An impact that is important or big enough to matter, considering the context.',
    consultantDefinition:
      'A legal and policy concept under the EPBC Act where significance depends on context/intensity, duration, magnitude and geographic extent; typically assessed using DCCEEW Significant Impact Guidelines.',
    whyItMatters:
      'Referrals hinge on significance. Juniors are expected to understand that “presence of a species” is not the same as “significant impact”, and to communicate uncertainty properly.',
    exampleInPractice:
      'Your PMST report lists a threatened ecological community. You don’t assume a trigger; you assess whether the project action is likely to have a significant impact and document assumptions and data gaps.',
    related: ['MNES', 'EPBC referral', 'Self-assessment'],
    difficulty: 'medium',
    topics: ['approvals', 'legislation', 'consulting'],
    sources: ['dcceew-epbc-protected', 'dcceew-epbc-self-assess', 'dcceew-epbc-publications'],
  },
  {
    id: 'desktop-review',
    term: 'Desktop ecological review',
    plainEnglish:
      'A structured pre-field check using maps, databases, and past studies to understand what might be on the site and what approvals might apply.',
    consultantDefinition:
      'A defensible evidence-gathering workflow that uses authoritative datasets (e.g. PMST/SPRAT, QLD mapping products) and prior reports to develop a preliminary constraints view, identify likely triggers, and scope field verification.',
    whyItMatters:
      'This is day-one work for junior consultants. Interviewers want to hear a step-by-step workflow, not vague “I’d check some maps.”',
    exampleInPractice:
      'You compile PMST + SPRAT + MSES layers + aerial imagery, then produce a short memo summarising likely values, constraints, data gaps, and recommended field surveys.',
    related: ['Constraints analysis', 'PMST', 'MSES'],
    difficulty: 'easy',
    topics: ['desktop-review', 'gis', 'approvals', 'consulting'],
    sources: ['dcceew-epbc-self-assess', 'qld-mses-method'],
  },
  {
    id: 'constraints-analysis',
    term: 'Ecological constraints analysis',
    plainEnglish: 'A map-based way to find “where you shouldn’t go” and “what you need to watch out for.”',
    consultantDefinition:
      'A spatial synthesis of ecological values, regulatory layers, and site context used to inform design iterations, risk management, survey scoping, and approvals pathways.',
    whyItMatters:
      'Umwelt’s ecology service page explicitly references high-level constraints analyses; being able to explain it aligns you with their consulting approach.',
    exampleInPractice:
      'You overlay regulated vegetation, wetlands, watercourses, threatened species habitat, and access constraints to propose low-risk corridors for linear infrastructure.',
    related: ['Desktop review', 'GIS basics', 'Mitigation hierarchy'],
    difficulty: 'medium',
    topics: ['desktop-review', 'gis', 'consulting', 'approvals'],
    sources: ['umwelt-ecology-biodiversity'],
  },
  {
    id: 'restoration-vs-rehab',
    term: 'Restoration vs rehabilitation vs revegetation vs regeneration',
    plainEnglish:
      'They’re not the same: restoration aims to recover ecosystem structure/function; rehab improves condition; revegetation is establishing plants; regeneration is natural recovery.',
    consultantDefinition:
      'A vocabulary set used to accurately describe targets and outcomes: restoration focuses on trajectory toward a reference ecosystem; rehabilitation focuses on functional improvement; revegetation is a technique; regeneration is an ecological process that may be assisted.',
    whyItMatters:
      'In interviews, precise language signals you can write defensible reports and set measurable success criteria, rather than promising “restoration” when you’re actually doing revegetation.',
    exampleInPractice:
      'A disturbed riparian corridor with intact seedbank might be best framed as “assisted natural regeneration” with targeted infill planting, not full reconstruction.',
    related: ['Reference ecosystem', 'Assisted natural regeneration', 'Success criteria'],
    difficulty: 'medium',
    topics: ['restoration', 'consulting', 'monitoring'],
    sources: ['seq-restoration-framework-manual-2012', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'reference-ecosystem',
    term: 'Reference ecosystem',
    plainEnglish: 'A real or defined benchmark ecosystem you’re aiming to recover toward.',
    consultantDefinition:
      'A benchmark derived from least-disturbed analog sites and/or historic information used to define targets for composition, structure, function, and trajectory in ecological restoration planning and monitoring.',
    whyItMatters:
      'It underpins success criteria, performance indicators and monitoring design — the things regulators and clients use to judge outcomes.',
    exampleInPractice:
      'You select a nearby remnant patch with similar soils and landscape position as a reference, then set targets for native richness, canopy cover, weed thresholds and habitat features.',
    related: ['Success criteria', 'Performance indicators', 'Ecological trajectory'],
    difficulty: 'hard',
    topics: ['restoration', 'monitoring'],
    sources: ['seq-restoration-framework-manual-2012', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'adaptive-management',
    term: 'Adaptive management',
    plainEnglish: 'A plan that expects learning: monitor, learn, adjust actions, repeat.',
    consultantDefinition:
      'A structured decision-making approach where monitoring results are used to test assumptions and iteratively adjust management actions to achieve defined ecological outcomes under uncertainty.',
    whyItMatters:
      'Consulting restoration work is judged by whether you set measurable criteria and have a credible “if-then” response when results are off track.',
    exampleInPractice:
      'If recruitment is below target after Year 1, you trigger extra weed control and gap planting, and revise the monitoring schedule to capture seasonal recruitment pulses.',
    related: ['Monitoring', 'Success criteria', 'Follow-up'],
    difficulty: 'easy',
    topics: ['restoration', 'monitoring', 'consulting'],
    sources: ['umwelt-ecology-biodiversity', 'seq-restoration-framework-manual-2012', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'nature-positive',
    term: 'Nature Positive',
    plainEnglish: 'A goal to reverse nature loss and achieve a measurable net improvement in nature.',
    consultantDefinition:
      'A measurable absolute improvement in the state of nature by 2030 compared to a 2020 baseline, aligned with global policy and market shifts and increasingly linked to corporate strategy, risk, and disclosures.',
    whyItMatters:
      'Umwelt explicitly positions itself to support nature-positive goals. You can use this language to connect restoration/offsets work to broader client drivers and reporting.',
    exampleInPractice:
      'In an interview, you connect offset planning and restoration to nature-positive targets, explaining how monitoring metrics and governance can support credible claims.',
    related: ['ACT-D', 'Nature-based solutions', 'Natural capital accounting', 'TNFD'],
    difficulty: 'medium',
    topics: ['nature-positive', 'umwelt', 'consulting'],
    sources: ['umwelt-nature-positive'],
  },
  {
    id: 'act-d',
    term: 'ACT-D framework',
    plainEnglish: 'Assess, Commit, Transform, Disclose — a structure for nature strategy and reporting.',
    consultantDefinition:
      'A framework used to develop Nature Positive strategies by assessing nature-related dependencies/impacts/risks/opportunities, committing to targets, transforming operations and investments, and disclosing outcomes.',
    whyItMatters:
      'It’s a specific, named framework on Umwelt’s Nature Positive page; referencing it shows you’ve done targeted company research.',
    exampleInPractice:
      'You explain how spatial analysis and monitoring data support the “Assess” step and how restoration planning and offsets can sit within “Transform”.',
    related: ['Nature Positive', 'TNFD', 'Natural capital accounting'],
    difficulty: 'easy',
    topics: ['nature-positive', 'umwelt', 'consulting'],
    sources: ['umwelt-nature-positive'],
  },
  {
    id: 'tnfd',
    term: 'TNFD',
    plainEnglish: 'A framework for companies to disclose nature-related risks and opportunities (like TCFD but for nature).',
    consultantDefinition:
      'The Taskforce on Nature-related Financial Disclosures (TNFD) provides recommendations and guidance for assessing and disclosing nature-related dependencies, impacts, risks and opportunities.',
    whyItMatters:
      'Even as a junior ecologist, understanding why clients care (risk, disclosure, reputation) helps you communicate value and urgency in consulting contexts.',
    exampleInPractice:
      'You frame a desktop constraints analysis as reducing risk by identifying potential nature-related impacts early, supporting governance and disclosure readiness.',
    related: ['Nature Positive', 'ACT-D', 'Natural capital accounting'],
    difficulty: 'medium',
    topics: ['nature-positive', 'consulting', 'umwelt'],
    sources: ['umwelt-nature-positive'],
  },
]


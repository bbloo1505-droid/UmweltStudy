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
    related: ['Nature Positive', 'TNFD', 'LEAP (TNFD)', 'Nature-based solutions (NbS)'],
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
      'For this role, BioCondition/HQA and QLD offsets language usually matter more day-to-day — but TNFD explains why clients ask for governance-ready ecology evidence.',
    exampleInPractice:
      'You frame a desktop constraints analysis as reducing risk by identifying potential nature-related impacts early, supporting governance and disclosure readiness.',
    related: ['LEAP (TNFD)', 'Nature Positive', 'ACT-D', 'Natural capital accounting', 'Materiality (nature-related)'],
    difficulty: 'medium',
    topics: ['nature-positive', 'consulting', 'umwelt'],
    sources: ['umwelt-nature-positive', 'tnfd-framework'],
  },

  // --- Consulting ecology / QLD offsets / HQA vocabulary (high interview value) ---
  {
    id: 'habitat-quality-score',
    term: 'Habitat quality score (terrestrial)',
    plainEnglish:
      'A scored measure of how good habitat is on a site, used in Queensland’s terrestrial habitat quality method for offsets and monitoring.',
    consultantDefinition:
      'Under the Queensland “Guide to determining terrestrial habitat quality”, habitat quality is assessed using BioCondition-style site attributes and species habitat attributes against benchmarks to produce a defensible score for impact and offset matter areas.',
    whyItMatters:
      'Junior restoration ecologists in QLD repeatedly touch HQA-style logic — it’s how “condition” becomes numbers regulators can compare.',
    exampleInPractice:
      'You document baseline habitat quality scores for impact and offset sites, then show how management is tracking toward the agreed conservation outcome.',
    related: ['BioCondition', 'BioCondition benchmark', 'Matter area', 'Assessment unit', 'Conservation outcome'],
    difficulty: 'medium',
    topics: ['offsets', 'monitoring', 'qld', 'consulting'],
    sources: ['qld-terrestrial-habitat-quality-guide', 'qld-biocondition-page'],
  },
  {
    id: 'biocondition',
    term: 'BioCondition',
    plainEnglish:
      'Queensland’s vegetation condition assessment method — how “healthy” a patch is compared to a reference benchmark for the same regional ecosystem.',
    consultantDefinition:
      'A quantitative site assessment method comparing structural and species attributes to a benchmark for the relevant regional ecosystem; it underpins much of the state’s habitat quality and vegetation condition language.',
    whyItMatters:
      'If you can name BioCondition and benchmarks cleanly, you sound credible on HQA and regulated vegetation conversations.',
    exampleInPractice:
      'You explain that BioCondition scores support habitat quality calculations and monitoring, not just a subjective “looks good” call.',
    related: ['BioCondition benchmark', 'Regional Ecosystem (RE)', 'Habitat quality score (terrestrial)'],
    difficulty: 'easy',
    topics: ['offsets', 'monitoring', 'qld', 'desktop-review'],
    sources: ['qld-biocondition-page', 'qld-terrestrial-habitat-quality-guide'],
  },
  {
    id: 'biocondition-benchmark',
    term: 'BioCondition benchmark',
    plainEnglish:
      'The reference “best realistic” condition for a regional ecosystem type — what you compare a site against.',
    consultantDefinition:
      'A benchmark represents the median attribute scores of reference sites for a regional ecosystem, used to evaluate how far a site departs from expected native structure and composition for that ecosystem type.',
    whyItMatters:
      'Benchmark language is how you justify why a site is “below par” in a defensible way — central to habitat quality and monitoring.',
    exampleInPractice:
      'You report key attributes against benchmark medians to show where recruitment, canopy cover or species richness are limiting habitat quality.',
    related: ['BioCondition', 'Regional Ecosystem (RE)', 'Performance indicators'],
    difficulty: 'medium',
    topics: ['offsets', 'monitoring', 'qld'],
    sources: ['qld-biocondition-page', 'qld-terrestrial-habitat-quality-guide'],
  },
  {
    id: 'site-based-attributes',
    term: 'Site-based attributes (HQA)',
    plainEnglish:
      'Measurable on-ground vegetation features at a site — things like canopy cover, stem density, and native species counts.',
    consultantDefinition:
      'Within Queensland’s terrestrial habitat quality method, site-based attributes are measured field attributes summarising vegetation structure and composition at the assessment unit, compared to benchmark values for the regional ecosystem.',
    whyItMatters:
      'It separates “what we measured on the ground” from species habitat modelling — both matter, but site attributes are the BioCondition backbone.',
    exampleInPractice:
      'You QC field sheets to ensure site-based attributes are complete and consistent across impact vs offset matter areas.',
    related: ['Species habitat attributes', 'Assessment unit', 'BioCondition benchmark'],
    difficulty: 'medium',
    topics: ['offsets', 'monitoring', 'qld'],
    sources: ['qld-terrestrial-habitat-quality-guide', 'qld-biocondition-page'],
  },
  {
    id: 'species-habitat-attributes',
    term: 'Species habitat attributes (HQA)',
    plainEnglish:
      'Attributes that describe habitat for particular species of concern — often layered on top of site vegetation measures.',
    consultantDefinition:
      'In the terrestrial habitat quality guide, species habitat attributes capture habitat elements relevant to priority species (where applicable), complementing site-based structural/composition measures for an assessment unit.',
    whyItMatters:
      'Interviewers may probe how HQA differs from “generic condition” — this is part of that answer.',
    exampleInPractice:
      'You align survey effort and attribute checks with species known from SPRAT/PMST screening and field verification priorities.',
    related: ['Site-based attributes (HQA)', 'Threatened species', 'SPRAT'],
    difficulty: 'hard',
    topics: ['offsets', 'threatened-species', 'qld'],
    sources: ['qld-terrestrial-habitat-quality-guide'],
  },
  {
    id: 'matter-area',
    term: 'Matter area',
    plainEnglish:
      'The mapped area where a particular prescribed environmental matter (like a habitat type) is being assessed for impacts or offsets.',
    consultantDefinition:
      'A spatial unit used in Queensland offsets and habitat quality work to define where a prescribed environmental matter occurs for assessment, scoring and offset calculations — aligned to the assessment rules in the current policy and technical guides.',
    whyItMatters:
      '“Matter area” is core QLD offsets vocabulary; confusing it with “whole property” is a common junior mistake.',
    exampleInPractice:
      'You clearly separate project footprint, mapped matter area, and assessment unit boundaries in figures and methods.',
    related: ['Prescribed environmental matter (PEM)', 'Assessment unit', 'Offset condition'],
    difficulty: 'medium',
    topics: ['offsets', 'qld', 'gis'],
    sources: ['qld-terrestrial-habitat-quality-guide', 'qld-offsets-overview'],
  },
  {
    id: 'assessment-unit',
    term: 'Assessment unit',
    plainEnglish:
      'The parcel of land where you run the habitat quality assessment for a matter — your sampling/analysis footprint.',
    consultantDefinition:
      'In terrestrial habitat quality assessment, assessment units are the spatial units within which site-based and species habitat attributes are measured and habitat quality scores are calculated for the relevant matter area.',
    whyItMatters:
      'It’s how you keep field methods reproducible and comparable across baseline vs monitoring.',
    exampleInPractice:
      'You document how assessment units were delineated (and why) so monitoring can repeat the same logic later.',
    related: ['Matter area', 'Habitat quality score (terrestrial)', 'Baseline data'],
    difficulty: 'medium',
    topics: ['offsets', 'monitoring', 'qld'],
    sources: ['qld-terrestrial-habitat-quality-guide'],
  },
  {
    id: 'conservation-outcome-qld',
    term: 'Conservation outcome (offsets)',
    plainEnglish:
      'The agreed environmental gain or protection the offset must deliver — not just “doing works on land”.',
    consultantDefinition:
      'Under Queensland’s offsets policy framework, offsets are oriented around delivering a conservation outcome for the impacted prescribed environmental matter — secured, managed and monitored in line with the prescribed policy version and technical methods.',
    whyItMatters:
      'Interviewers want to hear outcomes language, not only hectares planted.',
    exampleInPractice:
      'You link monitoring indicators and completion criteria to whether the conservation outcome is on track across the offset delivery plan.',
    related: ['Offset suitability', 'Offset condition', 'Performance indicators', 'Completion criteria'],
    difficulty: 'medium',
    topics: ['offsets', 'policy', 'qld'],
    sources: ['qld-offsets-overview', 'qld-offsets-legislation-page'],
  },
  {
    id: 'pem',
    term: 'Prescribed environmental matter (PEM)',
    plainEnglish:
      'The types of environmental values that Queensland’s offsets legislation can attach to — the “what” can trigger offsets.',
    consultantDefinition:
      'Matters prescribed under the Environmental Offsets Regulation for Queensland as relevant environmental values for offsetting — the detailed list and mapping rules are defined in legislation/policy and must be checked against the current prescribed version.',
    whyItMatters:
      'If you can name PEM and point to Act → Regulation → Policy, you sound procedurally literate.',
    exampleInPractice:
      'You build a PEM-focused constraints table linking mapped matter areas to assessment methods and residual impact logic.',
    related: ['Matter area', 'Residual impact', 'Offset suitability'],
    difficulty: 'medium',
    topics: ['offsets', 'legislation', 'qld'],
    sources: ['qld-offsets-legislation-page', 'qld-offsets-reg-pdf'],
  },
  {
    id: 'offset-condition',
    term: 'Offset condition',
    plainEnglish:
      'The measured condition of habitat on an offset site — baseline and through time.',
    consultantDefinition:
      'The condition state of an offset matter area, commonly expressed using habitat quality / BioCondition-aligned methods, used to demonstrate progress toward the conservation outcome and to support monitoring reporting.',
    whyItMatters:
      'Offsets are defended with evidence of condition change, not intentions.',
    exampleInPractice:
      'You compare baseline vs Year 3 monitoring habitat quality scores against agreed thresholds.',
    related: ['Habitat quality score (terrestrial)', 'Conservation outcome (offsets)', 'Monitoring'],
    difficulty: 'easy',
    topics: ['offsets', 'monitoring', 'qld'],
    sources: ['qld-terrestrial-habitat-quality-guide', 'qld-offsets-overview'],
  },
  {
    id: 'offset-suitability',
    term: 'Offset suitability',
    plainEnglish:
      'Whether a proposed offset site is appropriate — ecologically and under the policy tests.',
    consultantDefinition:
      'A structured assessment that a proposed offset location, size, tenure and management can deliver the required conservation outcome for the impacted matter, consistent with the Queensland Environmental Offsets Policy (current prescribed version) and technical guides.',
    whyItMatters:
      '“Suitability” is the bridge between ecology advice and approvals-ready offset strategy.',
    exampleInPractice:
      'You document risks (weeds, hydrology, tenure) and how management zones and monitoring will address them.',
    related: ['Conservation outcome (offsets)', 'Matter area', 'Management zones'],
    difficulty: 'medium',
    topics: ['offsets', 'consulting', 'qld'],
    sources: ['qld-offsets-overview', 'qld-offsets-legislation-page'],
  },
  {
    id: 'net-loss-net-gain',
    term: 'No net loss / net gain',
    plainEnglish:
      'Policy language about not making nature worse overall — and sometimes improving it — relative to a baseline.',
    consultantDefinition:
      'Strategic framing used in biodiversity and corporate “nature positive” contexts: avoid net loss of biodiversity from an action or portfolio, and where credible, achieve net gain. Exact legal tests differ by instrument (offsets vs voluntary commitments).',
    whyItMatters:
      'You connect field metrics (habitat quality, extent) to what clients and regulators mean by “net”.',
    exampleInPractice:
      'You avoid claiming “net gain” without defining the baseline, metrics and additionality — especially outside a formal offset calculation.',
    related: ['Conservation outcome (offsets)', 'Nature Positive', 'Residual impact'],
    difficulty: 'medium',
    topics: ['offsets', 'nature-positive', 'policy'],
    sources: ['qld-offsets-overview', 'umwelt-nature-positive'],
  },
  {
    id: 'regional-ecosystem-re',
    term: 'Regional Ecosystem (RE)',
    plainEnglish:
      'Queensland’s mapping unit for vegetation types — a combination of ecosystem and land zone.',
    consultantDefinition:
      'RE mapping classifies vegetation into ecosystem types by regional ecosystem description and broad land zone; it is central to vegetation management, clearing regulation and BioCondition benchmarking in Queensland.',
    whyItMatters:
      'RE is the shorthand everyone uses in QLD clearing and habitat conversations.',
    exampleInPractice:
      'You check RE codes against regulated vegetation mapping and field verification to align clearing constraints with habitat assessment.',
    related: ['Pre-clearing RE', 'Remnant vegetation', 'Regulated vegetation', 'BioCondition benchmark'],
    difficulty: 'easy',
    topics: ['qld', 'desktop-review', 'gis', 'approvals'],
    sources: ['qld-vma-1999', 'qld-biocondition-page'],
  },
  {
    id: 'pre-clearing-re',
    term: 'Pre-clearing Regional Ecosystem',
    plainEnglish:
      'The RE that was on the site before clearing — the historical vegetation type used in many mapping products.',
    consultantDefinition:
      'Mapped pre-clearing regional ecosystem layers represent modelled or attributed historic vegetation communities and are used in vegetation management and planning contexts to understand ecosystem type and clearing history — always interpreted with methodology caveats.',
    whyItMatters:
      'Offsets and clearing discussions often hinge on what ecosystem you’re benchmarking against.',
    exampleInPractice:
      'You cross-check pre-clearing RE with on-ground structure to see if rehabilitation targets are realistic.',
    related: ['Regional Ecosystem (RE)', 'Remnant vegetation'],
    difficulty: 'medium',
    topics: ['qld', 'gis', 'desktop-review'],
    sources: ['qld-vma-1999', 'qld-mses-method'],
  },
  {
    id: 'remnant-vegetation',
    term: 'Remnant vegetation',
    plainEnglish:
      'Vegetation that still has enough native structure to count as “remnant” under Queensland rules — not fully cleared.',
    consultantDefinition:
      'Under the Vegetation Management Act framework, remnant vegetation is defined and mapped according to statutory rules; it is a core concept for clearing regulation and ecological value.',
    whyItMatters:
      'Confusing remnant with “any trees on site” undermines credibility in VMA discussions.',
    exampleInPractice:
      'You align field observations with remnant mapping categories and list verification needs where mapping is uncertain.',
    related: ['Regional Ecosystem (RE)', 'Regulated vegetation', 'Vegetation Management Act 1999 (Qld)'],
    difficulty: 'medium',
    topics: ['qld', 'approvals', 'legislation'],
    sources: ['qld-vma-1999'],
  },
  {
    id: 'regulated-vegetation',
    term: 'Regulated vegetation',
    plainEnglish:
      'Vegetation that clearing law controls — you can’t just remove it without a legal pathway.',
    consultantDefinition:
      'Vegetation categories and maps under Queensland vegetation management law identifying where clearing is regulated and what exemptions or codes may apply — interpreted alongside regional ecosystem and remnant status.',
    whyItMatters:
      'A restoration ecologist still needs clearing literacy because designs intersect with regulated patches.',
    exampleInPractice:
      'You flag that a corridor realignment could intersect regulated vegetation and needs a clearing assessment pathway.',
    related: ['Remnant vegetation', 'Regional Ecosystem (RE)', 'Constraints analysis'],
    difficulty: 'easy',
    topics: ['qld', 'approvals', 'consulting'],
    sources: ['qld-vma-1999'],
  },
  {
    id: 'eia-eis',
    term: 'EIA / EIS',
    plainEnglish:
      'Environmental impact assessment — and for big projects, a formal Environmental Impact Statement package.',
    consultantDefinition:
      'EIA refers to the structured assessment of environmental impacts and alternatives for a proposal. In Queensland coordinated projects, an EIS may be required under the State Development and Public Works Organisation Act pathway, producing detailed technical chapters and public review.',
    whyItMatters:
      'Umwelt works on infrastructure and resources projects where EIS ecology chapters and response-to-submissions are real deliverables.',
    exampleInPractice:
      'You explain how baseline ecology surveys and impact scenarios feed the EIS chapter and conditions tracking.',
    related: ['Referral (EPBC)', 'Approval conditions', 'Baseline data'],
    difficulty: 'easy',
    topics: ['approvals', 'consulting', 'qld'],
    sources: ['qld-sdpwo-act-1971', 'dcceew-epbc-self-assess'],
  },
  {
    id: 'referral-epbc',
    term: 'Referral (EPBC Act)',
    plainEnglish:
      'Officially telling the Commonwealth you think your project might affect nationally protected matters.',
    consultantDefinition:
      'A referral under the EPBC Act is the formal process to determine whether an action requires Commonwealth approval because it has, will have, or is likely to have a significant impact on MNES — informed by PMST, guidelines and evidence.',
    whyItMatters:
      'Junior ecologists support referral thinking even if lawyers sign the form.',
    exampleInPractice:
      'You assemble a defensible significant impact rationale with baseline data and survey scope.',
    related: ['Significant impact', 'MNES', 'PMST', 'Significance threshold'],
    difficulty: 'easy',
    topics: ['approvals', 'legislation', 'consulting'],
    sources: ['dcceew-epbc-self-assess', 'fed-leg-epbc-act'],
  },
  {
    id: 'approval-conditions',
    term: 'Approval conditions',
    plainEnglish:
      'Legally binding requirements stuck on an approval — you have to meet them or risk non-compliance.',
    consultantDefinition:
      'Conditions attached to EPBC approvals and/or state approvals that specify measurable requirements (clearing limits, offsets, monitoring, reporting). Ecology teams translate conditions into scopes, budgets and field programs.',
    whyItMatters:
      'Restoration and monitoring work often exists because a condition requires it.',
    exampleInPractice:
      'You map each ecology-related condition to deliverables, timing, and responsible party.',
    related: ['Conservation outcome (offsets)', 'Monitoring', 'Adaptive management'],
    difficulty: 'easy',
    topics: ['approvals', 'offsets', 'consulting'],
    sources: ['dcceew-epbc-approvals', 'qld-offsets-overview'],
  },
  {
    id: 'significance-threshold',
    term: 'Significance threshold',
    plainEnglish:
      'The line between “impacts matter for the law” vs “not enough to trigger” — judged with context, not vibes.',
    consultantDefinition:
      'Under the EPBC Act, significance is not presence/absence of a species alone; it is assessed using Significant Impact Guidelines with considerations of intensity, duration, extent and context. Queensland offset significance uses separate “significant residual impact” tests under state policy.',
    whyItMatters:
      'You show you won’t say “species recorded = referral” without analysis.',
    exampleInPractice:
      'You document impact pathways, uncertainty, and proportionate survey effort against guideline factors.',
    related: ['Significant impact', 'Residual impact', 'Referral (EPBC Act)'],
    difficulty: 'medium',
    topics: ['approvals', 'offsets', 'policy'],
    sources: ['dcceew-sig-impact-1-1', 'qld-sri-guideline-2014'],
  },
  {
    id: 'ecological-values',
    term: 'Ecological values',
    plainEnglish:
      'The biodiversity and ecosystem features that matter on a site — species, communities, habitat, processes.',
    consultantDefinition:
      'A consultant shorthand for the environmental features that inform constraints, significance and design: threatened species habitat, ecological communities, connectivity, wetlands, riparian function, and resilience — always tied to evidence and mapping caveats.',
    whyItMatters:
      'It’s how you summarise desktop + field results for multidisciplinary teams without drowning them in jargon.',
    exampleInPractice:
      'You produce a one-page “values and constraints” summary with maps, confidence levels and verification priorities.',
    related: ['Desktop ecological review', 'MNES', 'MSES'],
    difficulty: 'easy',
    topics: ['desktop-review', 'consulting', 'approvals'],
    sources: ['umwelt-ecology-biodiversity', 'dcceew-epbc-self-assess'],
  },
  {
    id: 'data-gaps',
    term: 'Data gaps',
    plainEnglish:
      'What you still don’t know well enough to make a final call — and why that matters.',
    consultantDefinition:
      'Explicitly listed unknowns in desktop and field evidence (seasonality, survey coverage, mapping accuracy, tenure) that affect confidence in triggers, significance and offset feasibility — usually paired with a proportionate work plan.',
    whyItMatters:
      'Consultants get trusted when they name gaps instead of bluffing.',
    exampleInPractice:
      'You list “no targeted survey for species X in breeding season” as a gap driving seasonal survey timing.',
    related: ['Field verification priorities', 'Baseline data', 'Survey window / seasonal timing'],
    difficulty: 'easy',
    topics: ['desktop-review', 'consulting', 'monitoring'],
    sources: ['umwelt-interview-study-notes', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'red-flags',
    term: 'Red flags',
    plainEnglish:
      'Early warning signs that something could be seriously wrong — legally, ecologically, or for delivery.',
    consultantDefinition:
      'High-risk indicators from desktop or field review (e.g. likely MNES without survey, clearing of regulated vegetation, tenure insecurity on offsets, hydrology legacy issues) that should trigger escalation, design iteration or further specialist input.',
    whyItMatters:
      'Interviewers want juniors who escalate appropriately.',
    exampleInPractice:
      'You flag “mapped TEC overlap + proposed clearing” as a red flag pending significance assessment.',
    related: ['Constraints analysis', 'Significant impact', 'Offset suitability'],
    difficulty: 'easy',
    topics: ['consulting', 'desktop-review', 'approvals'],
    sources: ['umwelt-active-recall-workbook'],
  },
  {
    id: 'survey-window-seasonal',
    term: 'Survey window / seasonal timing',
    plainEnglish:
      'The right time of year to detect species or habitat features — surveys aren’t interchangeable across seasons.',
    consultantDefinition:
      'Survey design must account for detectability: breeding seasons, flowering, migration, wet/dry cues and method limitations. Poor timing becomes a data gap that weakens referrals and impact arguments.',
    whyItMatters:
      'Shows professional survey literacy beyond “we walked around once”.',
    exampleInPractice:
      'You propose autumn call playback for a nocturnal species when evidence suggests higher detectability.',
    related: ['SPRAT', 'Data gaps', 'Threatened species'],
    difficulty: 'medium',
    topics: ['threatened-species', 'monitoring', 'approvals'],
    sources: ['sprat', 'dcceew-epbc-self-assess'],
  },
  {
    id: 'performance-indicators',
    term: 'Performance indicators',
    plainEnglish:
      'Measurable signs that restoration or an offset is working — not just “it looks greener”.',
    consultantDefinition:
      'Quantitative or semi-quantitative metrics (e.g. native cover, richness, weed thresholds, habitat features, habitat quality scores) used to track progress against objectives and adaptive management triggers.',
    whyItMatters:
      'Offsets and restoration plans are judged on indicators tied to outcomes.',
    exampleInPractice:
      'You align indicators with completion criteria and monitoring years in the management plan.',
    related: ['Completion criteria', 'Adaptive management', 'Conservation outcome (offsets)'],
    difficulty: 'easy',
    topics: ['restoration', 'offsets', 'monitoring'],
    sources: ['seq-restoration-framework-manual-2012', 'qld-terrestrial-habitat-quality-guide'],
  },
  {
    id: 'completion-criteria',
    term: 'Completion criteria',
    plainEnglish:
      'The agreed “we’re done” standard for a restoration or offset — clear pass/fail or threshold style tests.',
    consultantDefinition:
      'Defined endpoint tests for a project or management phase: e.g. native species richness targets, weed cover caps, structural thresholds, or habitat quality scores sustained over time — referenced in plans and monitoring schedules.',
    whyItMatters:
      'Without completion criteria, projects drift forever or fail quietly.',
    exampleInPractice:
      'You specify that two consecutive years above threshold triggers release from intensive maintenance.',
    related: ['Performance indicators', 'Follow-up', 'Monitoring'],
    difficulty: 'medium',
    topics: ['restoration', 'offsets', 'monitoring'],
    sources: ['seq-restoration-framework-manual-2012', 'qld-offsets-overview'],
  },
  {
    id: 'primary-work',
    term: 'Primary work',
    plainEnglish:
      'The main on-ground intervention phase — the core construction or restoration effort.',
    consultantDefinition:
      'In SEQ restoration planning language, primary work is the initial major implementation phase (e.g. major weed control, planting, earthworks) before follow-up fine-tuning.',
    whyItMatters:
      'It helps you sequence budgets, inspections and monitoring realistically.',
    exampleInPractice:
      'You schedule primary weed control in staged blocks to protect recruitment pulses.',
    related: ['Follow-up', 'Maintenance', 'Management zones'],
    difficulty: 'easy',
    topics: ['restoration', 'consulting'],
    sources: ['seq-restoration-framework-manual-2012'],
  },
  {
    id: 'follow-up-restoration',
    term: 'Follow-up',
    plainEnglish:
      'Return visits and touch-ups after the main works — where a lot of restoration actually succeeds or fails.',
    consultantDefinition:
      'Planned revisits to reinforce outcomes: spot-spraying emergent weeds, infill planting, minor erosion repair, and adjusting tactics based on monitoring — distinct from one-off primary works.',
    whyItMatters:
      'Interviewers like candidates who know recovery is a program, not an event.',
    exampleInPractice:
      'You book follow-up at 3 and 12 months aligned with weed seedbank flushes.',
    related: ['Primary work', 'Maintenance', 'Adaptive management'],
    difficulty: 'easy',
    topics: ['restoration', 'monitoring'],
    sources: ['seq-restoration-framework-manual-2012'],
  },
  {
    id: 'maintenance-restoration',
    term: 'Maintenance',
    plainEnglish:
      'Ongoing care to keep condition from slipping back — after initial establishment.',
    consultantDefinition:
      'Longer-term management to sustain trajectories: patrols for incursions, fire hygiene, drainage checks, and staged interventions to prevent reinvasion — especially important for offset security packages.',
    whyItMatters:
      'Offsets and restoration credits require proof of enduring management, not a single planting day.',
    exampleInPractice:
      'You tie maintenance effort to triggers if key weeds reappear above threshold.',
    related: ['Follow-up', 'Adaptive management', 'Site hygiene'],
    difficulty: 'easy',
    topics: ['restoration', 'offsets', 'monitoring'],
    sources: ['seq-restoration-framework-manual-2012'],
  },
  {
    id: 'management-zones',
    term: 'Management zones',
    plainEnglish:
      'Different parts of a site treated differently — because condition and objectives vary.',
    consultantDefinition:
      'Spatial zoning that matches interventions to regeneration capacity and risk: e.g. core remnant protection, assisted regeneration strips, reconstruction paddocks — each with tailored works and indicators.',
    whyItMatters:
      'Shows you won’t apply one recipe across a heterogeneous site.',
    exampleInPractice:
      'You map zones to align weed intensity, planting density and access controls.',
    related: ['Regeneration capacity', 'Assisted natural regeneration', 'Performance indicators'],
    difficulty: 'medium',
    topics: ['restoration', 'gis', 'consulting'],
    sources: ['seq-restoration-framework-manual-2012', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'site-hygiene',
    term: 'Site hygiene',
    plainEnglish:
      'Keeping new weeds and pathogens out — vehicles, mulch, fill, and stock movement.',
    consultantDefinition:
      'Biosecurity-style controls: clean machinery, weed-free mulch, controlled access, and hygiene protocols to prevent introducing new degrading processes during works.',
    whyItMatters:
      'A common failure mode is “we restored it, then spread weed seeds everywhere”.',
    exampleInPractice:
      'You specify washdown points and sourcing rules for mulch in the construction environmental management plan.',
    related: ['Maintenance', 'Primary work', 'Residual impact'],
    difficulty: 'easy',
    topics: ['restoration', 'consulting'],
    sources: ['seq-restoration-framework-manual-2012'],
  },
  {
    id: 'succession',
    term: 'Succession',
    plainEnglish:
      'How vegetation and ecosystems change through time after disturbance — predictable in principle, messy in practice.',
    consultantDefinition:
      'The directional change in species composition and structure as communities assemble; restoration uses succession thinking but may need intervention where weed steady states or legacy degradation block desired trajectories.',
    whyItMatters:
      'Connects short-term works to long-term composition targets.',
    exampleInPractice:
      'You explain why early pioneers are expected, but mid-storey recruitment must appear by Year 5 to match targets.',
    related: ['Reference ecosystem', 'Performance indicators', 'Adaptive management'],
    difficulty: 'easy',
    topics: ['restoration', 'monitoring'],
    sources: ['seq-restoration-framework-manual-2012'],
  },
  {
    id: 'biotic-abiotic-thresholds',
    term: 'Biotic threshold / abiotic threshold',
    plainEnglish:
      'Ecological “tipping points” — living factors vs physical/chemical factors that block recovery.',
    consultantDefinition:
      'Threshold framing: biotic barriers include competition, missing pollinators or seed sources; abiotic barriers include compaction, altered hydrology, salinity or contaminated soils. Crossing thresholds can shift sites from ANR-viable to reconstruction-needed.',
    whyItMatters:
      'It’s a structured way to explain why simple weeding isn’t enough.',
    exampleInPractice:
      'You argue compaction is an abiotic threshold until soils are decompacted and drainage fixed.',
    related: ['Regeneration capacity', 'Reconstruction', 'Assisted natural regeneration'],
    difficulty: 'hard',
    topics: ['restoration', 'consulting'],
    sources: ['seq-restoration-framework-manual-2012', 'umwelt-active-recall-workbook'],
  },
  {
    id: 'leap-tnfd',
    term: 'LEAP (TNFD)',
    plainEnglish:
      'Locate, Evaluate, Assess, Prepare — TNFD’s staged approach to nature-related assessment.',
    consultantDefinition:
      'TNFD’s LEAP approach structures how organisations identify and assess nature-related issues before disclosures: locating interface with nature, evaluating dependencies and impacts, assessing risks and opportunities, and preparing responses and metrics.',
    whyItMatters:
      'Umwelt’s public Nature Positive material highlights ACT-D for strategy; TNFD is the parallel world of disclosure — LEAP is the methodology name candidates sometimes mix up with ACT-D.',
    exampleInPractice:
      'You clarify you’d support spatial ecology inputs to “Locate/Evaluate” for a client supply-chain screen.',
    related: ['TNFD', 'ACT-D framework', 'Materiality (nature-related)'],
    difficulty: 'medium',
    topics: ['nature-positive', 'consulting', 'umwelt'],
    sources: ['tnfd-framework', 'umwelt-nature-positive'],
  },
  {
    id: 'tnfd-diro',
    term: 'Dependencies, impacts, risks, opportunities (TNFD themes)',
    plainEnglish:
      'The four headline themes TNFD uses to organise nature-related financial disclosure thinking.',
    consultantDefinition:
      'TNFD organises assessment and disclosure around dependencies on nature, impacts to nature, nature-related risks (transition/physical/systemic) and opportunities — aligned to governance and investor-ready reporting.',
    whyItMatters:
      'Lets you speak credibly next to sustainability advisors without confusing EPBC “impact” with TNFD “impact”.',
    exampleInPractice:
      'You explain how field ecology reduces uncertainty in impact and dependency lines for a site portfolio.',
    related: ['TNFD', 'LEAP (TNFD)', 'Nature Positive'],
    difficulty: 'medium',
    topics: ['nature-positive', 'consulting'],
    sources: ['tnfd-framework'],
  },
  {
    id: 'materiality-nature-related',
    term: 'Materiality (nature-related issues)',
    plainEnglish:
      'Whether a nature issue is big enough that investors or boards should care — not the same as “material” in everyday speech.',
    consultantDefinition:
      'In disclosure contexts, materiality identifies which nature-related dependencies, impacts, risks and opportunities could substantively influence enterprise value or stakeholder decisions — assessed through governance processes per TNFD guidance.',
    whyItMatters:
      'Explains why some ecology work is “compliance” and some becomes enterprise risk.',
    exampleInPractice:
      'You frame threatened species risk as potentially material where approvals delay revenue.',
    related: ['TNFD', 'LEAP (TNFD)'],
    difficulty: 'hard',
    topics: ['nature-positive', 'consulting'],
    sources: ['tnfd-framework'],
  },
  {
    id: 'nature-based-solutions-nbs',
    term: 'Nature-based solutions (NbS)',
    plainEnglish:
      'Using healthy ecosystems and natural processes to solve problems — flood control, water quality, cooling, carbon.',
    consultantDefinition:
      'Actions to protect, conserve, restore and sustainably use ecosystems to meet societal challenges simultaneously — often evaluated against the IUCN Global Standard criteria for credibility.',
    whyItMatters:
      'Umwelt’s Nature Positive page references NbS and IUCN criteria — good linkage language for multi-benefit restoration.',
    exampleInPractice:
      'You pitch riparian restoration as NbS for sediment and thermal mitigation, not only biodiversity.',
    related: ['IUCN Global Standard for Nature-based Solutions', 'Co-benefits', 'Nature Positive'],
    difficulty: 'easy',
    topics: ['nature-positive', 'restoration', 'umwelt'],
    sources: ['umwelt-nature-positive', 'iucn-nbs-standard'],
  },
  {
    id: 'iucn-nbs-global-standard',
    term: 'IUCN Global Standard for Nature-based Solutions',
    plainEnglish:
      'IUCN’s quality standard for designing and checking NbS projects — eight criteria and indicators.',
    consultantDefinition:
      'A global standard that defines NbS and provides core criteria (e.g. societal challenge, scale, biodiversity, economic feasibility, inclusion) to design and assess credible NbS interventions.',
    whyItMatters:
      'Umwelt explicitly references IUCN’s eight criteria in Nature Positive service material — name-checking it signals aligned research.',
    exampleInPractice:
      'You map a restoration program to criteria like biodiversity and adaptive management for reporting.',
    related: ['Nature-based solutions (NbS)', 'Co-benefits', 'ACT-D framework'],
    difficulty: 'medium',
    topics: ['nature-positive', 'policy', 'umwelt'],
    sources: ['iucn-nbs-standard', 'umwelt-nature-positive'],
  },
  {
    id: 'co-benefits',
    term: 'Co-benefits',
    plainEnglish:
      'Extra wins beyond the main goal — carbon, water, people, amenity — from the same intervention.',
    consultantDefinition:
      'Additional ecosystem services or social outcomes delivered alongside the primary biodiversity objective (e.g. shade, erosion control, catchment water quality), often used to justify NbS and landscape-scale restoration.',
    whyItMatters:
      'Consulting pitches land better when ecology ties to client KPIs beyond compliance.',
    exampleInPractice:
      'You quantify riparian shading for thermal stress reduction as a co-benefit to species habitat gains.',
    related: ['Nature-based solutions (NbS)', 'ACT-D framework', 'Nature Positive'],
    difficulty: 'easy',
    topics: ['nature-positive', 'restoration', 'consulting'],
    sources: ['umwelt-nature-positive', 'iucn-nbs-standard'],
  },
]


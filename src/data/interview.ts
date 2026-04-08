import type { InterviewQuestion } from '../lib/types'

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 'why-umwelt-1',
    category: 'Why Umwelt / Why this role',
    question: 'Why Umwelt, and why this Ecologist (Restoration), QLD role?',
    whatTheyTest:
      'Whether you’ve done targeted research, can connect your background to consulting delivery, and can articulate value in their language (offsets, constraints, monitoring, restoration planning).',
    answerStructure: [
      '1) One-sentence “why Umwelt” anchored to their published ecology capabilities',
      '2) One-sentence “why restoration in consulting” (outcomes + approvals + monitoring)',
      '3) Your experience bridge (bush regen → structured plans, criteria, evidence)',
      '4) The value you’ll add in 90 days (desktop workflow discipline + field readiness)',
      '5) Close with curiosity (what you want to learn / contribute)',
    ],
    commonMistake: 'Generic values talk with no reference to their services or how ecology work is delivered in consulting.',
    talkingPoints: [
      'Umwelt’s ecology team: constraints analyses, strategic offsets planning, restoration/rehab, monitoring, LiDAR/remote sensing/drones',
      'You’re excited by the field-to-office loop: collect evidence → analyse → write defensible recommendations',
      'You’re comfortable describing uncertainty and data gaps and turning them into a survey/monitoring plan',
    ],
    followUps: [
      'What do you think a junior restoration ecologist does week-to-week?',
      'What’s your approach when desktop data and field evidence disagree?',
    ],
    difficulty: 'easy',
    topics: ['umwelt', 'consulting', 'restoration', 'desktop-review', 'monitoring'],
    sources: ['umwelt-ecology-biodiversity', 'umwelt-careers'],
  },
  {
    id: 'offsets-thinking-1',
    category: 'Offsets / HQA / approvals',
    question:
      'Talk me through how you would approach offsets thinking on a Queensland project at a desktop stage.',
    whatTheyTest:
      'Your ability to apply the mitigation hierarchy, identify likely triggers, communicate assumptions, and show you understand QLD offsets framework structure (Act/Reg/Policy).',
    answerStructure: [
      'Define action + footprint (and plausible alternatives)',
      'Run state + Commonwealth screening (MSES mapping, PMST) and document limitations',
      'Identify prescribed environmental matters and potential MNES',
      'Apply mitigation hierarchy: where can we avoid/minimise by design?',
      'Describe residual impacts and what evidence you still need',
      'Outline offset pathway options at a high level (without over-claiming)',
    ],
    commonMistake: 'Jumping straight to “calculate offsets” without first describing avoidance/minimisation and evidence quality.',
    followUps: ['What are the risks of relying on mapping alone?', 'How would you communicate uncertainty to a client PM?'],
    difficulty: 'medium',
    topics: ['offsets', 'qld', 'desktop-review', 'approvals', 'consulting'],
    sources: ['qld-offsets-act-pdf', 'qld-offsets-legislation-page', 'qld-mses-method', 'dcceew-pmst'],
  },
  {
    id: 'pmst-sprat-1',
    category: 'GIS / desktop',
    question: 'How do you use PMST and SPRAT in a defensible desktop review?',
    whatTheyTest:
      'Whether you understand these tools as screening + evidence sources, and can explain limits, next steps, and how to translate results into survey priorities.',
    answerStructure: [
      'PMST to define AOI and generate report (and why you choose a buffer)',
      'Triage results: MNES categories + likely relevance',
      'SPRAT to confirm listing status and habitat associations',
      'Identify data gaps and propose field verification',
      'Document assumptions and caveats clearly',
    ],
    commonMistake: 'Treating PMST results as definitive presence/absence or as a trigger by itself.',
    difficulty: 'easy',
    topics: ['desktop-review', 'gis', 'approvals', 'threatened-species'],
    sources: ['dcceew-pmst', 'sprat', 'dcceew-epbc-self-assess'],
    needsVerification: true,
  },
  {
    id: 'consultant-writing-1',
    category: 'Consultant communication',
    question: 'How do you write recommendations when you’re not fully certain yet?',
    whatTheyTest:
      'Professional judgement, honesty, and ability to scope next steps without hedging into uselessness.',
    answerStructure: [
      'State what you know (evidence + date/source)',
      'State what you don’t know (specific gap)',
      'Explain why it matters (risk/trigger/cost/time)',
      'Recommend a proportionate next step (survey, specialist input, design tweak)',
      'Define decision points (“if X, then Y”)',
    ],
    commonMistake: 'Over-confidence (“no issues”) or vague hedging (“might be something”) without a clear next step.',
    difficulty: 'medium',
    topics: ['consulting', 'desktop-review', 'approvals'],
    sources: ['umwelt-ecology-biodiversity'],
  },
  {
    id: 'baseline-data-1',
    category: 'Offsets / HQA / approvals',
    question: 'Why does baseline data matter in impact assessment and referrals?',
    whatTheyTest:
      'Whether you understand “defensibility”: that strong conclusions come from robust data with clear methods and limitations, and that baseline evidence drives mitigation and offsets decisions.',
    answerStructure: [
      'Define baseline data in one sentence',
      'Explain what it supports (significance, pathway decisions, conditions/offsets, monitoring)',
      'Name what “good” looks like (qualified experts, clear methods, appropriate timing/effort)',
      'Explain consequences of weak baseline (risk, delays, conservative assumptions, rework)',
      'Close with how you’d handle uncertainty (field verification priorities)',
    ],
    commonMistake: 'Talking about “more data is good” without linking it to specific decisions (significance, avoidance, offset suitability).',
    followUps: ['How do you write a defensible limitation statement?', 'What’s a practical “good enough” baseline at desktop stage?'],
    difficulty: 'easy',
    topics: ['approvals', 'consulting', 'monitoring', 'desktop-review'],
    sources: ['umwelt-interview-study-notes', 'dcceew-epbc-self-assess'],
  },
  {
    id: 'pre-referral-1',
    category: 'Offsets / HQA / approvals',
    question: 'What is a pre-referral meeting and why would you use it?',
    whatTheyTest:
      'Whether you understand approvals as a workflow: early engagement to clarify issues and produce a targeted, higher quality referral package.',
    answerStructure: [
      'Define what it is (a discussion with assessment officer)',
      'Explain purpose (clarify issues, scope, avoid surprises, target referral)',
      'Say what you bring (baseline evidence, avoidance measures, clear impact pathways)',
      'Say what you document afterwards (assumptions, data gaps, next steps)',
    ],
    commonMistake: 'Treating it as a formality rather than a chance to improve the quality and efficiency of the referral.',
    difficulty: 'medium',
    topics: ['approvals', 'consulting'],
    sources: ['umwelt-interview-study-notes'],
    needsVerification: true,
  },
  {
    id: 'desktop-workflow-1',
    category: 'GIS / desktop',
    question: 'Walk me through your desktop review workflow before you step onto site.',
    whatTheyTest:
      'Whether you can work in a structured order: landscape context → screening → constraints → gaps → field priorities → defensible summary.',
    answerStructure: [
      'Start with footprint + alternatives',
      'Landscape context + history hypothesis',
      'Commonwealth screening (PMST) + SPRAT context',
      'QLD mapping + local overlays + RE mapping',
      'Summarise likely values + likely triggers + red flags',
      'Rank data gaps and field verification priorities',
      'Close with “what I can say now vs what needs field confirmation”',
    ],
    commonMistake: 'Listing tools with no order and no decision outputs (no “so what”).',
    difficulty: 'easy',
    topics: ['desktop-review', 'gis', 'consulting', 'approvals'],
    sources: ['umwelt-active-recall-workbook', 'umwelt-interview-study-notes'],
  },
]


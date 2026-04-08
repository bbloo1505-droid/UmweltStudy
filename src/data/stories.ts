import type { StoryEntry } from '../lib/types'

export const stories: StoryEntry[] = [
  {
    id: 'glory-lily-dunes',
    title: 'Glory lily in dunes',
    sections: {
      situation:
        'Working in a dune system where a priority plant (glory lily) was present alongside disturbance and weed pressure.',
      task:
        'Support on-ground outcomes while minimising harm to sensitive values and communicating constraints clearly to others working on site.',
      action:
        'Mapped observations, adjusted work methods to avoid sensitive microhabitats, prioritised threat control activities, and documented decisions and rationale for handover.',
      result:
        'Improved site hygiene and targeted works reduced risk to the sensitive plant areas and made the work plan clearer for the broader team.',
      whatItProves: ['Field awareness and careful handling of sensitive values', 'Ability to communicate constraints clearly'],
      fitsQuestions: ['Tell me about a time you managed competing priorities in the field', 'How do you avoid impacts?'],
      strongerConsultantFraming: [
        'Frame as “risk controls” and “evidence trail” rather than just “being careful”.',
        'Name the mitigation hierarchy: avoidance first, then minimisation and monitoring.',
      ],
      technicalThemes: ['Constraints', 'Avoidance', 'Weed pressure', 'Monitoring / documentation'],
    },
  },
  {
    id: 'general-bush-regen',
    title: 'General bush regeneration',
    sections: {
      situation:
        'Multiple sites with varying disturbance histories, weed assemblages, and regeneration capacity requiring prioritisation and consistent implementation.',
      task: 'Deliver practical restoration outcomes and track progress over time with limited resources.',
      action:
        'Applied site assessment thinking, prioritised highest-leverage threats, used adaptive management (monitor → adjust), and communicated realistic trajectories and follow-up needs.',
      result:
        'More consistent maintenance, improved recruitment outcomes in priority areas, and clearer reporting of what “success” looks like over time.',
      whatItProves: ['Restoration fundamentals', 'Follow-up discipline', 'Adaptive management mindset'],
      fitsQuestions: ['How do you define success in restoration?', 'Tell me about a time you improved a process'],
      strongerConsultantFraming: [
        'Use “success criteria”, “performance indicators”, and “trajectory” language.',
        'Explain uncertainty and seasonality explicitly; propose “if-then” actions.',
      ],
      technicalThemes: ['Assisted natural regeneration', 'Success criteria', 'Monitoring', 'Weed management'],
    },
  },
]


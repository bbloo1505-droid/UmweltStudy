export type Difficulty = 'easy' | 'medium' | 'hard'
export type CardState = 'new' | 'learning' | 'shaky' | 'strong' | 'mastered'

export type SourceKind = 'umwelt' | 'commonwealth' | 'qld' | 'legislation' | 'framework' | 'tool' | 'needs_verification'

export type SourceRef = {
  id: string
  title: string
  kind: SourceKind
  year?: string
  url?: string
  lastVerifiedISO?: string
  notes?: string
}

export type TopicTag =
  | 'restoration'
  | 'offsets'
  | 'approvals'
  | 'desktop-review'
  | 'gis'
  | 'threatened-species'
  | 'monitoring'
  | 'consulting'
  | 'nature-positive'
  | 'umwelt'
  | 'policy'
  | 'legislation'
  | 'qld'
  | 'tool'

export type GlossaryCard = {
  id: string
  term: string
  plainEnglish: string
  consultantDefinition: string
  whyItMatters: string
  exampleInPractice: string
  related: string[]
  difficulty: Difficulty
  topics: TopicTag[]
  sources: string[] // SourceRef ids
  needsVerification?: boolean
}

export type LibraryEntry = {
  id: string
  name: string
  jurisdiction: 'Commonwealth' | 'Queensland' | 'Industry/Umwelt' | 'Tool/Database' | 'Restoration framework'
  year?: string
  whatItIs: string
  usedFor: string
  interviewMention: string
  trigger: string
  typicalOutputs: string[]
  related: string[]
  officialLink?: string
  sources: string[]
  topics: TopicTag[]
  needsVerification?: boolean
}

export type InterviewQuestion = {
  id: string
  category:
    | 'Why Umwelt / Why this role'
    | 'Technical restoration'
    | 'Offsets / HQA / approvals'
    | 'GIS / desktop'
    | 'Behavioural'
    | 'Scenario'
    | 'Consultant communication'
  question: string
  whatTheyTest: string
  answerStructure: string[]
  commonMistake: string
  talkingPoints?: string[]
  followUps?: string[]
  difficulty: Difficulty
  topics: TopicTag[]
  sources: string[]
  needsVerification?: boolean
}

export type ScenarioDrill = {
  id: string
  title: string
  setup: string
  strongAnswerCovers: string[]
  redFlags: string[]
  consultantFramework: string[]
  bestLanguage: string[]
  sayItSimply: string
  difficulty: Difficulty
  topics: TopicTag[]
  sources: string[]
  needsVerification?: boolean
}

export type StoryEntry = {
  id: string
  title: string
  sections: {
    situation: string
    task: string
    action: string
    result: string
    whatItProves: string[]
    fitsQuestions: string[]
    strongerConsultantFraming: string[]
    technicalThemes: string[]
  }
}

export type SrsCardProgress = {
  state: CardState
  lastReviewedISO?: string
  nextReviewISO?: string
  totalReviews: number
  correctCount: number
  avgConfidence: number // 0..1
}

export type UserGlossaryProgress = Record<string, SrsCardProgress>
export type UserFavourites = {
  glossary: Record<string, boolean>
  legislation: Record<string, boolean>
  interview: Record<string, boolean>
  scenarios: Record<string, boolean>
}

export type AppState = {
  version: number
  createdAtISO: string
  streak: { current: number; lastStudyDayISO?: string }
  favourites: UserFavourites
  glossaryProgress: UserGlossaryProgress
  interviewProgress: Record<string, SrsCardProgress>
  legislationProgress: Record<string, SrsCardProgress>
  scenarioProgress: Record<string, SrsCardProgress>
}


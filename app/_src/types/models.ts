export type ScoreColors = {
  red: string
  yellow: string
  blue: string
  green: string
}

export type QuizData = {
  response_code: number
  results: {
    question: string
    correct_answer: string
    incorrect_answers: string[]
  }[]
}

export type QuizSettings = {
  category: string
  difficulty: string
  type: string
  amount: number
}

export type QuizMapActions = {
  payload:
    | "main"
    | "category"
    | "settings"
    | "session"
    | "result"
    | "record"
    | "about"
}

export type QuizStats = {
  questions: string[]
  userAnswers: string[]
  correctAnswers: string[]
  userQuizResult: boolean[]
}

export type QuizStatsActionsUpdate = {
  payload: {
    question: string
    userAnswer: string
    correctAnswer: string
    userQuizResult: boolean
  }
}

export type calculateResultPercentage = {
  percentage: number
  correctAnswersLength: number
  total: number
}

export type QuizRecord = {
  isRecording: boolean
  records: {
    percentage: number
    correct: number
    total: number
    questions: string[]
    correctAnswers: string[]
    answers: string[]
    result: boolean[]
    category: string
    difficulty: string
    type: string
  }[]
}

export type QuizRecordActionAdd = {
  payload: QuizRecord["records"][0]
}

export type QuizRecordSetIsRecording = {
  payload: QuizRecord["isRecording"]
}

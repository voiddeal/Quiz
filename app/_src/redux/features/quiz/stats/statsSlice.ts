import { createSlice } from "@reduxjs/toolkit"
import type { QuizStats, QuizStatsActionsUpdate } from "@/app/_src/types/models"

const initialState: QuizStats = {
  questions: [],
  userAnswers: [],
  correctAnswers: [],
  userQuizResult: [],
}

const statsSlice = createSlice({
  name: "QuizStats",
  initialState,
  reducers: {
    update: (state, { payload }: QuizStatsActionsUpdate) => {
      return {
        questions: [...state.questions, payload.question],
        userAnswers: [...state.userAnswers, payload.userAnswer],
        correctAnswers: [...state.correctAnswers, payload.correctAnswer],
        userQuizResult: [...state.userQuizResult, payload.userQuizResult],
      }
    },

    reset: () => initialState,
  },
})

export const statsActions = statsSlice.actions
export const statsReducer = statsSlice.reducer

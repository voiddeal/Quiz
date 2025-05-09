import { createSlice } from "@reduxjs/toolkit"
import { QuizSettings } from "@/app/_src/types/models"

const initialState: QuizSettings = {
  category: "",
  difficulty: "",
  type: "",
  amount: 0,
}

const settingsSlice = createSlice({
  name: "QuizSettings",
  initialState: initialState,
  reducers: {
    setCategory: (state, { payload }: { payload: string }) => {
      return (state = {
        ...state,
        category: payload,
      })
    },

    setDifficulty: (state, { payload }: { payload: string }) => {
      return (state = {
        ...state,
        difficulty: payload,
      })
    },

    setType: (state, { payload }: { payload: string }) => {
      return (state = {
        ...state,
        type: payload,
      })
    },

    setAmount: (state, { payload }: { payload: number }) => {
      return (state = {
        ...state,
        amount: payload,
      })
    },

    setToDefault: () => {
      return {
        category: "0",
        difficulty: "easy",
        type: "multiple",
        amount: 7,
      }
    },

    reset: () => initialState,
  },
})

export const settingsActions = settingsSlice.actions
export const settingsReducer = settingsSlice.reducer

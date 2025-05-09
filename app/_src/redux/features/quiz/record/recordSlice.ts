import { createSlice } from "@reduxjs/toolkit"
import type {
  QuizRecord,
  QuizRecordActionAdd,
  QuizRecordSetIsRecording,
} from "@/app/_src/types/models"

const quizRecord: QuizRecord = {
  isRecording: true,
  records: [],
}

const recordSlice = createSlice({
  name: "QuizRecord",
  initialState: quizRecord,
  reducers: {
    setIsRecording: (state, { payload }: QuizRecordSetIsRecording) => {
      state.isRecording = payload
    },
    add: (state, { payload }: QuizRecordActionAdd) => {
      state.records.push(payload)
    },

    clean: (state) => {
      state.records = []
    },
  },
})

export const recordActions = recordSlice.actions
export const recordReducer = recordSlice.reducer

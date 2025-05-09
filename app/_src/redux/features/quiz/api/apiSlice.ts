import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { QuizData } from "@/app/_src/types/models"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getQuiz: builder.query<QuizData, string>({
      query: (URL) => URL,
    }),
  }),
})

export const { useGetQuizQuery } = apiSlice

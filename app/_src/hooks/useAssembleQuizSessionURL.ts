import { useAppSelector } from "@/app/_src/redux/hooks"
import { QuizSettings } from "@/app/_src/types/models"

const useAssembleQuizSessionURL = (): {
  isURLValid: boolean
  URL: string
  type: string
} => {
  const quizSettings: QuizSettings = useAppSelector(
    (state) => state.settingsReducer
  )
  const { category, difficulty, type, amount }: QuizSettings = quizSettings
  const isURLValid: boolean = Boolean(category && difficulty && type && amount)
  const URL: string = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

  return {
    isURLValid,
    URL,
    type,
  }
}

export default useAssembleQuizSessionURL

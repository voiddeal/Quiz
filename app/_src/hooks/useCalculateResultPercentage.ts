import { useAppSelector } from "@/app/_src/redux/hooks"
import { calculateResultPercentage } from "@/app/_src/types/models"

const useCalculateResultPercentage = (): calculateResultPercentage => {
  const { userQuizResult } = useAppSelector((state) => state.statsReducer)
  const { amount } = useAppSelector((state) => state.settingsReducer)
  const correctAnswersLength = userQuizResult.filter((result) => result).length
  const percentage: number = Math.round(
    (correctAnswersLength / userQuizResult.length) * 100
  )

  return {
    percentage,
    correctAnswersLength,
    total: amount,
  }
}

export default useCalculateResultPercentage

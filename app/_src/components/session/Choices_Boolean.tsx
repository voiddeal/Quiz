import { MouseEvent } from "react"
import { useDispatch } from "react-redux"
import { statsActions } from "@/app/_src/redux/features/quiz/stats/statsSlice"
import { ChoicesProps } from "@/app/_src/types/components"
import { FaCheck, FaXmark } from "react-icons/fa6"

const Choices_Boolean: React.FC<Omit<ChoicesProps, "incorrectAnswers">> = ({
  correctAnswer,
  setSessionProgressTracker,
  question,
}) => {
  const dispatch = useDispatch()
  const handleChoiceSelection = (e: MouseEvent<HTMLDivElement>) => {
    const userAnswer = e.currentTarget.dataset.answer!
    const isUserAnswerCorrect = userAnswer == correctAnswer
    dispatch(
      statsActions.update({
        question,
        userAnswer,
        correctAnswer,
        userQuizResult: isUserAnswerCorrect,
      })
    )

    setSessionProgressTracker((state) => {
      return {
        ...state,
        current: state.current + 1,
      }
    })
  }

  return (
    <div className="w-6/12 h-3/5 flex items-center gap-x-2 m-auto">
      {/* True */}
      <div
        className="w-6/12 h-3/6 flex justify-center items-center bg-teal-900 bg-opacity-60 hover:bg-opacity-100 transition-colors rounded-2xl cursor-pointer"
        data-answer="True"
        onClick={(e) => handleChoiceSelection(e)}
      >
        <FaCheck className="scale-[5] text-green-600" />
      </div>
      {/* False */}
      <div
        className="w-6/12 h-3/6 flex justify-center items-center bg-rose-900 bg-opacity-60 hover:bg-opacity-100 transition-colors rounded-2xl cursor-pointer"
        data-answer="False"
        onClick={(e) => handleChoiceSelection(e)}
      >
        <FaXmark className="scale-[5] text-red-600" />
      </div>
    </div>
  )
}

export default Choices_Boolean

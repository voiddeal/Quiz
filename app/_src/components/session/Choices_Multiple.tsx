import { useDispatch } from "react-redux"
import { statsActions } from "@/app/_src/redux/features/quiz/stats/statsSlice"
import { ChoicesProps } from "@/app/_src/types/components"

const Choices_Multiple: React.FC<ChoicesProps> = ({
  setSessionProgressTracker,
  question,
  correctAnswer,
  incorrectAnswers,
}) => {
  const dispatch = useDispatch()
  const chioceElements = Array.from([...incorrectAnswers, correctAnswer])
    .sort(() => Math.random() - 0.5)
    .map((choice, index) => (
      <div
        className="w-5/6 h-12 flex justify-center items-center bg-pink-600 bg-opacity-80 text-white cursor-pointer hover:bg-opacity-100 px-2"
        key={index}
        onClick={() => handleChoiceSelecting(choice)}
      >
        {choice}
      </div>
    ))

  const handleChoiceSelecting = (userAnswer: string) => {
    const isUserAnswerCorrect = userAnswer === correctAnswer
    dispatch(
      statsActions.update({
        question,
        userAnswer,
        correctAnswer,
        userQuizResult: isUserAnswerCorrect,
      })
    )

    setSessionProgressTracker!((state) => {
      return {
        ...state,
        current: state.current + 1,
      }
    })
  }

  return (
    <div className="w-full h-3/5 flex flex-col justify-center gap-y-2 items-center">
      {chioceElements}
    </div>
  )
}

export default Choices_Multiple

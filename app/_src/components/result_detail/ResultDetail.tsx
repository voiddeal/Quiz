import type { ResultDetailProps } from "@/app/_src/types/components"
import { JSX } from "react"
import { BsChevronDoubleDown } from "react-icons/bs"
import { FaCheck, FaXmark } from "react-icons/fa6"
import "./result-detail.css"

const ResultDetail: React.FC<ResultDetailProps> = ({
  resultDetailDisplay = true,
  setResultDetailDisplay,
  questions,
  correctAnswers,
  userAnswers,
  userQuizResult,
  type,
}) => {
  const determineType: "multiple" | "boolean" =
    type ||
    (userAnswers[0] === "False" || userAnswers[0] === "True"
      ? "boolean"
      : "multiple")
  //create table rows
  const result: JSX.Element[] = questions.map((question, index) => {
    const correctOrIncorrect = userQuizResult[index] ? "correct" : "incorrect"
    return (
      <tr className="table__row" key={index}>
        <td className="table__element">{question}</td>
        {determineType === "boolean" ? (
          // if type is boolean
          <td className={`table__element ${correctOrIncorrect}`}>
            <div className="flex justify-center items-center p-10">
              {userQuizResult[index] ? (
                <FaCheck className="scale-[3] text-green-600" />
              ) : (
                <FaXmark className="scale-[3] text-red-600" />
              )}
            </div>
          </td>
        ) : (
          // if type is multiple
          <>
            {/* user answer */}
            <td className={`table__element ${correctOrIncorrect} w-fit`}>
              {userAnswers[index]}
            </td>
            {/* correct answer */}
            <td className={`table__element ${correctOrIncorrect} w-fit`}>
              {correctAnswers[index]}
            </td>
          </>
        )}
      </tr>
    )
  })

  return (
    <div
      className={`quiz-result-page__detail md:px-4 px-0 ${
        resultDetailDisplay ? "show" : ""
      }`}
    >
      <table className="table">
        <thead className="table__head sticky top-0 bg-gray-800 z-10 bg-opacity-95 backdrop-blur-sm">
          <tr className="table__row">
            <th className="head__element">Question</th>
            {determineType === "multiple" ? (
              <>
                <th className="head__element">Your Answer</th>
                <th className="head__element">Correct Answer</th>
              </>
            ) : (
              <th>Result</th>
            )}
          </tr>
        </thead>
        <tbody className="table__body sm:text-base text-sm">{result}</tbody>
      </table>
      {setResultDetailDisplay ? (
        <div
          className="score-hide-detail text-teal-500 hover:text-teal-400 z-50"
          title="Back"
          onClick={() => setResultDetailDisplay(false)}
        >
          <BsChevronDoubleDown className="score-hide-detail__btn" />
        </div>
      ) : null}
    </div>
  )
}

export default ResultDetail

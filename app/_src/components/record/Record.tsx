"use client"

import ResultDetail from "@/app/_src/components/result_detail/ResultDetail"
import ResultScoreDemo from "@/app/_src/components/result_score_demo/ResultScoreDemo"
import cetegories from "@/app/_src/db/categories.json"
import { recordActions } from "@/app/_src/redux/features/quiz/record/recordSlice"
import { useAppDispatch, useAppSelector } from "@/app/_src/redux/hooks"
import type { ShowRecordDetail } from "@/app/_src/types/components"
import { JSX, MouseEvent, useState } from "react"
import { FaTrashCan } from "react-icons/fa6"
import { scoreColor } from "../../uils/score-color"

const Record: React.FC = () => {
  const { records, isRecording } = useAppSelector(
    (state) => state.recordReducer
  )
  const [detail, setDetail] = useState<JSX.Element | null>()
  const dispatch = useAppDispatch()
  const enabledRecording = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void => {
    if (isRecording) {
      e.currentTarget.textContent = "Already Enabled!"
      return
    }
    dispatch(recordActions.setIsRecording(true))
    e.currentTarget.textContent = "Now Enabled"
    e.currentTarget.classList.add("bg-teal-600")
  }

  // if record is empty
  if (records.length === 0)
    return (
      <div className="flex flex-col gap-y-4 w-full h-full justify-center items-center text-white">
        <span className="text-4xl">No Record Found!</span>
        <span>
          :: make sure recording is enabled before finishing your quiz ::
        </span>
        <button
          className="text-white px-4 py-2 text-lg rounded-md bg-teal-800 bg-opacity-80 hover:bg-opacity-100"
          onClick={(e) => enabledRecording(e)}
        >
          Enable
        </button>
      </div>
    )

  const showRecordDetail = ({
    questions,
    correctAnswers,
    answers,
    result,
  }: ShowRecordDetail): void => {
    setDetail(() => {
      return (
        <ResultDetail
          correctAnswers={correctAnswers}
          questions={questions}
          userAnswers={answers}
          userQuizResult={result}
        />
      )
    })
  }

  const sideItems = records.map((record, index) => {
    const {
      answers,
      correct,
      correctAnswers,
      percentage,
      questions,
      result,
      total,
      category,
      difficulty,
      type,
    } = record
    const cate = cetegories.find((c) => c.id == category)
    const color = scoreColor(percentage)

    return (
      <div
        key={index}
        onClick={() => {
          showRecordDetail({ questions, correctAnswers, answers, result })
        }}
        className="w-full h-[4.2rem] flex items-center justify-center bg-gray-100 my-8 p-1 cursor-pointer gap-x-3"
      >
        <ResultScoreDemo
          className="w-2/5"
          percentage={percentage}
          size={0.4}
          color={color}
        />
        {/* tags */}
        <div className="w-2/5 text-sm text-white">
          {/* category */}
          <small
            className="rounded-sm bg-indigo-500 px-2 overflow-hidden whitespace-nowrap text-ellipsis block w-full text-center"
            title={cate?.value}
          >
            {cate?.value}
          </small>
          {/* difficulty */}
          <small
            className={`w-fit rounded-sm px-2 capitalize mx-px ${
              difficulty === "easy"
                ? "bg-green-600"
                : difficulty === "medium"
                ? "bg-yellow-600"
                : "bg-red-800"
            }`}
          >
            {difficulty}
          </small>
          {/* summery */}
          <small
            className={`w-fit rounded-sm px-2 mx-px ${
              color === "#ffff38" ? "text-black" : "text-white"
            }`}
            style={{ backgroundColor: color }}
          >
            {correct}/{total}
          </small>
          {/* type */}
          <small className="block w-fit rounded-sm bg-indigo-500 px-2 capitalize">
            {type}
          </small>
        </div>
      </div>
    )
  })

  return (
    <div className="w-full h-screen flex text-white overflow-hidden">
      {/* side */}
      <div className="w-[33%] md:w-[30%] lg:w-1/4 h-screen bg-teal-900 bg-opacity-80 backdrop-blur-[2px] overflow-y-auto overflow-x-hidden md:ml-4">
        <div
          className="h-8 w-full bg-teal-600 sticky top-0 z-10 flex justify-center items-center cursor-pointer hover:text-red-400"
          onClick={() => dispatch(recordActions.clean())}
          title="clear all records"
        >
          <button data-testid="clear-record">
            <FaTrashCan />
          </button>
        </div>
        {sideItems}
      </div>
      {/* detail */}
      <div className="w-[67%] md:w-[70%] lg:w-3/4 relative">
        {detail ? (
          detail
        ) : (
          <div className="w-full h-full flex justify-center items-center text-2xl px-10">
            Select a record and the details will be shown here.
          </div>
        )}
      </div>
    </div>
  )
}

export default Record

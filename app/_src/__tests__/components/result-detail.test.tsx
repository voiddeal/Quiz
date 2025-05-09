import ResultDetail from "@/app/_src/components/result_detail/ResultDetail"
import { render, screen } from "@/app/_src/uils/test-utils"

describe("ResultDetail", () => {
  test("renders detail for type multiple ", () => {
    const questions = ["Question1"]
    const correctAnswers = ["correctAnswers1"]
    const userAnswers = ["userAnswers1"]
    const type = "multiple"
    const userQuizResult = [false]

    render(
      <ResultDetail
        questions={questions}
        correctAnswers={correctAnswers}
        userAnswers={userAnswers}
        type={type}
        userQuizResult={userQuizResult}
      />
    )

    const table = screen.getByRole("table")
    const tableHeadRow = screen.getByRole("row", {
      name: "Question Your Answer Correct Answer",
    })
    const row = screen.getByRole("row", {
      name: "Question1 userAnswers1 correctAnswers1",
    })
    expect(table).toBeInTheDocument()
    expect(tableHeadRow).toBeInTheDocument()
    expect(row).toBeInTheDocument()
  })

  test("renders detail for type boolean ", () => {
    const questions = ["Question1"]
    const correctAnswers = ["correctAnswers1"]
    const userAnswers = ["userAnswers1"]
    const type = "boolean"
    const userQuizResult = [false]

    render(
      <ResultDetail
        questions={questions}
        correctAnswers={correctAnswers}
        userAnswers={userAnswers}
        type={type}
        userQuizResult={userQuizResult}
      />
    )

    const table = screen.getByRole("table")
    const tableHeadRow = screen.getByRole("row", {
      name: "Question Result",
    })
    const row = screen.getByRole("row", {
      name: "Question1",
    })
    expect(table).toBeInTheDocument()
    expect(tableHeadRow).toBeInTheDocument()
    expect(row).toBeInTheDocument()
  })
})

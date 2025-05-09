import { act, render, screen } from "@/app/_src/uils/test-utils"
import user from "@testing-library/user-event"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import Record from "@/app/_src/components/record/Record"
import {
  recordReducer,
  recordActions,
} from "@/app/_src/redux/features/quiz/record/recordSlice"

const mockStore = configureStore({
  reducer: {
    recordReducer,
  },
})

const dispatchBash = () => {
  const dispatch = mockStore.dispatch
  dispatch(recordActions.clean())
  dispatch(
    recordActions.add({
      answers: ["Answer 1"],
      correct: 1,
      correctAnswers: ["Correct Answer 1"],
      percentage: 100,
      questions: ["Question 1"],
      result: [true],
      total: 1,
      category: "0",
      difficulty: "easy",
      type: "multiple",
    })
  )
}

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<Provider store={mockStore}>{ui}</Provider>)
}

describe("Record", () => {
  test("renders NO RECORD message when there are no records", () => {
    renderWithProviders(<Record />)

    expect(screen.getByText(/NO RECORD/)).toBeInTheDocument()
  })

  test("renders records", () => {
    dispatchBash()
    renderWithProviders(<Record />)
    const difficultyFlag = screen.getByText(/easy/i)
    const categoryFlag = screen.getByText("Any Category")
    const summeryFlag = screen.getByText("1/1")
    const typeFlag = screen.getByText(/multiple/i)
    expect(difficultyFlag).toBeInTheDocument()
    expect(categoryFlag).toBeInTheDocument()
    expect(summeryFlag).toBeInTheDocument()
    expect(typeFlag).toBeInTheDocument()
  })

  test("renders record detail on click on a record", async () => {
    dispatchBash()
    renderWithProviders(<Record />)
    const difficultyFlag = screen.getByText("easy")
    await act(async () => await user.click(difficultyFlag))
    const question = await screen.findByText(/Question 1/)
    expect(question).toBeInTheDocument()
  })

  test("renders clear button", async () => {
    renderWithProviders(<Record />)
    const clearBTN = screen.getByTestId("clear-record")
    expect(clearBTN).toBeInTheDocument()
  })

  test("clears records when the Clear button is clicked", async () => {
    dispatchBash()
    renderWithProviders(<Record />)
    const clearBTN = screen.getByTestId("clear-record")
    await user.click(clearBTN)
    const noRecord = screen.getByText(/NO RECORD /)
    expect(noRecord).toBeInTheDocument()
  })
})

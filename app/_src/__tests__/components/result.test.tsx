import { render, screen } from "@/app/_src/uils/test-utils"
import user from "@testing-library/user-event"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import Result from "@/app/_src/components/result/Result"
import {
  statsReducer,
  statsActions,
} from "@/app/_src/redux/features/quiz/stats/statsSlice"
import {
  settingsActions,
  settingsReducer,
} from "@/app/_src/redux/features/quiz/settings/settingsSlice"

const mockStore = configureStore({
  reducer: {
    statsReducer,
    settingsReducer,
  },
})

const dispatchBash = () => {
  const dispatch = mockStore.dispatch
  dispatch(settingsActions.reset())
  dispatch(settingsActions.setAmount(1))
  dispatch(settingsActions.setCategory("0"))
  dispatch(settingsActions.setDifficulty("easy"))
  dispatch(settingsActions.setType("multiple"))
  dispatch(statsActions.reset())
  dispatch(
    statsActions.update({
      question: "Question1",
      correctAnswer: "CorrectAnswer1",
      userAnswer: "userAnswer1",
      userQuizResult: false,
    })
  )
}

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<Provider store={mockStore}>{ui}</Provider>)
}

describe("Result", () => {
  test("renders summery", () => {
    dispatchBash()
    renderWithProviders(<Result />)
    const textMatcher: (content: string, element: Element | null) => boolean = (
      _content,
      element
    ) => {
      if (!element) return false
      const hasText = (node: Element) => node.textContent === "0 / 1"
      const nodeHasText = hasText(element)
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child)
      )

      return nodeHasText && childrenDontHaveText
    }

    const summery = screen.getByText(textMatcher)
    expect(summery).toBeInTheDocument()
  })

  describe("demo", () => {
    test("renders heading", () => {
      renderWithProviders(<Result />)
      const heading = screen.getByRole("heading", { name: /Your Score/ })
      expect(heading).toBeInTheDocument()
    })

    test("renders percentage", () => {
      dispatchBash()
      renderWithProviders(<Result />)
      const percentage = screen.getByText("0%")
      expect(percentage).toBeInTheDocument()
    })

    test("renders the detail button", async () => {
      dispatchBash()
      renderWithProviders(<Result />)
      const detailButton = screen.getByText("Detail", { selector: "p" })
      await user.click(detailButton)
      const table = await screen.findByRole("table")
      expect(table).toBeInTheDocument()
    })
  })
})

import { render, screen } from "@/app/_src/uils/test-utils"
import Settings from "@/app/_src/components/settings/Settings"

describe("Settings", () => {
  test("renders the heading and a paragraph", () => {
    render(<Settings />)
    const paragraph = screen.getByText(/Select Difficulty/)
    const heading = screen.getByRole("heading", {
      name: /Configuration/,
    })

    expect(heading).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
  })

  test("renders difficulties", () => {
    render(<Settings />)
    const paragraph = screen.getByText(/Select Difficulty/)
    const easy = screen.getByLabelText("Easy")
    const medium = screen.getByLabelText("Medium")
    const difficlut = screen.getByLabelText("Difficult")

    expect(paragraph).toBeInTheDocument()
    expect(easy).toBeInTheDocument()
    expect(medium).toBeInTheDocument()
    expect(difficlut).toBeInTheDocument()
  })

  test("renders types", () => {
    render(<Settings />)
    const paragraph = screen.getByText(/Select Type/)
    const multiple = screen.getByLabelText("Multiple")
    const bool = screen.getByLabelText("True | False")

    expect(paragraph).toBeInTheDocument()
    expect(multiple).toBeInTheDocument()
    expect(bool).toBeInTheDocument()
  })

  test("renders range", () => {
    render(<Settings />)
    const range = screen.getByRole("slider")

    expect(range).toBeInTheDocument()
  })

  test("renders start button", () => {
    render(<Settings />)
    const button = screen.getByRole("button", {
      name: /Start Your Quiz Session/i,
    })

    expect(button).toBeInTheDocument()
  })
})

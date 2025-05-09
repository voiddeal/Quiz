import { render, screen } from "@/app/_src/uils/test-utils"
import About from "@/app/_src/components/about/About"

describe("About", () => {
  test("renders api link", () => {
    render(<About />)
    const link = screen.getByRole("link", { name: "opentdb" })
    expect(link).toBeInTheDocument()
  })

  test("render list of tools", () => {
    render(<About />)
    expect(screen.getByText("Next.js")).toBeInTheDocument()
    expect(screen.getByText("Typescript")).toBeInTheDocument()
    expect(
      screen.getByText("Redux Toolkit & Redux Toolkit Query")
    ).toBeInTheDocument()
    expect(screen.getByText("Tailwind + Custom CSS")).toBeInTheDocument()
    expect(screen.getByText("Unit Testing with Jest and React Testing Library"))
  })

  test("renders minor packages list", () => {
    render(<About />)
    expect(screen.getByText("react-countup")).toBeInTheDocument()
    expect(screen.getByText("react-icons")).toBeInTheDocument()
    expect(screen.getByText("html-entities")).toBeInTheDocument()
  })
})

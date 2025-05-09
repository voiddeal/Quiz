import { render, screen } from "@/app/_src/uils/test-utils"
import SideNav from "@/app/@sideNav/page"

describe("Side Nav", () => {
  test("renders buttons", () => {
    render(<SideNav />)
    const start = screen.getByRole("button", { name: "Start" })
    const restart = screen.getByRole("button", { name: "Restart" })
    const record = screen.getByRole("button", { name: "Record" })
    const about = screen.getByRole("button", { name: "About" })
    const exit = screen.getByRole("button", { name: "Exit" })

    expect(start).toBeInTheDocument()
    expect(restart).toBeInTheDocument()
    expect(record).toBeInTheDocument()
    expect(about).toBeInTheDocument()
    expect(exit).toBeInTheDocument()
  })
})

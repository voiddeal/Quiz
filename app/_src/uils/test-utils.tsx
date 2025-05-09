import { ReactElement } from "react"
import AppProviders from "../providers/AppProviders"
import { render, RenderOptions } from "@testing-library/react"

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: AppProviders, ...options })
}

export * from "@testing-library/react"
export { customRender as render }

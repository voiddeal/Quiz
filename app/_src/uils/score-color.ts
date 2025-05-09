import { ScoreColors } from "../types/models"

export const scoreColor = (percentage: number): string => {
  const scoreColors: ScoreColors = {
    red: "#ff2727",
    yellow: "#ffff38",
    blue: "#135dff",
    green: "#008100",
  }
  const { red, yellow, green, blue } = scoreColors
  switch (true) {
    case percentage <= 25:
      return red
    case percentage > 25 && percentage <= 50:
      return yellow
    case percentage > 50 && percentage <= 75:
      return blue
    case percentage > 75:
      return green
    default:
      throw new Error("unexpected return")
  }
}

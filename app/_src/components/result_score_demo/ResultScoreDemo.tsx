import { ResultScoreDemoProps } from "@/app/_src/types/components"
import { useEffect, useRef } from "react"

import CountUp from "react-countup"
import "./result-score-demo.css"

const ResultScoreDemo: React.FC<ResultScoreDemoProps> = ({
  percentage,
  color,
  showReaction = false,
  size = 1,
  className,
}) => {
  const scoreBar = useRef<SVGCircleElement>(null)
  const scoreDemo = useRef<HTMLDivElement>(null)
  // 375 is the default stroke-dasharray and stroke-dashoffset
  const scoreBarLengthCalculation: number =
    375 * size - (375 * size * percentage) / 100

  const scoreReactionText = (): string => {
    const perc = percentage
    switch (true) {
      case perc <= 25:
        return "Uhh... Don't worry! Maybe try again?"
      case perc > 25 && perc <= 50:
        return "Nice try! Want to do another?"
      case perc > 50 && perc <= 75:
        return 'Awesome! You "DO" know things!'
      case perc > 75:
        return "Perfect! You should probably give yourself a treat!"
      default:
        return "oops something went wrong"
    }
  }

  useEffect(() => {
    scoreBar.current!.style.setProperty(
      "--calc",
      scoreBarLengthCalculation.toString()
    )
    scoreBar.current!.style.setProperty("--mult", size.toString())
    scoreDemo.current!.style.setProperty("--mult", size.toString())
    scoreDemo.current!.style.width = `${200 * size}px`
    scoreDemo.current!.style.height = `${200 * size}px`
  }, [size, scoreBarLengthCalculation])

  return (
    <div
      className={`flex justify-center items-center gap-3 flex-col ${className}`}
    >
      {/* demo */}
      <div
        className="flex justify-center items-center relative rounded-full score__score-demo"
        title={`${percentage.toString()}%`}
        ref={scoreDemo}
      >
        <div className="score-demo__bg absolute w-full h-full rounded-full bg-pink-300"></div>
        <div className="score-demo__score-bar absolute rounded-full">
          <svg className="score-bar__svg">
            <circle
              style={{ stroke: color }}
              cx={70 * size}
              cy={70 * size}
              r={60 * size}
              className="score-bar__bar"
              ref={scoreBar}
            />
          </svg>
        </div>
        <CountUp
          className="score-demo__score-precentage"
          delay={0.3}
          end={percentage}
          suffix={"%"}
          style={{ color: color }}
        />
      </div>
      {/* the text below the demo */}
      {showReaction ? (
        <div className="text-white mt-3">:: {scoreReactionText()} ::</div>
      ) : null}
    </div>
  )
}

export default ResultScoreDemo

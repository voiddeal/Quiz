"use client"

import { useAppSelector } from "@/app/_src/redux/hooks"
import Main from "@/app/_src/components/main/Main"
import Category from "@/app/_src/components/category/Category"
import Settings from "@/app/_src/components/settings/Settings"
import Session from "@/app/_src/components/session/Session"
import Result from "@/app/_src/components/result/Result"
import Record from "@/app/_src/components/record/Record"
import About from "@/app/_src/components/about/About"
import NotFound from "@/app/not-found"

const QuizPage: React.FC = () => {
  const QuizCurrentState = useAppSelector((state) => state.mapReducer)

  const switcher = () => {
    switch (QuizCurrentState) {
      case "main":
        return <Main />
      case "category":
        return <Category />
      case "settings":
        return <Settings />
      case "session":
        return <Session />
      case "result":
        return <Result />
      case "record":
        return <Record />
      case "about":
        return <About />
      default:
        return <NotFound></NotFound>
    }
  }
  return <div className="flex-1 relative overflow-hidden">{switcher()}</div>
}

export default QuizPage

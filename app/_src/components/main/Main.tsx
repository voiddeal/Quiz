"use client"

import quotes from "@/app/_src/db/quotes.json"
import { useEffect, useState } from "react"

const Main = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null)
  const quote = randomNumber !== null ? quotes[randomNumber] : ""

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRandomNumber(Math.floor(Math.random() * quotes.length))
    }
  }, [])

  return (
    <div className="text-white flex flex-col items-center justify-center h-full gap-y-10">
      {quote && (
        <div className="w-fit flex justify-center items-center flex-col px-8 h-40 bg-gradient-to-b from-[#00000060] to-transparent bg-opacity-25 backdrop-blur-md md:mx-8">
          <h4 className="text-center text-xl py-4">{quote[0]}</h4>
          <p className="self-end">— {quote[1]}</p>
        </div>
      )}
      <div className="bg-black bg-opacity-10 backdrop-blur-md p-3">
        Click on the Start button to start your Quiz
      </div>
    </div>
  )
}

export default Main

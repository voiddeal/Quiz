import { FaGithub } from "react-icons/fa6"

const About: React.FC = () => {
  return (
    <div className="text-white flex flex-col w-full h-full items-center justify-center ">
      <p className="text-xl">
        :: Powered By{" "}
        <a href="https://opentdb.com" className="underline hover:text-blue-500">
          opentdb
        </a>{" "}
        ::
      </p>
      <br />
      <div className="self-start"></div>
      <ol className="list-inside list-disc">
        <p>Put together by :</p>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Redux Toolkit & Redux Toolkit Query</li>
        <li>Tailwind + Custom CSS</li>
        <li>Unit Testing with Jest and React Testing Library</li>
        <br />
        <p>Minor Packages :</p>
        <li>
          <a
            href="https://www.npmjs.com/package/react-countup"
            className="underline hover:text-blue-500"
          >
            react-countup
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/react-icons"
            className="underline hover:text-blue-500"
          >
            react-icons
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/html-entities"
            className="underline hover:text-blue-500"
          >
            html-entities
          </a>
        </li>
      </ol>
      <div className="mt-10 flex gap-8">
        <a
          href="https://github.com/TraumaClown/Quiz"
          className="hover:text-blue-500 text-4xl"
        >
          <FaGithub />
        </a>
        <a
          href="http://quizapp.kesug.com/"
          className="underline hover:text-blue-500 text-2xl"
        >
          Deployed on InfinityFree{" "}
          <small className="text-sm">(vpn required)</small>
        </a>
      </div>
    </div>
  )
}

export default About

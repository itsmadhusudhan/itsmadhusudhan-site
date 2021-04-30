import React from "react"

import Layout from "../components/layout"

import Github from "../images/github-icon.svg"
import Twitter from "../images/twitter.svg"

const IndexPage = () => (
  <Layout>
    {/* <header className="py-2 mx-auto ">
      <Link to="/" className="text-3xl text-purple-500">
        Madhusudhan
      </Link>
    </header> */}
    <div className="py-6 mx-auto md:max-w-4xl">
      <div className="text-center">
        <p className="text-xl">Hello 👋,</p>
        <h1 className="mb-3 text-4xl">I'm Madhusudhan,</h1>
        <p className="mb-5 text-gray-500 dark:text-gray-200">
          A front end developer from Bangalore.
        </p>
      </div>

      <div className="text-lg text-gray-500 dark:text-gray-200">
        <p className="mb-5">
          I love web development. I enjoy building stuff that interests me 🚀. I
          believe in using right tools for the right job.
        </p>

        <p className="mb-5">
          Currently I'm creating content on{" "}
          <a
            href="https://www.youtube.com/channel/UCe7Z9PVtEplNAIo2jTZZp7g"
            className="text-red-500"
            target="__blank"
          >
            Coding Titan
          </a>{" "}
          and also working on something fun and I'm super excited for the day to
          showcase it.
        </p>

        <div className="flex flex-col items-center">
          <p className="mb-5">You can contact me on</p>
          <div className="flex items-center">
            <a href="https://github.com/itsmadhusudhan" target="__blank">
              <Github
                fill="#fff"
                className="mr-8 dark:bg-white"
                height="48px"
                width="48px"
              />
            </a>
            <a href="https://twitter.com/itsmadhusudhan" target="__blank">
              <Twitter height="48px" width="48px" />
            </a>
          </div>
        </div>

        {/* <p>
          An Electronics Engineer by degree but I love creating beautiful user
          interfaces. My interest on web development started after graduation
          and till now there has been a lot surprising things as I dig deeper.
        </p> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage

import React from "react"
import SEO from "./seo"

type Props = {
  children: React.ReactNode
  title?: string
}

const Layout = ({ children, title = "Madhusudhan" }: Props) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <SEO title={title} heading="Web Developer" />
      <main className="h-screen px-4 mx-auto transition-all dark:bg-gray-800 dark:text-white">
        {children}
      </main>
      {/* <footer>This is a footer</footer */}
    </>
  )
}

export default Layout

import React from "react"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
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
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

// import Header from "./header"
import "./layout.css"

const LinkContainer = styled.div`
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #ccc;
  li {
    display: inline;
    margin: 0px;
    margin-right: 12px;
    a {
      text-decoration: none;
      color: #546a8b;
    }
    .active {
      color: #131b27;
      border-bottom: 2px solid #131b27;
    }
  }
`

const NavigationBar = () => (
  <LinkContainer>
    <li>
      <Link to="/" activeClassName="active">
        All
      </Link>
    </li>
    <li>
      <Link to="/cafes" activeClassName="active">
        Cafes
      </Link>
    </li>
    <li>
      <Link to="/bars" activeClassName="active">
        Bars
      </Link>
    </li>
    <li>
      <Link to="/restaurants" activeClassName="active">
        Restaurants
      </Link>
    </li>
  </LinkContainer>
)

const Layout = ({ children }) => {
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
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <NavigationBar />
        <main>{children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

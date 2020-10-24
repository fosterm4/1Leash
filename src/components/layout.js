/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import WebHeader from "./web-header"
import "./css/layout.css"

const Layout = ({ children }) => {

  return (
    <>
        <WebHeader />
        <main>{children}</main>
        <div id = "footer">
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


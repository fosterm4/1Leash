/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import MediaQuery from 'react-responsive'
import React from "react"
import PropTypes from "prop-types"
import WebHeader from "./web-header"
import "./css/layout.css"
import MobileHeader from "./mobile-header"
import Footer from "./footer"

const Layout = ({ children }) => {

  return (
    <>
      <MediaQuery query="(min-device-width: 769px)">
        <WebHeader />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 768px)">
        <MobileHeader/>
      </MediaQuery>
      <main>{children}</main>
      <div id="footer">
      <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


import React from "react"

import Layout from "../components/layout"
import '../components/css/shop.css'
//import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const ContactPage = () => (
  <StaticQuery
    query={graphql`
  query {
    desktop: file(relativePath: { eq: "night-sky-2116521_1920.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`}

    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <Layout>
          <div className="onBackground">
            <BackgroundImage
              className="onBackground"
              fluid={imageData}
              backgroundColor={`#040e18`}
            ></BackgroundImage>
            <h2>
                Cut out the middle man.
              </h2>
          </div>
          <div className="Cards">
            <h2>Join our Growing Community of Farmers and Ranchers today</h2>
          </div>
          <div className="contactForm">
          </div>
        </Layout>
      )
    }}
  />
)



export default ContactPage
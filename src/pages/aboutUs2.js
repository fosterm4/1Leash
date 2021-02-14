import React from "react"

import Layout from "../components/layout"
import '../components/css/aboutUs.css'
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"

const AboutUs2 = (props) => (
  <Layout>
    <SEO title="About Us" />
    <div className="background">
      <BackgroundImage
        className="background"
        fluid={props.data.backgroundImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
      </BackgroundImage>
    </div>
    <div className="title">
      <h2>ABOUT US</h2>
    </div>
  </Layout>
)

export default AboutUs2;

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "droneHunter.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
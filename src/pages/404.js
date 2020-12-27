import React from "react"

import Layout from "../components/layout"
import '../components/css/404.css'
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const PageNotFound = (props) => (
  <Layout>
    <div className="background">
      <BackgroundImage
        className="background"
        fluid={props.data.backgroundImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
      </BackgroundImage>
    </div>
    <div className="title">
      <h2>PAGE NOT FOUND</h2>
    </div>
  </Layout>
)

export default PageNotFound;

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
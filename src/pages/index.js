import React from "react"

import Layout from "../components/layout"
import '../components/css/index.css'
import BackgroundImage from "gatsby-background-image"
import MediaQuery from 'react-responsive'
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <MediaQuery query="(min-device-width: 769px)">
      <div className="webBackground">
      <BackgroundImage
          className="background"
          fluid={props.data.backgroundImage1.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          style={{
            height: "740px"
          }}
        >
        </BackgroundImage>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 768px)">
      <div className="mobileBackground">
        <BackgroundImage
          className="background"
          fluid={props.data.backgroundImage2.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          style={{
            height: "665px"
          }}
        >
        </BackgroundImage>
      </div>
    </MediaQuery>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    backgroundImage1: file(relativePath: { eq: "frontpage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    backgroundImage2: file(relativePath: { eq: "frontpage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
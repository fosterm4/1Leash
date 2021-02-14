import React from "react"

import Layout from "../components/layout"
import '../components/css/index.css'
import BackgroundImage from "gatsby-background-image"
import MediaQuery from 'react-responsive'
import SEO from "../components/seo"
import { Link } from "gatsby"
import swivel from "../images/swivel.jpg"
import sponsors from "../images/sponsors.jpg"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="indexBackground">
    <MediaQuery query="(min-device-width: 1440px)">
        <div className="webBackground">
          <BackgroundImage
            className="background"
            fluid={props.data.backgroundImage2.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            style={{
              height: "740px"
            }}
          >
          </BackgroundImage>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1439px)">
        <div className="mobileBackground">
          <BackgroundImage
            className="background"
            fluid={props.data.backgroundImage1.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            style={{
              height: "665px"
            }}
          >
          </BackgroundImage>
        </div>
      </MediaQuery>
    </div>
    <div className="indexTitle">
      <h2>1Leash</h2>
    </div>
    <div className="AboutUs">
      <h2>Multiple dogs. One leash. Easier walks.</h2>
      <div className="swivelPic">
        <div id="swivelText">
          <h3>The secret is in the patented swivel...</h3>
          <p>This patented swivel feature allows for both dogs to walk or run completely tangle free.</p>
        </div>
        <img src={swivel} />
      </div>

      <h2>As seen and featured in the following places...</h2>
      <img src={sponsors} />
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    backgroundImage1: file(relativePath: { eq: "intense.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    backgroundImage2: file(relativePath: { eq: "pile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
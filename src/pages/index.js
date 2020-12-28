import React from "react"

import Layout from "../components/layout"
import IndexVid from "../images/videos/medIndex.mp4"
import '../components/css/index.css'
import BackgroundImage from "gatsby-background-image"
import MediaQuery from 'react-responsive'

const IndexPage = (props) => (
  <Layout>
    <MediaQuery query="(min-device-width: 769px)">
      <video
        id="backgroundVideo"
        loop
        muted
        autoPlay
      >
        <source
          src={IndexVid}
          type="video/mp4"
        />
      </video>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 768px)">
      <div className="indexImage">
        <BackgroundImage
          className="background"
          fluid={props.data.backgroundImage.childImageSharp.fluid}
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
    backgroundImage: file(relativePath: { eq: "runPoint.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
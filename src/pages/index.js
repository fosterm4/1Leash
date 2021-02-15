import React from "react"

import Layout from "../components/layout"
import '../components/css/index.css'
import BackgroundImage from "gatsby-background-image"
import MediaQuery from 'react-responsive'
import SEO from "../components/seo"
import swivel from "../images/swivel.jpg"
import sponsors from "../images/sponsors.jpg"
import ImageGallery from 'react-image-gallery';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="indexBackground">
      <MediaQuery query="(min-device-width: 1440px)">
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
        <img src={swivel} alt="swivel"/>
      </div>

      <h2>As seen and featured in the following places...</h2>
      <img src={sponsors} alt="sponsors"/>
      <h2>Happy customers enjoying 1Leash below...</h2>
      <div>
        <ImageGallery items={GalleryArray(props)} showFullscreenButton={false} lazyLoad={true} showPlayButton={false} />
      </div>
    </div>
  </Layout>
)

export default IndexPage

function GalleryArray(props) {
  console.log("PROPS");
  console.log(props.data.allSanityGallery.edges[0].node.images);
  let returnArray =[];
  props.data.allSanityGallery.edges[0].node.images.map(image => {
    let imgSrc = image.asset.url;
    returnArray.push(  {
      original: imgSrc,
      thumbnail: imgSrc,
    })
  })
  return returnArray;
}

export const pageQuery = graphql`
  query {
    backgroundImage1: file(relativePath: { eq: "indexBackground.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    allSanityGallery {
      edges {
        node {
          images {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;
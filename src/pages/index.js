import React from "react"

import Layout from "../components/layout"
import '../components/css/index.css'
import BackgroundImage from "gatsby-background-image"
import MediaQuery from 'react-responsive'
import SEO from "../components/seo"
import swivel from "../images/swivel.jpg"
import sponsors from "../images/sponsors.jpg"
import VideoPlayer from '../components/videoPlayer'
import "react-multi-carousel/lib/styles.css";
import StoreFront from "../components/store-front"

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
              height: "450px"
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
              height: "300px"
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
      <h1>More dogs. One leash. Better walks.</h1>
      <div className="swivelPic">
        <div id="swivelText">
          <h3>The secret is in the swivel...</h3>
          <p>This unique swivel feature allows for both dogs to walk or run completely tangle free.</p>
        </div>
        <VideoPlayer url='https://youtu.be/CS1-5boAqLI' />
      </div>
      <div id="seenIn">
        <h2>As seen and featured in the following places...</h2>
      </div>
      <img src={sponsors} alt="sponsors" />
      <h2>View our products below...</h2>
      <StoreFront data={props.data.allSanityProduct}/>
    </div>
  </Layout>
)

export default IndexPage

function GalleryArray(props) {
  console.log("PROPS");
  console.log(props.data.allSanityGallery.edges[0].node.images);
  let returnArray = [];
  props.data.allSanityGallery.edges[0].node.images.map(image => {
    let imgSrc = image.asset.url;
    returnArray.push({
      original: imgSrc,
      thumbnail: imgSrc,
    })
  })
  return returnArray;
}

export const pageQuery = graphql`
  query {
    backgroundImage1: file(relativePath: { eq: "shop.jpeg" }) {
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
    allSanityProduct {
      edges {
        node {
          title
          id
          slug {
            current
          }
          defaultProductVariant {
            price
            images {
              asset {
                url
                fluid {
                  src
                }
              }
            }
          }
          body {
            en {
              children {
                text
              }
            }
          }
        }
      }
    }
  }
`;
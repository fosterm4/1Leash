import React from "react"

import Layout from "../components/layout"
import '../components/css/index.css'
import BackgroundImage from "gatsby-background-image"
import MediaQuery from 'react-responsive'
import SEO from "../components/seo"
import hp1 from "../images/tophp.jpg"
import VideoPlayer from '../components/videoPlayer'
import "react-multi-carousel/lib/styles.css";
import StoreFront from "../components/store-front"
import hp2 from "../images/hp2.jpg"
import Img from "gatsby-image"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="AboutUs">
      <Img fluid={props.data.backgroundImage1.childImageSharp.fluid}/>
      <div className="swivelPic">
        <VideoPlayer url='https://youtu.be/CS1-5boAqLI' />
      </div>
      <Img fluid={props.data.backgroundImage2.childImageSharp.fluid}/>
      <StoreFront data={props.data.allSanityProduct} />
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
    backgroundImage1: file(relativePath: { eq: "tophp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    backgroundImage2: file(relativePath: { eq: "hp2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
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
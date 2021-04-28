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

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="AboutUs">
      <img src={hp1} alt="sponsors" />
      <div className="swivelPic">
        <VideoPlayer url='https://youtu.be/CS1-5boAqLI' />
      </div>
      <img src={hp2} alt="sponsors" />
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
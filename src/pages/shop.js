import React from "react"

import Layout from "../components/layout"
import '../components/css/shop.css'
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import StoreFront from "../components/store-front"
import SEO from "../components/seo"

const Shop = (props) => {
  console.log(props)
  return(
  <Layout>
    <SEO title="Shop" />
    <div className="background">
      <BackgroundImage
        className="background"
        fluid={props.data.backgroundImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
      </BackgroundImage>
    </div>
    <div className="title">
      <h2>SHOP</h2>
    </div>
    <div className="store">
      <StoreFront data={props.data.allSanityProduct}/>
    </div>
  </Layout>
)}

export default Shop;

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "gunbag.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
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
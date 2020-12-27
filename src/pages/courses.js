import React from "react"

import Layout from "../components/layout"
import '../components/css/courses.css'
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Courses = (props) => (
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
      <h2>COURSES</h2>
    </div>
  </Layout>
)

export default Courses;

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "looking.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
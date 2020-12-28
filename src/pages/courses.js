import React from "react"

import Layout from "../components/layout"
import '../components/css/courses.css'
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import CourseCard from "../components/course-card"
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
    <div className="CourseCards">
      <CourseCard title="BEGINNER COURSE (IN DEVELOPMENT)"
        image={props.data.course1.childImageSharp.fluid}
        />
      <CourseCard title="INTERMEDIATE COURSE (IN DEVELOPMENT)"
        image={props.data.course2.childImageSharp.fluid}
        />
      <CourseCard title="ADVANCED COURSE (IN DEVELOPMENT)"
        image={props.data.course3.childImageSharp.fluid}
        />
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
    course1: file(relativePath: { eq: "farpoint.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    course2: file(relativePath: { eq: "whitepoint2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    course3: file(relativePath: { eq: "pairofdogs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
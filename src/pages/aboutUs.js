import React from "react"

import Layout from "../components/layout"
import '../components/css/aboutUs.css'
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import CourseCard from "../components/course-card"
import SEO from "../components/seo"
import Project from '../images/project.jpg'
import Russ from "../images/flush.jpg"
const AboutUs = (props) => (
  <Layout>
    <SEO title="About Us" />
    <div className="background">
      <BackgroundImage
        className="background"
        fluid={props.data.backgroundImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
      </BackgroundImage>
    </div>
    <div className="title">
      <h2>About Us</h2>
    </div>
    <div className="AboutUs">
      <div className="LeashInfo">
        <div id="projectText">
          <h2>The Story... </h2>
          <p>A school project in which the objective was to create something innovative that made peoples lives easier. That was the inception of the Double Dog Leash, and from the first prototype to our finished product, we have been dedicated to giving multiple dog owners the best tangle free dog walking solution.</p>
        </div>
        <div id="projectImg">
          <img src={Project} />
        </div>
      </div>
      <div className="PeopleInfo">
        <h2>Meet the family behind 1Leash</h2>
        <p>We really are a family business! There is nothing better in our opinion then creating something that you are passionate about with people you care about, while having fun selling a product you believe in.</p>
      </div>
    </div>
    <div className="PeopleCards">
      <CourseCard title="Michael Mann" description="Michael is currently a redshirt junior and plays for the Duke University football team. Michael is studying Visual Media Studies and Markets and Management. Michael is set to graduate it 2017."
        image={props.data.michaelmann.childImageSharp.fluid}
      />
      <CourseCard title="Preston Mann" description="Preston just graduated from CU, while double majoring in Economics and Chemistry. Preston is in the process of his next entrepreneurial venture, as he hopes to create a luxury fast casual sushi restaurant."
        image={props.data.prestonmann.childImageSharp.fluid}
      />
    </div>
  </Layout>
)

export default AboutUs;

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "stoic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    michaelmann: file(relativePath: { eq: "MichaelMann.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    prestonmann: file(relativePath: { eq: "PrestonMann.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
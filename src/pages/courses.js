import React from "react"

import Layout from "../components/layout"
import '../components/css/courses.css'
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import CourseCard from "../components/course-card"
import SEO from "../components/seo"
import valhalla from '../images/valhalla.jpg'
import Russ from "../images/flush.jpg"
const Courses = (props) => (
  <Layout>
    <SEO title="Courses" />
    <div className="background">
      <BackgroundImage
        className="background"
        fluid={props.data.backgroundImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
      </BackgroundImage>
    </div>
    <div className="title">
      <h2>GUNDOGGIN ACADEMY</h2>
    </div>
    <div className="AboutTrainer">
      <div className="ValhallaInfo">
        <div>
          <h3>You may be asking us who are the Trainers... </h3>
          <h4>Introducing: VALHALLA GUNDOGS and KENNELS</h4>
          <img src={valhalla} />
        </div>
        <div>
          <p><b>VALHALLA</b> is home to one of the top short hair breeding programs in the country, some have even said it to rank #1. WIth the production of great genes comes the demand for GREAT TRAINERS. Valhallas “Gun Dog School of Excellence” is known for taking pups to fully functioning gundogs, but GUNDOGGIN is taking it up a notch. This program is meant to take any dog to the next level. This program will teach you how to make your guide’s dog ashamed</p>
        </div>
      </div>
      <div className="RussInfo">
        <h4>HEAD TRAINER: Russel MacLennan</h4>
        <img src={Russ} />
        <p><b>Russell MacLennan</b> is a respected bird dog breeder, trainer and upland hunting guide. He began his amateur training career in 1989 with a black lab named Buddy. Since then he has trained all breeds of sporting dogs and their owners for performance in the field and basic obedience in the home.</p>
        <p><b>Russell</b> is no stranger to competition, at age 14 he competed in the Colorado Pheasant Hunting Championships, hosted by Pheasants Forever. Along with the help of Sir Hershey of Surrey and Delery Guillory they won top honors. Since, Russell has trained for, and competed in a variety of competitions including:</p>
        <ul>
          <p><li>National Bird Dog Challenge Association</li></p>
          <p><li>A.K.C. hunt tests and horseback trials</li></p>
          <p><li>A.P.L.A. qualifiers and many local hunting trials</li></p>
          <p><li>Russell and his dog “Boo” own the record for the fastest time set in the Colorado Open Pheasant Hunting Championships. In 1997, Russell and “Boo” completed a six pheasant run in less than 5 minutes, posting one of the highest scores ever.</li></p>
        </ul>
        <p>Russell was born with a gift to understand dogs and the patience to teach their owners.</p>
      </div>
    </div>
    <div className="CourseCards">
      <CourseCard title="INTRO SERIES (IN DEVELOPMENT)"
        image={props.data.course1.childImageSharp.fluid}
      />
      <CourseCard title="OBEDIENCE IN THE FIELD AND HOME (IN DEVELOPMENT)"
        image={props.data.course5.childImageSharp.fluid}
      />
      <CourseCard title="BUILDING DRIVE (IN DEVELOPMENT)"
        image={props.data.course2.childImageSharp.fluid}
      />
      <CourseCard title="ADVANCED (IN DEVELOPMENT)"
        image={props.data.course3.childImageSharp.fluid}
      />
      <CourseCard title="EXPERT (IN DEVELOPMENT)"
        image={props.data.course4.childImageSharp.fluid}
      />
    </div>
  </Layout>
)

export default Courses;

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "stoic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    course1: file(relativePath: { eq: "girldog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    course2: file(relativePath: { eq: "buildingdrive.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    course3: file(relativePath: { eq: "advanced.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    course4: file(relativePath: { eq: "expert.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    course5: file(relativePath: { eq: "obediance.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
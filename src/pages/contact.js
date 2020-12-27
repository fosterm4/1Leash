import React from "react"

import Layout from "../components/layout"
import '../components/css/contact.css'
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ContactForm from "../components/contact-form"

const Contact = (props) => (
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
      <h2>CONTACT US</h2>
    </div>
    <div className="contactForm">
      <ContactForm />
    </div>
  </Layout>
)

export default Contact;

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "whitepoint.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
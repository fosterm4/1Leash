import React from "react"

import Layout from "../components/layout"
import '../components/css/index.css'
import BackgroundImage from "gatsby-background-image"
import MediaQuery from 'react-responsive'
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <MediaQuery query="(min-device-width: 769px)">
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
      <MediaQuery query="(max-device-width: 768px)">
        <div className="mobileBackground">
          <BackgroundImage
            className="background"
            fluid={props.data.backgroundImage2.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            style={{
              height: "665px"
            }}
          >
          </BackgroundImage>
        </div>
      </MediaQuery>
    </div>
    <div className="AboutUs">
      <h2>WELCOME TO GUNDOGGIN’</h2>
      <h3>(GUN DOGGIN’) - Verb</h3>
      <ol type="1">
        <li>Running Gun Dogs</li>
        <li>Daily Care of Gun Dogs</li>
        <li>Hunting Gun Dogs</li>
        <li>Paying Vet Bills</li>
        <li>Buying Gun Dog Gear</li>
        <li>Replacing Destroyed Personal Belongings </li>
        <li>Buying new Gun Dog approved vehicles.</li>
        <li>Counting down the days until Hunting Season</li>
        <li>Sharing your best and worst days in the Field</li>
        <li><b>A Lifestyle</b></li>
      </ol>
      <p>GUNDOGGIN offers you everything you need to train one of the most POWERFUL GUNDOGS in the game. Our goal is to “Train the Trainer” so you no longer have to send your partner in crime away to the kennel. Our program goes in depth on how to take a puppy from the moment you pick them up to a full finished bird hunting MACHINE. We want to develop dogs that can go the distance and now is your chance to learn all the tricks of the trade. </p>
      <h3>GUNDOGGIN’ ACADEMY will be offered in 5 parts:</h3>
      <ul>
        <li>INTRO</li>
        <li>BUILDING DRIVE</li>
        <li>OBEDIENCE IN THE FIELD AND HOME</li>
        <li>ADVANCED</li>
        <li>EXPERT</li>
      </ul>
      <p>Learn more about each course on our <Link to="/courses">GUNDOGGIN’ ACADEMY</Link> page.</p>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    backgroundImage1: file(relativePath: { eq: "frontpage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    backgroundImage2: file(relativePath: { eq: "frontpage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
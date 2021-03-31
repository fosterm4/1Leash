import React from "react"

import Layout from "../components/layout"
import '../components/css/aboutUs.css'
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Card from "../components/card"
import SEO from "../components/seo"
import Project from '../images/project.jpg'
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
          <img src={Project} alt="school project"/>
        </div>
      </div>
      <div className="PeopleInfo">
        <h2>Meet the family behind 1Leash</h2>
        <p id="familyBusiness">We really are a family business! There is nothing better in our opinion then creating something that you are passionate about with people you care about, while having fun selling a product you believe in.</p>
      </div>
    </div>
    <div className="PeopleCards">
      <Card title="Michael Mann" dogName='"Top Dog"' description="Michael is a former Duke Football Player, who graduating with his Masters from the Duke Fuqua Business School. He is currently serving as a Certified Financial Planner and Wealth Advisor for UBS. He cp-founded and continues to lend his support and financial talents to this family owned business.
      \n\n
      In his spare time, Michael loves to snowboard, golf, hunt, fish and always keeps the competitive and athletic sprint alive in almost everything he does. Oh, and let’s not forget he also loves the dogs and especially when they tag along."
        image={props.data.michaelmann.childImageSharp.fluid}
      />
      <Card title="Preston Mann" dogName='"Hot Dog"' description="We call him “Mr. Creativity”. Preston was responsible for the creation and development of the Double Dog Leash while involved in an invention competition as a grade schooler in Castle Rock, Co. His goal was to invent a way to walk two dogs with one leash, without them getting tangled and still allowing flexibility to the person walking them.
      \n\n
      Beyond being one of the founders, Preston graduated from the University of Denver, is the older to Michael. He fulfills his passion for the outdoors with numerous activities, such as boating, skiing and golfing. He loves spending free time with all the dogs in the family and would choose Brittney Spaniels, as his favorite breed. "
        image={props.data.prestonmann.childImageSharp.fluid}
      />
      <Card title="Scott Mann" dogName='"Big Dog"' description="Scott is a former International basketball player. Standing 6’7”, he has been suitably dubbed - Big Dog. He graduated from Colorado State University, where he played basketball all four years of his college career. This led him to playing professionally in Europe, then back in the US for a short period of time, followed by ownership and involvement in Sports Marketing. Currently, Scott serves as the Senior Vice President for a global call center company. 
        \n\n
      As the proud father of Preston and Michael, he aided them in starting the family owned Double Dog Leash company, the result of a grade school invention contest. Beyond this, he guided them through and obtained the patent for the leash. Results speak for themselves, as sales are fast approaching the one millionth sold. 
        \n\n
      Scott has an immense love for dogs! He especially enjoys training his Labradors to pheasant hunt. With the previous breeding of his Grand Champion lab, Aspen, he looks very forward to another future litter from her. He is an avid golfer, fly fisherman. He also has a passion for outdoor activities that includes fly fishing, bow / arrow hunting and golfing. Of course, the dogs try to tag along on these adventures, whenever possible! "
        image={props.data.scottmann.childImageSharp.fluid}
      />
      <Card title="Christienne Christgau" dogName='"Show Dog"' description="Serving as the Director of Corporate Relations / Retail, Christienne was heavily involved in the development and launch of Camp Bow Wow -  the country’s largest doggie daycare / boarding facility. She oversaw all operational and retail aspects alike, as well as planning, executing and attending each and every Grand Opening for the company’s new franchisees. Along with the duties of growing this business from 2 to 140 franchises, she was also responsible for numerous single sales of the franchises, throughout the United States. Beyond this, she has extensive business knowledge gained throughout other corporate positions in the retail / commercial contracting, travel / hospitality and most recently, software consulting industries. 
        \n\n
      Christienne graduated from the University of Colorado - Colorado Springs with a degree in Communications / Public Relations. She is the proud mother of daughter Jordan and grandson, Mason. She has competed in 5 body building competitions, placing in the top five each time. Other spare time includes  travel, hiking, golfing, boating and assorted activities and adventures with her soon to be husband, their combined kids and their three labs and cockapoo. 
        \n\n
      Although she loves her labs, she is partial to her 18 year old cockapoo, Sebastian, who she can’t imagine life without. "
        image={props.data.christienne.childImageSharp.fluid}
      />
    </div>
  </Layout>
)

export default AboutUs;

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "aboutUs.jpg" }) {
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
    scottmann: file(relativePath: { eq: "scottMann.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    christienne: file(relativePath: { eq: "christienne.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    prestonmann: file(relativePath: { eq: "prestonMann.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
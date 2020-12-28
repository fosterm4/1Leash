import React from 'react'
import '../components/css/course-card.css'
import BackgroundImage from "gatsby-background-image"

const CourseCard = props => (
  <div className = "Card">
      <div className = "front">
      <BackgroundImage
          className="background"
          fluid={props.image}
          backgroundColor={`#040e18`}
        />
        <h3>{props.title}</h3>
      </div>
  </div>
)

export default CourseCard
import React from 'react'
import '../components/css/course-card.css'
import BackgroundImage from "gatsby-background-image"

const Card = props => (
  <div className="Card">
    <div className="front">
      <div className="profileImage">
        <BackgroundImage
          className="background"
          fluid={props.image}
          backgroundColor={`#040e18`}
        />
      </div>
      <h3>{props.title}</h3>
      <h4>{props.dogName}</h4>
      <p>{props.description.replace(/\\n/g, '\n')}</p>
    </div>
  </div>
)

export default Card
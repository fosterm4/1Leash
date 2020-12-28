import React from "react"
import '../components/css/product.css'

const Product = props => (
  <div className="Card">
    <div className="front">
      <img alt="frontImg" src={props.image} height="200" />
      <h3>{props.productName}</h3>
      <p>{props.price}</p>
    </div>
  </div>
)

export default Product
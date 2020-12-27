import React from "react"
import { ProductCard } from "react-ui-cards"
import '../components/css/product.css'

const Product = props => (
  <div>
    <ProductCard
      photos={[
        props.images
      ]}
      price={props.price}
      productName={props.productName}
      description={props.description}
      url={props.url}
    />
  </div>
)

export default Product
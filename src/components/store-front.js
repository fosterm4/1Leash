import React from "react"
import { graphql } from 'gatsby'
import Product from '../components/product'
import '../components/css/store-front.css'

const StoreFront = data => {
  console.log(data.data.edges)
  return (
    <div className="StoreFront">
      {data.data.edges.map(edge => {
        console.log(edge.node.defaultProductVariant.images)
        return (
          <div>
            <a className="snipcart-add-item"
              data-item-id={edge.node.slug.current}
              data-item-price={edge.node.defaultProductVariant.price}
              data-item-url="/shop"
              data-item-name={edge.node.title}
              data-item-image={imageArray(edge)}>
              <Product price={"$"+edge.node.defaultProductVariant.price} productName={edge.node.title} description="" url={"/"+edge.node.slug.current} images={imageArray(edge)}/>
            </a>
          </div>
        )
      })
      }
    </div>
  )
}

function imageArray(edge){
  let returnString = "";
  let imageIndex = 0;
  {edge.node.defaultProductVariant.images.map( image => {
    if(imageIndex === 0){
      returnString = image.asset.url;
    }
    imageIndex++;
  })}
  console.log(returnString);
  return returnString;
}

export default StoreFront

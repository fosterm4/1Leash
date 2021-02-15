import React from "react"
import Product from '../components/product'
import '../components/css/store-front.css'
import { Link } from "gatsby"

const StoreFront = data => {
  return (
    <div className="StoreFront">
      {data.data.edges.map(edge => {
        return (
          <div>
            <Link to = {"/shop/" + edge.node.slug.current}>
              <Product price={"$"+edge.node.defaultProductVariant.price} productName={edge.node.title} image={imageArray(edge)}/>
            </Link>
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
    else{
      return returnString;
    }
    imageIndex++;
  })}
  return returnString;
}

export default StoreFront

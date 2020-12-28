import React from "react"
import Product from '../components/product'
import '../components/css/store-front.css'
import { Link } from "gatsby"

const StoreFront = data => {
  console.log(data.data.edges)
  return (
    <div className="StoreFront">
      {data.data.edges.map(edge => {
        console.log(edge.node.defaultProductVariant.images)
        return (
          <div>
            <Link to = {"/shop/" + edge.node.slug.current}>
              <Product price={"$"+edge.node.defaultProductVariant.price} productName={edge.node.title} description="" url={"/"+edge.node.slug.current} images={imageArray(edge)}/>
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

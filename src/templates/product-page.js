import React from "react"
import Layout from "../components/layout"
import '../components/css/product-page.css'
import 'react-medium-image-zoom/dist/styles.css'
import SEO from "../components/seo"
import ImageGallery from 'react-image-gallery';

export default function ProductPage({ pageContext }) {
  let images = getImageArray(pageContext);
  console.log(images);
  return(
    <Layout>
      <SEO title={pageContext.product.title} />
      <div className="ProductContent">
        <div className="ProductGallery">
          <ImageGallery items={images} showFullscreenButton={false} lazyLoad={true} showPlayButton={false} />
        </div>
        <div className="Text">
          <h2>{pageContext.product.title}</h2>
          <h4>{"$" + pageContext.product.defaultProductVariant.price}</h4>
          <button id = "addToCart" className="snipcart-add-item"
            data-item-id={pageContext.product.slug.current}
            data-item-price={pageContext.product.defaultProductVariant.price}
            data-item-url={"/shop/" + pageContext.product.slug.current}
            data-item-name={pageContext.product.title}
            data-item-image={mainImage(pageContext)}>
            Add to Cart
          </button>
          <p>{descriptionArray(pageContext)}</p>
        </div>
      </div>
      <div className="Description">

      </div>
    </Layout>
  )
}

function descriptionArray(edge) {
  let returnString = "";
  let childIndex = 0;
  {
    edge.product.body.en.map(description => {
      if (childIndex === 0) {
        description.children.map(text => {
          console.log(text);
          returnString = returnString + text.text;
        })
      }
      else {
        return returnString;
      }
      childIndex++;
    })
  }
  console.log(returnString);
  return returnString;
}

function mainImage(edge) {
  let returnString = "";
  let imageIndex = 0;
  {
    edge.product.defaultProductVariant.images.map(image => {
      if (imageIndex === 0) {
        returnString = image.asset.url;
      }
      else {
        return returnString;
      }
      imageIndex++;
    })
  }
  console.log(returnString);
  return returnString;
}

function getImageArray(edge){
  let returnArray =[];
  edge.product.defaultProductVariant.images.map(image => {
    let imgSrc = image.asset.url;
    returnArray.push(  {
      original: imgSrc,
      thumbnail: imgSrc,
    })
  })
  return returnArray;
}
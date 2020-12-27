import React from "react"
import {ProductCard} from "react-ui-cards"
import '../components/css/product.css'
const Product = () => {
  return (
    <div>
        <ProductCard
          photos={[
            'https://i.imgur.com/t7DTziH.jpg',
            'https://i.imgur.com/kA5lx6t.jpg',
            'https://i.imgur.com/cUsl6Gs.jpg'
          ]}
          price='$1.50'
          productName='Cupcake'
          description='Nullam velit leo, pulvinar non metus feugiat, pharetra ornare enim. Vivamus ac quam a purus venenatis fringilla.'
          rating={5}
          url='https://github.com/nukeop'
        />
    </div>
  )
}

export default Product
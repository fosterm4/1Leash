import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/gatsby-icon.png'
import bag from '../images/shopping-bag-black.png'
import './css/web-header.css'

class WebHeader extends React.Component{

  render(){
    return(
      <div className = "Header">
        <div className="HeaderGroup">
          <Link to="/aboutUs">ABOUT US</Link>
          <Link to="/courses">BUY THE COURSE</Link>
          <Link to="/"><img src={logo} width="40" alt = "logo"/></Link>
          <Link to="/shop">SHOP</Link>
          <Link><button className="snipcart-customer-signin">SIGN IN</button></Link>
          <Link className="cart"><img src={bag} width="34" alt = "bag"className="snipcart-checkout"/> </Link>
        </div>
      </div>
    )
  }
}
export default WebHeader


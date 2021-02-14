import { Link } from "gatsby"
import React, { useContext } from "react"
import logo from '../images/gatsby-icon.png'
import bag from '../images/shopping-bag-white.png'
import './css/web-header.css'
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';

const WebHeader = () => {
  
  let buttonText = "Sign In";
  const { state } = useContext(SnipcartContext);
  const { userStatus } = state;
  if (userStatus !== 'SignedOut') {
    buttonText = "My Account";
  }
    return (
      <div className="Header">
        <div className="HeaderGroup">
        <Link to="/aboutUs">About Us</Link>
          <Link to="/">Home</Link>
          <Link to="/"><img src={logo} width="40" alt="logo" /></Link>
          <Link to="/shop">Shop</Link>
          <Link><button className="snipcart-customer-signin">{buttonText}</button></Link>
          <Link className="cart"><img src={bag} width="34" alt="bag" className="snipcart-checkout" /> </Link>
        </div>
      </div>
    )
}
export default WebHeader
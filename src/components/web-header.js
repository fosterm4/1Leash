import { Link } from "gatsby"
import React, { useContext } from "react"
import bag from '../images/bluebag.png'
import logo from '../images/logoHorizontal.png'
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
      <Link to="/"><img src={logo} width="300" alt="bag" /></Link>
        <div className="LinkGroup">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link><button className="snipcart-customer-signin">{buttonText}</button></Link>
          <Link className="cart"><img src={bag} width="34" alt="bag" className="snipcart-checkout" /> </Link>
        </div>

      </div>
    </div>
  )
}
export default WebHeader
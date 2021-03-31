import React, { useContext } from "react"
import { slide as MobileMenu } from 'react-burger-menu'
import "./css/mobile-header.css"
import logo from '../images/oneleashlogo.png'
import bag from '../images/shopping-bag-white.png'
import { Link } from "gatsby"
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';

const MobileHeader = () => {
  let buttonText = "Sign In";
  const { state } = useContext(SnipcartContext);
  const { userStatus } = state;
  if (userStatus !== 'SignedOut') {
    buttonText = "My Account";
  }
  return (
    <div class="MobileMenu">
      <MobileMenu>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link><button className="snipcart-customer-signin">{buttonText}</button></Link>
      </MobileMenu>
      <Link to="/" id="logo"><img src={logo} width="120" alt="bag"/></Link>
      <Link id="shopping-bag"><img src={bag} width="70" alt="bag" className="snipcart-checkout" /></Link>
    </div>
  )
}

export default MobileHeader

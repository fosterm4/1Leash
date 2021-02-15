import React, {useContext} from "react"
import { slide as MobileMenu } from 'react-burger-menu'
import "./css/mobile-header.css"
import logo from '../images/gatsby-icon.png'
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
        <Link to="/aboutUs">About Us</Link>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link><button className="snipcart-customer-signin">{buttonText}</button></Link>
      </MobileMenu>
      <Link id="logo" to="/"><img src={logo} width="40" alt="logo" /></Link>
      <Link id="shopping-bag"><img src={bag} width="35" alt="bag" className="snipcart-checkout" /></Link>
    </div>
  )
}

export default MobileHeader

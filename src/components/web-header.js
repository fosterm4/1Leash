import { Link } from "gatsby"
import React, { useContext } from "react"
import logo from '../images/gundogginlogotrans(1).png'
import bag from '../images/shopping-bag-black.png'
import './css/web-header.css'
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';

const WebHeader = () => {
  let buttonText = "SIGN IN";
  const { state } = useContext(SnipcartContext);
  const { userStatus } = state;
  if (userStatus !== 'SignedOut') {
    buttonText = "MY ACCOUNT";
  }
    return (
      <div className="Header">
        <div className="HeaderGroup">
        <Link to="/courses">GUNDOGGIN ACADEMY</Link>
          <Link to="/">HOME</Link>
          <Link to="/"><img src={logo} width="100" alt="logo" /></Link>
          <Link to="/shop">SHOP</Link>
          <Link><button className="snipcart-customer-signin">{buttonText}</button></Link>
          <Link className="cart"><img src={bag} width="34" alt="bag" className="snipcart-checkout" /> </Link>
        </div>
      </div>
    )
}
export default WebHeader
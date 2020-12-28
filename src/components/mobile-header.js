import React, {useContext} from "react"
import { slide as MobileMenu } from 'react-burger-menu'
import "./css/mobile-header.css"
import logo from '../images/gatsby-icon.png'
import bag from '../images/shopping-bag-black.png'
import { Link } from "gatsby"
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';

const MobileHeader = () => {
  let buttonText = "SIGN IN";
  const { state } = useContext(SnipcartContext);
  const { userStatus } = state;
  if (userStatus !== 'SignedOut') {
    buttonText = "MY ACCOUNT";
  }
  return (
    <div class="MobileMenu" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
      <MobileMenu>
        <Link to="/aboutUs">ABOUT US</Link>
        <Link to="/courses">BUY THE COURSE</Link>
        <Link to="/shop">SHOP</Link>
        <Link><button className="snipcart-customer-signin">{buttonText}</button></Link>
      </MobileMenu>
      <Link id="logo" to="/"><img src={logo} width="40" alt="logo" /></Link>
      <Link id="shopping-bag"><img src={bag} width="40" alt="bag" className="snipcart-checkout" /></Link>
    </div>
  )
}

export default MobileHeader

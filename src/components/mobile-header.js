import React from "react"
import SEO from "../components/seo"
import { slide as MobileMenu } from 'react-burger-menu'
import "./css/mobile-header.css"
import logo from '../images/gatsby-icon.png'
import bag from '../images/shopping-bag-white.png'
import { Link } from "gatsby"

class MobileHeader extends React.Component {
  render() {
    return (
      <div class="MobileMenu" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
        <MobileMenu>
          <Link to="/">ABOUT US</Link>
          <Link to="/aboutUs">BUY THE COURSE</Link>
          <Link to="/contact">SHOP</Link>
          <Link to="/ranchSearch"><button>LOGIN</button></Link>
        </MobileMenu>
        <Link id="logo" to="/"><img src={logo} width="40" alt="logo" /></Link>
        <Link id="shopping-bag" to="/"><img src={bag} width="40" alt="bag" /></Link>
      </div>
    )
  }
}

export default MobileHeader

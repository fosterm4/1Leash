import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/gatsby-icon.png'
import bag from '../images/shopping-bag-black.png'
import './css/web-header.css'

class WebHeader extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if(scrollTop > 50){
      this.setState({hasScrolled:true})
    }
    else{
      this.setState({hasScrolled: false})
    }
  }

  render(){
    return(
      <div className = {this.state.hasScrolled ?
      'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/aboutus">ABOUT US</Link>
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

WebHeader.propTypes = {
  siteTitle: PropTypes.string,
}

WebHeader.defaultProps = {
  siteTitle: ``,
}

export default WebHeader


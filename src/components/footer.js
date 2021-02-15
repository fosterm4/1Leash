import React from "react";
import "./css/footer.css"
import { Link } from "gatsby"
import facebook from "../images/facebook.png"
import instagram from "../images/insta.png"
import youtube from "../images/youtube.png"

function Footer() {
  return (
    <div className = "mainFooter">
      <p> Questions? <Link to="/contact">Contact us</Link>
      </p>
      <div className = "socialIcons">
        <a id = "facebook" target="_blank"rel="noopener noreferrer" href="www.1leash.co">
          <img src = {facebook} width = "20px" alt = "facebook"></img>
        </a>
        <a target="_blank" rel="noopener noreferrer"href="www.1leash.co">
          <img src = {youtube} width = "20px" alt = "youtube"></img>
        </a>
        <a target="_blank" rel="noopener noreferrer"href="www.1leash.co">
          <img src = {instagram} width = "20px" alt = "instagram"></img>
        </a>
      </div>
      < p className = "copyright">
        &copy;{new Date().getFullYear()} www.1Leash.co
      </p>
    </div>
  );
}

export default Footer;
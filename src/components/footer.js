import React from "react";
import "./css/footer.css"
import { Link } from "gatsby"
import facebook from "../images/facebook.png"
import instagram from "../images/insta.png"
import youtube from "../images/youtube.png"

function Footer() {
  return (
    <div className = "mainFooter">
      <p> Questions? <Link to="/contact"><button>Contact Us</button></Link>
      </p>
      <div className = "socialIcons">
        <a id = "facebook" target="_blank"rel="noopener noreferrer" href="https://www.facebook.com/1-Leash-102561871935169">
          <img src = {facebook} width = "40px" alt = "facebook"></img>
        </a>
        <a target="_blank" rel="noopener noreferrer"href="https://youtu.be/CS1-5boAqLI">
          <img src = {youtube} width = "40px" alt = "youtube"></img>
        </a>
        <a target="_blank" rel="noopener noreferrer"href="https://www.instagram.com/1leash_/">
          <img src = {instagram} width = "40px" alt = "instagram"></img>
        </a>
      </div>
      < p className = "copyright">
        &copy;{new Date().getFullYear()} www.1Leash.co
      </p>
    </div>
  );
}

export default Footer;
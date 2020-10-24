import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IndexVid from "../images/videos/medIndex.mp4"
import '../components/css/index.css'
import EmailList from "../components/email-list"

const IndexPage = () => (
  <Layout>
    <div className = "OverVideo">
      <EmailList/>
      <video
        className="video-player"
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
      >
        <source
          src={IndexVid}
          type="video/mp4"
        />
      </video>
    </div>
  </Layout>
)

export default IndexPage

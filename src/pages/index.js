import React from "react"

import Layout from "../components/layout"
import IndexVid from "../images/videos/medIndex.mp4"
import '../components/css/index.css'

const IndexPage = () => (
  <Layout>
      <video
        id="backgroundVideo"
        loop
        muted
        autoPlay
      >
        <source
          src={IndexVid}
          type="video/mp4"
        />
      </video>
  </Layout>
)

export default IndexPage

import React from 'react'
import MediaQuery from 'react-responsive'
import ReactPlayer from 'react-player/youtube'

const VideoPlayer = ({url}) => (
  <div className="Player">
    <MediaQuery query="(min-device-width: 1280px)">
      <ReactPlayer url={url} controls="true" width="700px" height="400px" />
    </MediaQuery>

    <MediaQuery query="(max-device-width: 1280px)">
      <MediaQuery query="(min-device-width: 854px)">
        <ReactPlayer url={url} controls="true" width="630px" height="355px" />
      </MediaQuery>
    </MediaQuery>

    <MediaQuery query="(max-device-width: 853px)">
      <MediaQuery query="(min-device-width: 641px)">
        <ReactPlayer url={url} controls="true" width="630px" height="355px" />
      </MediaQuery>
    </MediaQuery>

    <MediaQuery query="(max-device-width:640px)">
      <MediaQuery query="(min-device-width: 426px)">
        <ReactPlayer url={url} controls="true" width="415px" height="235px" />
      </MediaQuery>
    </MediaQuery>

    <MediaQuery query="(max-device-width: 425px)">
      <MediaQuery query="(min-device-width: 375px)">
        <ReactPlayer url={url} controls="true" width="360px" height = "220px"/>
      </MediaQuery>
    </MediaQuery>

    <MediaQuery query="(max-device-width: 374px)">
      <ReactPlayer url={url} controls="true" width = "300px" height = "200px"/>
    </MediaQuery>
  </div>
)

export default VideoPlayer
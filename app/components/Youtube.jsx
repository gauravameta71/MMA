// YouTubePlayer.js

import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }) => {
  return (
    <div className="youtube-container ">
      <YouTube videoId={videoId} />
      <style jsx>{`
        .youtube-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          padding: 20px;
        }
        .youtube-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default YouTubePlayer;

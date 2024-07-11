"use client";
// components/YouTubePlayer.js
import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }: { videoId: string }) => {
  const opts = {
    height: "800",
    width: "1640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;

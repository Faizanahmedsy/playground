"use client";
import React from "react";
import ReactPlayer from "react-player";

type Props = {
  src: string;
};

export default function Player3({ src }: Props) {
  const videoPath = "/video.mp4"; // Assuming 'public' is served at root

  return (
    <div>
      <ReactPlayer url={videoPath} />
    </div>
  );
}

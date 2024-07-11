const Player3 = dynamic(() => import("@/components/modules/player-3"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

import Video360Player from "@/components/modules/react-36-player";
import YouTubePlayer from "@/components/modules/yt-player";
import H2 from "@/components/shared/h2";
import Wrapper from "@/components/shared/wrapper";
import dynamic from "next/dynamic";
import React from "react";
// import video from "../../../public/video.mp4";

type Props = {};

export default function Page({}: Props) {
  return (
    <Wrapper>
      <H2>Youtube implementation</H2>
      <div className="h-full w-full">
        <YouTubePlayer videoId="v_OZRgpC718" />
        {/* <Video360Player
          videoSrc={
            "https://vrnexa.s3.eu-central-1.amazonaws.com/videos/PP-H265-%C3%A9chan-VBR30-60-codllog6.0eleve-BIS.mp4"
          }
        /> */}
        {/* <Player3 src={"https://www.youtube.com/watch?v=LXb3EKWsInQ"} /> */}
      </div>
    </Wrapper>
  );
}

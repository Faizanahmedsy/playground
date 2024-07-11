const Player3 = dynamic(() => import("@/components/modules/player-3"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

import H2 from "@/components/shared/h2";
import Wrapper from "@/components/shared/wrapper";
import dynamic from "next/dynamic";

type Props = {};

export default function Page({}: Props) {
  return (
    <Wrapper>
      <H2>Iframer implementation</H2>
      <div className="h-full w-full">
        <iframe
          id="rooom-360-player"
          title="rooom-viewer"
          frameborder="0"
          allowvr="yes"
          allow="vr"
          allowfullscreen=""
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          xr="true"
          accelerometer="true"
          magnetometer="true"
          gyroscope="true"
          autoplay
          src="https://vrnexa.s3.eu-central-1.amazonaws.com/videos/PP-H265-%C3%A9chan-VBR30-60-codllog6.0eleve-BIS.mp4"
        ></iframe>
      </div>
    </Wrapper>
  );
}

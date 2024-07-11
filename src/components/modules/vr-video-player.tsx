// // components/VRVideoPlayer.tsx
// "use client";
// import React from "react";
// import "aframe";
// import { Entity, Scene } from "aframe-react";

// const VRVideoPlayer = ({ src }: { src: string }) => {
//   return (
//     <Scene>
//       <a-assets>
//         <video id="video" src={src} autoPlay loop crossOrigin="anonymous" />
//       </a-assets>

//       <Entity primitive="a-videosphere" src="#video" rotation="0 -90 0" />

//       <Entity primitive="a-camera">
//         <Entity primitive="a-cursor" />
//       </Entity>
//     </Scene>
//   );
// };

// export default VRVideoPlayer;

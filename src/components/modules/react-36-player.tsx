"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface Video360PlayerProps {
  videoSrc: string;
}

const Video360Player: React.FC<Video360PlayerProps> = ({ videoSrc }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1100
    );
    camera.position.set(0, 0, 0.1);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create sphere geometry for 360 video
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invert the sphere

    // Create video texture
    const texture = new THREE.VideoTexture(videoRef.current);
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      <video
        ref={videoRef}
        src={videoSrc}
        style={{ display: "none" }}
        crossOrigin="anonymous"
        playsInline
        webkit-playsinline="true"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default Video360Player;

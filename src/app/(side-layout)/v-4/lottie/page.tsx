"use client";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import global from "../../../../../public/globe.json";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <Lottie animationData={global} loop={true} />;
      </div>
      <div></div>
    </div>
  );
}

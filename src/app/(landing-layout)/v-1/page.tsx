import RevealImageList from "@/components/animata/list/reveal-image";
import { Icons } from "@/components/icons/icons";
import Hero from "@/components/landing/hero";
import TechCircles from "@/components/landing/tech-circles";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Wrapper from "@/components/shared/wrapper";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <Wrapper>
      <Hero />
      <div className="min-h-screen flex  justify-center items-center gap-5">
        <div className="w-full">
          <RevealImageList />
        </div>
        <TechCircles />
      </div>
    </Wrapper>
  );
}

import RevealImageList from "@/components/animata/list/reveal-image";
import { Icons } from "@/components/icons/icons";
import Hero from "@/components/landing/hero";
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

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
            Circles
          </span>

          {/* Inner Circles */}
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={80}
          >
            <Icons.whatsapp />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={80}
          >
            <Icons.notion />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            reverse
          >
            <Icons.googleDrive />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            delay={20}
            reverse
          >
            <Icons.gitHub />
          </OrbitingCircles>
        </div>
      </div>
    </Wrapper>
  );
}

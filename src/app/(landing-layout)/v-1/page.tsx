import RevealImageList from "@/components/animata/list/reveal-image";
import Hero from "@/components/landing/hero";
import Wrapper from "@/components/shared/wrapper";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <Wrapper>
      <Hero />
      <div className="min-h-screen flex  justify-center items-center">
        <div className="w-full">
          <RevealImageList />
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ex
          expedita laborum laudantium repudiandae! Ad dolore recusandae rerum
          suscipit et voluptate temporibus soluta repudiandae, distinctio
          corporis vero eligendi ipsam vitae!
        </div>
      </div>
    </Wrapper>
  );
}

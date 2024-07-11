// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "../../../public/logo.svg";
import H1 from "../shared/h1";

const Hero = () => {
  return (
    <div>
      <Container className="flex flex-col items-center text-center mt-[150px]">
        <Image
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
        <H1 className="lg:text-center pt-[100px] pb-10 lg:text-6xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </H1>
        <h3 className="text-muted-foreground  text-lg">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12 pb-[200px]">
          <Button asChild>
            <Link href="/">
              <Camera className="mr-2" />
              Lorem Ipsum
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Dolor Sit Amet -{">"}</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

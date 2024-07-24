"use client";
import Lottie from "lottie-react";
import notFound from "./../../public/not-found.json";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Lottie animationData={notFound} />
      {/* <h2 className="text-6xl font-bold text-cyan-800">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link> */}
    </div>
  );
}

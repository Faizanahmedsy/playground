"use client";
import GithubCardShiny from "@/components/animata/card/github-card-shiny";
import Expandable from "@/components/animata/carousel/expandable";
import DeliveryCard from "@/components/animata/widget/delivery-card";
import DirectionCard from "@/components/animata/widget/direction-card";
import FlightWidget from "@/components/animata/widget/flight-widget";
import MobileDetail from "@/components/animata/widget/mobile-detail";
import ScoreBoard from "@/components/animata/widget/score-board";
import StudyTimer from "@/components/animata/widget/study-timer";
import H2 from "@/components/shared/h2";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <H2 className="pb-4">Main content</H2>
      <div className="grid md:grid-cols-3 gap-4">
        <GithubCardShiny />
        <GithubCardShiny />
        <GithubCardShiny />
        <Expandable className="w-full min-w-72 storybook-fix" />
        <div className="grid grid-cols-5 col-span-2">
          <FlightWidget />
          <DeliveryCard
            arrivalTime="16:30"
            location="Newroad"
            progress={30}
            timeAgo="30min"
          />

          <MobileDetail />
          <ScoreBoard
            items={[
              {
                className: "rounded-md bg-green-500",
                label: "A",
                progress: 34,
              },
              {
                className: "rounded-md bg-red-500",
                label: "B",
                progress: 14,
              },
              {
                className: "rounded-md bg-green-500",
                label: "C",
                progress: 34,
              },
              {
                className: "rounded-md bg-green-500",
                label: "D",
                progress: 70,
              },
              {
                className: "rounded-md bg-green-500",
                label: "E",
                progress: 52,
              },
              {
                className: "rounded-md bg-green-500",
                label: "F",
                progress: 30,
              },
              {
                className: "rounded-md bg-green-500",
                label: "G",
                progress: 37,
              },
              {
                className: "rounded-md bg-green-500",
                label: "H",
                progress: 72,
              },
              {
                className: "rounded-md bg-green-500",
                label: "I",
                progress: 42,
              },
            ]}
          />
          <StudyTimer
            segments={[
              {
                color: "orange",
                value: 57,
              },
              {
                color: "pink",
                value: 24,
              },
              {
                color: "yellow",
                value: 26,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

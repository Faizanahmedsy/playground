import React from "react";

type Props = {
  searchParams: string;
};

// @see http://localhost:3000/v-4/search?color=red

export default function page({ searchParams }: Props) {
  return <div>{JSON.stringify(searchParams, null, 2)}</div>;
}

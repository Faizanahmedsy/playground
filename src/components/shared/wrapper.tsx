import React from "react";
import { cn } from "../craft";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: Props) {
  return <div className={cn("px-32", className)}>{children}</div>;
}

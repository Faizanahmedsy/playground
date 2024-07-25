"use client";
import H2 from "@/components/shared/h2";
import { ScrollArea } from "@/components/ui/scroll-area";
import { time } from "console";
import Link from "next/link";
import { title } from "process";

export const links = [
  {
    title: "drag and drop 1",
    href: "/v-4/drag-drop",
  },
  {
    title: "Lottie files animation",
    href: "/v-4/lottie",
  },
  {
    title: "get search params",
    href: "/v-4/search",
  },
  {
    title: "PDF Wind",
    href: "/v-4/pdf-wind",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen overflow-hidden">
          <ScrollArea className="w-[10%] border pt-10">
            <H2 className="p-4 pt-0">Logo</H2>
            <div className="p-4 space-y-4">
              {links.map((item, i) => (
                <Link key={i} href={item.href} className="grid">
                  {item.title}
                </Link>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="w-[90%] border p-10">{children}</ScrollArea>
        </div>
      </body>
    </html>
  );
}

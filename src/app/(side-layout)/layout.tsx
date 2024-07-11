"use client";
import H2 from "@/components/shared/h2";
import { ScrollArea } from "@/components/ui/scroll-area";

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
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i}>Link {i}</div>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="w-[90%] border p-10">{children}</ScrollArea>
        </div>
      </body>
    </html>
  );
}

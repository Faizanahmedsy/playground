import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            background: radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%);
            background-attachment: fixed;
            margin: 0;
            height: 100%;
            width: 100%;
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

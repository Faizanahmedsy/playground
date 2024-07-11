import Link from "next/link";
import { H4 } from "@/components";

export default function Navbar() {
  return (
    <div className="z-10 w-full  px-[20%] py-5 items-center justify-between font-mono text-sm lg:flex">
      <H4>faizan&apos;s playground</H4>

      <div className="border px-4 py-2 rounded-xl bg-gray-50 flex gap-4">
        {[
          { title: "Home", href: "/" },
          { title: "ver-1", href: "/v-1" },
          { title: "ver-2", href: "/v-2" },
          { title: "ver-3", href: "/v-3" },
          { title: "ver-4", href: "/v-4" },
        ].map((item) => (
          <Link href={item.href} key={item.title}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

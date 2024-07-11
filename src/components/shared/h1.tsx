import { cn } from "../craft";

export default function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-4xl font-semibold text-center lg:text-5xl lg:text-left",
        className
      )}
    >
      {children}
    </h1>
  );
}

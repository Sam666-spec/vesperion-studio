import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Card({ className, children }: Props) {
  return <div className={cn("lx-card", className)}>{children}</div>;
}
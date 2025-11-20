"use client";

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function HeroUIWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <HeroUIProvider className="h-full w-full" locale="ar" navigate={router.push}>
      {children}
    </HeroUIProvider>
  );
}

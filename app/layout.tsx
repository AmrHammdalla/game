import HeroUIWrapper from "@/components/wrappers/HeroUIWrapper";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/lib/storeProvider";

const somar = localFont({
  src: [
    {
      path: "../public/assets/font/somar-thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/assets/font/somar-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/font/somar-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/font/somar-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/font/somar-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-somar",
  display: "swap",
});

export default async function OuterRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={somar.className}>
      {/* ${somar.variable} injecting variables into :root inside global.css */}
      <body className="font-somar">
        <HeroUIWrapper>
          <StoreProvider>{children}</StoreProvider>
        </HeroUIWrapper>
      </body>
    </html>
  );
}

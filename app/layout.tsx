import "./globals.css";

import { PropsWithChildren } from "react";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterSection from "./(sections)/FooterSection";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Eram Soft",
  description: "Eram Soft",
};


export default function Layout({
  children,
}: PropsWithChildren<{
}>) {
  return (
    <html lang={"en"} >
      <body className={poppins.className}>
        <Header />
        <main>
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}

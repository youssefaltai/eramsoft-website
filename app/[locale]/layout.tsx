import Locale from "intl-locale-textinfo-polyfill";

import "../globals.css";

import { PropsWithChildren } from "react";
import { SupportedLocales } from "../lib";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  params: { locale },
}: PropsWithChildren<{
  params: { locale: SupportedLocales };
}>) {
  const { direction: dir } = new Locale(locale).textInfo;

  return (
    <html lang={locale} dir={dir}>
      <body className={poppins.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

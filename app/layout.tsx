import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EramSoft",
  description: "EramSoft is a boutique software development firm specializing in crafting bespoke software solutions tailored to your business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col gap-8">
        {children}
      </body>
    </html>
  );
}

/* eslint-disable no-undef */
// @ts-nocheck
import "../globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

import { Inter } from "next/font/google";

import { cx } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Jamstack Starter Template (Next.js App Router & Sanity v3)",
    template: "%s | Jamstack Starter",
  },
  description:
    "Jamstack Starter Template built with Next.js App Router & Sanity v3",
  twitter: {
    card: "summary_large_image",
    site: "web3templates",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx("antialiased", inter.variable)}>
      <body>
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

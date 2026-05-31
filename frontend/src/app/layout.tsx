import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
variable: "--font-geist-sans",

subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",

subsets: ["latin"],
});

export const metadata: Metadata = {

title: "HireGenix AI",

description:
"Premium AI-powered recruiter simulation platform",
};

export default function RootLayout({

children,

}: Readonly<{
children: React.ReactNode;
}>) {

return (

<ClerkProvider>

  <html
    lang="en"
    className={`
      ${geistSans.variable}
      ${geistMono.variable}

      h-full

      antialiased
    `}
  >

    <body
      className="
        min-h-screen

        bg-[#061018]

        text-white

        overflow-x-hidden
      "
    >

      {/* ========================= */}
      {/* GLOBAL NAVBAR */}
      {/* ========================= */}

      <Navbar />

      {/* ========================= */}
      {/* PAGE CONTENT */}
      {/* ========================= */}

      <main
        className="
          pt-28
          md:pt-32

          min-h-screen
        "
      >
        {children}
      </main>

    </body>

  </html>

</ClerkProvider>

);
}

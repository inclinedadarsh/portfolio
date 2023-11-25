import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const generalSans = localFont({
  src: "./fonts/GeneralSans-Variable.ttf",
  display: "swap",
  fallback: ["system-ui", "arial"],
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Adarsh Dubey • Web Developer & UX Designer",
  description:
    "Adarsh Dubey is a freelance web developer and UX designer. He specializes in creating websites for startups.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} ${spaceGrotesk.variable}`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

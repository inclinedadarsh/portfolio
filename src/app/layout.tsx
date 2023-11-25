import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

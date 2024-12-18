import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Banner from "@/components/Banner";
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
    metadataBase: new URL("https://adarshdubey.com"),
    openGraph: {
        title: "Adarsh Dubey • Web Dev, UX Designer & ML Enthusiast",
        description:
            "Freelance web developer, UX designer, and ML enthusiast. Leading BIO-S Community, proud member of WeMakeDevs.",
        url: "https://adarshdubey.com",
        siteName: "Adarsh Dubey Portfolio Website",
        images: {
            url: "/opengraph-image.png",
            width: 1920,
            height: 960,
            alt: "Adarsh Dubey: Web Dev, UX Designer and Machine Learning Enthusiast",
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${generalSans.variable} ${spaceGrotesk.variable}`}
            >
                <Navigation />
                {children}
                <Analytics />
            </body>
        </html>
    );
}

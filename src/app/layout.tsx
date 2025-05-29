import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beatriz Guimarães - UI/UX Designer Portfolio",
  description: "UI/UX Designer passionate about creating digital experiences that matter. Explore my portfolio of innovative design solutions and creative projects.",
  keywords: ["UI/UX Designer", "Portfolio", "User Experience", "User Interface", "Design", "Beatriz Guimarães"],
  authors: [{ name: "Beatriz Guimarães" }],
  creator: "Beatriz Guimarães",
  publisher: "Beatriz Guimarães",
  openGraph: {
    title: "Beatriz Guimarães - UI/UX Designer Portfolio",
    description: "UI/UX Designer passionate about creating digital experiences that matter.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

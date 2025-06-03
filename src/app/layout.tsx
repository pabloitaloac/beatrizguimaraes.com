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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/beatriz-logo.svg', type: 'image/svg+xml', sizes: '120x120' }
    ],
    shortcut: '/favicon.svg',
    apple: '/images/beatriz-logo.svg',
  },
  openGraph: {
    title: "Beatriz Guimarães - UI/UX Designer Portfolio",
    description: "UI/UX Designer passionate about creating digital experiences that matter.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/images/beatriz-logo-full.svg',
        width: 320,
        height: 120,
        alt: 'Beatriz Guimarães Logo',
      }
    ],
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/images/beatriz-logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

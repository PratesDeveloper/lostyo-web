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
  title: {
    default: "Lostyo",
    template: "%s | Lostyo",
  },
  description:
    "Lostyo is a next-generation hub for applications, services, and projects. Discover innovative tools, seamless experiences, and everything designed to bring the best for the user.",
  keywords: [
    "Lostyo",
    "hub",
    "apps",
    "applications",
    "services",
    "projects",
    "platform",
    "technology",
    "tools",
    "innovation",
    "software",
  ],
  metadataBase: new URL("https://lostyo.com"),
  alternates: {
    canonical: "https://lostyo.com",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  openGraph: {
    title: "Lostyo - Hub for Apps, Services, and Projects",
    description:
      "Lostyo is the ultimate hub that brings together the best apps, services, and projects — all in one place for the modern user.",
    url: "https://lostyo.com",
    siteName: "Lostyo",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lostyo - Hub Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lostyo - Hub for Apps, Services, and Projects",
    description:
      "Discover the best apps, services, and projects in one single hub. Built for users who want the best digital experience.",
    images: ["/assets/og-image.png"],
    creator: "@lostyo",
  },
  applicationName: "Lostyo",
  authors: [{ name: "Lostyo Team", url: "https://lostyo.com" }],
  generator: "Next.js",
  publisher: "Lostyo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

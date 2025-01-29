import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bad_Script } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const badScript = Bad_Script({
  variable: "--font-bad-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Project Green Sweep",
  description: ""
};

export const viewport: Viewport = {
    themeColor: '#39c161',
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
        <Footer />
      </body>
    </html>
  );
}

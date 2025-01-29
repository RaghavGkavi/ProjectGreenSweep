import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bad_Script } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const badScript = Bad_Script({
    subsets: ["latin"],
    weight: "400"
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
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
            <body className={`${badScript.className} antialiased bg-[#eaffe6]`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}

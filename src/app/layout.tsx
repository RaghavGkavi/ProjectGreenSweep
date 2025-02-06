import type { Metadata, Viewport } from "next";
import { Bad_Script, Sen, Ubuntu } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const badScript = Bad_Script({
    subsets: ["latin"],
    weight: "400"
});

const sen = Sen({
    subsets: ["latin"],
    weight: "400"
});

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: "400"
})

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
            <body className={`${ubuntu.className} antialiased bg-[#eaffe6]`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}

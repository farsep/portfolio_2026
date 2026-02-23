import type { Metadata } from "next";
import "./globals.css";
import Background from "./components/Background/Background";

export const metadata: Metadata = {
    title: "Portfolio 2026",
    description: "Enhanced Performance Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Background />
                {children}
            </body>
        </html>
    );
}

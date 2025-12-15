import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Use underscores to match recent lint error if needed, but standard is Geist_Mono. Wait, previous file had Geist_Mono.
import "./globals.css";
import Background from "@/components/Background";
import CursorGoo from "@/components/CursorGoo";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farid Espinoza | Portfolio",
  description: "Portfolio of Farid Espinoza - Amazing Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Background />
        <CursorGoo />
        <NavBar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PFT app",
  description: "keep all your finances in check",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen pt-5 px-5`}
      >
        {children}
        <nav className="bg-indigo-600 absolute inset-x-0 bottom-0 flex justify-between items-center h-25 px-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/transactions"}>transactions</Link>
          <Link href={"/categories"}>category</Link>
          <Link href={"/settings"}>settings</Link>
        </nav>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { House, ReceiptText, Boxes, Settings } from "lucide-react";

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
  icons: {
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen max-w-md mx-auto pt-5 px-5 md:`}
      >
        {children}
        <nav className="bg-white absolute inset-x-0 bottom-0 flex justify-between items-center h-25 px-5">
          <Link
            href={"/dashboard"}
            className=" text-xs text-gray-400 hover:text-indigo-600 active:text-indigo-600 target:text-indigo-600"
          >
            <House size={25} className="ml-0.5" />
            <p>Home</p>
          </Link>
          <Link
            href={"/transactions"}
            className="text-xs text-gray-400 hover:text-indigo-600 active:text-indigo-600 target:text-indigo-600"
          >
            <ReceiptText size={25} className="ml-5" />
            <p>Transactions</p>
          </Link>
          <Link
            href={"/categories"}
            className="text-xs text-gray-400 hover:text-indigo-600 active:text-indigo-600 target:text-indigo-600"
          >
            <Boxes size={25} className="ml-4" />
            <p>Categories</p>
          </Link>
          <Link
            href={"/settings"}
            className="text-xs text-gray-400 hover:text-indigo-600 active:text-indigo-600 target:text-indigo-600"
          >
            <Settings size={25} className="ml-2" />
            <p>Settings</p>
          </Link>
        </nav>
      </body>
    </html>
  );
}

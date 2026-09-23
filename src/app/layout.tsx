import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import BooksProvider from "@/context/BookContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Vibe",
  description: "Discover your next favorite book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <BooksProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <footer className="bg-yellow-500 py-7 text-center">
            <h2 className="text-3xl font-bold">
              Footer
            </h2>
          </footer>

           <ToastContainer />
        </BooksProvider>
      </body>
    </html>
  );
}
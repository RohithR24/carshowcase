import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Hub",
  description: "You're one stop solution for car rental."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={"relative"}>
        <NavBar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}

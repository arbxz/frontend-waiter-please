import type { Metadata } from "next";
import { Yantramanav, Lato } from "next/font/google";
import "./globals.css";

const oswald = Yantramanav({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yantramanav",
});

const inter = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Waiter-please",
  description: "Your favourite menu app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-inter`}>
        {children}
      </body>
    </html>
  );
}

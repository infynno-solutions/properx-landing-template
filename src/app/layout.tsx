import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const monument = localFont({
  src: [
    {
      weight: "300",
      style: "normal",
      path: "../../public/fonts/Monument-Extended-Light.ttf",
    },
    {
      weight: "400",
      style: "normal",
      path: "../../public/fonts/Monument-Extended-Regular.ttf",
    },
    {
      weight: "700",
      style: "normal",
      path: "../../public/fonts/Monument-Extended-Bold.ttf",
    },
    {
      weight: "800",
      style: "normal",
      path: "../../public/fonts/Monument-Extended-Ultrabold.ttf",
    },
  ],
  variable: "--font-monument",
});

export const metadata: Metadata = {
  title: "ProperX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
          monument.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}

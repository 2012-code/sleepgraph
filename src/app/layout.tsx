import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteGraph | Sleep Cycle & Energy Planner",
  description: "Optimize your productivity by mapping your biological rhythm. Calculate the perfect bedtime based on 90-minute sleep cycles.",
  keywords: ["sleep planner", "circadian rhythm", "90 minute sleep rule", "productivity", "notegraph"],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9086261363146330"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} min-h-full bg-[#161616] text-[#d4d4d4] flex flex-col`}>
        {children}
      </body>
    </html>
  );
}

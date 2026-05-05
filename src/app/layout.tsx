import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biological Rhythm & Sleep Planner | NoteGraph",
  description: "Optimize your productivity with the 90-minute sleep cycle rule. Scientific sleep planning for high-performance days.",
  keywords: ["sleep planner", "circadian rhythm", "90 minute sleep rule", "productivity", "notegraph"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} min-h-full bg-[#161616] text-[#d4d4d4] flex flex-col`}>
        {children}
      </body>
    </html>
  );
}


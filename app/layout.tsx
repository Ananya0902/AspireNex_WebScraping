import type { Metadata } from "next";
import "./globals.css";

import { Inter, Space_Grotesk } from 'next/font/google'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
 })

export const metadata: Metadata = {
  title: "Easy Shopping",
  description: "Develop a web scraping website that dynamically extracts and displays comprehensive product information from Amazon, including titles, prices, availability, images, and descriptions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><main className="max-w-20xl mx-auto min-h-screen flex-col bg-[#e16062] ">
          <Navbar />
          {children}
        </main></body>
    </html>
  );
}

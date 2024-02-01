import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soap's webapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}relative h-[100dvh] bg-gray-950`}>
        <Navbar />
        <main className="main grid overflow-scroll mx-10 px-4 text-gray-300">
          <div className="flex justify-center items-center text-gray-300  fadein">
            <Providers>{children}</Providers>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

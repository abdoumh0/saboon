import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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
      <body
        className={`${inter.className}relative h-[100vh] bg-gray-800 transition-colors duration-300`}
      >
        <Navbar />
        <div className="h-[80%] border-[1px] border-gray-700 mx-10 px-14">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

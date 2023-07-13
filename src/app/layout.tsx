import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextBNB",
  description: "Almost clone of AirBnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider/>
        <RegisterModal/>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}

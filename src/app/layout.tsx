import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextBNB",
  description: "Almost clone of AirBnb",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider/>
        <RentModal/>
        <LoginModal/>
        <RegisterModal/>
        <Navbar currentUser = {currentUser} />
        {children}
        </body>
    </html>
  );
}

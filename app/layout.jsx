import { Baloo_Bhai_2, Sirin_Stencil } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
const sairaStencil = Sirin_Stencil({
  variable: "--font-saira-stencil",
  subsets: ["latin"],
  weight: "400",
}); const BalooBhai2 = Baloo_Bhai_2({
  variable: "--font-baloo-bhai-2",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aevilon",
  description: "empty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${BalooBhai2.variable} ${sairaStencil.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

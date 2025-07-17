import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeHeader from "@/components/home/HomeHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WAVC - What's Active in Various Clubs",
  description: "Stay in the loop. Stay in the club.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HomeHeader />
        {children}
      </body>
    </html>
  );
}
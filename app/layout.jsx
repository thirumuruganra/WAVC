import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeHeader from "@/components/home/HomeHeader";
import AuthProvider from "./components/AuthProvider";
import OnboardingCheck from "./components/OnboardingCheck";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WAVC",
  description: "What's Active in Various Clubs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <HomeHeader />
          <OnboardingCheck>{children}</OnboardingCheck>
        </AuthProvider>
      </body>
    </html>
  );
}

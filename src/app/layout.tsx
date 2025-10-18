import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav/Nav";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pizza 4 Real",
  description: "Best Pizza Ever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} lg:text-2xl `}>
        <header className="fixed top-0 w-full z-50 backdrop-blur-[10px] p-6 lg:py-12 bg-[var(--navColor)]">
          <Nav />
        </header>
        <main className="max-w-screen-2xl mx-auto pt-24 lg:pt-48">
          {children}
        </main>
      </body>
    </html>
  );
}

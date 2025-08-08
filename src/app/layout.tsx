import type { Metadata } from "next";
import { Noto_Sans_JP, Roboto, Saira } from "next/font/google";
import "./globals.scss";
import "./styles/reset.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Chisaki Yamamoto",
  description: "山本千咲のポートフォリオサイトです。",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${roboto.variable} ${saira.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

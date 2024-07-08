import type { Metadata } from "next";
import "./globals.css";
import {Roboto, Titillium_Web} from 'next/font/google';
export const metadata: Metadata = {
  title: "Emil Kurian",
  description: "A software engineer and front end developer",
};

const roboto = Roboto({
  display: 'swap',
  weight: ['100','300', '400', '500', '700'],
  variable: '--font-roboto',
  subsets: ['latin', 'latin-ext'],
});

const titillium = Titillium_Web({
  display: 'swap',
  weight: ['300', '400', '700'],
  variable: '--font-titillium',
  subsets: ['latin', 'latin-ext'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${roboto.variable} ${titillium.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

import {Roboto, Titillium_Web} from 'next/font/google';
import localFont from 'next/font/local';
import { ParticleBg } from "@/components";

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

const dotMatrix = localFont({
  src: [
    {
      path: '../public/fonts/London_Underground_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/London_Underground_Regular.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/fonts/London_Underground_Medium.ttf',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-dot-matrix',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${roboto.variable} ${titillium.variable} ${dotMatrix.variable}`} lang="en">
      <body>
        {children}
        <ParticleBg />
      </body>
    </html>
  );
}

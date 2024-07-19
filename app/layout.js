/* eslint-disable camelcase */
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import "../styles/prism.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata = {
  title: "Partsbase Parts Public Search",
  description:
    "Search our worldwide database of over 15 billion aviation parts, Inventory includes listings in commercial, general, military and aerospace parts like DK120. Book Your Demo Today!",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

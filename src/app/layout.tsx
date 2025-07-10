

import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
//import { Layout, FixedPlugin } from "@/components";
import { ThemeProvider } from "@material-tailwind/react";
import { ClientThemeProvider } from "@/components/ClientThemeProvider"; // <- nuevo
import { FixedPlugin } from "@/components"; // si esto también es cliente, muévelo dentro
import ClientWrapper from "@/components/ClientWrapper"; 
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Centro Vida Feliz - El Torno",
  description:
    'Introducing Tailwind Author Page, a free "About the Author" blog page based on Tailwind CSS and Material Tailwind.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

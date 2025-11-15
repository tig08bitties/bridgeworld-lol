import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bridgeworld - Atlas Mines Portal",
  description: "Unlock the portal at the Atlas Mines using the Key and Map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

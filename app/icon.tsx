import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/logo-2.png",
    shortcut: "/logo-2.png",
    apple: "/logo-2.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head />
      <body>{children}</body>
    </html>
  );
}

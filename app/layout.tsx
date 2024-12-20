import type { Metadata } from "next";
import "./globals.css";
import { interSans } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Thiago's Blog",
  description: "My experiments with web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.className} antialiased`}>{children}</body>
    </html>
  );
}

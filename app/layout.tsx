import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Chat App",
  description: "Discord Clone",
};

const font = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}

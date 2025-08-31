import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuanzhi Zheng 郑暖之",
  description:
    "Interdisciplinary artist specialising in writing, moving image, and illustration.",
  icons: {
    icon: "/starburst.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

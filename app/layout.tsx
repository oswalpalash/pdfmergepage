import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDF Merge Page",
  description: "Merge multiple PDF files into a single PDF file.",
  keywords: ["pdf", "merge", "page"],
  openGraph: {
    title: "PDF Merge Page",
    description: "Merge multiple PDF files into a single PDF file.",
    url: "https://pdfmerge.page",
    images: [
      {
        url: "https://pdfmerge.page/image.jpg",
        width: 800,
        height: 600,
        alt: "PDF Merge Page",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO tags can be added here */}
<meta name="msvalidate.01" content="F5D5A440425F87F3A7CCC08D130D4A56" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

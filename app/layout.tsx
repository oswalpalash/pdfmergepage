import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDF Merge Page",
  description: "Merge multiple PDF files into a single PDF file. Local and secure",
  keywords: ["pdf", "merge", "page", "online"],
  openGraph: {
    title: "PDF Merge Page",
    description: "Merge multiple PDF files into a single PDF file. Local and secure",
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
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="PDF Merge" />
      <link rel="manifest" href="/site.webmanifest" />
        {/* Additional SEO tags can be added here */}
      <meta name="msvalidate.01" content="F5D5A440425F87F3A7CCC08D130D4A56" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

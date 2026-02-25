import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import { websiteJsonLd } from "@/app/lib/jsonLd";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pdfmerge.page"),
  title: {
    default: "Merge PDF Files Online | pdfmerge.page",
    template: "%s",
  },
  description: "Merge multiple PDF files into one document in your browser with drag-and-drop reordering.",
  keywords: ["pdf merge", "pdfmerger", "merge pdf pages", "combine pdf files", "pdfmerge"],
  openGraph: {
    title: "Merge PDF Files Online | pdfmerge.page",
    description: "Merge multiple PDF files into one document in your browser with drag-and-drop reordering.",
    url: "https://pdfmerge.page",
    siteName: "pdfmerge.page",
    type: "website",
    images: [
      {
        url: "https://pdfmerge.page/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "pdfmerge.page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF Files Online | pdfmerge.page",
    description: "Merge and reorder PDF files in-browser with zero signup.",
    images: ["https://pdfmerge.page/web-app-manifest-512x512.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = websiteJsonLd();

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="PDF Merge" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msvalidate.01" content="F5D5A440425F87F3A7CCC08D130D4A56" />
      </head>
      <body className={`${manrope.variable} font-sans`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2884926940370507"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

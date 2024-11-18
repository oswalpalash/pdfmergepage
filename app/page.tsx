'use client';

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

export default function Home() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  const mergePdfs = async () => {
    if (!files || files.length < 2) {
      alert('Please select at least two PDF files to merge.');
      return;
    }

    try {
      const pdfDocs = [];

      // Load each selected PDF file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        pdfDocs.push(pdfDoc);
      }

      // Create a new PDFDocument to hold the merged PDFs
      const mergedPdf = await PDFDocument.create();

      // Copy pages from each PDF into the new PDF
      for (const pdfDoc of pdfDocs) {
        const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      // Serialize the merged PDF to bytes (a Uint8Array)
      const mergedPdfBytes = await mergedPdf.save();

      // Create a Blob from the merged PDF bytes
      const mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });

      // Create a URL for the Blob
      const mergedPdfUrl = URL.createObjectURL(mergedPdfBlob);

      // Update state with the URL of the merged PDF
      setMergedPdfUrl(mergedPdfUrl);
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert('An error occurred while merging the PDFs. Please try again.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-6">PDF Merger</h1>
      <input
        type="file"
        accept="application/pdf"
        multiple
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={mergePdfs}
        disabled={!files || files.length < 2}
      >
        Merge PDFs
      </button>
      {mergedPdfUrl && (
        <div className="mt-6">
          <a
            href={mergedPdfUrl}
            download="merged.pdf"
            className="text-blue-500 underline"
          >
            Download Merged PDF
          </a>
        </div>
      )}
    </main>
  );
}


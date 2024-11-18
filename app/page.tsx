'use client';

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(event.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const mergePdfs = async () => {
    if (files.length < 2) {
      alert('Please select at least two PDF files to merge.');
      return;
    }

    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const mergedPdfUrl = URL.createObjectURL(mergedPdfBlob);

      // Automatically trigger the download
      const link = document.createElement('a');
      link.href = mergedPdfUrl;
      link.download = 'merged.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

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
        onChange={handleFileChange}
        multiple
        className="mb-4"
      />
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name}{' '}
            <button onClick={() => removeFile(index)} className="text-red-500">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 mt-4"
        onClick={mergePdfs}
        disabled={files.length < 2}
      >
        Merge PDFs
      </button>
    </main>
  );
}
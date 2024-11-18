'use client';

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { useDropzone } from 'react-dropzone';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { AiOutlineCloudUpload, AiOutlineDelete } from 'react-icons/ai';

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': [] },
  });
  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const reorderedFiles = Array.from(files);
    const [movedFile] = reorderedFiles.splice(result.source.index, 1);
    reorderedFiles.splice(result.destination.index, 0, movedFile);
    setFiles(reorderedFiles);
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
    <main className="flex min-h-screen items-center justify-center p-8 bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">PDF Merger</h1>
        <div
          {...getRootProps()}
          className={`w-full h-40 border-4 border-dashed rounded-xl flex flex-col justify-center items-center cursor-pointer transition 
            ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}
        >
          <input {...getInputProps()} />
          <AiOutlineCloudUpload size={50} className="text-gray-400 mb-3" />
          <p className="text-gray-600">
            Drag & drop PDF files here, or{' '}
            <span className="text-blue-600 underline">browse</span>
          </p>
        </div>
        {files.length > 0 && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="files">
              {(provided) => (
                <ul
                  className="mt-6 mb-4 space-y-3 max-h-60 overflow-y-auto"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {files.map((file, index) => (
                    <Draggable key={`${file.name}-${index}`} draggableId={`${file.name}-${index}`} index={index}>
                      {(provided) => (
                        <li
                          className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <span className="text-gray-700 truncate">{file.name}</span>
                          <button
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <AiOutlineDelete size={24} />
                          </button>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        )}
        <button
          onClick={mergePdfs}
          className="w-full mt-6 px-5 py-3 bg-blue-600 text-white rounded-xl font-medium text-lg hover:bg-blue-700 transition"
        >
          Merge PDFs
        </button>
      </div>
    </main>
  );
}
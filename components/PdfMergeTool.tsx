"use client";

import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload, AiOutlineDelete } from "react-icons/ai";
import { DragDropContext, Draggable, Droppable, type DropResult } from "react-beautiful-dnd";
import { trackPseoEvent, type PseoAnalyticsContext } from "@/app/lib/analytics";

type PdfMergeToolProps = {
  id?: string;
  heading: string;
  description: string;
  buttonLabel: string;
  analyticsContext?: PseoAnalyticsContext;
};

type PdfDocumentLike = {
  copyPages: (doc: LoadedPdfDocumentLike, pageIndices: number[]) => Promise<unknown[]>;
  addPage: (page: unknown) => void;
  save: () => Promise<Uint8Array>;
};

type LoadedPdfDocumentLike = {
  getPageIndices: () => number[];
};

type PdfLibRuntime = {
  PDFDocument: {
    create: () => Promise<PdfDocumentLike>;
    load: (bytes: ArrayBuffer) => Promise<LoadedPdfDocumentLike>;
  };
};

async function loadPdfRuntime(): Promise<PdfLibRuntime["PDFDocument"]> {
  const runtimeModule = (await import("pdf-lib/dist/pdf-lib.min.js")) as unknown as {
    default?: PdfLibRuntime;
    "module.exports"?: PdfLibRuntime;
  };

  const runtime = runtimeModule.default ?? runtimeModule["module.exports"];
  if (!runtime?.PDFDocument) {
    throw new Error("Unable to load PDF runtime");
  }
  return runtime.PDFDocument;
}

export function PdfMergeTool({
  id = "merge-tool",
  heading,
  description,
  buttonLabel,
  analyticsContext,
}: PdfMergeToolProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isMerging, setIsMerging] = useState(false);

  useEffect(() => {
    return () => {
      if (mergedPdfUrl) {
        URL.revokeObjectURL(mergedPdfUrl);
      }
    };
  }, [mergedPdfUrl]);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) {
      return;
    }
    setErrorMessage(null);
    setStatusMessage(null);
    setFiles((previousFiles) => [...previousFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [] },
  });

  const removeFile = (index: number) => {
    setErrorMessage(null);
    setStatusMessage(null);
    setFiles((previousFiles) => previousFiles.filter((_, fileIndex) => fileIndex !== index));
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reorderedFiles = Array.from(files);
    const [movedFile] = reorderedFiles.splice(result.source.index, 1);
    reorderedFiles.splice(result.destination.index, 0, movedFile);
    setFiles(reorderedFiles);
  };

  const mergePdfs = async () => {
    setErrorMessage(null);
    setStatusMessage(null);

    if (files.length < 2) {
      setErrorMessage("Add at least two PDF files before merging.");
      return;
    }

    setIsMerging(true);

    try {
      if (analyticsContext) {
        trackPseoEvent("pseo_merge_start", analyticsContext, { file_count: files.length });
      }

      const PDFDocument = await loadPdfRuntime();
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const mergedPdfBlob = new Blob([mergedPdfBytes], { type: "application/pdf" });
      const nextMergedPdfUrl = URL.createObjectURL(mergedPdfBlob);

      setMergedPdfUrl((previousUrl) => {
        if (previousUrl) {
          URL.revokeObjectURL(previousUrl);
        }
        return nextMergedPdfUrl;
      });

      const link = document.createElement("a");
      link.href = nextMergedPdfUrl;
      link.download = "merged.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setStatusMessage(`Merged ${files.length} files into one PDF.`);
      if (analyticsContext) {
        trackPseoEvent("pseo_merge_success", analyticsContext, { file_count: files.length });
      }
    } catch (error) {
      console.error("Error merging PDFs:", error);
      setErrorMessage("Merging failed. Check your files and try again.");
      if (analyticsContext) {
        trackPseoEvent("pseo_merge_failed", analyticsContext, {
          file_count: files.length,
          reason: "merge_exception",
        });
      }
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <section id={id} className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-900/5 sm:p-8">
      <div className="mb-5">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">{heading}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>

      <div
        {...getRootProps()}
        className={`flex h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-4 text-center transition ${
          isDragActive
            ? "border-sky-400 bg-sky-50"
            : "border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100"
        }`}
      >
        <input {...getInputProps()} />
        <AiOutlineCloudUpload size={46} className="mb-2 text-slate-500" />
        <p className="text-sm font-medium text-slate-700">Drag and drop PDF files here</p>
        <p className="text-xs text-slate-500">or click to browse</p>
      </div>

      {files.length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="files">
            {(provided) => (
              <ul
                className="mt-5 space-y-2"
                {...provided.droppableProps}
                ref={provided.innerRef}
                aria-label="PDF file order"
              >
                {files.map((file, index) => (
                  <Draggable key={`${file.name}-${index}`} draggableId={`${file.name}-${index}`} index={index}>
                    {(draggableProvided) => (
                      <li
                        className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-slate-800">{file.name}</p>
                          <p className="text-xs text-slate-500">Position {index + 1}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="rounded-lg border border-rose-200 p-2 text-rose-500 transition hover:bg-rose-50"
                          aria-label={`Remove ${file.name}`}
                        >
                          <AiOutlineDelete size={20} />
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
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={mergePdfs}
          disabled={isMerging}
          data-pseo-event="pseo_cta_click"
          data-pseo-location="merge_tool"
          data-pseo-label={buttonLabel}
          className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isMerging ? "Merging..." : buttonLabel}
        </button>
        <p className="text-xs text-slate-500">Tip: reorder files before merging to lock page flow.</p>
      </div>

      {errorMessage ? <p className="mt-3 text-sm text-rose-600">{errorMessage}</p> : null}
      {statusMessage ? <p className="mt-3 text-sm text-emerald-700">{statusMessage}</p> : null}

      {mergedPdfUrl ? (
        <a
          href={mergedPdfUrl}
          download="merged.pdf"
          className="mt-4 inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
        >
          Download merged PDF again
        </a>
      ) : null}
    </section>
  );
}

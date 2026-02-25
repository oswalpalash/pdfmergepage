"use client";

import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  AiOutlineArrowRight,
  AiOutlineCheckCircle,
  AiOutlineCloudUpload,
  AiOutlineDelete,
  AiOutlineDownload,
  AiOutlineFilePdf,
  AiOutlineMenu,
} from "react-icons/ai";
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
    PDFDocument?: PdfLibRuntime["PDFDocument"];
    default?: { PDFDocument?: PdfLibRuntime["PDFDocument"] };
    "module.exports"?: { PDFDocument?: PdfLibRuntime["PDFDocument"] };
  };

  const PDFDocument =
    runtimeModule.PDFDocument ?? runtimeModule.default?.PDFDocument ?? runtimeModule["module.exports"]?.PDFDocument;

  if (!PDFDocument?.create || !PDFDocument?.load) {
    throw new Error("Unable to load PDF runtime");
  }
  return PDFDocument;
}

function formatFileSize(sizeInBytes: number): string {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B`;
  }
  if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(1)} KB`;
  }
  return `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
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
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

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

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { "application/pdf": [] },
    noClick: true,
    noKeyboard: true,
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
    <section
      id={id}
      className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_32px_80px_-40px_rgba(15,23,42,0.55)] backdrop-blur sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-blue-100/60 blur-3xl" />
      </div>

      <div className="relative">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700">Browser PDF Workspace</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{heading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">{files.length} files selected</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">{formatFileSize(totalSize)} total size</span>
          </div>
        </div>

        <div
          {...getRootProps({
            role: "button",
            tabIndex: 0,
            onClick: () => open(),
            onKeyDown: (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open();
              }
            },
          })}
          className={`group relative flex min-h-[280px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-all duration-300 ${
            isDragActive
              ? "border-[#137fec] bg-blue-50/90 shadow-[0_24px_40px_-28px_rgba(19,127,236,0.7)]"
              : "border-slate-300 bg-white/70 hover:border-[#137fec] hover:bg-blue-50/60"
          }`}
        >
          <input {...getInputProps()} />
          <div className="relative z-10">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#137fec]/10 text-[#137fec] transition-transform duration-300 group-hover:scale-110">
              <AiOutlineCloudUpload size={44} />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Select PDF files</h3>
            <p className="mt-2 text-sm text-slate-500">or drag and drop PDFs here</p>
            <div className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#137fec] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25">
              Choose from Computer
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,127,236,0.16),transparent_58%)]" />
          </div>
        </div>

        {files.length > 0 ? (
          <div className="mt-7 grid gap-5 xl:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-900">Files to Merge ({files.length})</h3>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">Drag cards to reorder</p>
              </div>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="files" direction="horizontal">
                  {(provided) => (
                    <ul
                      className="flex gap-4 overflow-x-auto pb-2"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      aria-label="PDF file order"
                    >
                      {files.map((file, index) => {
                        const draggableId = `${file.name}-${file.lastModified}-${file.size}-${index}`;
                        return (
                          <Draggable key={draggableId} draggableId={draggableId} index={index}>
                            {(draggableProvided) => (
                              <li
                                className="group/card w-52 shrink-0 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-[#137fec]/40 hover:shadow-md"
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.draggableProps}
                              >
                                <div className="relative rounded-t-2xl border-b border-slate-100 bg-slate-50 p-4">
                                  <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-white transition hover:bg-rose-500"
                                    aria-label={`Remove ${file.name}`}
                                  >
                                    <AiOutlineDelete size={16} />
                                  </button>
                                  <div className="flex aspect-[3/4] items-center justify-center rounded-xl border border-slate-200 bg-white">
                                    <div className="flex flex-col items-center text-center">
                                      <AiOutlineFilePdf size={42} className="text-rose-500/85" />
                                      <span className="mt-2 rounded-full bg-slate-900 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                                        Position {index + 1}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-3">
                                  <p className="truncate text-sm font-semibold text-slate-900" title={file.name}>
                                    {file.name}
                                  </p>
                                  <div className="mt-1 flex items-center justify-between">
                                    <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                                    <span
                                      className="inline-flex cursor-grab items-center text-slate-400 active:cursor-grabbing"
                                      {...draggableProvided.dragHandleProps}
                                      aria-label={`Reorder ${file.name}`}
                                    >
                                      <AiOutlineMenu size={17} />
                                    </span>
                                  </div>
                                </div>
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                      <li className="flex min-h-[290px] w-40 shrink-0 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white/80 p-3">
                        <button
                          type="button"
                          onClick={() => open()}
                          className="inline-flex flex-col items-center gap-2 text-center text-slate-600 transition hover:text-[#137fec]"
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-2xl leading-none">
                            +
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.08em]">Add More</span>
                        </button>
                      </li>
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900">Merge Summary</h4>
              <p className="mt-1 text-xs text-slate-500">Ready when you are. Reorder anytime before merging.</p>
              <dl className="mt-4 space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                <div className="flex items-center justify-between gap-3">
                  <dt>Files</dt>
                  <dd className="font-semibold">{files.length}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt>Total size</dt>
                  <dd className="font-semibold">{formatFileSize(totalSize)}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt>Output</dt>
                  <dd className="font-semibold">merged.pdf</dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={mergePdfs}
                disabled={isMerging || files.length < 2}
                data-pseo-event="pseo_cta_click"
                data-pseo-location="merge_tool"
                data-pseo-label={buttonLabel}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#137fec] px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <AiOutlineDownload size={17} />
                {isMerging ? "Merging..." : "Merge & Download"}
              </button>
              <p className="mt-3 text-xs text-slate-500">Tip: the final PDF follows the visual order of these cards.</p>

              {errorMessage ? <p className="mt-3 text-sm font-medium text-rose-600">{errorMessage}</p> : null}
              {statusMessage ? (
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700">
                  <AiOutlineCheckCircle size={16} />
                  {statusMessage}
                </p>
              ) : null}

              {mergedPdfUrl ? (
                <a
                  href={mergedPdfUrl}
                  download="merged.pdf"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  <AiOutlineDownload size={16} />
                  Download merged PDF again
                </a>
              ) : null}
            </aside>
          </div>
        ) : (
          <p className="mt-4 text-sm text-slate-600">Add at least two files to unlock merge actions.</p>
        )}
      </div>

      {files.length > 0 ? (
        <div className="pointer-events-none fixed bottom-5 left-0 right-0 z-40 flex justify-center px-4">
          <div className="pointer-events-auto flex w-full max-w-lg items-center justify-between gap-4 rounded-full border border-slate-700/80 bg-slate-900/90 px-5 py-2.5 text-white shadow-2xl backdrop-blur">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Ready to merge</p>
              <p className="truncate text-sm font-semibold">{files.length} Files Selected</p>
            </div>
            <button
              type="button"
              onClick={mergePdfs}
              disabled={isMerging || files.length < 2}
              data-pseo-event="pseo_cta_click"
              data-pseo-location="merge_tool_sticky"
              data-pseo-label={buttonLabel}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#137fec] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isMerging ? "Merging..." : buttonLabel}
              <AiOutlineArrowRight size={15} />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

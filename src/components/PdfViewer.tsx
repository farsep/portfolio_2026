"use client";

import { cn } from "@/lib/utils";

interface PdfViewerProps {
    src: string;
    title: string;
    className?: string;
}

export default function PdfViewer({ src, title, className }: PdfViewerProps) {
    return (
        <div className={cn("w-full aspect-[3/4] md:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm relative", className)}>
            <object
                data={`${src}#toolbar=0&navpanes=0&view=FitH`}
                type="application/pdf"
                className="w-full h-full"
            >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-300 bg-white/5">
                    <p className="mb-4 text-lg">Unable to display PDF directly.</p>
                    <a
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-colors"
                    >
                        Download / View PDF
                    </a>
                </div>
            </object>
        </div>
    );
}

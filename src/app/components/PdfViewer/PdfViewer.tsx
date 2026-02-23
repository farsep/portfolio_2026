"use client";

import styles from "./PdfViewer.module.css";

interface PdfViewerProps {
    src: string;
    title: string;
    className?: string; // Kept for compatibility but usually handled via wrapper or composition in modules
}

export default function PdfViewer({ src, title, className }: PdfViewerProps) {
    // Note: className prop is not directly merged into styles.viewerContainer here 
    // because we want strict separation, but can be added if needed.
    // We'll wrap it or just use the container class.

    return (
        <div className={`${styles.viewerContainer} ${className || ''}`}>
            <object
                data={`${src}#toolbar=0&navpanes=0&view=FitH`}
                type="application/pdf"
                className={styles.object}
            >
                <div className={styles.fallback}>
                    <p className="mb-4 text-lg">Unable to display PDF directly.</p>
                    <a
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadButton}
                    >
                        Download / View PDF
                    </a>
                </div>
            </object>
        </div>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "../../cv/page.module.css";

interface CVModalsProps {
    selectedImage: string | null;
    setSelectedImage: (image: string | null) => void;
    selectedPdf: string | null;
    setSelectedPdf: (pdf: string | null) => void;
}

export default function CVModals({ selectedImage, setSelectedImage, selectedPdf, setSelectedPdf }: CVModalsProps) {
    return (
        <>
            {/* Full Screen Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className={styles.modalBackdrop}
                    >
                        <button onClick={() => setSelectedImage(null)} className={styles.closeButton} style={{ zIndex: 60 }}>
                            <X size={24} />
                        </button>
                        <motion.img
                            src={selectedImage}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className={styles.modalImage}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Full Screen PDF Modal */}
            <AnimatePresence>
                {selectedPdf && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPdf(null)}
                        className={styles.modalBackdrop}
                    >
                        <button onClick={() => setSelectedPdf(null)} className={styles.closeButton} style={{ zIndex: 60 }}>
                            <X size={24} />
                        </button>
                        <div className={styles.modalPdfContainer} onClick={(e) => e.stopPropagation()}>
                            <object data={selectedPdf} type="application/pdf" style={{ width: '100%', height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white' }}>
                                    <a href={selectedPdf} target="_blank" className={styles.clickButton}>Download PDF</a>
                                </div>
                            </object>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

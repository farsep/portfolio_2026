"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
    images: { path: string; alt: string; title?: string }[];
    cardClassName?: string;
    imageClassName?: string;
    className?: string;
}

export default function ImageCarousel({ images, cardClassName, imageClassName, className }: ImageCarouselProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className={cn("w-full relative overflow-hidden py-8", className)}>
            <motion.div
                className="flex gap-6 px-8 cursor-grab active:cursor-grabbing overflow-x-auto pb-8 snap-x snap-mandatory"
                whileTap={{ cursor: "grabbing" }}
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[33.333%] w-1/3 snap-center relative flex-shrink-0"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => setSelectedImage(image.path)}
                    >
                        <div className={cn(
                            "flex flex-col gap-3 bg-white/5 rounded-2xl border border-white/10 p-[3%] shadow-lg hover:bg-white/10 transition-colors cursor-pointer group",
                            cardClassName
                        )}>
                            <div className={cn("relative flex-1 overflow-hidden rounded-xl bg-black/20 aspect-video", imageClassName)}>
                                <img
                                    src={image.path}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white text-sm font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">Ver Imagen</span>
                                </div>
                            </div>
                            {/* Caption / Title */}
                            {image.title && (
                                <h3 className="text-sm font-medium text-gray-300 text-center px-2 w-full mx-auto">{image.title}</h3>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Fade gradients for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />

            {/* Full Screen Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
                    >
                        <motion.button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>
                        <motion.img
                            src={selectedImage}
                            alt="Full Screen View"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            // Prevent closing when clicking the image itself
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

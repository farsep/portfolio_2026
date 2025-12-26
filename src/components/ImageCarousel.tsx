import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
    images: { path: string; alt: string; title?: string }[];
    cardClassName?: string;
    imageClassName?: string;
    className?: string;
    onImageClick?: (path: string) => void;
}

export default function ImageCarousel({ images, cardClassName, imageClassName, className, onImageClick }: ImageCarouselProps) {
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
                        onClick={() => onImageClick?.(image.path)}
                    >
                        <div className={cn(
                            "flex flex-col gap-3 bg-white/5 rounded-2xl border border-white/10 p-[3%] shadow-lg hover:bg-white/10 transition-colors cursor-pointer",
                            cardClassName
                        )}>
                            <div className={cn("relative flex-1 overflow-hidden rounded-xl bg-black/20 aspect-video group/image", imageClassName)}>
                                <img
                                    src={image.path}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
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
        </div>
    );
}

"use client";

import styles from "./ImageCarousel.module.css";

interface ImageItem {
    path: string;
    alt: string;
    title: string;
}

interface ImageCarouselProps {
    images: ImageItem[];
    className?: string;
    cardClassName?: string;
    imageClassName?: string;
    onImageClick?: (path: string) => void;
}

export default function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={styles.carouselItem}
                        onClick={() => onImageClick && onImageClick(img.path)}
                    >
                        <div className={styles.card}>
                            <img
                                src={img.path}
                                alt={img.alt}
                                className={styles.image}
                                loading="lazy"
                            />
                            <div className={styles.overlay}>
                                <span className={styles.title}>{img.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

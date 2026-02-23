"use client";

import { motion } from "framer-motion";
import styles from "./DiplomaCarousel.module.css";

interface Diploma {
    title: string;
    path: string;
}

const diplomas: Diploma[] = [
    { title: "Diploma de Excelencia Académica - Secundaria 1", path: "https://i.imgur.com/18FE2AK.jpeg" },
    { title: "Diploma de Rendimiento Académico - Secundaria 3", path: "https://i.imgur.com/MIMYxyj.jpeg" },
    { title: "Diploma de Excelencia Académica - Primaria 2", path: "https://i.imgur.com/Mn6Z2nq.jpeg" },
    { title: "Diploma de Excelencia Académica - Primaria 4", path: "https://i.imgur.com/VSMCeP4.jpeg" },
    { title: "Diploma de Excelencia Académica - Primaria 5", path: "https://i.imgur.com/R7f9WmX.jpeg" },
    { title: "Diploma de Excelencia Académica - Primaria 6", path: "https://i.imgur.com/5iTPjF6.jpeg" },
    { title: "Diploma de Excelencia Académica - Primaria Oratoria", path: "https://i.imgur.com/vd2OFz3.jpeg" },
];

export default function DiplomaCarousel() {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
                {diplomas.map((diploma, index) => (
                    <div key={index} className={styles.carouselItem}>
                        <div className={styles.card}>
                            {/* Image Container */}
                            <div className={styles.imageContainer}>
                                <img
                                    src={diploma.path}
                                    alt={diploma.title}
                                    className={styles.image}
                                    loading="lazy"
                                />
                            </div>
                            {/* Title */}
                            <h3 className={styles.title}>{diploma.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

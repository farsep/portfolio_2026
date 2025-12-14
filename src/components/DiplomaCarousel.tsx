"use client";

import { motion } from "framer-motion";

interface Diploma {
    title: string;
    path: string;
}

const diplomas: Diploma[] = [
    { title: "Diploma de Excelencia Académica - Secundaria 1", path: "/portfolio_files/school/Secundaria/Alfred 1_rotated_page-0001.jpg" },
    { title: "Diploma de Rendimiento Académico - Secundaria 3", path: "/portfolio_files/school/Secundaria/Bautista 3_rotated_page-0001.jpg" },
    { title: "Diploma de Excelencia Académica - Primaria 2", path: "/portfolio_files/school/Primaria/Primaria_2.jpg" },
    { title: "Diploma de Excelencia Académica - Primaria 4", path: "/portfolio_files/school/Primaria/Primaria_4.jpg" },
    { title: "Diploma de Excelencia Académica - Primaria 5", path: "/portfolio_files/school/Primaria/Primaria_5.jpg" },
    { title: "Diploma de Excelencia Académica - Primaria 6", path: "/portfolio_files/school/Primaria/Primaria_6.jpg" },
    { title: "Diploma de Excelencia Académica - Primaria Oratoria", path: "/portfolio_files/school/Primaria/Oratoria.jpg" },
];

export default function DiplomaCarousel() {
    return (
        <div className="w-full relative overflow-hidden py-8">
            <motion.div
                className="flex gap-6 px-8 cursor-grab active:cursor-grabbing overflow-x-auto pb-8 snap-x snap-mandatory"
                whileTap={{ cursor: "grabbing" }}
            >
                {diplomas.map((diploma, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[33.333%] w-1/3 snap-center relative flex-shrink-0"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex flex-col gap-3 bg-white/5 rounded-2xl border border-white/10 p-[3%] shadow-lg hover:bg-white/10 transition-colors">
                            {/* Image Container */}
                            <div className="relative flex-1 overflow-hidden rounded-xl bg-black/20">
                                <img
                                    src={diploma.path}
                                    alt={diploma.title}
                                    className="w-full h-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                            {/* Title */}
                            <h3 className="text-sm font-bold text-gray-300 text-center px-2 w-full max-w-[300px] mx-auto truncate">{diploma.title}</h3>
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

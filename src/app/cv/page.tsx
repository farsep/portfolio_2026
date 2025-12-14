"use client";

import { motion } from "framer-motion";
import LiquidCard from "@/components/LiquidCard";
import DiplomaCarousel from "@/components/DiplomaCarousel";
import PdfViewer from "@/components/PdfViewer";
import OtherFiles from "@/components/OtherFiles";

export default function CvPage() {
    return (
        <main className="min-h-screen p-8 md:p-24 relative z-10 flex flex-col items-center">
            <div className="max-w-6xl w-full flex flex-col gap-20">

                {/* Header */}
                <section className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-6"
                    >
                        Hoja de Vida
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300"
                    >
                        Logros Académicos y Profesionales
                    </motion.p>
                </section>

                {/* Primer Puesto Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-yellow-400">Primer Puesto de Educación Secundaria</h2>
                        <LiquidCard className="p-8 text-lg leading-relaxed text-gray-200 shadow-xl shadow-yellow-500/10 border-yellow-500/20">
                            <p className="mb-4">
                                Finalicé mi ciclo educativo escolar como el <strong>Mejor de mi Generación</strong>, destacándome por mantener un desempeño académico sobresaliente durante todo el ciclo. Desde los primeros años de mi formación, demostré una inclinación natural por aprender más allá de lo que el currículo ofrecía, guiado por un enfoque autodidacta y un deseo constante de superación.
                            </p>
                            <p className="mb-4">
                                Mi pasión por el conocimiento comenzó en la primaria, donde obtuve diplomas de honor en reconocimiento a mis logros académicos. Participé activamente en concursos internos, en los que competí exitosamente contra estudiantes de grados superiores, demostrando mi capacidad para ir más allá de los estándares establecidos.
                            </p>
                            <p className="mb-4">
                                Además, siempre fui parte de eventos de oratoria, representando a mi institución en diversas ocasiones y siendo reconocido por mi elocuencia y habilidades discursivas. Esta experiencia fortaleció mi capacidad para comunicar ideas con claridad y transmitir mensajes de impacto, cualidad que mantuve y perfeccioné a lo largo de todo mi ciclo educativo.
                            </p>
                            <p className="italic text-gray-400">
                                "Estos logros no solo reflejan mi dedicación al aprendizaje y al desarrollo personal, sino también mi compromiso de alcanzar el máximo potencial en cada etapa de mi formación."
                            </p>
                        </LiquidCard>
                    </div>
                    <div className="h-full">
                        <PdfViewer
                            src="/portfolio_files/school/Acta%20primer%20Puesto%20-%20Arnie%20Farid%20Espinoza%20Pachas.pdf"
                            title="Acta Primer Puesto"
                            className="h-full aspect-auto"
                        />
                    </div>
                </motion.section>

                {/* Diplomas Section */}
                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-white mb-8 pl-4 border-l-4 border-blue-500">Reconocimientos Académicos</h2>
                    <DiplomaCarousel />
                </motion.section>

                {/* Other Files Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="pb-20"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 pl-4 border-l-4 border-purple-500">Documentación Adicional</h2>
                    <OtherFiles />
                </motion.section>

            </div>
        </main>
    );
}

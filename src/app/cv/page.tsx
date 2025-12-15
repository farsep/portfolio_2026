"use client";

import { motion } from "framer-motion";
import DiplomaCarousel from "@/components/DiplomaCarousel";
import PdfViewer from "@/components/PdfViewer";
import OtherFiles from "@/components/OtherFiles";
import Background from "@/components/Background";
import LiquidCard from "@/components/LiquidCard";

export default function CVPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto space-y-24">
            {/* Hero / Introduction */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 pb-2">
                    Curriculum Vitae
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Un recorrido detallado por mi trayectoria académica, logros escolares y certificaciones profesionales.
                </p>
            </motion.section>

            {/* School Achievements Section (Primer Puesto + Diplomas) */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-16"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 w-12 bg-yellow-500 rounded-full" />
                    <h2 className="text-3xl font-bold text-white">Trayectoria Escolar</h2>
                </div>

                {/* Primer Puesto / Acta */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-yellow-400">Primer Puesto de Educación Secundaria</h3>
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
                </div>

                {/* Diplomas Carousel */}
                <div className="space-y-6">
                    <div className="pl-4 border-l-2 border-yellow-500/30">
                        <h3 className="text-xl font-semibold text-gray-200">Diplomas de Honor</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Colección de reconocimientos obtenidos durante primaria y secundaria.
                        </p>
                    </div>
                    <DiplomaCarousel />
                </div>

            </motion.section>

            {/* Other Files */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 w-12 bg-purple-500 rounded-full" />
                    <h2 className="text-3xl font-bold text-white">Certificaciones y Documentos</h2>
                </div>
                <OtherFiles />
            </motion.section>

            <Background />
        </div>
    );
}

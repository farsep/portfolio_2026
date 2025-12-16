"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import DiplomaCarousel from "@/components/DiplomaCarousel";
import PdfViewer from "@/components/PdfViewer";
import OtherFiles from "@/components/OtherFiles";
import Background from "@/components/Background";
import LiquidCard from "@/components/LiquidCard";
import ImageCarousel from "@/components/ImageCarousel";

export default function CVPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

            {/* Oracle One Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12"
            >
                <div className="h-full order-2 md:order-1">
                    <PdfViewer
                        src="/portfolio_files/Arnie Farid Espinoza Pachas - Programa Oracle One.pdf"
                        title="Certificado Oracle One"
                        className="h-full aspect-auto"
                    />
                </div>
                <div className="space-y-6 order-1 md:order-2">
                    <h2 className="text-3xl font-bold text-orange-400">Oracle One Next Education</h2>
                    <LiquidCard className="p-8 text-lg leading-relaxed text-gray-200 shadow-xl shadow-orange-500/10 border-orange-500/20">
                        <p className="mb-4">
                            Fui seleccionado para el prestigioso programa de formación <strong>Oracle One</strong>, especializándome en <strong>Desarrollo Backend</strong>. Este programa me permitió consolidar conocimientos fundamentales en áreas clave, como la Programación Orientada a Objetos y la gestión de Bases de Datos Relacionales y No Relacionales.
                        </p>
                        <p>
                            Además, adquirí experiencia práctica en el desarrollo y despliegue de APIs monolíticas utilizando Java con el framework Spring, lo que fortaleció mi comprensión del ciclo completo de desarrollo de software. Esta formación no solo amplió mis habilidades técnicas, sino que también me preparó para enfrentar desafíos reales en el campo del desarrollo backend.
                        </p>
                    </LiquidCard>
                </div>
            </motion.section>

            {/* Digital House Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                {/* Header & Description */}
                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Description & Logo */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-yellow-300">Digital House - Beca por Mercado Libre y Globant</h2>
                        <LiquidCard className="p-8 text-lg leading-relaxed text-gray-200 shadow-xl shadow-yellow-300/10 border-yellow-300/20">
                            <p className="mb-4 text-sm font-semibold text-yellow-200/80 uppercase tracking-widest">
                                Web Development (Backend y Frontend), UI, SCRUM y Cloud Computing • 21 Meses
                            </p>
                            <p className="mb-4">
                                Fui ganador de la beca en 2023 tras superar filtros de conocimientos en programación. A lo largo del programa, he aprendido una variedad de tópicos, desde lo básico del desarrollo web, abarcando la composición de HTML, hasta temas avanzados como <strong>Docker, virtualización, teoría de bases de datos relacionales, Cloud Computing con AWS</strong>, aplicaciones web con React y TypeScript.
                            </p>
                            <p>
                                También he estudiado los fundamentos de la programación orientada a objetos, aplicándolos con <strong>Java y Spring Boot</strong> para crear API's robustas. Sin duda, esta experiencia representa una gran oportunidad de aprendizaje y desarrollo en mi pasión por la tecnología.
                            </p>
                        </LiquidCard>

                        {/* Logo - Full Ratio */}
                        <LiquidCard className="flex items-center justify-center p-[1%]">
                            <img
                                src="/portfolio_files/Digital House/Logo Certified Tech Developer.png"
                                alt="Certified Tech Developer Logo"
                                className="w-full h-auto object-contain rounded-2xl"
                            />
                        </LiquidCard>
                    </div>

                    {/* Right Column: PDF & Program (Stacked) */}
                    <div className="flex flex-col gap-30">
                        {/* Certificate */}
                        <div className="w-full">
                            <PdfViewer
                                src="/portfolio_files/Digital House/Mercado Libre - Globant Certified Professional Developer Arnie Farid Espinoza Pachas.pdf"
                                title="Certificado Digital House"
                                className="w-full aspect-[4/3]"
                            />
                        </div>

                        {/* Program Image - Full Ratio */}
                        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 group">
                            <img
                                src="/portfolio_files/Digital House/Programa de Estudios Digital House.jpg"
                                alt="Programa de Estudios"
                                className="w-full h-auto object-contain"
                            />
                            {/* Overlay for viewing/downloading */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                                onClick={() => setSelectedImage("/portfolio_files/Digital House/Programa de Estudios Digital House.jpg")}>
                                <button
                                    className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white font-bold transition-colors"
                                >
                                    Ver Programa Completo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* MindForgeX Section - Redesigned */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                {/* Decorative Background Elements */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

                <LiquidCard className="p-8 md:p-12 border-sky-500/30 shadow-sky-500/5 hover:border-sky-500/50 transition-all duration-500">
                    <div className="space-y-12">
                        {/* Header */}
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600">
                                MindForgeX
                            </h2>
                            <p className="text-xl text-sky-200/80 font-medium tracking-wide">
                                Concurso Voces por el Cambio - Credicorp
                            </p>
                        </div>

                        {/* Main Content: Video & Story */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Video Container with Cinema Glow */}
                            <div className="relative group w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                                <div className="absolute inset-0 bg-sky-500/20 blur-xl group-hover:blur-2xl transition-all opacity-50 duration-500" />
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/baSRhPHHFlQ?si=6sDwLlbNKOOQJCKm"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="relative z-10 w-full h-full"
                                ></iframe>
                            </div>

                            {/* Narrative Text */}
                            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                                <p>
                                    Formé parte del concurso <strong className="text-sky-300">Voces por el Cambio de Credicorp</strong> junto con mis amigos Leandro y Leonardo. El concurso ofrecía acceso a mentorías, aceleradoras de capital y un premio de <strong>$15,000</strong>, además de la oportunidad de asistir al <strong className="text-purple-300">One Young World Summit</strong>.
                                </p>
                                <p>
                                    Para potenciar nuestra visión, contacté a <strong className="text-yellow-300">Raúl Alcántara</strong>, campeón de la IMO y egresado del MIT, quien se unió al equipo aportando su experiencia de clase mundial.
                                </p>
                                <p>
                                    Así nació <strong>MindForgeX</strong>, una plataforma educativa de lecciones interactivas. Con mi experiencia en multimedia, desarrollé el <strong>video demo</strong> (visible a la izquierda) para consolidar nuestra propuesta. Aunque el proyecto fue pausado, las conexiones y aprendizajes quedaron como base sólida para mi futuro.
                                </p>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="space-y-6 pt-8 border-t border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
                                <span className="text-sm font-bold text-sky-400/80 uppercase tracking-widest">Galería del Equipo</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
                            </div>

                            <ImageCarousel
                                className="rounded-[2.5rem]"
                                cardClassName="rounded-[2.5rem]"
                                imageClassName="rounded-[1.5rem]"
                                images={[
                                    { path: "/portfolio_files/mindForgeX/IMG_20231027_143757.jpg", alt: "MindForgeX Development", title: "Leandro, Leonardo y yo - Equipo Inicial" },
                                    { path: "/portfolio_files/mindForgeX/IMG_20231027_130730.jpg", alt: "MindForgeX Team Meeting", title: "Junto a Raúl Alcántara, compatriota del MIT y ganador de la IMO" },
                                    { path: "/portfolio_files/mindForgeX/IMG_20231027_134316.jpg", alt: "MindForgeX Planning", title: "Sesión de Planificación y Estrategia" },
                                ]} />
                        </div>
                    </div>
                </LiquidCard>
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

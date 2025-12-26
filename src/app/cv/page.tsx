"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mic, BookOpen, Users, Globe, Video } from "lucide-react";
import DiplomaCarousel from "@/components/DiplomaCarousel";
import PdfViewer from "@/components/PdfViewer";
import OtherFiles from "@/components/OtherFiles";
import Background from "@/components/Background";
import LiquidCard from "@/components/LiquidCard";
import ImageCarousel from "@/components/ImageCarousel";

export default function CVPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

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
                    <div className="h-full relative group cursor-pointer" onClick={() => setSelectedPdf("/portfolio_files/school/Acta%20primer%20Puesto%20-%20Arnie%20Farid%20Espinoza%20Pachas.pdf")}>
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-yellow-500/10 h-full group/image">
                            <img
                                src="/portfolio_files/school/Acta de Mejor Estudiante de la Graduacion Secundaria - Mejores Calificaciones - Arnie Farid Espinoza Pachas_page-0001.jpg"
                                alt="Acta Primer Puesto"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-bold backdrop-blur-md shadow-lg transform group-hover/image:scale-105 transition-transform duration-300">
                                    Click para abrir
                                </span>
                            </div>
                        </div>
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
                <div className="h-full order-2 md:order-1 relative group cursor-pointer" onClick={() => setSelectedPdf("/portfolio_files/Arnie Farid Espinoza Pachas - Programa Oracle One.pdf")}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-orange-500/10 h-full group/image">
                        <img
                            src="/portfolio_files/Arnie Farid Espinoza Pachas - Programa Oracle One_page-0001.jpg"
                            alt="Certificado Oracle One"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-bold backdrop-blur-md shadow-lg transform group-hover/image:scale-105 transition-transform duration-300">
                                Click para abrir
                            </span>
                        </div>
                    </div>
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
                        <div className="w-full relative group cursor-pointer" onClick={() => setSelectedPdf("/portfolio_files/Digital House/Mercado Libre - Globant Certified Professional Developer Arnie Farid Espinoza Pachas.pdf")}>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-yellow-300/10 group/image">
                                <img
                                    src="/portfolio_files/Digital House/Mercado Libre - Globant Certified Professional Developer Arnie Farid Espinoza Pachas_page-0001.jpg"
                                    alt="Certificado Digital House"
                                    className="w-full h-auto object-contain"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-bold backdrop-blur-md shadow-lg transform group-hover/image:scale-105 transition-transform duration-300">
                                        Click para abrir
                                    </span>
                                </div>
                            </div>
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

                <LiquidCard className="p-8 md:p-12 border-sky-500/30 shadow-sky-500/5 hover:border-sky-500/50 transition-all duration-500 backdrop-blur-[2px]">
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
                            <div className="space-y-6 text-lg leading-relaxed text-gray-200">
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
                                onImageClick={setSelectedImage}
                                images={[
                                    { path: "/portfolio_files/mindForgeX/IMG_20231027_143757.jpg", alt: "MindForgeX Development", title: "Leandro, Leonardo y yo - Equipo Inicial" },
                                    { path: "/portfolio_files/mindForgeX/IMG_20231027_130730.jpg", alt: "MindForgeX Team Meeting", title: "Junto a Raúl Alcántara, compatriota del MIT y ganador de la IMO" },
                                    { path: "/portfolio_files/mindForgeX/IMG_20231027_134316.jpg", alt: "MindForgeX Planning", title: "Sesión de Planificación y Estrategia" },
                                ]} />
                        </div>
                    </div>
                </LiquidCard>
            </motion.section>

            {/* Professional Experience Section */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="space-y-16"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 w-12 bg-emerald-500 rounded-full" />
                    <h2 className="text-3xl font-bold text-white">Experiencia Profesional y Pasantías</h2>
                </div>

                {/* Grid for Samsung & GCM */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Samsung User Blog */}
                    <LiquidCard className="p-8 border-blue-500/20 shadow-blue-500/5 hover:border-blue-500/40 rounded-[2.5rem]">
                        <div className="flex flex-col gap-10 h-full">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-blue-400">Samsung User Blog</h3>
                                <p className="text-sm font-semibold text-blue-200/60 uppercase tracking-widest">Redactor SEO • Blog Tecnológico</p>
                            </div>

                            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video relative group">
                                <img
                                    src="/portfolio_files/Samsung_User_ScreenShot.png"
                                    alt="Samsung User Blog"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="text-gray-200 leading-relaxed space-y-4 flex-1">
                                <p>
                                    Durante la etapa final de mi educación escolar, formé parte del equipo de <strong>SAMSUNGUSER</strong>, trabajando como <strong>redactor SEO</strong>. Mi labor consistió en crear contenido optimizado para motores de búsqueda, mejorando la visibilidad del blog en Google.
                                </p>
                                <p className="text-sm text-gray-400">
                                    Esta experiencia me permitió desarrollar habilidades clave en redacción SEO y posicionamiento web, entendiendo la importancia de la colaboración global en un entorno digital.
                                </p>
                            </div>
                        </div>
                    </LiquidCard>

                    {/* Global Commerce Media */}
                    <LiquidCard className="p-8 border-emerald-500/20 shadow-emerald-500/5 hover:border-emerald-500/40 rounded-[2.5rem]">
                        <div className="flex flex-col gap-10 h-full">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-emerald-400">Global Commerce Media</h3>
                                <p className="text-sm font-semibold text-emerald-200/60 uppercase tracking-widest">Marketing Internship • Remoto</p>
                            </div>

                            <div
                                className="rounded-2xl overflow-hidden border border-white/10 aspect-video relative group/image cursor-pointer shadow-lg shadow-emerald-500/10"
                                onClick={() => setSelectedPdf("/portfolio_files/Copia de GCM Arnie Farid Espinoza Pachas.pdf")}
                            >
                                <img
                                    src="/portfolio_files/Copia de GCM Arnie Farid Espinoza Pachas_page-0001.jpg"
                                    alt="Global Commerce Media Internship"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-bold backdrop-blur-md shadow-lg transform group-hover/image:scale-105 transition-transform duration-300">
                                        Click para abrir
                                    </span>
                                </div>
                            </div>

                            <div className="text-gray-200 leading-relaxed space-y-4 flex-1">
                                <p>
                                    Realicé una pasantía remota de 3 meses en esta agencia alemana de marketing digital. Trabajé 20 horas semanales adquiriendo habilidades en <strong>diseño web (WordPress), SEO OnPage, y gestión de redes sociales</strong>.
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 ml-2">
                                    <li>Estudio e investigación de mercado.</li>
                                    <li>Creación de contenido optimizado.</li>
                                    <li>Trabajo autónomo en entorno internacional.</li>
                                </ul>
                            </div>
                        </div>
                    </LiquidCard>
                </div>

                {/* Banana Rancia Section */}
                <LiquidCard className="p-8 md:p-12 border-orange-500/20 shadow-orange-500/5 hover:border-orange-500/40 rounded-[2.5rem] space-y-12">
                    <div className="space-y-12">
                        {/* Top: PDF & Content Grid */}
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* PDF Recommendation (Left) */}
                            <div className="space-y-2 order-2 lg:order-1">
                                <span className="text-xs font-bold text-orange-400/80 uppercase tracking-widest block text-center lg:text-left">Carta de Recomendación</span>
                                <div className="h-auto w-full relative group cursor-pointer" onClick={() => setSelectedPdf("/portfolio_files/Banana/Carta_de_Recomendacion_Dami_Ruiz.pdf")}>
                                    <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-colors group/image">
                                        <img
                                            src="/portfolio_files/Banana/Carta_de_Recomendacion_Dami_Ruiz_page-0001.jpg"
                                            alt="Carta de Recomendación"
                                            className="w-full h-auto object-contain"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                            <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-bold backdrop-blur-md shadow-lg transform group-hover/image:scale-105 transition-transform duration-300">
                                                Click para abrir
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content (Right) */}
                            <div className="space-y-6 order-1 lg:order-2">
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-bold text-orange-400">Banana Rancia</h3>
                                    <p className="text-lg text-orange-200/60 font-medium">Editor de Video & Estrategia de Contenido</p>
                                </div>

                                <div className="space-y-4 text-gray-200 leading-relaxed">
                                    <p>
                                        Trabajé como Editor de Video para <strong>Damian Ruiz</strong>, reconocido creador de contenido (Banana Rancia, +1M suscriptores) y empresario. Mi rol abarcó la <strong>edición y producción de videos de alta calidad</strong>, diseño de narrativas visuales y la gestión integral de un canal secundario.
                                    </p>
                                    <p>
                                        Implementé efectos, transiciones y gráficos profesionales para reforzar la identidad del canal y aumentar el engagement de la audiencia.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom: Carousel */}
                        <div className="space-y-4 pt-8 border-t border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                                <span className="text-xs font-bold text-orange-400/80 uppercase tracking-widest">Galería & Evidencia</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                            </div>
                            <ImageCarousel
                                className="rounded-[2rem] bg-black/20"
                                cardClassName="rounded-[1.5rem]"
                                imageClassName="rounded-[1rem]"
                                onImageClick={setSelectedImage}
                                images={[
                                    { path: "/portfolio_files/Banana/Banan Rancia +1 Millon.png", alt: "Canal con 1 Millón", title: "Canal de Damian con +1 millón de suscriptores" },
                                    { path: "/portfolio_files/Banana/Charla TEDx Banana Rancia.png", alt: "Damian TEDx", title: "Damian - TEDx" },
                                    { path: "/portfolio_files/Banana/damian sosteniendo mi foto.jpg", alt: "Damian con mi foto", title: "Damian llevando mi presencia a través de una fotografía en Buenos Aires" },
                                    { path: "/portfolio_files/Banana/Eliminacion del canal_Acuerdo Interno.png", alt: "Gestión de Canal", title: "El Canal que fue Administrado y Eliminado por mí por Acuerdo Interno" },
                                ]}
                            />
                        </div>
                    </div>
                </LiquidCard>
            </motion.section>



            {/* Self-Taught Extras Section - Bento Grid */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-16"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 w-12 bg-pink-500 rounded-full" />
                    <h2 className="text-3xl font-bold text-white">Extras como Autodidacta</h2>
                </div>

                {/* Optimized Distribution Grid (30% - 30% - 40%) */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-8 pb-12">

                    {/* 1. Phonetics (Left - Span 3 - ~30%) */}
                    <div className="md:col-span-3">
                        <LiquidCard className="h-full p-0 border-pink-500/20 shadow-pink-500/5 hover:border-pink-500/40 rounded-[2rem] flex flex-col overflow-hidden bg-white/5">
                            <div className="w-full aspect-[9/16] bg-black relative">
                                <video
                                    controls
                                    className="w-full h-full object-contain"
                                    preload="metadata"
                                >
                                    <source src="/portfolio_files/Extras/Usando Conocimiento en Multimedia para aprender Fonetica.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="p-6 flex flex-col gap-3 border-t border-white/5 bg-gradient-to-b from-white/5 to-transparent flex-1">
                                <div className="flex items-center gap-3 text-pink-400">
                                    <Mic className="w-6 h-6" />
                                    <span className="text-sm font-bold uppercase tracking-widest">Phonetics</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-100 leading-tight">English Phonetics</h3>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Using My Multimedia Knowledge to Learn English Phonetics.
                                </p>
                                <p className="text-3xl font-serif text-pink-200/90 tracking-wide mt-auto pt-4">
                                    /əˈplaɪɪŋ ˈnɒlɪdʒ/
                                </p>
                            </div>
                        </LiquidCard>
                    </div>

                    {/* 2. Math & Free4Talk (Middle - Span 3 - ~30%) */}
                    <div className="md:col-span-3 flex flex-col gap-8">

                        {/* Math (Top) */}
                        <LiquidCard className="p-0 border-indigo-500/20 shadow-indigo-500/5 hover:border-indigo-500/40 rounded-[2rem] flex flex-col overflow-hidden bg-white/5">
                            <div className="w-full aspect-[4/3] bg-black/20 relative cursor-zoom-in"
                                onClick={() => setSelectedImage("/portfolio_files/Extras/Libro Favorito de Matematicas.jpg")}>
                                <img
                                    src="/portfolio_files/Extras/Libro Favorito de Matematicas.jpg"
                                    alt="Portada Libro Matemáticas"
                                    className="w-full h-full object-contain bg-indigo-950/20"
                                />
                            </div>

                            <div className="p-6 flex flex-col gap-4 border-t border-white/5">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3 text-indigo-400">
                                        <BookOpen className="w-6 h-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest">Mathematics</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-indigo-100">CONAMAT</h3>
                                </div>
                                <p className="text-gray-200 text-base leading-relaxed">
                                    Recomendado por <strong>Alan Valdía</strong> (CERN). Una obra que une la historia con la demostración rigurosa.
                                </p>
                            </div>
                        </LiquidCard>

                        {/* Free4Talk (Bottom - Now Bigger) */}
                        <LiquidCard className="flex-1 p-6 border-cyan-500/20 shadow-cyan-500/5 hover:border-cyan-500/40 rounded-[2rem] flex flex-col justify-between gap-6 group bg-white/5">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-cyan-400">
                                    <Users className="w-6 h-6" />
                                    <span className="text-sm font-bold uppercase tracking-widest">Community</span>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold text-gray-100">Free4Talk</h4>
                                    <p className="text-gray-200 text-base leading-relaxed">
                                        Mi plataforma principal para inmersión lingüística en tiempo real con nativos de todo el mundo.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex justify-center pb-2">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-cyan-500/20 shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="https://cdn.buymeacoffee.com/uploads/profile_pictures/2022/06/OXavjSVXhT3JTlag.svg@300w_0e.webp"
                                        alt="Free4Talk"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </LiquidCard>

                    </div>

                    {/* 3. Russian & SAT (Right - Span 4 - ~40%) */}
                    <div className="md:col-span-4 flex flex-col gap-8 h-full">

                        {/* Russian (Top - Wider & Taller) */}
                        <LiquidCard
                            className="p-0 border-red-500/20 shadow-red-500/5 hover:border-red-500/40 rounded-[2rem] flex flex-col overflow-hidden bg-white/5 flex-1 cursor-pointer group"
                            onClick={() => setSelectedPdf("/portfolio_files/Extras/АРНИ ФАРИД ЭСПИНОЗА ПАЧАС.pdf")}
                        >
                            <div className="p-6 pb-2 flex items-center justify-between text-red-400">
                                <div className="flex items-center gap-3">
                                    <Globe className="w-6 h-6" />
                                    <span className="text-sm font-bold uppercase tracking-widest">Russian</span>
                                </div>
                                <span className="text-xs px-3 py-1 bg-red-400/10 rounded-full border border-red-400/20 font-bold">A1</span>
                            </div>

                            <div className="px-6 pb-4">
                                <h3 className="text-xl font-bold text-red-100">Crash Course in Russian</h3>
                            </div>

                            {/* Flexible height container for Image (70% Height - Self-Fitting) */}
                            <div className="w-full relative bg-black/20 border-t border-white/10" style={{ minHeight: '70%' }}>
                                <div className="absolute inset-4 rounded-xl overflow-hidden shadow-sm border border-white/5 bg-black/40 flex items-center justify-center group/image">
                                    <img
                                        src="/portfolio_files/Extras/IMAGE - АРНИ ФАРИД ЭСПИНОЗА ПАЧАС.jpg"
                                        alt="Certificado Ruso"
                                        className="w-full h-full object-contain"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-bold backdrop-blur-md shadow-lg transform group-hover/image:scale-105 transition-transform duration-300">
                                            Click para abrir
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </LiquidCard>

                        {/* SAT Bootcamp (Bottom - Wider) */}
                        <LiquidCard className="p-0 border-yellow-500/20 shadow-yellow-500/5 hover:border-yellow-500/40 rounded-[2rem] overflow-hidden group cursor-pointer bg-white/5"
                            onClick={() => setSelectedImage("/portfolio_files/Extras/FARID SAT BOOTCAMP.jpg")}>
                            <div className="grid grid-cols-2 h-full min-h-[180px]">
                                <div className="relative h-full">
                                    <img
                                        src="/portfolio_files/Extras/FARID SAT BOOTCAMP.jpg"
                                        alt="SAT Bootcamp"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay" />
                                </div>
                                <div className="p-6 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-yellow-400 mb-3">
                                        <Video className="w-5 h-5" />
                                        <span className="text-sm font-bold uppercase tracking-widest">SAT Prep</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-yellow-100 leading-tight mb-2">Math Bootcamp</h4>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">Schoolhouse.world</p>
                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        Hosting weekly sessions to help students master SAT Mathematics.
                                    </p>
                                </div>
                            </div>
                        </LiquidCard>

                    </div>

                </div>
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

            {/* Full Screen PDF Modal */}
            <AnimatePresence>
                {selectedPdf && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPdf(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
                    >
                        <motion.button
                            onClick={() => setSelectedPdf(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <div
                            className="w-full h-full max-w-5xl max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <object
                                data={selectedPdf}
                                type="application/pdf"
                                className="w-full h-full"
                            >
                                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                    <p>Unable to display PDF directly.</p>
                                    <a
                                        href={selectedPdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </object>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

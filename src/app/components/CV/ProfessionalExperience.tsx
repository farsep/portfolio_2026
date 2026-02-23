"use client";

import { motion } from "framer-motion";
import LiquidCard from "../LiquidCard/LiquidCard";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { fadeInUp } from "../../utils/animations";
import styles from "../../cv/page.module.css";

interface ProfessionalExperienceProps {
    setSelectedPdf: (pdf: string | null) => void;
    setSelectedImage: (image: string | null) => void;
}

export default function ProfessionalExperience({ setSelectedPdf, setSelectedImage }: ProfessionalExperienceProps) {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
        >
            <div className={styles.sectionHeader}>
                <div className={`${styles.sectionBar} ${styles.barEmerald}`} />
                <h2 className={styles.sectionTitle}>Experiencia Profesional y Pasantías</h2>
            </div>

            <div className={styles.gridTwoCols}>
                {/* Samsung */}
                <LiquidCard className={`${styles.cardBlue} ${styles.textGray}`}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', height: '100%' }}>
                        <div>
                            <h3 className={styles.headingSmall} style={{ color: '#60a5fa' }}>Samsung User Blog</h3>
                            <p style={{ color: 'rgba(191,219,254,0.6)', textTransform: 'uppercase', fontWeight: 600 }} className={styles.textMedium}>Redactor SEO • Blog Tecnológico</p>
                        </div>

                        <div className={styles.thumbnailWrapper} style={{ aspectRatio: '210/297', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                            <div style={{ width: '100%', aspectRatio: '5/4', position: 'relative', overflow: 'hidden', borderRadius: '0.5rem' }}>
                                <img
                                    src="https://i.imgur.com/x6h6p6M.png"
                                    alt="Samsung User Blog"
                                    className={`${styles.thumbnailImage} ${styles.imageCoverLeft}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        <div className={styles.textGray}>
                            <p className={styles.paragraph}>
                                Durante la etapa final de mi educación escolar, formé parte del equipo de <strong>SAMSUNGUSER</strong>, trabajando como <strong>redactor SEO</strong>. Mi labor consistió en crear contenido optimizado para motores de búsqueda, mejorando la visibilidad del blog en Google.
                            </p>
                            <p className={styles.textGrayLight}>
                                Esta experiencia me permitió desarrollar habilidades clave en redacción SEO y posicionamiento web, entendiendo la importancia de la colaboración global en un entorno digital.
                            </p>
                        </div>
                    </div>
                </LiquidCard>

                {/* GCM */}
                <LiquidCard className={`${styles.cardEmerald} ${styles.textGray}`}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', height: '100%' }}>
                        <div>
                            <h3 className={styles.headingSmall} style={{ color: '#34d399' }}>Global Commerce Media</h3>
                            <p style={{ color: 'rgba(167,243,208,0.6)', textTransform: 'uppercase', fontWeight: 600 }} className={styles.textMedium}>Marketing Internship • Remoto</p>
                        </div>

                        <div className={styles.thumbnailWrapper} onClick={() => setSelectedPdf("/portfolio_files/Copia de GCM Arnie Farid Espinoza Pachas.pdf")}>
                            <img
                                src="https://i.imgur.com/dkqs707.jpeg"
                                alt="Global Commerce Media Internship"
                                className={styles.thumbnailImage}
                            />
                            <div className={styles.clickOverlay}>
                                <span className={styles.clickButton}>Click para abrir</span>
                            </div>
                        </div>

                        <div className={styles.textGray}>
                            <p className={styles.paragraph}>
                                Realicé una pasantía remota de 3 meses en esta agencia alemana de marketing digital. Trabajé 20 horas semanales adquiriendo habilidades en <strong>diseño web (WordPress), SEO OnPage, y gestión de redes sociales</strong>.
                            </p>
                            <ul className={styles.listDisc}>
                                <li>Estudio e investigación de mercado.</li>
                                <li>Creación de contenido optimizado.</li>
                                <li>Trabajo autónomo en entorno internacional.</li>
                            </ul>
                        </div>
                    </div>
                </LiquidCard>
            </div>

            {/* Banana Rancia */}
            <LiquidCard className={`${styles.cardOrange} ${styles.textGray}`} style={{ marginTop: '2rem' }}>
                <div className={styles.gridTwoCols}>
                    {/* Letter */}
                    <div style={{ order: 2 }}>
                        <span className={styles.textSmall} style={{ color: 'rgba(251,146,60,0.8)', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>Carta de Recomendación</span>
                        <div className={styles.thumbnailWrapper} onClick={() => setSelectedPdf("/portfolio_files/Banana/Carta_de_Recomendacion_Dami_Ruiz.pdf")}>
                            <img
                                src="https://i.imgur.com/J3omeQj.jpeg"
                                alt="Carta de Recomendación"
                                className={styles.thumbnailImage}
                            />
                            <div className={styles.clickOverlay}>
                                <span className={styles.clickButton}>Click para abrir</span>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div style={{ order: 1 }}>
                        <h3 className={styles.headingSmall} style={{ color: '#fb923c' }}>Banana Rancia</h3>
                        <p className={styles.textLarge} style={{ color: 'rgba(254,215,170,0.6)', fontWeight: 500, marginBottom: '1.5rem' }}>Editor de Video & Estrategia de Contenido</p>

                        <p className={styles.paragraph}>
                            Trabajé como Editor de Video para <strong>Damian Ruiz</strong>, reconocido creador de contenido (Banana Rancia, +1M suscriptores) y empresario. Mi rol abarcó la <strong>edición y producción de videos de alta calidad</strong>, diseño de narrativas visuales y la gestión integral de un canal secundario.
                        </p>
                        <p className={styles.paragraph}>
                            Implementé efectos, transiciones y gráficos profesionales para reforzar la identidad del canal y aumentar el engagement de la audiencia.
                        </p>
                    </div>
                </div>

                <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '2rem' }}>
                    <h4 className={`${styles.headingSmall} ${styles.textSmall}`} style={{ color: 'rgba(251,146,60,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Galería & Evidencia</h4>
                    <ImageCarousel
                        images={[
                            { path: "https://i.imgur.com/S6CUlkX.png", alt: "Canal con 1 Millón", title: "Canal de Damian con +1 millón de suscriptores" },
                            { path: "https://i.imgur.com/GcEyoyS.png", alt: "Damian TEDx", title: "Damian - TEDx" },
                            { path: "https://i.imgur.com/n4KWT8e.jpeg", alt: "Damian con mi foto", title: "Damian llevando mi presencia a través de una fotografía en Buenos Aires" },
                            { path: "https://i.imgur.com/tQfvcXq.png", alt: "Gestión de Canal", title: "El Canal que fue Administrado y Eliminado por mí por Acuerdo Interno" },
                        ]}
                        onImageClick={setSelectedImage}
                    />
                </div>
            </LiquidCard>
        </motion.section>
    );
}

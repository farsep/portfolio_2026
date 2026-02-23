"use client";

import { motion } from "framer-motion";
import LiquidCard from "../LiquidCard/LiquidCard";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { fadeInUp } from "../../utils/animations";
import styles from "../../cv/page.module.css";

interface MindForgeXSectionProps {
    setSelectedImage: (image: string | null) => void;
}

export default function MindForgeXSection({ setSelectedImage }: MindForgeXSectionProps) {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            className={styles.relativeContainer}
        >
            {/* Blobs */}
            <div className={`${styles.blob} ${styles.blobSky}`} />
            <div className={`${styles.blob} ${styles.blobPurple}`} />

            <LiquidCard className={styles.cardSky}>
                <div className={styles.verticalSpacingLarge}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 className={`${styles.gradientTextBluePurple} ${styles.textUltraLarge}`} style={{ fontWeight: 'bold' }}>
                            MindForgeX
                        </h2>
                        <p className={styles.textXLarge} style={{ color: '#bae6fd' }}>
                            Concurso Voces por el Cambio - Credicorp
                        </p>
                    </div>

                    <div className={styles.gridTwoCols}>
                        {/* Video */}
                        <div className={styles.iframeContainer}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/baSRhPHHFlQ?si=6sDwLlbNKOOQJCKm"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className={styles.video}
                            ></iframe>
                        </div>

                        {/* Text */}
                        <div className={styles.textGray}>
                            <p className={styles.paragraph}>
                                Formé parte del concurso <strong className={styles.textCyan}>Voces por el Cambio de Credicorp</strong> junto con mis amigos Leandro y Leonardo. El concurso ofrecía acceso a mentorías, aceleradoras de capital y un premio de <strong>$15,000</strong>, además de la oportunidad de asistir al <strong className={styles.textPurple}>One Young World Summit</strong>.
                            </p>
                            <p className={styles.paragraph}>
                                Para potenciar nuestra visión, contacté a <strong className={styles.textYellow}>Raúl Alcántara</strong>, campeón de la IMO y egresado del MIT, quien se unió al equipo aportando su experiencia de clase mundial.
                            </p>
                            <p className={styles.paragraph}>
                                Así nació <strong>MindForgeX</strong>, una plataforma educativa de lecciones interactivas. Con mi experiencia en multimedia, desarrollé el <strong>video demo</strong> (visible a la izquierda) para consolidar nuestra propuesta. Aunque el proyecto fue pausado, las conexiones y aprendizajes quedaron como base sólida para mi futuro.
                            </p>
                        </div>
                    </div>

                    <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 className={`${styles.headingSmall} ${styles.textSmall}`} style={{ color: '#38bdf8', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>Galería del Equipo</h4>
                        <ImageCarousel
                            images={[
                                { path: "https://i.imgur.com/c9vY9tW.jpeg", alt: "MindForgeX Development", title: "Leandro, Leonardo y yo - Equipo Inicial" },
                                { path: "https://i.imgur.com/pVS6HZ6.jpeg", alt: "MindForgeX Team Meeting", title: "Junto a Raúl Alcántara, compatriota del MIT y ganador de la IMO" },
                                { path: "https://i.imgur.com/vm1ovhQ.jpeg", alt: "MindForgeX Planning", title: "Sesión de Planificación y Estrategia" },
                            ]}
                            onImageClick={setSelectedImage}
                        />
                    </div>
                </div>
            </LiquidCard>
        </motion.section>
    );
}

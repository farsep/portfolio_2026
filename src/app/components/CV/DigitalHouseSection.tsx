"use client";

import { motion } from "framer-motion";
import LiquidCard from "../LiquidCard/LiquidCard";
import { fadeInUp } from "../../utils/animations";
import styles from "../../cv/page.module.css";

interface DigitalHouseSectionProps {
    setSelectedPdf: (pdf: string | null) => void;
    setSelectedImage: (image: string | null) => void;
}

export default function DigitalHouseSection({ setSelectedPdf, setSelectedImage }: DigitalHouseSectionProps) {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
        >
            <div className={styles.gridTwoCols}>
                <div className={styles.verticalStack} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <h2 className={styles.sectionTitle} style={{ color: '#75b7afff' }}>Digital House - Beca por Mercado Libre y Globant</h2>
                    <LiquidCard className={`${styles.textGray} ${styles.cardYellow}`}>
                        <p className={`${styles.paragraph} ${styles.textYellow} ${styles.textSmall}`} style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Web Development (Backend y Frontend), UI, SCRUM y Cloud Computing • 21 Meses
                        </p>
                        <p className={styles.paragraph}>
                            Fui ganador de la beca en 2023 tras superar filtros de conocimientos en programación. A lo largo del programa, he aprendido una variedad de tópicos, desde lo básico del desarrollo web, abarcando la composición de HTML, hasta temas avanzados como <strong>Docker, virtualización, teoría de bases de datos relacionales, Cloud Computing con AWS</strong>, aplicaciones web con React y TypeScript.
                        </p>
                        <p className={styles.paragraph}>
                            También he estudiado los fundamentos de la programación orientada a objetos, aplicándolos con <strong>Java y Spring Boot</strong> para crear API's robustas. Sin duda, esta experiencia representa una gran oportunidad de aprendizaje y desarrollo en mi pasión por la tecnología.
                        </p>
                    </LiquidCard>
                    <LiquidCard className={styles.centerContent}>
                        <img
                            src="https://i.imgur.com/UZnTI1Y.png"
                            alt="Certified Tech Developer Logo"
                            style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
                        />
                    </LiquidCard>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className={styles.thumbnailWrapper} style={{ height: 'auto', aspectRatio: 'auto', background: 'transparent', boxShadow: 'none', border: 'none' }} onClick={() => setSelectedPdf("/portfolio_files/Digital House/Mercado Libre - Globant Certified Professional Developer Arnie Farid Espinoza Pachas.pdf")}>
                        <img
                            src="https://i.imgur.com/dNvNDLz.jpeg"
                            alt="Certificado Digital House"
                            className={styles.thumbnailImage}
                            style={{ objectFit: 'contain', borderRadius: '1rem' }}
                        />
                        <div className={styles.clickOverlay} style={{ borderRadius: '1rem' }}>
                            <span className={styles.clickButton}>Click para abrir</span>
                        </div>
                    </div>

                    <div className={styles.thumbnailWrapper} style={{ height: 'auto', aspectRatio: 'auto', background: 'transparent', boxShadow: 'none', border: 'none' }} onClick={() => setSelectedImage("https://i.imgur.com/Q15SK9O.jpeg")}>
                        <img
                            src="https://i.imgur.com/Q15SK9O.jpeg"
                            alt="Programa de Estudios"
                            className={styles.thumbnailImage}
                            style={{ objectFit: 'contain', borderRadius: '1rem' }}
                        />
                        <div className={styles.clickOverlay} style={{ borderRadius: '1rem' }}>
                            <span className={styles.clickButton}>Ver Programa Completo</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

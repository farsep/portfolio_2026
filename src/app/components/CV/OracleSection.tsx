"use client";

import { motion } from "framer-motion";
import LiquidCard from "../LiquidCard/LiquidCard";
import { fadeInUp } from "../../utils/animations";
import styles from "../../cv/page.module.css";

interface OracleSectionProps {
    setSelectedPdf: (pdf: string | null) => void;
}

export default function OracleSection({ setSelectedPdf }: OracleSectionProps) {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            className={styles.gridTwoCols}
        >
            <div className={styles.thumbnailWrapper} onClick={() => setSelectedPdf("/portfolio_files/Arnie Farid Espinoza Pachas - Programa Oracle One.pdf")}>
                <img
                    src="https://i.imgur.com/8brFpSO.jpeg"
                    alt="Certificado Oracle One"
                    className={styles.thumbnailImage}
                />
                <div className={styles.clickOverlay}>
                    <span className={styles.clickButton}>Click para abrir</span>
                </div>
            </div>
            <div>
                <h2 className={`${styles.headingSmall} ${styles.textOrange}`}>Oracle One Next Education</h2>
                <LiquidCard className={`${styles.textGray} ${styles.cardOrange}`}>
                    <p className={styles.paragraph}>
                        Fui seleccionado para el prestigioso programa de formación <strong>Oracle One</strong>, especializándome en <strong>Desarrollo Backend</strong>. Este programa me permitió consolidar conocimientos fundamentales en áreas clave, como la Programación Orientada a Objetos y la gestión de Bases de Datos Relacionales y No Relacionales.
                    </p>
                    <p className={styles.paragraph}>
                        Además, adquirí experiencia práctica en el desarrollo y despliegue de APIs monolíticas utilizando Java con el framework Spring, lo que fortaleció mi comprensión del ciclo completo de desarrollo de software. Esta formación no solo amplió mis habilidades técnicas, sino que también me preparó para enfrentar desafíos reales en el campo del desarrollo backend.
                    </p>
                </LiquidCard>
            </div>
        </motion.section>
    );
}

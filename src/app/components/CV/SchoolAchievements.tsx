"use client";

import { motion } from "framer-motion";
import LiquidCard from "../LiquidCard/LiquidCard";
import DiplomaCarousel from "../DiplomaCarousel/DiplomaCarousel";
import { fadeInUp } from "../../utils/animations";
import styles from "../../cv/page.module.css";

interface SchoolAchievementsProps {
    setSelectedPdf: (pdf: string | null) => void;
}

export default function SchoolAchievements({ setSelectedPdf }: SchoolAchievementsProps) {
    return (
        <>
            {/* School Achievements Section */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className={styles.gridTwoCols}
            >
                <div className={styles.verticalStack}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionBar} ${styles.barYellow}`} />
                        <h2 className={styles.sectionTitle}>Trayectoria Escolar</h2>
                    </div>
                    <h3 className={`${styles.headingSmall} ${styles.textYellow}`}>Primer Puesto de Educación Secundaria</h3>
                    <LiquidCard className={styles.textGray}>
                        <p className={styles.paragraph}>
                            Finalicé mi ciclo educativo escolar como el <strong>Mejor de mi Generación</strong>, destacándome por mantener un desempeño académico sobresaliente durante todo el ciclo. Desde los primeros años de mi formación, demostré una inclinación natural por aprender más allá de lo que el currículo ofrecía, guiado por un enfoque autodidacta y un deseo constante de superación.
                        </p>
                        <p className={styles.paragraph}>
                            Mi pasión por el conocimiento comenzó en la primaria, donde obtuve diplomas de honor en reconocimiento a mis logros académicos. Participé activamente en concursos internos, en los que competí exitosamente contra estudiantes de grados superiores, demostrando mi capacidad para ir más allá de los estándares establecidos.
                        </p>
                        <p className={styles.paragraph}>
                            Además, siempre fui parte de eventos de oratoria, representando a mi institución en diversas ocasiones y siendo reconocido por mi elocuencia y habilidades discursivas. Esta experiencia fortaleció mi capacidad para comunicar ideas con claridad y transmitir mensajes de impacto, cualidad que mantuve y perfeccioné a lo largo de todo mi ciclo educativo.
                        </p>
                        <p className={styles.textGrayLight} style={{ fontStyle: 'italic' }}>
                            Estos logros no solo reflejan mi dedicación al aprendizaje y al desarrollo personal, sino también mi compromiso de alcanzar el máximo potencial en cada etapa de mi formación.
                        </p>
                    </LiquidCard>
                </div>

                <div className={styles.verticalStack}>
                    {/* Acta Image */}
                    <div className={styles.thumbnailWrapper} onClick={() => setSelectedPdf("/portfolio_files/school/Acta%20primer%20Puesto%20-%20Arnie%20Farid%20Espinoza%20Pachas.pdf")}>
                        <img
                            src="https://i.imgur.com/3PiDoUJ.jpeg"
                            alt="Acta Primer Puesto"
                            className={styles.thumbnailImage}
                        />
                        <div className={styles.clickOverlay}>
                            <span className={styles.clickButton}>Click para abrir</span>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Diplomas Carousel (Full Width) */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
            >
                <div style={{ paddingLeft: '1rem', borderLeft: '2px solid rgba(234, 179, 8, 0.3)' }}>
                    <h3 className={`${styles.headingSmall} ${styles.textXLarge}`} style={{ marginBottom: '0.25rem' }}>Diplomas de Honor</h3>
                    <p className={styles.textGrayLight}>
                        Colección de reconocimientos obtenidos durante primaria y secundaria.
                    </p>
                </div>
                <DiplomaCarousel />
            </motion.section>
        </>
    );
}

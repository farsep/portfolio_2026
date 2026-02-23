"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import styles from "../../cv/page.module.css";

export default function CVHero() {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className={styles.heroSection}
        >
            <h1 className={styles.title}>
                Curriculum Vitae
            </h1>
            <p className={styles.subtitle}>
                Un recorrido detallado por mi trayectoria académica, logros escolares y certificaciones profesionales.
            </p>
        </motion.section>
    );
}

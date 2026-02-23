"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LiquidCard from "../LiquidCard/LiquidCard";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import styles from "../../page.module.css";

export default function HeroSection() {
    return (
        <motion.section
            className={styles.heroSection}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className={styles.heroImageWrapper}
            >
                <div className={styles.imageContainer}>
                    <div className={styles.imageGlow} />
                    <div className={styles.imageFrame}>
                        <Image
                            src="https://i.imgur.com/mVxvzDa.jpeg"
                            alt="Farid Espinoza"
                            fill
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={fadeInUp}
                className={styles.heroContent}
            >
                <h1 className={styles.title}>
                    Farid Espinoza
                </h1>
                <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                    <LiquidCard className={styles.description}>
                        <p>
                            Desde que era niño, la tecnología ha sido mi vida y mi pasión. Recuerdo con entusiasmo cuando, siendo apenas un niño, realicé mi primer overclock y undervolt a un procesador Intel i3. Manipulé la BIOS para activar la virtualización y probé todo lo que estaba a mi alcance para hacer que mi humilde PC pudiera ejecutar emuladores. Ese proceso, lleno de retos y aprendizajes, dejó una huella profunda en mí y encendió una pasión que sigue viva hasta el día de hoy.
                        </p>
                    </LiquidCard>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

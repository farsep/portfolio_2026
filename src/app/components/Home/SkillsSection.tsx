"use client";

import { motion } from "framer-motion";
import LiquidCard from "../LiquidCard/LiquidCard";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import styles from "../../page.module.css";

const skills = [
    {
        category: "Languages & Core",
        items: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "Bash", "English", "Spanish"],
    },
    {
        category: "Frontend & Mobile",
        items: ["React", "Next.js", "CSS Modules", "HTML/CSS"],
    },
    {
        category: "Backend & Database",
        items: ["Node.js", "Spring Boot", "Microservices", "Flyway", "PostgreSQL", "MySQL"],
    },
    {
        category: "DevOps & Cloud",
        items: ["AWS", "Docker", "GitLab CI/CD", "Git", "Unit Testing (JUnit)"],
    },
];

export default function SkillsSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
        >
            <motion.h2 variants={fadeInUp} className={styles.skillsTitle}>Arsenal Tecnológico</motion.h2>
            <motion.div className={styles.skillsGrid}>
                {skills.map((skillGroup, index) => (
                    <motion.div key={index} variants={fadeInUp} className="h-full">
                        <LiquidCard className="h-full">
                            <h3 className={styles.skillCategoryTitle}>{skillGroup.category}</h3>
                            <div className={styles.skillTags}>
                                {skillGroup.items.map((skill, i) => (
                                    <span key={i} className={styles.skillTag}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </LiquidCard>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}

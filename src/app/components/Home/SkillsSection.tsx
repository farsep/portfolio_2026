"use client";

import { motion } from "framer-motion";
import LiquidCard from "../LiquidCard/LiquidCard";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import styles from "../../page.module.css";

const skills = [
    {
        category: "Languages & Core",
        items: [
            { name: "Java", icon: "/portfolio_files/icons/java-4-logo-svgrepo-com.svg" },
            { name: "JavaScript", icon: "/portfolio_files/icons/javascript-svgrepo-com.svg" },
            { name: "TypeScript", icon: "/portfolio_files/icons/typescript-official-svgrepo-com.svg" },
            { name: "Python", icon: "/portfolio_files/icons/python-svgrepo-com.svg" },
            { name: "SQL", icon: "/portfolio_files/icons/sql-database-generic-svgrepo-com.svg" },
            { name: "Bash", icon: "/portfolio_files/icons/bash01-svgrepo-com.svg" },
            { name: "English", icon: "/portfolio_files/icons/US-UK_Flag.svg" },
            { name: "Spanish", icon: "/portfolio_files/icons/spanish-svgrepo-com.svg" },
        ],
    },
    {
        category: "Frontend & Mobile",
        items: [
            { name: "React", icon: "/portfolio_files/icons/react-svgrepo-com.svg" },
            { name: "Next.js", icon: "/portfolio_files/icons/nextjs-svgrepo-com.svg" },
            { name: "CSS", icon: "/portfolio_files/icons/css-3-svgrepo-com.svg" },
            { name: "HTML", icon: "/portfolio_files/icons/html-five-svgrepo-com.svg" },
        ],
    },
    {
        category: "Backend & Database",
        items: [
            { name: "Spring Boot", icon: "/portfolio_files/icons/spring-icon.svg" },
            { name: "Microservices", icon: "/portfolio_files/icons/microservices-api-svgrepo-com.svg" },
            { name: "Flyway", icon: "/portfolio_files/icons/Flyway.svg" },
            { name: "PostgreSQL", icon: "/portfolio_files/icons/postgresql-logo-svgrepo-com.svg" },
            { name: "MySQL", icon: "/portfolio_files/icons/mysql-logo-svgrepo-com.svg" },
        ],
    },
    {
        category: "DevOps & Cloud",
        items: [
            { name: "AWS", icon: "/portfolio_files/icons/aws-svgrepo-com.svg" },
            { name: "Docker", icon: "/portfolio_files/icons/docker-svgrepo-com.svg" },
            { name: "GitLab CI/CD", icon: "/portfolio_files/icons/gitlab-svgrepo-com.svg" },
            { name: "Git", icon: "/portfolio_files/icons/git-svgrepo-com.svg" },
            { name: "JUnit 5", icon: "/portfolio_files/icons/JUnit_5_Banner.svg" },
        ],
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
                                        {skill.icon && (
                                            <img
                                                src={skill.icon}
                                                alt=""
                                                className={styles.skillIcon}
                                                aria-hidden="true"
                                            />
                                        )}
                                        {skill.name}
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

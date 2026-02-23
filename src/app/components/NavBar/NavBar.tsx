"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import styles from "./NavBar.module.css";

const navItems = [
    { name: "Home", path: "/" },
    { name: "CV", path: "/cv" },
];

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className={styles.navContainer}>
            <motion.div
                className={styles.navGlass}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link key={item.path} href={item.path} className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}>
                            <div className={styles.navItemContent}>

                                {/* Content */}
                                <span className={styles.itemText}>{item.name}</span>

                                {/* Active Indicator (Underline) */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={styles.activeIndicator}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                {/* Aura Effect Background (On Hover - Handled by CSS Module media query) */}
                                <div className={styles.auraEffect} />

                                {/* Sparkles at the sides */}
                                <div className={styles.sparkleLeft}>
                                    <Sparkles size={16} strokeWidth={1.5} />
                                </div>
                                <div className={styles.sparkleRight}>
                                    <Sparkles size={16} strokeWidth={1.5} />
                                </div>

                                {/* Border Glow for Hover */}
                                <div className={styles.borderGlow} />

                            </div>
                        </Link>
                    );
                })}
            </motion.div>
        </nav>
    );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./NavBar.module.css";

const navItems = [
    { name: "Home", path: "/" },
    { name: "CV", path: "/cv" },
];

function MeteorShower({ active }: { active: boolean }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const meteorCount = 12;

    return (
        <AnimatePresence>
            {active && (
                <div className={styles.meteorContainer}>
                    {[...Array(meteorCount)].map((_, i) => {
                        const duration = 0.8 + Math.random() * 1.2;
                        const delay = Math.random() * 2;
                        const left = Math.random() * 120 - 10; // Extra width for diagonal

                        return (
                            <motion.div
                                key={i}
                                className={styles.meteorStreak}
                                style={{ left: `${left}%` }}
                                initial={{ y: "-20%", x: "20%", opacity: 0 }}
                                animate={{ y: "120%", x: "-20%", opacity: [0, 1, 0] }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration,
                                    repeat: Infinity,
                                    delay,
                                    ease: "linear"
                                }}
                            />
                        );
                    })}
                </div>
            )}
        </AnimatePresence>
    );
}

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

                                {/* Meteor Shower Background */}
                                <MeteorShower active={true} />

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

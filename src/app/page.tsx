"use client";

import NavBar from "./components/NavBar/NavBar";
import styles from "./page.module.css";

import HeroSection from "./components/Home/HeroSection";
import SkillsSection from "./components/Home/SkillsSection";

export default function Home() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.container}>
                    <HeroSection />
                    <SkillsSection />
                </div>
            </main>
        </>
    );
}


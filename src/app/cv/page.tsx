"use client";

import { useState } from "react";
import NavBar from "@/app/components/NavBar/NavBar";
import styles from "./page.module.css";

import CVHero from "@/app/components/CV/CVHero";
import SchoolAchievements from "@/app/components/CV/SchoolAchievements";
import OracleSection from "@/app/components/CV/OracleSection";
import DigitalHouseSection from "@/app/components/CV/DigitalHouseSection";
import MindForgeXSection from "@/app/components/CV/MindForgeXSection";
import ProfessionalExperience from "@/app/components/CV/ProfessionalExperience";
import ExtrasSection from "@/app/components/CV/ExtrasSection";
import CVModals from "@/app/components/CV/CVModals";

export default function CVPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

    return (
        <>
            <NavBar />

            <div className={styles.container}>
                <CVHero />

                <SchoolAchievements setSelectedPdf={setSelectedPdf} />

                <OracleSection setSelectedPdf={setSelectedPdf} />

                <DigitalHouseSection
                    setSelectedPdf={setSelectedPdf}
                    setSelectedImage={setSelectedImage}
                />

                <MindForgeXSection setSelectedImage={setSelectedImage} />

                <ProfessionalExperience
                    setSelectedPdf={setSelectedPdf}
                    setSelectedImage={setSelectedImage}
                />

                <ExtrasSection
                    setSelectedImage={setSelectedImage}
                    setSelectedPdf={setSelectedPdf}
                />
            </div>

            <CVModals
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                selectedPdf={selectedPdf}
                setSelectedPdf={setSelectedPdf}
            />
        </>
    );
}


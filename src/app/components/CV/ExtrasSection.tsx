"use client";

import { motion } from "framer-motion";
import { Mic, BookOpen, Users, Globe, Video } from "lucide-react";
import LiquidCard from "../LiquidCard/LiquidCard";
import { fadeInUp } from "../../utils/animations";
import styles from "../../cv/page.module.css";

interface ExtrasSectionProps {
    setSelectedImage: (image: string | null) => void;
    setSelectedPdf: (pdf: string | null) => void;
}

export default function ExtrasSection({ setSelectedImage, setSelectedPdf }: ExtrasSectionProps) {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
        >
            <div className={styles.sectionHeader}>
                <div className={`${styles.sectionBar} ${styles.barPink}`} />
                <h2 className={styles.sectionTitle}>Extras como Autodidacta</h2>
            </div>

            <div className={styles.bentoGrid}>
                {/* Phonetics - Span 3 */}
                <div className={styles.span3}>
                    <LiquidCard className={styles.cardPink} style={{ height: '100%', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div className={styles.videoContainer} style={{ background: 'black' }}>
                            <video controls className={styles.video} preload="metadata">
                                <source src="https://i.imgur.com/BxvtI1F.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#f472b6', marginBottom: '0.5rem' }}>
                                <Mic size={24} />
                                <span className={styles.textSmall} style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phonetics</span>
                            </div>
                            <h3 className={styles.headingSmall} style={{ color: '#f3f4f6', lineHeight: 1.25 }}>English Phonetics</h3>
                            <p className={styles.textGray}>Using My Multimedia Knowledge to Learn English Phonetics.</p>
                            <p className={styles.text2XLarge} style={{ marginTop: 'auto', paddingTop: '1rem', fontFamily: 'serif', color: 'rgba(251,207,232,0.9)' }}>/əˈplaɪɪŋ ˈnɒlɪdʒ/</p>
                        </div>
                    </LiquidCard>
                </div>

                {/* Math & Community - Span 3 */}
                <div className={styles.span3} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Math */}
                    <LiquidCard className={styles.cardIndigo} style={{ padding: 0, overflow: 'hidden' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div className={styles.thumbnailWrapper} style={{ border: 'none', borderRadius: 0, boxShadow: 'none', width: '100%', aspectRatio: '3/4', flexShrink: 0, height: 'auto' }} onClick={() => setSelectedImage("https://i.imgur.com/kY06yDE.jpeg")}>
                                <img src="https://i.imgur.com/kY06yDE.jpeg" className={styles.thumbnailImage} style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#818cf8', marginBottom: '0.5rem' }}>
                                    <BookOpen size={24} />
                                    <span className={styles.textSmall} style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mathematics</span>
                                </div>
                                <h3 className={styles.textXLarge} style={{ fontWeight: 700, color: '#e0e7ff' }}>CONAMAT</h3>
                                <p className={styles.textGray} style={{ marginTop: '0.5rem' }}>Recomendado por <strong>Alan Valdía</strong> (CERN). Una obra que une la historia con la demostración rigurosa.</p>
                            </div>
                        </div>
                    </LiquidCard>

                    {/* Free4Talk */}
                    <LiquidCard className={styles.cardSky} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#22d3ee', marginBottom: '1rem' }}>
                                <Users size={24} />
                                <span className={styles.textSmall} style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Community</span>
                            </div>
                            <h3 className={styles.headingSmall} style={{ color: '#f3f4f6' }}>Free4Talk</h3>
                            <p className={styles.textGray}>Mi plataforma principal para inmersión lingüística en tiempo real con nativos de todo el mundo.</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem' }}>
                            <div style={{ width: '7rem', height: '7rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid rgba(6,182,212,0.2)' }}>
                                <img src="https://cdn.buymeacoffee.com/uploads/profile_pictures/2022/06/OXavjSVXhT3JTlag.svg@300w_0e.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </LiquidCard>
                </div>

                {/* Russian & SAT - Span 4 */}
                <div className={styles.span4} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <LiquidCard className={styles.cardRed} style={{ flex: 1, padding: 0, overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => setSelectedPdf("/portfolio_files/Extras/АРНИ ФАРИД ЭСПИНОЗА ПАЧАС.pdf")}>
                        <div style={{ padding: '1.5rem', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#f87171' }}>
                                <Globe size={24} />
                                <span className={styles.textSmall} style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Russian</span>
                            </div>
                            <span className={styles.textSmall} style={{ padding: '0.25rem 0.75rem', background: 'rgba(248,113,113,0.1)', borderRadius: '9999px', border: '1px solid rgba(248,113,113,0.2)', fontWeight: 700, color: '#f87171' }}>A1</span>
                        </div>
                        <div style={{ padding: '0 1.5rem 1rem' }}>
                            <h3 className={styles.textXLarge} style={{ fontWeight: 700, color: '#fee2e2' }}>Crash Course in Russian</h3>
                        </div>
                        <div className={styles.thumbnailWrapper} style={{ flex: 1, border: 'none', borderRadius: 0, borderTop: 'none' }}>
                            <img src="https://i.imgur.com/k55XKpe.jpeg" className={styles.thumbnailImage} style={{ objectFit: 'cover' }} />
                            <div className={styles.clickOverlay}>
                                <span className={styles.clickButton}>Click para abrir</span>
                            </div>
                        </div>
                    </LiquidCard>

                    <LiquidCard className={styles.cardYellow} style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }} onClick={() => setSelectedImage("https://i.imgur.com/6AZTMDS.jpeg")}>
                        <div className={styles.gridTwoCols} style={{ height: '100%', minHeight: '180px', gap: 0, gridTemplateColumns: '1fr 1fr' }}>
                            <div style={{ position: 'relative' }}>
                                <img src="https://i.imgur.com/6AZTMDS.jpeg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'rgba(234,179,8,0.1)', mixBlendMode: 'overlay' }} />
                            </div>
                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#facc15', marginBottom: '0.75rem' }}>
                                    <Video size={20} />
                                    <span className={styles.textSmall} style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SAT Prep</span>
                                </div>
                                <h4 className={styles.textXLarge} style={{ fontWeight: 700, color: '#fef9c3', lineHeight: 1.2, marginBottom: '0.5rem' }}>Math Bootcamp</h4>
                                <p className={styles.textSmall} style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: '#9ca3af', marginBottom: '0.5rem' }}>Schoolhouse.world</p>
                                <p className={styles.textGray}>Hosting weekly sessions to help students master SAT Mathematics.</p>
                            </div>
                        </div>
                    </LiquidCard>
                </div>
            </div>
        </motion.section>
    );
}

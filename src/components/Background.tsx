"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Background() {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; duration: number; delay: number }>>([]);

    useEffect(() => {
        const particleCount = 100;
        const colors = ["#ffffff", "#bfdbfe", "#e9d5ff"]; // White, Blue-200, Purple-200
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // vw
            y: Math.random() * 100, // vh
            size: Math.random() * 2 + 0.5, // 0.5px to 2.5px
            color: colors[Math.floor(Math.random() * colors.length)],
            duration: Math.random() * 10 + 5, // 5s to 15s (faster)
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80" />

            {/* Animated Blobs */}
            <div className="goo-filter absolute inset-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
                <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[40vw] h-[40vw] bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full opacity-20"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            backgroundColor: particle.color,
                        }}
                        animate={{
                            y: [0, -100, 0], // Move up and down
                            x: [0, Math.random() * 50 - 25, 0], // Slight horizontal drift
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: particle.delay,
                        }}
                    />
                ))}
            </div>

            {/* SVG Filter for Gooey Effect */}
            <svg className="hidden">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

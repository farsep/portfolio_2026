"use client";

import { useEffect, useRef } from "react";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80" />

            {/* Animated Blobs */}
            <div className="goo-filter absolute inset-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
                <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[40vw] h-[40vw] bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
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

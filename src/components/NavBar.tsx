"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "CV", path: "/cv" },
];

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className="w-full flex justify-center py-8 z-50">
            <div className="flex gap-8 bg-black/20 backdrop-blur-md p-2 rounded-full border border-white/5">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link key={item.path} href={item.path} className="relative group">
                            <div className={`
                relative px-12 py-3 rounded-full overflow-hidden transition-all duration-300
                ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
              `}>

                                {/* Content */}
                                <span className="relative z-10 text-lg font-bold tracking-wider uppercase transition-all duration-300 group-hover:scale-110 group-hover:[text-shadow:0_0_20px_#2dd4bf,0_0_60px_#a855f7,0_0_10px_white]">{item.name}</span>

                                {/* Active Indicator (Underline) */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-2 left-1/4 right-1/4 h-0.5 bg-white shadow-[0_0_10px_white]"
                                    />
                                )}

                                {/* Aura Effect Background (On Hover) */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-0 aura-effect" />

                                {/* Sparkles at the sides */}
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse z-20">
                                    <Sparkles className="w-4 h-4 text-cyan-200 blur-[0.5px]" />
                                </div>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 animate-pulse z-20">
                                    <Sparkles className="w-4 h-4 text-purple-200 blur-[0.5px]" />
                                </div>

                                {/* Border Glow for Hover */}
                                <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/20 transition-colors duration-300 z-20" />

                            </div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

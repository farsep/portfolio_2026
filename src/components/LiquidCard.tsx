"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LiquidCardProps {
    children: ReactNode;
    className?: string;
}

export default function LiquidCard({ children, className }: LiquidCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={cn(
                "liquid-glass rounded-2xl p-6 relative overflow-hidden group",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}

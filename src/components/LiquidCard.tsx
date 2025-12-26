"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface LiquidCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function LiquidCard({ children, className, ...props }: LiquidCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={cn(
                "liquid-glass rounded-2xl p-6 relative overflow-hidden group",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full">{children}</div>
        </motion.div>
    );
}

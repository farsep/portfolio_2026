"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";
import styles from "./LiquidCard.module.css";

interface LiquidCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string; // We'll accept this but might need to handle it carefully with CSS modules
}

export default function LiquidCard({ children, className, ...props }: LiquidCardProps) {
    // Note: 'className' prop usage with CSS modules usually requires a utility to combine classes.
    // We'll effectively append the passed className to our module class.
    // Since we aren't using 'clsx', we check if className exists.

    const combinedClassName = `${styles.card} ${className || ""}`;

    return (
        <motion.div
            // Remove whileHover from props if we want to control it via CSS only for performance, 
            // OR keep it but disable on mobile via props? 
            // We will trust the CSS :hover media query for the scale effect to be cleaner and more performant than JS animation.
            // The original used: whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}
            // CSS transform transition is usually smoother and lighter on the main thread.
            // So we will OMIT whileHover here and rely on the CSS module :hover state.

            className={combinedClassName}
            {...props}
        >
            <div className={styles.gradientOverlay} />
            <div className={styles.content}>{children}</div>
        </motion.div>
    );
}

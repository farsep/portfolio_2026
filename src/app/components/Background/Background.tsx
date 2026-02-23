"use client";

import { useMemo } from "react";
import styles from "./Background.module.css";

export default function Background() {
    const particleCount = 360;

    const particles = useMemo(() => {
        return Array.from({ length: particleCount }, (_, i) => i + 1);
    }, []);

    const dynamicStyles = useMemo(() => {
        let css = "";
        const size = 5; // px

        for (let i = 1; i <= particleCount; i++) {
            const startColor = `hsl(${i * -1}, 100%, 50%)`;
            const endColor = `hsl(${i}, 100%, 70%)`;
            const delay = i * 0.0006;

            const selector = `.${styles.thing}:nth-child(${i})`;
            const keyframeName = `stuff-${i}`;

            css += `
        ${selector} {
          animation-name: ${keyframeName};
          animation-delay: ${delay}s;
          color: ${startColor};
          transform: 
            rotateZ(${i * 45}deg)
            perspective(${size * 8}px)
            translate3d(${i * 1}px, ${i * 1}px, ${i * -0.075}px);
        }

        @keyframes ${keyframeName} {
          100% {
            color: ${endColor};
            transform: 
              rotateZ(${i * 90}deg)
              rotateX(${i * 1}deg)
              perspective(${size * 3}px)
              translate3d(${i * -3}px, ${i * 2}px, ${i * -0.075}px);
          }
        }
      `;
        }
        return css;
    }, [styles.thing]);

    return (
        <div className={styles.backgroundContainer}>
            <style dangerouslySetInnerHTML={{ __html: dynamicStyles }} />
            <div className={styles.center}>
                {particles.map((i) => (
                    <div key={i} className={styles.thing} />
                ))}
            </div>
        </div>
    );
}

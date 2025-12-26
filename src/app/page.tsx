"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LiquidCard from "@/components/LiquidCard";

export default function Home() {
  const skills = [
    {
      category: "Languages & Core",
      items: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "Bash", "English", "Spanish"],
    },
    {
      category: "Frontend & Mobile",
      items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Spring Boot", "Microservices", "Flyway", "PostgreSQL", "MySQL"],
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS", "Docker", "GitLab CI/CD", "Git", "Unit Testing (JUnit)"],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24 relative z-10">
      <div className="max-w-5xl w-full flex flex-col gap-16">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="https://i.imgur.com/mVxvzDa.jpeg"
                  alt="Farid Espinoza"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-[1.5] text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Farid Espinoza
            </h1>
            <LiquidCard className="text-lg md:text-xl leading-relaxed text-gray-200">
              <p>
                Desde que era niño, la tecnología ha sido mi vida y mi pasión. Recuerdo con entusiasmo cuando, siendo apenas un niño, realicé mi primer overclock y undervolt a un procesador Intel i3. Manipulé la BIOS para activar la virtualización y probé todo lo que estaba a mi alcance para hacer que mi humilde PC pudiera ejecutar emuladores. Ese proceso, lleno de retos y aprendizajes, dejó una huella profunda en mí y encendió una pasión que sigue viva hasta el día de hoy.
              </p>
            </LiquidCard>
          </motion.div>
        </section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Arsenal Tecnológico</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <LiquidCard key={index} className="h-full">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </LiquidCard>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}

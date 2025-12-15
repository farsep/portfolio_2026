"use client";

import { FileText, Image as ImageIcon, Award, Briefcase } from "lucide-react";
import LiquidCard from "./LiquidCard";

const fileGroups = [
    {
        category: "Certificaciones Formales",
        items: [
            { name: "Mercado Libre - Globant Certified Tech Developer", path: "/portfolio_files/Digital House/Logo Certified Tech Developer.png", type: "image" },
            { name: "Certificado Oracle One - Backend", path: "/portfolio_files/Arnie Farid Espinoza Pachas - Programa Oracle One.pdf", type: "pdf" },
            { name: "Programa de Estudios - Digital House", path: "/portfolio_files/Digital House/Programa de Estudios Digital House.jpg", type: "image" },
        ]
    },
    {
        category: "Banana Rancia (Experiencia)",
        items: [
            { name: "Carta de Recomendación - Dami Ruiz", path: "/portfolio_files/Banana/Carta_de_Recomendacion_Dami_Ruiz.pdf", type: "pdf" },
            { name: "Hito: +1 Millón de Subs", path: "/portfolio_files/Banana/Banan Rancia +1 Millon.png", type: "image" },
            { name: "Charla TEDx", path: "/portfolio_files/Banana/Charla TEDx Banana Rancia.png", type: "image" },
            { name: "Acuerdo Interno", path: "/portfolio_files/Banana/Eliminacion del canal_Acuerdo Interno.png", type: "image" },
        ]
    },
    {
        category: "Documentación Adicional",
        items: [
            { name: "Hoja de Vida GCM", path: "/portfolio_files/Copia de GCM Arnie Farid Espinoza Pachas.pdf", type: "pdf" },
            { name: "Setup / Screenshot", path: "/portfolio_files/Samsung_User_ScreenShot.png", type: "image" },
        ]
    }
];

export default function OtherFiles() {
    return (
        <div className="space-y-12">
            {fileGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                    <h3 className="text-2xl font-semibold text-gray-300 mb-6 pl-2 border-l-2 border-white/20">{group.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {group.items.map((file, index) => (
                            <a key={index} href={file.path} target="_blank" rel="noopener noreferrer">
                                <LiquidCard className="flex items-center gap-4 p-6 hover:bg-white/10 transition-colors group">
                                    <div className={`p-3 rounded-full flex-shrink-0 transition-transform group-hover:scale-110 ${file.type === 'pdf' ? 'bg-red-500/20' : 'bg-blue-500/20'
                                        }`}>
                                        {file.type === 'pdf' ? (
                                            <FileText className="w-6 h-6 text-red-300" />
                                        ) : (
                                            <ImageIcon className="w-6 h-6 text-blue-300" />
                                        )}
                                    </div>
                                    <span className="text-lg font-medium text-gray-200 group-hover:text-white leading-tight">
                                        {file.name}
                                    </span>
                                </LiquidCard>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

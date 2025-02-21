'use client'


import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CopyButton } from "./copy-button";


export function Header({ className }: { className?: string }) {
    return (
        <div
            className={cn("absolute top-8 px-6 w-[95%] max-w-[1000px] inline-flex justify-between inset-x-0 mx-auto h-[88px] z-50 bg-[#FFF3DA] rounded-full items-center", className)}
        >
            <CopyButton
                text="Контракт"
                copyText="EQAPAM9qo9M6gZLMxknEwvLSjCv1H-QlyKxHRxM6kgXVovlf"
                className="w-48 sm:hidden"
            />

            <Image
                className="h-12 hidden sm:block"
                src={'/logo.png'}
                width={192}
                height={47}
                quality={100}
                alt="logo"
            />
            
            <div className="hidden sm:inline-flex gap-3">
                <Link className="md:text-[22px] text-lg font-semibold transition-all duration-200 hover:font-black" href={'#'}>О проекте</Link>
                <Link className="md:text-[22px] text-lg font-semibold transition-all duration-200 hover:font-black" href={'#'}>Ценности</Link>
                <Link className="md:text-[22px] text-lg font-semibold transition-all duration-200 hover:font-black" href={'#'}>Токеномика</Link>
            </div>

            <LanguageToggle />
        </div>
    );
}


const LanguageToggle = () => {
    const [language, setLanguage] = useState("EN");

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "EN" ? "RU" : "EN"));
    };

    // Расчёт позиций для кружка:
    // - При "EN": позиция слева = 16px (класс left-4)
    // - При "RU": позиция слева = 120px (ширина контейнера) - 16px (отступ справа) - 40px (ширина кружка) = 64px
    const leftPos = 8; // для EN
    const rightPos = 62; // для RU

    return (
        <div
            onClick={toggleLanguage}
            className="relative w-[120px] h-[64px] bg-[#FBAC01] rounded-full cursor-pointer select-none border border-1 border-black"
        >
            {/* Текстовые метки поверх кружка */}
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-[22px] font-bold z-10">
                EN
            </span>
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-[22px] font-bold z-10">
                RU
            </span>

            {/* Анимированный кружок */}
            <motion.div
                className="absolute top-1/2 bg-[#FFF] rounded-full size-12 border border-1 border-black shadow-[2px_2px_0px_black]"
                style={{ transform: "translateY(-50%)" }}
                initial={{ left: leftPos }}
                animate={{ left: language === "EN" ? leftPos : rightPos }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                }}
            />
        </div>
    );
};

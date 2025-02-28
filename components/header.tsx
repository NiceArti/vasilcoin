'use client'


import React, { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { cn, scrollToId } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";


export function Header({ className }: { className?: string }) {
    const t = useTranslations('Header');

    return (
        <div
            className={cn("inline-flex justify-between items-center w-full h-[66px] px-3 py-2 rounded-full bg-white sm:py-3 sm:h-[88px]", className)}
        >
            <CopyButton
                text={t('contract')}
                copyText="EQAPAM9qo9M6gZLMxknEwvLSjCv1H-QlyKxHRxM6kgXVovlf"
                className="max-w-40 h-full sm:hidden"
            />
            {/* Dummy object. Thanks to designers */}
            <div className="hidden sm:block w-[100px] h-full" />
            
            <div className="hidden sm:inline-flex gap-16">
                <Button
                    onClick={() => scrollToId('about')}
                    className="md:text-[22px] text-lg font-semibold transition-all duration-200 hover:font-black p-0 text-black bg-inherit shadow-none hover:bg-inherit"
                >
                    {t('about')}
                </Button>
                <Button
                    onClick={() => scrollToId('values')}
                    className="md:text-[22px] text-lg font-semibold transition-all duration-200 hover:font-black p-0 text-black bg-inherit shadow-none hover:bg-inherit"
                >
                    {t('values')}
                </Button>
                <Button
                    onClick={() => scrollToId('tokenomics')}
                    className="md:text-[22px] text-lg font-semibold transition-all duration-200 hover:font-black p-0 text-black bg-inherit shadow-none hover:bg-inherit"
                >
                    {t('tokenomics')}
                </Button>
            </div>

            <LanguageToggle />
        </div>
    );
}


function LanguageToggle() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [, startTransition] = useTransition();

    // Локальное состояние языка для анимации
    const [language, setLanguage] = useState(locale);

    useEffect(() => {
        setLanguage(locale); // Обновляем локальный стейт, когда меняется локаль
    }, [locale]);

    const toggleLanguage = () => {
        const newLocale = language === "en" ? "ru" : "en";
        setLanguage(newLocale); // Меняем локальный стейт для анимации

        startTransition(() => {
            router.replace(`/${newLocale}${pathname.substring(3)}`);
        });
    };

    // Позиции для анимированного кружка
    const leftPos = 8;  // для EN
    const rightPos = 62; // для RU

    return (
        <div
            onClick={toggleLanguage}
            className="relative inline-flex justify-between items-center w-[108px] h-full rounded-full cursor-pointer select-none border border-black shadow-[3px_3px_0px_black] bg-[#FBAC01] text-black font-bold px-4 text-[17px] sm:text-[22px] sm:px-4 sm:w-[120px]"
        >
            {/* Текстовые метки */}
            <span className="z-10">
                EN
            </span>
            <span className="z-10">
                РУ
            </span>

            {/* Анимированный кружок */}
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 bg-[#FFF] rounded-full aspect-square h-[calc(100%-12px)] border border-black shadow-[2px_2px_0px_black]"
                initial={{ left: language === "en" ? leftPos : rightPos }}
                animate={{ left: language === "en" ? leftPos : rightPos }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
        </div>
    );
}
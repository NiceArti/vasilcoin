'use client'


import React, { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { cn, scrollToId } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CopyButton } from "./copy-button";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";


export function Header({ className }: { className?: string }) {
    const t = useTranslations('Header');

    return (
        <div
            className={cn("absolute top-8 px-6 w-[95%] max-w-[1000px] inline-flex justify-between inset-x-0 mx-auto h-[88px] z-50 bg-[#FFF3DA] rounded-full items-center", className)}
        >
            <CopyButton
                text={t('contract')}
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
            className="relative w-[120px] h-[64px] bg-[#FBAC01] rounded-full cursor-pointer select-none border border-black"
        >
            {/* Текстовые метки */}
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-[22px] font-bold z-10">
                EN
            </span>
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-[22px] font-bold z-10">
                РУ
            </span>

            {/* Анимированный кружок */}
            <motion.div
                className="absolute top-1/2 bg-[#FFF] rounded-full size-12 border border-black shadow-[2px_2px_0px_black]"
                style={{ transform: "translateY(-50%)" }}
                initial={{ left: language === "en" ? leftPos : rightPos }}
                animate={{ left: language === "en" ? leftPos : rightPos }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
        </div>
    );
}

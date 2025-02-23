"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import AboutUsFrame from "@/public/about-us-frame.png";
import CoinGroupLg from "@/public/frame-coins.png";
import CounGroupSm from "@/public/frame-coins-sm.png";
import LogoCoin from "@/public/logo-coin.png";
import LogoCoin1 from "@/public/logo-coin-1.png";
import { BBCodeRenderer } from "./ui/code-renderer";
import { Title } from "./ui/title";
import { Section } from "./ui/section";

export function AboutSection() {
    const t = useTranslations("AboutSection");

    return (
        <Section
            id="about"
            className="bg-emoji-tiled bg-repeat"
            classNameInner="h-[731px] pt-[60px] mb-[150px]"
        >
            <Title className="text-center mb-5 md:mb-0">
                {t("title")}
            </Title>

            <div className="relative top-[30%] mx-auto max-w-[960px] w-full bg-white flex flex-col gap-8 md:top-[20%]">
                <div className="flex flex-col gap-4 relative z-10 max-w-[700px] mx-auto pt-3 px-6 sm:w-[80%] sm:gap-8 md:pt-6">
                    <p className="text-center text-[#5A5C57] text-base sm:text-lg md:text-[28px] md:leading-10 lg:w-full">
                        <BBCodeRenderer text={t("description")} />
                    </p>
                    <Image
                        {...CoinGroupLg}
                        className="w-full mx-auto hidden md:block"
                        alt="Frame"
                    />
                    <Image
                        {...CounGroupSm}
                        className="w-full mx-auto md:hidden"
                        alt="Frame"
                    />
                </div>

                <Image
                    {...AboutUsFrame}
                    className="absolute w-full h-[130%] max-h-[500px] mx-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    alt="Frame"
                    quality={100}
                />
                {/* Maskots */}
                <Image
                    {...LogoCoin}
                    className="absolute w-[200px] -top-[190px] right-0 sm:right-10 scale-x-[-1] md:scale-x-[1] md:-left-0 lg:-left-[80px] md:w-[230px]"
                    alt="LogoCoin"
                    quality={100}
                />
                <Image
                    {...LogoCoin1}
                    className="absolute w-[140px] xs:left-10 -top-[140px] scale-x-[-1] md:scale-x-[1] md:-right-[100px] lg:-right-[100px] md:top-[185px] md:w-[230px]"
                    alt="LogoCoin1"
                    quality={100}
                />
            </div>
        </Section>
    );
}

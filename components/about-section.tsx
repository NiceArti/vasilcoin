"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import AboutUsFrame from "@/public/about-us-frame.png";
import AboutUsFrameSm from "@/public/about-us-frame-sm.png";
import CoinGroupLg from "@/public/frame-coins.png";
import CounGroupSm from "@/public/frame-coins-sm.png";
import LogoCoin from "@/public/logo-coin.png";
import LogoCoin1 from "@/public/logo-coin-1.png";
import RedCar from "@/public/red-car.png";
import { BBCodeRenderer } from "./ui/code-renderer";
import { Title } from "./ui/title";
import { Section } from "./ui/section";
import AnimatedElement from "./ui/animation-observer";

export function AboutSection() {
    const t = useTranslations("AboutSection");

    return (
        <Section
            id="about"
            className="bg-emoji-tiled bg-repeat"
            classNameInner="py-12 pb-[100px] md:pb-[230px]"
        >
            <Title className="hidden text-center mb-5 md:block md:-mb-[100px]">
                {t("title-pc")}
            </Title>

            <div className="relative mt-[140px] mx-auto max-w-[960px] w-full flex flex-col gap-8 md:top-[20%]">
                <div className="flex flex-col gap-4 relative z-10 max-w-[700px] mx-auto pt-3 px-6 sm:w-[80%] md:gap-2 md:mb-10 md:pt-6">
                    <Title className="text-center md:hidden">
                        {t("title-mobile")}
                    </Title>
                    <p className="text-center text-[#5A5C57] max-w-[260px] mx-auto text-lg leading-[1.3] md:text-[28px] md:leading-10 md:relative md:top-4 md:min-w-[700px] md:ml-[-20px]">
                        <BBCodeRenderer text={t("description")} />
                    </p>
                    <Image
                        {...CoinGroupLg}
                        className="w-full mx-auto hidden md:block"
                        alt="CoinGroup Large"
                    />
                    <Image
                        {...CounGroupSm}
                        className=" w-[90%] mx-auto md:hidden"
                        alt="CoinGroup Small"
                    />
                </div>

                <Image
                    {...AboutUsFrame}
                    className="absolute w-full h-[130%] max-h-[500px] mx-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
                    alt="Frame"
                    quality={100}
                />
                <Image
                    {...AboutUsFrameSm}
                    className="absolute w-full max-h-[500px] mx-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden"
                    alt="Frame"
                    quality={100}
                />
                {/* Maskots */}
                <Image
                    {...LogoCoin}
                    className="absolute w-[160px] -top-[150px] right-5 sm:right-10 scale-x-[-1] md:scale-x-[1] md:-top-[110px] md:w-[230px] lg:w-[270px] md:-left-[115px] lg:-top-[125px]"
                    alt="LogoCoin"
                    quality={100}
                />
                <Image
                    {...LogoCoin1}
                    className="absolute w-[110px] -top-[100px] scale-x-[-1] left-5 xs:left-10 md:hidden"
                    alt="LogoCoin1"
                    quality={100}
                />
                <AnimatedElement className="animate-slide-in-right">
                    <Image
                        {...RedCar}
                        className="hidden absolute -bottom-[180px] max-w-[532px] -right-[150px] md:block"
                        alt="LogoCoin1"
                        quality={100}
                    />
                </AnimatedElement>
            </div>
        </Section>
    );
}

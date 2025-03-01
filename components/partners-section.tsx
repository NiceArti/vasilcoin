'use client'

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import { useTranslations } from "next-intl";
import { BBCodeRenderer } from "./ui/code-renderer";
import { Title } from "./ui/title";
import { Section } from "./ui/section";

import VortexAsset from '@/public/vorex-pink.png';
import BagAsset from '@/public/bag.png';
import Scarf from '@/public/scarf.png';

export function PartnersSection() {
    const t = useTranslations('PartnersSection');
    return (
        <Section
            className="bg-[#F9C3B8] overflow-y-clip"
            classNameInner="flex flex-col gap-3 pt-10 px-0 pb-12 md:pb-24 md:pt-16 md:px-4"
        >
            <div className="absolute w-full h-full animate-rotate-counterclockwise">
                <Image
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[1500px]"
                    {...VortexAsset}
                    alt="Vortex.png"
                />
            </div>


            <Title className="relative text-center px-4">
                <BBCodeRenderer className="hidden md:block" text={t('title-pc')} />
                <BBCodeRenderer className="md:hidden" text={t('title-mobile')} />
            </Title>

            <p className="relative text-lg leading-tight px-4 mx-auto mt-0 mb-[70px] md:text-center md:max-w-[700px] md:text-[22px] md:leading-9">
                {t('description')}
            </p>

            <div className="relative inline-flex justify-between -top-[80px] z-20 md:hidden">
                <Image
                    {...Scarf}
                    alt="Scarf"
                    className="absolute w-[140px] left-[20px] animate-levitate"
                    />
                <Image
                    {...BagAsset}
                    alt="Bag"
                    className="absolute w-[130px] right-[20px] animate-levitate delay-500"
                />
            </div>

            {/* Mobile cards */}
            <Carousel className="mt-[20px] select-none md:hidden">
                <CarouselContent className="min-w-[300px] max-w-[320px] w-[60%] ml-6 mb-1">
                    {[...Array(3)].map((_, i) => (
                        <CarouselItem key={i} className="flex flex-col gap-5 pointer-events-none">
                            <Card
                                title={t(`data.${i * 3}.title`)}
                                description={t(`data.${i * 3}.description`)}
                            />
                            <Card
                                title={t(`data.${i * 3 + 1}.title`)}
                                description={t(`data.${i * 3 + 1}.description`)}
                            />
                            <Card
                                title={t(`data.${i * 3 + 2}.title`)}
                                description={t(`data.${i * 3 + 2}.description`)}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* PC Cards */}
            <div className="gap-5 justify-center w-full -mt-[20px] hidden md:inline-flex">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-5">
                        <Card
                            title={t(`data.${i * 3}.title`)}
                            description={t(`data.${i * 3}.description`)}
                        />
                        <Card
                            title={t(`data.${i * 3 + 1}.title`)}
                            description={t(`data.${i * 3 + 1}.description`)}
                        />
                        <Card
                            title={t(`data.${i * 3 + 2}.title`)}
                            description={t(`data.${i * 3 + 2}.description`)}
                        />
                    </div>
                ))}
            </div>
            
            {/* Images */}
            <Image
                {...Scarf}
                alt="Scarf"
                className="hidden absolute -left-[40px] top-[100px] w-[220px] animate-levitate md:block"
            />
            <Image
                {...BagAsset}
                alt="Bag"
                className="hidden absolute -right-[120px] top-[80px] w-[300px] animate-levitate md:block"
            />
        </Section>
    );
}


function Card({
    title,
    description,
    className,
}: {
    title: string,
    description: string,
    className?: string,
}) {
    return (
        <div className={cn("relative flex flex-col items-center gap-2 p-4 justify-center min-w-[284px] max-w-[284px] xl:min-w-[416px] xl:max-w-[416px] xl:min-h-[158px] mx-auto bg-white border border-black rounded-3xl shadow-[3px_3px_0px_black]", className)}>
            <h1 className="font-bold text-black text-[20px] xl:text-[28px]">
                {title}
            </h1>
            <p className={cn("text-[#5A5C57] text-[17px] leading-tight xl:text-[22px] text-center xl:px-4")}>
                {description}
            </p>
        </div>
    );
}
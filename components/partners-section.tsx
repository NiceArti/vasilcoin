'use client'

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import LipriconBoot from '@/public/lipricon-boot.png';
import Scarf from '@/public/scarf.png';
import { useTranslations } from "next-intl";
import { BBCodeRenderer } from "./ui/code-renderer";
import { Title } from "./ui/title";
import { Section } from "./ui/section";

export function PartnersSection() {
    const t = useTranslations('PartnersSection');
    return (
        <Section
            className="bg-dots-tiled bg-repeat"
            classNameInner="flex flex-col gap-6 pt-10 px-0 pb-16 md:py-24 md:px-4"
        >
            <Title className="text-center px-4">
                <BBCodeRenderer text={t('title')} />
            </Title>

            <p className="text-base text-center px-4 mx-auto md:max-w-[800px] md:text-[22px] md:leading-9">
                {t('description')}
            </p>

            {/* Mobile cards */}
            <Carousel className="mt-[20px] select-none md:hidden">
                <CarouselContent className="min-w-[300px] max-w-[320px] w-[60%] mx-auto mb-1">
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
            <div className="gap-5 justify-center w-full mt-[20px] hidden md:inline-flex">
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
                className="absolute w-[160px] -left-[20px] -bottom-[50px] md:w-[220px] md:-left-[40px] md:top-[100px]"
            />
            <Image
                {...LipriconBoot}
                alt="LipriconBoot"
                className="absolute w-[232px] -right-[80px] -top-[20px] md:w-[350px] md:-right-[120px] md:top-[80px]"
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
        <div className={cn("relative flex flex-col items-center gap-2 p-4 justify-center min-w-[284px] max-w-[284px] xl:min-w-[396px] xl:max-w-[396px] mx-auto bg-white border border-black rounded-3xl shadow-[3px_3px_0px_black]", className)}>
            <h1 className="font-bold text-black text-[22px] xl:text-[28px]">
                {title}
            </h1>
            <p className={cn("text-[#5A5C57] text-[16px] xl:text-[22px] text-center")}>
                {description}
            </p>
        </div>
    );
}
'use client'

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import LipriconBoot from '@/public/lipricon-boot.png';
import Scarf from '@/public/scarf.png';
import { useTranslations } from "next-intl";
import { BBCodeRenderer } from "./ui/code-renderer";

export function PartnersSection() {
    return (
        <section className="w-full pt-[40px] bg-dots-tiled bg-repeat relative border-b-2 md:border-b-4 border-black overflow-x-clip">
            <Mobile />
            <PC />
        </section>
    );
}

function Mobile() {
    const t = useTranslations('PartnersSection');

    return (
        <div className="md:hidden">
            <h1 className="font-bold text-[36px] text-center z-20">
                <BBCodeRenderer text={t('title-mobile')} />
            </h1>

            <p className="mt-5 text-base text-center mx-auto max-w-[320px] z-20">
                {t('description')}
            </p>

            <Carousel>
                <CarouselContent className="min-w-[300px] max-w-[320px] w-[60%] mx-auto mt-[44px] mb-[60px]">
                    {[...Array(3)].map((_, i) => (
                        <CarouselItem key={i} className="flex flex-col gap-5">
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

            <Image
                {...Scarf}
                alt="Scarf"
                className="absolute w-[160px] -left-[20px] -bottom-[50px]"
            />
            <Image
                {...LipriconBoot}
                alt="LipriconBoot"
                className="absolute w-[232px] -right-[80px] -top-[20px]"
            />
        </div>
    );
}


function PC() {
    const t = useTranslations('PartnersSection');

    return (
        <div className="relative hidden md:block max-w-7xl w-full mx-auto top-[50px]">
            <h1 className="font-bold text-[64px] lg:text-[72px] text-center z-20 w-[80%] mx-auto">
                <BBCodeRenderer text={t('title-pc')} />
            </h1>

            <p className="mt-5 text-[24px] lg:text-[28px] text-center mx-auto max-w-[950px] w-[80%] z-20">
                {t('description')}
            </p>


            <div className="inline-flex gap-5 justify-center w-full mt-[70px] mb-[140px]">
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

            <Image
                {...Scarf}
                alt="Scarf"
                className="absolute w-[220px] -left-[40px] top-0"
            />
            <Image
                {...LipriconBoot}
                alt="LipriconBoot"
                className="absolute w-[350px] -right-[120px] top-[80px]"
            />
        </div>
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
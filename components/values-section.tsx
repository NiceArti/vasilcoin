'use client'

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import Vortex from '@/public/vortex.png';
import EmojiIcon from '@/public/emoji-icon.png';
import SupportIcon from '@/public/support-icon.png';
import ManagementIcon from '@/public/managment-icon.png';
import Cloud0 from '@/public/cloud-0.png';
import Cloud1 from '@/public/cloud-1.png';
import Cloud2 from '@/public/cloud-2.png';
import Vasilenco from "@/public/vasilenco-full-height.png";
import { useTranslations } from "next-intl";
import { BBCodeRenderer } from "./ui/code-renderer";
import { Title } from "./ui/title";
import { Section } from "./ui/section";
import AnimatedElement from "./ui/animation-observer";

export function ValuesSection() {
    const t = useTranslations('ValuesSection');
    
    return (
        <Section
            id="values"
            className="overflow-x-clip overflow-y-clip flex bg-[#FDE79A]"
            classNameInner="md:inline-flex md:justify-between py-8 md:py-0 md:pt-8 md:pb-20 w-full w-max-[1200px]"
        >
            <div className="absolute animate-rotate-counterclockwise w-full h-full md:animate-none">
                <Image
                    {...Vortex}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[1000px] md:min-w-[1500px] md:max-w-[1500px] md:-left-[420px] md:-top-[620px] md:animate-rotate-counterclockwise"
                    alt="Vortex"
                />
            </div>

                <div className="hidden relative mt-40 pb-2 w-[190px] md:block">
                    <AnimatedElement className="animate-slide-in-left w-full h-full">
                        <Image
                            {...Vasilenco}
                            className="absolute w-full max-w-[600px] min-w-[490px] md:-bottom-[100px] md:max-w-[600px] md:min-w-[600px]"
                            alt="Vasilenco"
                        />
                    </AnimatedElement>
                </div>

            <div className="relative flex flex-col gap-6 md:max-w-[600px] md:min-w-[600px] md:mt-[30px] md:gap-14 md:mb-[30px]">
                <Title className="text-center top-8 md:text-right md:leading-tight">
                    <BBCodeRenderer text={t('title')} />
                </Title>
                <Card
                    title={t('values.0.title')}
                    description={t('values.0.description')}
                    logo={SupportIcon}
                    logoCloud={Cloud0}
                />
                <Card
                    title={t('values.1.title')}
                    description={t('values.1.description')}
                    logo={ManagementIcon}
                    logoCloud={Cloud1}
                    classNameText="max-w-[230px]"
                />
                <Card
                    title={t('values.2.title')}
                    description={t('values.2.description')}
                    logo={EmojiIcon}
                    logoCloud={Cloud2}
                />
            </div>

            <div className="relative mt-[280px] w-full pb-2 md:hidden">
                <AnimatedElement className="animate-fade-in-up">
                    <Image
                        {...Vasilenco}
                        className="absolute -bottom-[500px] left-1/2 -translate-x-1/2 w-full max-w-[500px] min-w-[490px]"
                        alt="Vasilenco"
                    />
                </AnimatedElement>
            </div>
        </Section>
    );
}


function Card({
    title,
    description,
    logo,
    logoCloud,
    className,
    classNameText,
}: {
    title: string,
    description: string,
    logo: StaticImageData,
    logoCloud: StaticImageData,
    className?: string
    classNameText?: string
}) {
    return (
        <div className={cn("relative inline-flex items-center text-base gap-6 p-8 justify-center max-w-[435px] mx-auto md:mr-0", className)}>
            <Image
                {...logoCloud}
                className="absolute left-1/2 -translate-x-1/2 w-full min-w-[260px] max-w-[410px] md:min-w-[600px] md:max-w-[600px] md:left-[140px]"
                alt="Cloud"
            />

            <Image
                {...logo}
                className="relative w-[50px] md:w-[82px]"
                alt="Card Logo"
            />

            <p className={cn("relative text-[#5A5C57] text-[18px] font-normal min-w-[240px] max-w-[250px] md:text-[28px] md:min-w-[370px] md:max-w-[370px] md:leading-snug md:mr-[200px]", classNameText)}>
                <span className="font-bold text-black">{title}: </span>
                {description}
            </p>
        </div>
    );
}
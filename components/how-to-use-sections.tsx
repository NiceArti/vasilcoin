'use client'

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import EmojiIcon from '@/public/emoji-icon.png';
import SupportIcon from '@/public/support-icon.png';
import ManagementIcon from '@/public/managment-icon.png';
import { useTranslations } from "next-intl";
import { BBCodeRenderer } from "./ui/code-renderer";
import { Title } from "./ui/title";
import { Section } from "./ui/section";

export function HowToUse() {
    const t = useTranslations('HowToUseSection');
    return (
        <Section
            className="bg-stars bg-repeat"
            classNameInner="flex flex-col gap-8 pt-10 pb-14 md:gap-16 md:pt-20 md:pb-28"
        >
            <Title className="text-center">
                <BBCodeRenderer text={t('title')} />
            </Title>

            <div className="flex flex-col gap-8 justify-center items-center lg:flex-row lg:items-stretch">
                {[
                    { logo: ManagementIcon, title: t('card.0.title'), description: t('card.0.description') },
                    { logo: SupportIcon, title: t('card.1.title'), description: t('card.1.description') },
                    { logo: EmojiIcon, title: t('card.2.title'), description: t('card.2.description') },
                ].map((card, index) => (
                    <Card
                        key={index}
                        logo={card.logo}
                        title={card.title}
                        description={card.description}
                        className="max-w-[416px]"
                    />
                ))}
            </div>
        </Section>
    );
}


function Card({
    title,
    description,
    logo,
    className,
}: {
    title: string,
    description: string,
    logo: StaticImageData,
    className?: string
}) {
    return (
        <div className={cn("border border-black shadow-[3px_3px_0px_black] bg-white font-bold text-base gap-3 p-8 rounded-3xl lg:min-w-[416px]", className)}>
            <Image
                {...logo}
                className="w-[64px] mx-auto md:w-[80px]"
                alt="Card Logo"
            />

            <h1 className="font-bold text-[20px] text-center mt-[18px] md:text-[28px]">{title}</h1>
            <p className="text-center mt-3 text-[#5A5C57] text-lg font-normal leading-tight max-w-[250px] md:max-w-full md:text-[22px]">{description}</p>
        </div>
    );
}
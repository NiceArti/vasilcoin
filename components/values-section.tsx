'use client'

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import Vortex from '@/public/vortex.png';
import ToncoinGroup from '@/public/toncoin-group.png';
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

export function ValuesSection() {
    const t = useTranslations('ValuesSection');
    
    return (
        <Section
            id="values"
            className="overflow-x-clip overflow-y-clip flex"
            classNameInner="md:inline-flex md:justify-between py-8 md:py-0 md:pt-8 md:pb-20 w-full w-max-6xl"
        >
            <div className="relative w-[490px] pb-2">
                <Image
                    {...Vasilenco}
                    className="absolute w-full max-w-[600px] min-w-[490px] hidden md:block"
                    alt="Vasilenco"
                />
            </div>

            <div className="flex flex-col gap-6 md:max-w-[388px]">
                <Title className="text-center top-8 md:text-right">
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
                />
                <Card
                    title={t('values.2.title')}
                    description={t('values.2.description')}
                    logo={EmojiIcon}
                    logoCloud={Cloud2}
                />
            </div>

            <Image
                {...Vortex}
                className="absolute -z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[1000px] md:left-[300px] md:top-[120px]"
                alt="Vortex"
            />
            <Image
                {...ToncoinGroup}
                className="absolute max-w-[600px] -z-20 left-1/2 top-0 -translate-x-1/2 md:left-[280px]"
                alt="Toncoin Group"
            />
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
        <div className={cn("relative inline-flex items-center text-base gap-6 p-8 justify-center max-w-[435px] mx-auto", className)}>
            <Image
                {...logo}
                className="w-[50px]"
                alt="Card Logo"
            />

            <p className={cn("text-[#5A5C57] text-[18px] font-normal min-w-[240px] max-w-[250px]", classNameText)}>
                <span className="font-bold text-black">{title}: </span>
                {description}
            </p>

            <Image
                {...logoCloud}
                className="absolute -z-10 left-1/2 -translate-x-1/2 w-full min-w-[260px] max-w-[410px]"
                alt="Cloud"
            />
        </div>
    );
}
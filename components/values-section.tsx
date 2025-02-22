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

export function ValuesSection() {
    return (
        <section id="values" className="relative w-full mx-auto py-10 px-7 md:h-max md:py-0 border-b-2 md:border-b-4 border-black overflow-clip">
            <div className="md:hidden">
                <CardGroupMobile />
            </div>
            <div className="inline-flex justify-center w-full">
                <CardGroupPC />
            </div>

            <Image
                {...Vortex}
                className="absolute -z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[1000px] md:hidden"
                alt="Vortex"
            />
            <Image
                {...ToncoinGroup}
                className="absolute max-w-[600px] -z-20 left-1/2 top-0 -translate-x-1/2 md:hidden"
                alt="Toncoin Group"
            />
        </section>
    );
}



function CardGroupMobile() {
    const t = useTranslations('ValuesSection');

    return (
        <>
            <Title className="text-center mb-8 md:mb-0">
                <BBCodeRenderer text={t('title')} />
            </Title>


            <div className="flex flex-col gap-6">
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
        </>
    );
}

function CardGroupPC() {
    const t = useTranslations('ValuesSection');

    return (
        <div className="w-full hidden md:inline-flex justify-between max-w-5xl">
            <div className="relative size-[600px] lg:size-[721px]">

                <Image
                    {...Vasilenco}
                    className="absolute w-full max-w-[600px] min-w-[490px]"
                    alt="Vasilenco"
                />

                <Image
                    {...Vortex}
                    className="absolute -z-20 -left-[250px] -top-[60%] lg:-top-1/2 min-w-[1000px] w-full lg:-left-[30%]"
                    alt="Vortex"
                />
                <Image
                    {...ToncoinGroup}
                    className="absolute -z-20 left-[30px] min-w-[490px] lg:max-w-[550px]"
                    alt="Toncoin Group"
                />
            </div>

            <div className="mt-8 lg:mt-14">
                <Title>
                    <BBCodeRenderer text={t('title')} />
                </Title>

                <div className="flex flex-col gap-6">
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
            </div>
        </div>
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
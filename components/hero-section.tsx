'use client'

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "./ui/button";
import { CopyButton } from "./copy-button";

import VortexAsset from '@/public/vortex.png';
import TonCoinGroup from '@/public/toncoin-group.png';
import VasilencoAsset from '@/public/vasilenco.png';
import CloudGroup from '@/public/clouds-group.png';
import VasilcoinText from '@/public/vasilcoin-text.png';
import DogAsset from '@/public/dog.png';
import { BBCodeRenderer } from "@/components/ui/code-renderer";
import { Section } from "./ui/section";
import { Header } from "./header";


export function HeroSection() {
    const address = 'EQAPAM9qo9M6gZLMxknEwvLSjCv1H-QlyKxHRxM6kgXVovlf';
    const t = useTranslations('HeroSection');

    return (
        <Section
            className="border-b-0 sm:border-b-0"
            classNameInner="flex flex-col gap-3"
        >
            <Header className="mt-8 mb-6 max-w-[1000px] mx-auto" />
            
            <Image className="hidden md:block" {...CloudGroup} alt="Funny clouds" quality={100} />
            <Image {...VasilcoinText} className="mx-auto h-[60px] w-[288px] md:mx-0 md:w-auto md:h-auto max-h-28 max-w-[520px]" alt="VASILCOIN" quality={100} />
            <div className="hidden md:flex flex-col gap-4">
                <p className="font-semibold text-3xl lg:text-5xl leading-[52px]">
                    <BBCodeRenderer text={t('description')} />
                </p>
            </div>

            <Button
                variant={'outline'}
                className="mx-auto w-[90%] py-7 text-[22px] mt-44 md:mt-12 md:mx-0 md:w-max md:py-8 md:px-10 lg:py-10 lg:text-[28px]"
            >
                {t('join-community')}
            </Button>


            <div className="w-full max-w-[775px] mt-12 justify-between items-center bg-white rounded-full border-2 border-black pl-8 py-3 pr-3 h-20 shadow-[3px_3px_0px_black] hidden md:inline-flex">
                <span className="text-[18px] font-semibold md:max-w-[521px] truncate">
                    {address}
                </span>
                <CopyButton text={t('copy')} copyText={address} className="text-[22px] gap-4" />
            </div>


            <ImageGroup />
        </Section>
    );
}


function ImageGroup() {
    return (
        <div className="absolute w-full h-full -z-10 overflow-x-clip xl:overflow-visible left-0 md:mt-16">
            <Image
                className="absolute min-w-[700px] md:w-[1070px] -top-[300px] -right-[250px] md:-top-[400px] md:-right-40"
                {...VortexAsset}
                alt="Vortex.png"
            />
            <Image
                className="absolute min-w-[604px] sm:w-[1036px] -bottom-10 md:bottom-0 -right-[200px] lg:-right-20"
                {...VasilencoAsset}
                alt="Vasilenco.png"
            />
            <Image
                className=" absolute -z-10 -right-0 md:z-0 md:right-[50px] md:-top-[100px]"
                {...TonCoinGroup}
                alt="TonCoinGroup.png"
            />
            <Image
                className="absolute w-[170px] -left-5 top-[150px] md:w-[300px] md:top-[340px] md:left-[430px]"
                {...DogAsset}
                alt="DogAsset.png"
            />
        </div>
    );

}
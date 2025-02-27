'use client'

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "./ui/button";
import { CopyButton } from "./copy-button";

import VortexAsset from '@/public/vortex-purple.png';
import TonCoinGroup from '@/public/toncoin-group.png';
import VasilencoAsset from '@/public/vasilenco.png';
import VasilcoinTokenAsset from '@/public/brand/vasilcoin-token.png';
import CloudGroup from '@/public/clouds-group.png';
import VasilcoinText from '@/public/vasilcoin-text.png';
import RedCarAsset from '@/public/red-car.png';
import { BBCodeRenderer } from "@/components/ui/code-renderer";
import { Section } from "./ui/section";
import { Header } from "./header";


export function HeroSection() {
    const address = 'EQAPAM9qo9M6gZLMxknEwvLSjCv1H-QlyKxHRxM6kgXVovlf';
    const t = useTranslations('HeroSection');

    return (
        <Section
            className="border-b-0 sm:border-b-0"
            classNameInner="flex flex-col gap-3 min-h-[calc(100dvh-108px)] md:min-h-0"
        >
            <Header className="mt-8 mb-6 max-w-[1000px] mx-auto" />
            
            <Image className="hidden animate-ping-pong md:block" {...CloudGroup} alt="Funny clouds" quality={100} />

            <div className="inline-flex gap-3 items-center justify-center mt-3 md:justify-start">
                <Image {...VasilcoinTokenAsset} className="aspect-square w-[50px] md:w-[80px]" alt="VASILCOIN" quality={100} />
                <Image {...VasilcoinText} className="h-[60px] w-[288px] md:mx-0 md:w-auto md:h-auto max-h-28 max-w-[520px]" alt="VASILCOIN" quality={100} />
            </div>
            <div className="flex flex-col justify-center font-semibold mt-4 md:gap-4 md:justify-start">
                <p className="mx-auto text-lg md:mx-0 md:text-3xl md:leading-[52px] lg:text-[36px]">
                    <BBCodeRenderer text={t('description')} />
                </p>
            </div>

            <Button
                variant={'outline'}
                className="absolute bottom-0 mx-auto w-[90%] py-7 text-[22px] md:static md:mt-12 md:mx-0 md:w-max md:py-8 md:px-10 lg:py-10 lg:text-[28px]"
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
                className="absolute animate-rotate-counterclockwise min-w-[1000px] -bottom-[280px] -right-[350px] md:min-w-[1500px] md:-right-[700px] xl:-right-[500px]"
                {...VortexAsset}
                alt="Vortex.png"
            />
            <Image
                className="absolute animate-slide-in-left bottom-[100px] left-[-100px] -rotate-[20deg] scale-x-[-1] min-w-[330px] max-w-[330px] md:hidden"
                {...RedCarAsset}
                alt="RedCar.png"
            />
            <Image
                className="absolute animate-slide-in-right min-w-[500px] max-w-[500px] -right-[100px] -bottom-10 md:bottom-0 md:min-w-[1036px] md:max-w-[1036px] md:-right-[500px] xl:-right-[300px]"
                {...VasilencoAsset}
                alt="Vasilenco.png"
            />
            <Image
                className="saturate-150 animate-slide-in-right -hue-rotate-[5deg] absolute -right-[100px] bottom-[120px] min-w-[500px] max-w-[500px] md:min-w-[800px] md:max-w-[800px] md:bottom-[350px] md:-right-[350px] xl:-right-[150px]"
                {...TonCoinGroup}
                alt="TonCoinGroup.png"
            />
        </div>
    );

}
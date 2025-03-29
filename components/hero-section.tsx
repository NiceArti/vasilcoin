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
import { StyledLink } from "./ui/styled-elements";
import { FAIR_LAUNCH_URL, TOKEN_ADDRESS } from "@/lib/constants";


export function HeroSection() {
    const t = useTranslations('HeroSection');

    return (
        <Section
            className="border-b-0 sm:border-b-0"
            classNameInner="flex flex-col gap-3 min-h-[625px] md:min-h-0"
        >
            <Header className="mt-8 mb-6 max-w-[936px] mx-auto" />
            
            <Image
                className="hidden animate-ping-pong md:block"
                {...CloudGroup}
                alt="Funny clouds"
                quality={100}
            />

            <div className="inline-flex gap-3 items-center justify-center mt-3 md:justify-start md:gap-8">
                <Image {...VasilcoinTokenAsset} className="aspect-square w-[50px] md:w-[80px] xl:w-[100px]" alt="VASILCOIN" quality={100} />
                <Image
                    {...VasilcoinText}
                    className="h-[45px] w-[260px] md:mx-0 md:w-[554px] md:h-auto max-h-28 max-w-[520px]"
                    alt="VASILCOIN"
                    quality={100}
                />
            </div>
            <div className="flex flex-col justify-center font-semibold mt-4 md:gap-4 md:justify-start md:mt-12">
                <p className="mx-auto text-xl md:mx-0 md:text-3xl md:leading-[52px] md:max-w-[700px] lg:text-[36px]">
                    <BBCodeRenderer text={t('description')} />
                </p>
            </div>

            <StyledLink
                target="_blank"
                href={FAIR_LAUNCH_URL}
                className="uppercase absolute bottom-0 left-1/2 -translate-x-1/2 h-[54px] px-7 text-xl md:-translate-x-0 bg-[#ffb5c1] md:static md:mt-12 md:w-max md:py-8 md:px-10 lg:py-9 lg:text-[28px]"
            >
                {t('buy-vasilcoin')}
            </StyledLink>

            <div className="w-full max-w-[715px] mt-12 justify-between items-center bg-white rounded-full border-2 border-black pl-8 py-3 pr-3 h-20 shadow-[3px_3px_0px_black] hidden md:inline-flex mb-9">
                <span className="text-[18px] font-semibold md:max-w-[521px] truncate">
                    {TOKEN_ADDRESS}
                </span>
                <CopyButton text={t('copy')} copyText={TOKEN_ADDRESS} className="text-[22px] gap-4" />
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
                className="saturate-[1.1] -hue-rotate-[5deg] absolute -right-0 bottom-[140px] w-full min-w-[390px] max-w-[390px] md:min-w-[800px] md:max-w-[800px] md:bottom-[300px] md:-right-[350px] xl:-right-[250px] xl:min-w-[900px] xl:max-w-[900px]"
                {...TonCoinGroup}
                quality={100}
                alt="TonCoinGroup.png"
            />
            <Image
                className="absolute animate-slide-in-left bottom-[60px] left-[-90px] -rotate-[30deg] scale-x-[-1] min-w-[230px] max-w-[230px] md:hidden"
                {...RedCarAsset}
                alt="RedCar.png"
            />
            <Image
                className="absolute min-w-[500px] max-w-[500px] -right-[100px] -bottom-10 md:bottom-0 md:min-w-[1000px] md:max-w-[1036px] md:-right-[500px] xl:-right-[300px]"
                {...VasilencoAsset}
                quality={100}
                alt="Vasilenco.png"
            />
        </div>
    );

}
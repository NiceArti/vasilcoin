'use client'

import { LuMousePointerClick } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

import VasilcoinText from '@/public/vasilcoin-text.png';
import LogoCoin from '@/public/brand/vasilcoin-token.png';
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section } from "./ui/section";
import { StyledLink } from "./ui/styled-elements";


export function Footer() {
    const t = useTranslations('FooterSection');

    return (
        <Section
            className="border-none bg-dots-tiled-2 bg-repeat"
            classNameInner="flex flex-col gap-4 py-10 md:py-24 md:gap-10"
        >
            <div className="flex flex-col justify-center items-center w-full gap-3 md:flex-row">
                <Image 
                    {...LogoCoin}
                    className="max-w-16 md:mx-0"
                    alt="Vasilcoin Logo"
                />
                <Image 
                    {...VasilcoinText}
                    className="max-w-[300px] w-[80%] md:mx-0"
                    alt="Vasilcoin"
                />
            </div>

            <p className="font-semibold text-lg text-center w-[80%] mx-auto md:text-[28px] md:leading-10">
                {t('description')}
            </p>
            
            <StyledLink className="mx-auto mt-8 px-0 text-base my-4 py-4 w-full max-w-[600px] md:text-[18px] lg:text-[28px]">
                <LuMousePointerClick className="scale-x-[-1] text-[23px] md:text-[30px] lg:text-[40px]" />
                {t('linktree')}
            </StyledLink>

            <div className="inline-flex justify-between w-full mt-5 items-center">
                <p className="text-foreground md:text-[18px] lg:text-[28px]">
                    Copyright &copy; 2025 $VASIL.{' '}
                    {t('copyright')}
                </p>
                <div className="inline-flex gap-3">
                    <SocialButton icon={<FaDiscord className="text-2xl" />} />
                    <SocialButton icon={<RiTelegram2Fill className="text-2xl"/>} />
                    <SocialButton icon={<BsTwitterX className="text-xl"/>} />
                </div>
            </div>
        </Section>
    );
}


function SocialButton({icon}:{icon: React.JSX.Element}) {
    return (
        <Link href="#" className="size-11 bg-white border border-black rounded-full text-black inline-flex items-center justify-center shadow-[2px_2px_0px_black] hover:bg-slate-300">
            {icon}
        </Link>
    );
}

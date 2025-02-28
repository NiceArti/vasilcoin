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
            <div className="flex flex-col justify-center items-center w-full gap-3 md:flex-row md:gap-8">
                <Image
                    quality={100}
                    {...LogoCoin}
                    className="max-w-16 md:max-w-[100px] md:mx-0 md:w-[80px] xl:w-[100px]"
                    alt="Vasilcoin Logo"
                />
                <Image
                    quality={100}
                    {...VasilcoinText}
                    className="max-w-[300px] w-[80%] md:mx-0 md:max-w-[500px] xl:max-w-[540px]"
                    alt="Vasilcoin"
                />
            </div>

            <p className="font-semibold text-lg text-center w-[80%] max-w-[650px] mx-auto md:text-[28px] md:leading-10">
                {t('description')}
            </p>
            
            <StyledLink className="mx-auto mt-8 px-0 text-base my-4 py-4 w-full max-w-[600px] md:w-max md:text-[18px] md:px-12 lg:text-[22px]">
                <LuMousePointerClick className="scale-x-[-1] text-[23px] md:text-[30px] lg:text-[40px]" />
                {t('linktree')}
            </StyledLink>

            <div className="inline-flex justify-between w-full max-w-[1100px] mx-auto mt-5 items-center">
                <p className="text-foreground md:text-[18px] lg:text-[22px]">
                    Copyright &copy; <time>2025</time> $VASIL.{' '}
                    {t('copyright')}
                </p>
                <div className="inline-flex gap-3 md:gap-4">
                    <SocialButton href="https://discord.gg/NtAybafZrx" icon={<FaDiscord className="text-2xl md:text-[36px]" />} />
                    <SocialButton href="https://t.me/vasilcoin" icon={<RiTelegram2Fill className="text-2xl md:text-[36px]"/>} />
                    <SocialButton href="https://x.com/vasilcoin" icon={<BsTwitterX className="text-xl md:text-[30px]"/>} />
                </div>
            </div>
        </Section>
    );
}


function SocialButton({icon, href}:{href?: string, icon: React.JSX.Element}) {
    return (
        <Link href={href ?? '#'} target="_blank" className="size-11 bg-white border border-black rounded-full text-black inline-flex items-center justify-center shadow-[2px_2px_0px_black] hover:bg-slate-300 md:size-[72px]">
            {icon}
        </Link>
    );
}

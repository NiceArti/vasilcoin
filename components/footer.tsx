'use client'

import { LuMousePointerClick } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

import VasilcoinText from '@/public/vasilcoin-text.png';
import LogoCoin from '@/public/logo-coin.png';
import Link from "next/link";
import Image from "next/image";


export function Footer() {
    return (
        <div className="w-full max-w-6xl mx-auto py-10 px-7 flex flex-col gap-3">
            <Logo />

            <p className="font-semibold text-lg text-center w-[80%] mx-auto">
                Присоединяйтесь к движению #VASILCOIN и помогите миру стать ярче, добрее и стильнее!
            </p>
            
            <div className="w-full mx-auto max-w-[600px]">
                <Link
                    href={'#'}
                    className="my-4 w-full inline-flex items-center justify-center rounded-full border border-black shadow-[2px_2px_0px_black] bg-[#FBAC01] font-bold text-base gap-3 py-4 hover:bg-[#fb9701]"
                >
                    <LuMousePointerClick className="scale-x-[-1] text-[23px]"/>
                    Вместе за улыбку с #VASILCOIN!
                </Link>
            </div>

            <div className="inline-flex justify-between w-full mt-5 items-center">
                <p className="text-[#5A5C57] md:text-[18px]">
                    Copyright &copy; 2025 $VASIL.
                    Все права защищены.
                </p>
                <div className="inline-flex gap-3">
                    <SocialButton icon={<FaDiscord className="text-2xl" />} />
                    <SocialButton icon={<RiTelegram2Fill className="text-2xl"/>} />
                    <SocialButton icon={<BsTwitterX className="text-xl"/>} />
                </div>
            </div>
        </div>
    );
}


function SocialButton({icon}:{icon: React.JSX.Element}) {
    return (
        <Link href="#" className="size-11 bg-white border border-black rounded-full text-black inline-flex items-center justify-center shadow-[2px_2px_0px_black] hover:bg-slate-300">
            {icon}
        </Link>
    );
}

function Logo() {
    return (
        <>
            <div className="flex flex-col w-full gap-3 md:hidden">
                <Image 
                    {...LogoCoin}
                    className="mx-auto w-24"
                    alt="Vasilcoin"
                />
                <Image 
                    {...VasilcoinText}
                    className="mx-auto max-w-[300px] w-[80%]"
                    alt="Vasilcoin"
                />
            </div>
            <div className="hidden md:inline-flex gap-3 items-center mx-auto">
                <Image 
                    {...LogoCoin}
                    className="w-24 h-auto"
                    alt="Vasilcoin"
                />
                <Image 
                    {...VasilcoinText}
                    className="max-w-[300px] max-h-[76px] w-[80%]"
                    alt="Vasilcoin"
                />
            </div>
        </>
    );
}
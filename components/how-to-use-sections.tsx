'use client'

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import EmojiIcon from '@/public/emoji-icon.png';
import SupportIcon from '@/public/support-icon.png';
import ManagementIcon from '@/public/managment-icon.png';

export function HowToUse() {
    return (
        <section className="w-full mx-auto py-10 px-7 flex flex-col gap-3 border-b-2 md:border-b-4 md:pb-[100px] border-black">
            <h1 className="font-bold text-center text-[36px] mb-8 md:mb-0 md:text-[72px]">Как использовать<br/>VASILCOIN</h1>
            
            <CardGroup />
        </section>
    );
}


function CardGroup() {
    return (
        <>
            <div className="h-auto flex flex-col gap-6 lg:hidden">
                <Card
                    logo={ManagementIcon}
                    title="Монета приносит стиль"
                    description="Вы могли бы быть обладателем самых модных аксессуаров, сияющих как ваша улыбка!"
                    className="md:min-w-[416px]"
                />
                <Card
                    logo={SupportIcon}
                    title="Распространяй добро"
                    description="Ваши монеты могли бы превращаться в добрые дела, которые меняют мир."
                    className="md:min-w-[416px]"
                />
                <Card
                    logo={EmojiIcon}
                    title="Улыбка имеет ценность"
                    description="Ваша улыбка становится настоящим богатством, а Василькоин её усиливает!"
                    className="md:min-w-[416px]"
                />
            </div>
            <div className="w-full h-auto hidden lg:inline-flex gap-4 justify-center">
                <Card
                    logo={ManagementIcon}
                    title="Монета приносит стиль"
                    description="Вы могли бы быть обладателем самых модных аксессуаров, сияющих как ваша улыбка!"
                    className="max-w-[416px]"
                />
                <Card
                    logo={SupportIcon}
                    title="Распространяй добро"
                    description="Ваши монеты могли бы превращаться в добрые дела, которые меняют мир."
                    className="max-w-[416px]"
                />
                <Card
                    logo={EmojiIcon}
                    title="Улыбка имеет ценность"
                    description="Ваша улыбка становится настоящим богатством, а Василькоин её усиливает!"
                    className="max-w-[416px]"
                />
            </div>
        </>
    );
}

function Card({
    title,
    description,
    logo,
    className,
}:{
    title: string,
    description: string,
    logo: StaticImageData,
    className?: string
}) {
    return (
        <div className={cn("border border-black shadow-[3px_3px_0px_black] bg-[#FFF7D5] font-bold text-base gap-3 p-8 rounded-3xl", className)}>
            <Image
                {...logo}
                className="w-[80px] mx-auto"
                alt="Card Logo"
            />

            <h1 className="font-bold text-[28px] text-center mt-8">{title}</h1>
            <p className="text-center mt-5 text-[#5A5C57] text-[22px] font-normal">{description}</p>
        </div>
    );
}
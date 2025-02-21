'use client'

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import LipriconBoot from '@/public/lipricon-boot.png';
import Scarf from '@/public/scarf.png';

export function PartnersSection() {
    return (
        <section className="w-full pt-[40px] bg-dots-tiled bg-repeat relative border-b-2 md:border-b-4 border-black overflow-x-clip">
            <Mobile />
            <PC />
        </section>
    );
}

function Mobile() {
    return (
        <div className="md:hidden">
            <h1 className="font-bold text-[36px] text-center z-20">Партнеры от<br />VASILCOIN</h1>

            <p className="mt-5 text-base text-center mx-auto max-w-[320px] z-20">
                Ваше доверие к VASILCOIN вдохновляет на создание партнёрств, которые принесут добро, стиль и радость
            </p>

            <Carousel>
                <CarouselContent className="min-w-[300px] max-w-[320px] w-[60%] mx-auto mt-[44px] mb-[60px]">
                    <CarouselItem className="flex flex-col gap-5">
                        <Card
                            title="Дом Радости"
                            description="Модный дом, создающий искусство стиля."
                        />
                        <Card
                            title="Сияющие сердца"
                            description="Фонд помощи нуждающимся в доброте и улыбке."
                        />
                        <Card
                            title="Магазин щеночков"
                            description="Место истинного счастья от объятий с питомцами."
                        />
                    </CarouselItem>
                    <CarouselItem className="flex flex-col gap-5">
                        <Card
                            title="Шикарные шарфики"
                            description="Бренд элегантных аксессуаров и фешенебельностей."
                        />
                        <Card
                            title="Фонд богачей"
                            description="Вдохновляем богатых людей делать добые дела."
                        />
                        <Card
                            title="Сияющая студия"
                            description="Предоставляет уникальные украшения для радости."
                        />
                    </CarouselItem>
                    <CarouselItem className="flex flex-col gap-5">
                        <Card
                            title="Биржа счастья"
                            description="Место для обмена добром и хорошим настроением."
                        />
                        <Card
                            title="Биржа шарфиков"
                            description="Платформа для модных и сияющих покупок."
                        />
                        <Card
                            title="Райский уголок"
                            description="Курорт для тех, кто ценит стиль и комфорт."
                        />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

            <Image
                {...Scarf}
                alt="Scarf"
                className="absolute w-[160px] -left-[20px] -bottom-[50px]"
            />
            <Image
                {...LipriconBoot}
                alt="LipriconBoot"
                className="absolute w-[232px] -right-[80px] -top-[20px]"
            />
        </div>
    );
}


function PC() {
    return (
        <div className="relative hidden md:block max-w-7xl w-full mx-auto top-[50px]">
            <h1 className="font-bold text-[64px] lg:text-[72px] text-center z-20 w-[80%] mx-auto">Партнеры, которые<br />появятся для VASILCOIN</h1>

            <p className="mt-5 text-[24px] lg:text-[28px] text-center mx-auto max-w-[950px] w-[80%] z-20">
                Ваше доверие к VASILCOIN вдохновляет на создание партнёрств, которые принесут добро, стиль и радость
            </p>

        
            <div className="inline-flex gap-5 justify-center w-full mt-[70px] mb-[140px]">
                <div className="flex flex-col gap-5">
                    <Card
                        title="Дом Радости"
                        description="Модный дом, создающий искусство стиля."
                    />
                    <Card
                        title="Сияющие сердца"
                        description="Фонд помощи нуждающимся в доброте и улыбке."
                    />
                    <Card
                        title="Магазин щеночков"
                        description="Место истинного счастья от объятий с питомцами."
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <Card
                        title="Шикарные шарфики"
                        description="Бренд элегантных аксессуаров и фешенебельностей."
                    />
                    <Card
                        title="Фонд богачей"
                        description="Вдохновляем богатых людей делать добые дела."
                    />
                    <Card
                        title="Сияющая студия"
                        description="Предоставляет уникальные украшения для радости."
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <Card
                        title="Биржа счастья"
                        description="Место для обмена добром и хорошим настроением."
                    />
                    <Card
                        title="Биржа шарфиков"
                        description="Платформа для модных и сияющих покупок."
                    />
                    <Card
                        title="Райский уголок"
                        description="Курорт для тех, кто ценит стиль и комфорт."
                    />
                </div>
            </div>

            <Image
                {...Scarf}
                alt="Scarf"
                className="absolute w-[220px] -left-[40px] top-0"
            />
            <Image
                {...LipriconBoot}
                alt="LipriconBoot"
                className="absolute w-[350px] -right-[120px] top-[80px]"
            />
        </div>
    );
}

function Card({
    title,
    description,
    className,
}: {
    title: string,
    description: string,
    className?: string,
}) {
    return (
        <div className={cn("relative flex flex-col items-center gap-2 p-4 justify-center min-w-[284px] max-w-[284px] xl:min-w-[396px] xl:max-w-[396px] mx-auto bg-white border border-black rounded-3xl shadow-[3px_3px_0px_black]", className)}>
            <h1 className="font-bold text-black text-[22px] xl:text-[28px]">
                {title}
            </h1>
            <p className={cn("text-[#5A5C57] text-[16px] xl:text-[22px] text-center")}>
                {description}
            </p>
        </div>
    );
}
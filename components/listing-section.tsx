"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Countdown from 'react-countdown';
import { LuMousePointerClick } from "react-icons/lu";

import UnitCloud from '@/public/listing-cloud.png';
import Rocket from '@/public/rocket.png';
import Dog from '@/public/dog.png';
import Watches from '@/public/watches.png';
import BgCloud from '@/public/background/cloud.png';
import { useTranslations } from "next-intl";
import { BBCodeRenderer } from "./ui/code-renderer";
import { Title } from "./ui/title";
import { Section } from "./ui/section";
import { StyledLink } from "./ui/styled-elements";
import AnimatedElement from "./ui/animation-observer";
import { cn } from "@/lib/utils";


export function ListingSection() {
    const t = useTranslations('ListingSection');
    const finishTime = new Date('2025-03-22T00:00:00Z');
    const [isFast, setIsFast] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFast(true);
            setTimeout(() => setIsFast(false), 2000); // Через 2 секунды возвращаем к медленной тряске
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    const renderer = ({
        days,
        hours,
        minutes,
        seconds,
        completed
    }: {
        days: number,
        hours: number,
        minutes: number,
        seconds: number,
        completed: boolean,
    }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <>
                    <div className="inline-flex justify-center w-full gap-10 md:hidden">
                        <div className="flex flex-col gap-8 ">
                            <TimerUnitStyled unit={days} unitName={t('time-units.days')} />
                            <TimerUnitStyled unit={minutes} unitName={t('time-units.minutes')} />
                        </div>
                        <div className="flex flex-col gap-8">
                            <TimerUnitStyled unit={hours} unitName={t('time-units.hours')} />
                            <TimerUnitStyled unit={seconds} unitName={t('time-units.seconds')} />
                        </div>
                    </div>
                    <div className="w-full gap-28 justify-center hidden md:inline-flex">
                        <TimerUnitStyled unit={days} unitName={t('time-units.days')} />
                        <TimerUnitStyled unit={minutes} unitName={t('time-units.hours')} />
                        <TimerUnitStyled unit={hours} unitName={t('time-units.minutes')} />
                        <TimerUnitStyled unit={seconds} unitName={t('time-units.seconds')} />
                    </div>
                </>
            );
        }
    };

    return (
        <Section
            className="bg-[#FFC0CB] overflow-y-clip"
            classNameInner="py-14 md:pb-28"
        >
            <Image
                {...BgCloud}
                alt="Cloud"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[750px] md:min-w-[1600px] md:-translate-y-[400px]"
            />

            <AnimatedElement threshold={0.7} className="animate-slide-in-left">
                <Image
                    {...Rocket}
                    alt="Rocket"
                    className="absolute w-[180px] -bottom-[30px] left-[-80px] md:bottom-[0px] md:w-[400px]"
                />
            </AnimatedElement>
            <AnimatedElement threshold={0.7} className="animate-slide-in-right">
                <Image
                    {...Dog}
                    alt="Dog"
                    className="absolute w-[180px] bottom-[20px] -right-[80px] scale-x-[-1] md:right-0 md:bottom-[150px] md:w-[300px]"
                />
            </AnimatedElement>

            <div className="animate-levitate">
                <Image
                    {...Watches}
                    alt="Watches"
                    className={cn("absolute w-[180px] -right-[40px] -top-[50px] md:w-[280px] md:top-[100px] md:-right-[140px]", isFast ? "animate-shake-fast" : "animate-shake-slow")}
                />
            </div>


            <div className="relative flex flex-col gap-11 md:gap-20 md:mt-5">
                <Title className="max-w-[300px] mx-auto md:mx-0 md:max-w-full md:text-center">
                    <BBCodeRenderer text={t('title')} />
                </Title>

                <Countdown
                    date={finishTime}
                    intervalDelay={1000}
                    precision={3}
                    renderer={renderer}
                    onComplete={() => {
                        // setIsFinished(true);
                    }}
                />
                
                <p className="mx-auto max-w-3xl text-[26px] font-bold text-center md:text-[42px] md:font-semibold ">
                    <BBCodeRenderer className="hidden md:block" text={t('description')} />
                    <span className="md:hidden">#VASILCOIN</span>
                </p>

                <StyledLink className="mx-auto mt-8 px-8 text-xl md:text-[32px] md:py-6">
                    <LuMousePointerClick className="scale-x-[-1] text-[23px] md:text-[36px]" />
                    {t('join')}
                </StyledLink>
            </div>
        </Section>
    );
}

const Completionist = () => <span>You are good to go!</span>;


function TimerUnitStyled({ unit, unitName }: { unit: number, unitName: string }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative size-[100px] md:size-[158px]">
                <Image
                    {...UnitCloud}
                    alt="Bg Cloud"
                    className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <span className="absolute font-bold text-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-[64px]">{unit}</span>
            </div>
            <span className="text-[26px] md:text-[42px]">{unitName}</span>
        </div>
    );
}
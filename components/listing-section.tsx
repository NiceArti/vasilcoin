"use client";

import { useState } from "react";
import Image from "next/image";
import Countdown from 'react-countdown';
import Link from "next/link";
import { LuMousePointerClick } from "react-icons/lu";

import UnitCloud from '@/public/listing-cloud.png';
import Rocket from '@/public/rocket.png';
import BgCloud from '@/public/background/cloud.png';
import { useTranslations } from "next-intl";
import { BBCodeRenderer } from "./ui/code-renderer";
import { Title } from "./ui/title";


export function ListingSection() {
    const t = useTranslations('ListingSection');
    const finishTime = new Date('2025-03-22T00:00:00Z');
    return (
        <section className="w-full pt-[40px] relative border-b-2 md:border-b-4 border-black overflow-clip bg-[#FFC0CB]">
            <Image 
                {...BgCloud}
                alt="Cloud"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[750px]"
            />
            <Image 
                {...Rocket}
                alt="Rocket"
                className="absolute w-[200px] bottom-[100px] left-[-50px] md:top-[400px] md:w-[300px] lg:left-0"
            />

            <div className="relative md:mt-[200px]">
                <Mobile finishTime={finishTime}/>
                <PC finishTime={finishTime} />

                <div className="w-max mx-auto mb-10 md:mt-10 md:mb-[150px]">
                    <Link
                        href={'#'}
                        className="my-4 w-max inline-flex items-center justify-center rounded-full border border-black shadow-[2px_2px_0px_black] bg-[#FBAC01] font-bold text-base gap-3 py-3 px-5 hover:bg-[#fb9701] text-[20px] md:text-[32px] md:py-8 md:px-12"
                    >
                        <LuMousePointerClick className="scale-x-[-1] text-[23px] md:text-[32px]"/>
                        {t('join')}
                    </Link>
                </div>
            </div>
        </section>
    );
}

const Completionist = () => <span>You are good to go!</span>;


function Mobile({
    finishTime
}:{
    finishTime: Date | number | string
}) {
    const t = useTranslations('ListingSection');
    const [isFinished, setIsFinished] = useState<boolean>(false);
    console.log(isFinished);
    
    const renderer = ({
        days,
        hours,
        minutes,
        seconds,
        completed
    }:{
        days: number,
        hours: number,
        minutes: number,
        seconds : number,
        completed: boolean,
    }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <div className="my-14 inline-flex gap-10 ml-6">
                    <div className="flex flex-col gap-8">
                        <TimerUnitStyled unit={days} unitName={t('time-units.days')} />
                        <TimerUnitStyled unit={minutes} unitName={t('time-units.minutes')} />
                    </div>
                    <div className="flex flex-col gap-8">
                        <TimerUnitStyled unit={hours} unitName={t('time-units.hours')} />
                        <TimerUnitStyled unit={seconds} unitName={t('time-units.seconds')} />
                    </div>
                </div>
            );
        }
    };
    return(
        <div className="max-w-[300px] mx-auto md:hidden">
            <Title>
                <BBCodeRenderer text={t('title')} />
            </Title>
            
            <Countdown
                date={finishTime}
                intervalDelay={1000}
                precision={3}
                renderer={renderer}
                onComplete={() => {
                    setIsFinished(true);
                }}
            />
        </div>
    );
}

function PC({
    finishTime
}:{
    finishTime: Date | number | string
}) {
    const t = useTranslations('ListingSection');
    const [isFinished, setIsFinished] = useState<boolean>(false);
    console.log(isFinished);
    

    const renderer = ({
        days,
        hours,
        minutes,
        seconds,
        completed
    }:{
        days: number,
        hours: number,
        minutes: number,
        seconds : number,
        completed: boolean,
    }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <div className="w-full inline-flex gap-10 justify-center my-14">
                    <TimerUnitStyled unit={days} unitName={t('time-units.days')} />
                    <TimerUnitStyled unit={minutes} unitName={t('time-units.hours')} />
                    <TimerUnitStyled unit={hours} unitName={t('time-units.minutes')} />
                    <TimerUnitStyled unit={seconds} unitName={t('time-units.seconds')} />
                </div>
            );
        }
    };
    return(
        <div className="hidden w-full max-w-5xl mx-auto md:block">
            <Title className="text-center">
                <BBCodeRenderer text={t('title')} />
            </Title>
            
            <Countdown
                date={finishTime}
                intervalDelay={1000}
                precision={3}
                renderer={renderer}
                onComplete={() => {
                    setIsFinished(true);
                }}
            />

            <h2 className="text-[42px] font-semibold text-center">
                <BBCodeRenderer text={t('description')} />
            </h2>
        </div>
    );
}


function TimerUnitStyled({unit, unitName}:{unit: number, unitName: string}) {
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
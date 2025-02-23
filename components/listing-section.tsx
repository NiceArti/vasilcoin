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
import { Section } from "./ui/section";
import { StyledLink } from "./ui/styled-elements";


export function ListingSection() {
    const t = useTranslations('ListingSection');
    const finishTime = new Date('2025-03-22T00:00:00Z');

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
                    <div className="w-full gap-10 justify-center hidden md:inline-flex">
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
            className="bg-[#FFC0CB]"
            classNameInner="py-14 md:pb-28"
        >
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


            <div className="relative flex flex-col gap-11 md:gap-20 md:mt-[100px]">
                <Title className="text-center">
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

                <p className="mx-auto text-[42px] max-w-3xl text-center font-bold hidden md:block">
                    {t('description')}
                </p>

                <StyledLink className="mx-auto bg-secondary mt-8 px-8 text-xl md:text-[32px] md:py-6">
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
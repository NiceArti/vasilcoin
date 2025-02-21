'use client'


import Image from "next/image";
import React, { useState } from "react";
import Marquee from 'react-fast-marquee';

import { Button } from "./ui/button";
import { CopyButton } from "./copy-button";

import VortexAsset from '@/public/vortex.png';
import TonCoinGroup from '@/public/toncoin-group.png';
import VasilencoAsset from '@/public/vasilenco.png';
import CloudGroup from '@/public/clouds-group.png';
import VasilcoinText from '@/public/vasilcoin-text.png';
import DogAsset from '@/public/dog.png';


export function HeroSection({ className }: { className?: string }) {
    return (
        <div className="w-full flex justify-center mt-16">
            <section className="mt-24 px-4 w-full max-w-[1745px] relative m-auto inline-flex">
                <div className="flex flex-col gap-3 w-full">
                    <Image className="hidden md:block" {...CloudGroup} alt="Funny clouds" quality={100}/>
                    <Image {...VasilcoinText}  className="mx-auto h-[60px] w-[288px] md:mx-0 md:w-auto md:h-auto max-h-28 max-w-[520px]" alt="VASILCOIN" quality={100}/>
                    <div className="hidden md:flex flex-col gap-4">
                        <p className="font-semibold text-3xl lg:text-5xl">
                            <b>$VASIL</b> - Мем-коин, который приносит
                        </p>
                        <p className="font-semibold text-3xl lg:text-5xl">
                            добро, стиль и улыбки!
                        </p>
                    </div>

                    <Button
                        className={"mx-auto mt-44 md:mx-0 md:mt-12 w-max h-[72px] px-12 rounded-full bg-[#FBAC01] border border-black shadow-[3px_3px_0px_black] hover:bg-[#fb8f01] font-bold text-[22px] text-black"}
                    >
                        Вступить в сообщество
                    </Button>


                    <div className="hidden md:inline-flex mt-12 w-max bg-white rounded-full border-2 border-black pl-8  py-2 pr-2 gap-3 shadow-[3px_3px_0px_black] items-center">
                        <span className="text-[18px] font-semibold">EQAPAM9qo9M6gZLMxknEwvLSjCv1H-QlyKxHRxM6kgXVovlf</span>
                        <CopyButton text="Копировать" copyText="EQAPAM9qo9M6gZLMxknEwvLSjCv1H-QlyKxHRxM6kgXVovlf"/>
                    </div>


                    <ImageGroup />
                </div>
            </section>
        </div>
    );
}


function ImageGroup() {
    return (
        <div className="absolute w-full h-full -z-10 overflow-x-clip xl:overflow-visible left-0 md:mt-16">
            <Image
                className="absolute min-w-[700px] md:w-[1070px] -top-[300px] -right-[250px] md:-top-[400px] md:-right-40"
                {...VortexAsset}
                alt="Vortex.png"
            />
            <Image
                className="absolute min-w-[604px] sm:w-[1036px] -bottom-10 md:bottom-0 -right-[200px] lg:-right-20"
                {...VasilencoAsset}
                alt="Vasilenco.png"
            />
            <Image
                className=" absolute -z-10 -right-0 md:z-0 md:right-[50px] md:-top-[100px]"
                {...TonCoinGroup}
                alt="TonCoinGroup.png"
            />
            <Image
                className="absolute w-[170px] -left-5 top-[150px] md:w-[300px] md:top-[340px] md:left-[430px]"
                {...DogAsset}
                alt="DogAsset.png"
            />
        </div>
    );

}
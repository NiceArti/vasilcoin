'use client'


import Image from "next/image";

import AboutUsFrame from '@/public/about-us-frame.png';
import IconGroupLg from '@/public/frame-coins.png';
import IconGroupSm from '@/public/frame-coins-sm.png';
import LogoCoin from '@/public/logo-coin.png';
import LogoCoin1 from '@/public/logo-coin-1.png';

export function AboutSection() {
    return (
        <section className="w-full bg-emoji-tiled bg-repeat border-b-2 sm:border-b-4 border-black">
            <div className="w-full h-[731px] relative overflow-x-clip top-10">
                <Image
                    {...AboutUsFrame}
                    className="absolute max-w-[1078px] w-[90%] lg:w-[85%] md:h-[531px] h-[471px] mx-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    alt='Frame'
                    quality={100}
                />

                <div className="mx-auto relative max-w-[838px] top-[25%]">
                    <h1 className="text-center font-bold text-[32px] mb-5 md:mb-0 md:text-[72px]">О VASILCOIN</h1>
                    <p className="mt-2 text-center mx-auto  w-[80%] text-[18px] md:w-[90%] lg:w-full lg:text-[28px] text-[#5A5C57]">
                        Это не просто мем-коин в <b className="font-bold text-black">блокчейне TON</b>, а символ радости, доброты и стиля. Он создан, чтобы вдохновлять, объединять людей и делать мир ярче и счастливее.
                    </p>
                    <Image
                        {...IconGroupLg}
                        className="max-w-[627px] w-[75%] mx-auto -mt-5 hidden md:block"
                        alt='Frame'
                    />
                    <Image
                        {...IconGroupSm}
                        className="w-[75%] mx-auto mt-2 md:hidden"
                        alt='Frame'
                    />


                    {/* Maskots */}
                    <Image
                        {...LogoCoin}
                        className="absolute w-[200px] -top-[190px] right-0 sm:right-10 scale-x-[-1] md:scale-x-[1] md:-left-0 lg:-left-[200px] md:w-[230px]"
                        alt='LogoCoin'
                        quality={100}
                        //  md:left-0 md:scale-x-[-1] md:w-56
                    />
                    <Image
                        {...LogoCoin1}
                        className="absolute w-[140px] xs:left-10 -top-[140px] scale-x-[-1] md:scale-x-[1] md:-right-[100px] lg:-right-[220px] md:top-[200px] md:w-[230px]"
                        alt='LogoCoin1'
                        quality={100}
                        //  top-14 w-32 md:right-0 md:bottom-0 md:scale-x-[-1] md:w-56
                    />
                </div>
            </div>
        </section>
    );
}
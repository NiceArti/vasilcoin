"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import LogoCoin from '@/public/logo-coin.png'
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BBCodeRenderer } from "./ui/code-renderer";
import { Title } from "./ui/title";
import { Section } from "./ui/section";
import BubbleBackground from "./ui/bubble-generator";

export function TokenomicsSection() {
    const t = useTranslations('TokenomicsSection');

    return (
        <Section
            id="tokenomics"
            className="bg-white overflow-y-clip"
            classNameInner="pt-[40px]"
        >
            <BubbleBackground
                imageUrl={'/brand/vasilcoin-token-white.png'}
            />
            <Title className="relative text-center">
                <BBCodeRenderer text={t('title')} />
            </Title>
            
            <StylizedDonutChart />
        </Section>
    );
}

const StylizedDonutChart = () => {
    const t = useTranslations('TokenomicsSection');
    const [hoverSegment, setHoverSegment] = useState<number | null>(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    // Данные для графика
    const data = [
        {
            id: 1,
            value: 20,
            color: "#EA2A7B",
            label: t('data.0.label'),
            description: t('data.0.description'),
        },
        {
            id: 2,
            value: 15,
            color: "#19E54C",
            label: t('data.1.label'),
            description: t('data.1.description'),
        },
        {
            id: 3,
            value: 10,
            color: "#ED8D18",
            label: t('data.2.label'),
            description: t('data.2.description'),
        },
        {
            id: 4,
            value: 25,
            color: "#EBC822",
            label: t('data.3.label'),
            description: t('data.3.description'),
        },
        {
            id: 5,
            value: 20,
            color: "#AEE02C",
            label: t('data.4.label'),
            description: t('data.4.description'),
        },
        {
            id: 6,
            value: 10,
            color: "#2580D1",
            label: t('data.5.label'),
            description: t('data.5.description'),
        },
    ];

    const total = data.reduce((acc, item) => acc + item.value, 0);
    const centerX = 150;
    const centerY = 150;
    const radius = 100;
    const innerRadius = 60;
    const gapAngle = 0.08; // Увеличенный промежуток между сегментами для округления

    // Вычисляем начальный и конечный угол для каждого сегмента
    let currentAngle = -Math.PI / 2; // Начинаем с верхней точки

    const segments = data.map((item) => {
        const angle = (item.value / total) * (2 * Math.PI - data.length * gapAngle);
        const startAngle = currentAngle;
        const endAngle = startAngle + angle;

        // Увеличим разницу между радиусами для более заметного скругления
        const arcRadius = radius;
        const arcInnerRadius = innerRadius;

        // Внешние точки
        const xStartOuter = centerX + Math.cos(startAngle) * arcRadius;
        const yStartOuter = centerY + Math.sin(startAngle) * arcRadius;
        const xEndOuter = centerX + Math.cos(endAngle) * arcRadius;
        const yEndOuter = centerY + Math.sin(endAngle) * arcRadius;

        // Внутренние точки
        const xStartInner = centerX + Math.cos(startAngle) * arcInnerRadius;
        const yStartInner = centerY + Math.sin(startAngle) * arcInnerRadius;
        const xEndInner = centerX + Math.cos(endAngle) * arcInnerRadius;
        const yEndInner = centerY + Math.sin(endAngle) * arcInnerRadius;

        // Контрольные точки для скругления (смещение на 25% от длины сегмента)
        const controlOffset = 0.25;
        const controlXOuter = xEndOuter + (xEndInner - xEndOuter) * controlOffset;
        const controlYOuter = yEndOuter + (yEndInner - yEndOuter) * controlOffset;
        const controlXInner =
            xStartInner + (xStartOuter - xStartInner) * controlOffset;
        const controlYInner =
            yStartInner + (yStartOuter - yStartInner) * controlOffset;

        const largeArcFlag = angle > Math.PI ? 1 : 0;
        const path = [
            `M ${xStartOuter} ${yStartOuter}`,
            `A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 1 ${xEndOuter} ${yEndOuter}`,
            `Q ${controlXOuter} ${controlYOuter}, ${xEndInner} ${yEndInner}`,
            `A ${arcInnerRadius} ${arcInnerRadius} 0 ${largeArcFlag} 0 ${xStartInner} ${yStartInner}`,
            `Q ${controlXInner} ${controlYInner}, ${xStartOuter} ${yStartOuter}`,
            "Z",
        ].join(" ");

        currentAngle = endAngle + gapAngle;

        return {
            ...item,
            path,
            tooltipX: centerX + Math.cos(startAngle + angle / 2) * (radius + 25),
            tooltipY: centerY + Math.sin(startAngle + angle),
        };
    });

    return (
        <div className="relative flex flex-col items-center justify-center mb-10 md:mb-0 md:flex-row md:justify-around">
            <div className="relative ">
                <Image
                    {...LogoCoin}
                    alt="Logo Coin"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] md:w-[140px]"
                />
                <svg
                    className="size-[350px] md:size-[500px] xl:size-[600px]"
                    viewBox="0 0 300 300"
                >
                    {/* Сегменты */}
                    {segments.map(segment => (
                        <g key={segment.id}>
                            <path
                                d={segment.path}
                                fill={segment.color}
                                stroke="black"
                                strokeWidth="2"
                                onMouseEnter={(e) => {
                                    setHoverSegment(segment.id);
                                    setTooltipPos({ x: e.clientX, y: e.clientY - 20 });
                                }}
                                onMouseMove={(e) =>
                                    setTooltipPos({ x: e.clientX, y: e.clientY - 20 })
                                }
                                onMouseLeave={() => setHoverSegment(null)}
                                onTouchMove={() => setHoverSegment(null)}
                                onTouchMoveCapture={() => setHoverSegment(null)}
                                className="cursor-pointer transition-all duration-200"
                                style={{
                                    transform:
                                        hoverSegment === segment.id ? "scale(1.05)" : "scale(1)",
                                    transformOrigin: `${centerX}px ${centerY}px`,
                                    filter: "drop-shadow(2px 2px 0px rgba(0, 0, 0, 1))",
                                }}
                            />
                        </g>
                    ))}
                </svg>
            </div>

            {/* Всплывающее окно */}
            {hoverSegment !== null && (
                <div
                    className="fixed text-black text-sm z-20 w-[200px] h-[80px]"
                    style={{
                        left: tooltipPos.x,
                        top: tooltipPos.y,
                        transform: "translate(-45%, -70%)",
                        pointerEvents: "none",
                    }}
                >
                    <PopUp
                        className="absolute w-full h-full -z-10 top-[-30px] left-[-35px]"
                        fillColor={lightenHexColor(
                            data.find((d) => d.id === hoverSegment)?.color as string,
                            0.15
                        )}
                    />
                    <div className="inline-flex gap-3 items-center relative -top-[36px] left-1/2 -translate-x-1/2  w-full h-full">
                        <div
                            className="size-[10px] rounded-full"
                            style={{
                                background: data.find((d) => d.id === hoverSegment)?.color,
                            }}
                        ></div>
                        <span className="whitespace-nowrap">
                            {data.find((d) => d.id === hoverSegment)?.label}:{" "}
                            {data.find((d) => d.id === hoverSegment)?.value}%
                        </span>
                    </div>
                </div>
            )}

            {/* Легенда */}
            <div className="flex flex-col justify-center gap-4 mx-auto md:gap-8">
                {segments.map((segment) => (
                    <div key={segment.id} className="flex items-center md:gap-3">
                        <div
                            className="size-5 min-w-5 mr-2 rounded border border-black md:border-2 md:size-6 xl:size-8"
                            style={{
                                backgroundColor: segment.color,
                            }}
                        />
                        <span className="text-base whitespace-nowrap md:text-[20px] xl:text-[28px]">
                            {segment.description} ({segment.label}): {segment.value}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

function lightenHexColor(hex: string, percent: number): string {
    const perc = percent >= 1 ? 1 : 1 - percent;
    // Убедимся, что переданный цвет в корректном формате
    if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        throw new Error("Invalid hex color format");
    }

    // Убираем '#' и разбиваем строку на компоненты
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Увеличиваем яркость каждого компонента
    const newR = Math.min(255, r + (255 - r) * perc);
    const newG = Math.min(255, g + (255 - g) * perc);
    const newB = Math.min(255, b + (255 - b) * perc);

    // Преобразуем обратно в hex-формат
    const newHex = `#${Math.round(newR)
        .toString(16)
        .padStart(2, "0")}${Math.round(newG)
            .toString(16)
            .padStart(2, "0")}${Math.round(newB).toString(16).padStart(2, "0")}`;

    return newHex;
}

// const TubeDonutChart = () => {
//     const [hoverSegment, setHoverSegment] = useState<number | null>(null);

//     const data = [
//         { id: 1, value: 20, color: "#EA2A7B", label: "Ликвидность" },
//         { id: 2, value: 15, color: "#19E54C", label: "Награды" },
//         { id: 3, value: 10, color: "#ED8D18", label: "Фонд Помощи" },
//         { id: 4, value: 25, color: "#EBC822", label: "Наша экосистема" },
//         { id: 5, value: 20, color: "#AEE02C", label: "Маркетинг" },
//         { id: 6, value: 10, color: "#2580D1", label: "Разарв лучей" },
//     ];

//     const total = data.reduce((acc, item) => acc + item.value, 0);
//     const centerX = 150;
//     const centerY = 150;
//     const radius = 100;
//     const innerRadius = 60;
//     const gapAngle = 0.08;
//     const cornerRadius = 10;

//     let currentAngle = -Math.PI / 2;
//     const segments = data.map((item) => {
//         const angle = (item.value / total) * (2 * Math.PI - data.length * gapAngle);
//         const startAngle = currentAngle + gapAngle / 2;
//         const endAngle = startAngle + angle - gapAngle;

//         const outerStart = {
//             x: centerX + Math.cos(startAngle) * radius,
//             y: centerY + Math.sin(startAngle) * radius,
//         };
//         const outerEnd = {
//             x: centerX + Math.cos(endAngle) * radius,
//             y: centerY + Math.sin(endAngle) * radius,
//         };

//         const innerStart = {
//             x: centerX + Math.cos(startAngle) * innerRadius,
//             y: centerY + Math.sin(startAngle) * innerRadius,
//         };
//         const innerEnd = {
//             x: centerX + Math.cos(endAngle) * innerRadius,
//             y: centerY + Math.sin(endAngle) * innerRadius,
//         };

//         const largeArcFlag = angle > Math.PI ? 1 : 0;

//         const path = [
//             `M ${outerStart.x} ${outerStart.y}`,
//             `A ${cornerRadius} ${cornerRadius} 0 0 1 ${centerX + Math.cos(startAngle + 0.1) * (radius - cornerRadius)
//             } ${centerY + Math.sin(startAngle + 0.1) * (radius - cornerRadius)}`,
//             `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${centerX + Math.cos(endAngle - 0.1) * (radius - cornerRadius)
//             } ${centerY + Math.sin(endAngle - 0.1) * (radius - cornerRadius)}`,
//             `A ${cornerRadius} ${cornerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
//             `L ${innerEnd.x} ${innerEnd.y}`,
//             `A ${cornerRadius} ${cornerRadius} 0 0 1 ${centerX + Math.cos(endAngle - 0.1) * (innerRadius + cornerRadius)
//             } ${centerY + Math.sin(endAngle - 0.1) * (innerRadius + cornerRadius)}`,
//             `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${centerX + Math.cos(startAngle + 0.1) * (innerRadius + cornerRadius)
//             } ${centerY + Math.sin(startAngle + 0.1) * (innerRadius + cornerRadius)}`,
//             `A ${cornerRadius} ${cornerRadius} 0 0 1 ${innerStart.x} ${innerStart.y}`,
//             `Z`,
//         ].join(" ");

//         currentAngle = endAngle + gapAngle;

//         return {
//             ...item,
//             path,
//         };
//     });

//     return (
//         <div className="relative w-full max-w-md">
//             <svg width="300" height="300" viewBox="0 0 300 300">
//                 {segments.map((segment) => (
//                     <path
//                         key={segment.id}
//                         d={segment.path}
//                         fill={segment.color}
//                         stroke="#000"
//                         strokeWidth="2"
//                         className="cursor-pointer transition-all duration-200"
//                         style={{
//                             transform:
//                                 hoverSegment === segment.id ? "scale(1.05)" : "scale(1)",
//                             transformOrigin: `${centerX}px ${centerY}px`,
//                             filter: "drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.2))",
//                         }}
//                         onMouseEnter={() => setHoverSegment(segment.id)}
//                         onMouseLeave={() => setHoverSegment(null)}
//                     />
//                 ))}
//             </svg>
//         </div>
//     );
// };

const PopUp = ({fillColor, className}:{fillColor?: string, className?: string}) => {
    return (
        <svg className={cn('w-[120px] h-[40px]', className)}
            viewBox="0 0 119 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <foreignObject x="-105.45" y="-105.389" width="329.841" height="250.861">
                <div
                    // @ts-ignore
                    xmlns="http://www.w3.org/1999/xhtml" 
                    className="w-full h-full"
                    style={{
                        backdropFilter: 'blur(53.08px)',
                        clipPath: `url(#bgblur_0_8_12964_clip_path)`,
                    }}
                />
            </foreignObject>
            <g data-figma-bg-blur-radius="106.154">
                <mask id="path-1-inside-1_8_12964" fill="white">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.82446 3.13197C0.703857 5.35158 0.703857 8.85304 0.703857 15.856C0.703857 22.8589 0.703857 26.3603 2.82446 28.58C2.90489 28.6641 2.98723 28.7465 3.07142 28.8269C5.29103 30.9475 8.79249 30.9475 15.7954 30.9475H51.1965C51.949 30.9475 52.3252 30.9475 52.6488 31.1096C52.9725 31.2716 53.1979 31.5728 53.6487 32.1753L57.3083 37.0656C58.4319 38.5672 58.9938 39.3179 59.7605 39.3179C60.5272 39.3179 61.089 38.5672 62.2127 37.0656L65.8722 32.1753C66.3231 31.5728 66.5485 31.2716 66.8721 31.1096C67.1958 30.9475 67.572 30.9475 68.3244 30.9475H103.145C110.148 30.9475 113.65 30.9475 115.869 28.8269C115.953 28.7465 116.036 28.6641 116.116 28.58C118.237 26.3603 118.237 22.8589 118.237 15.856C118.237 8.85304 118.237 5.35158 116.116 3.13197C116.036 3.04778 115.953 2.96544 115.869 2.885C113.65 0.764404 110.148 0.764404 103.145 0.764404H15.7954C8.79249 0.764404 5.29103 0.764404 3.07142 2.885C2.98723 2.96544 2.90489 3.04778 2.82446 3.13197Z"
                    />
                </mask>
                {/* <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.82446 3.13197C0.703857 5.35158 0.703857 8.85304 0.703857 15.856C0.703857 22.8589 0.703857 26.3603 2.82446 28.58C2.90489 28.6641 2.98723 28.7465 3.07142 28.8269C5.29103 30.9475 8.79249 30.9475 15.7954 30.9475H51.1965C51.949 30.9475 52.3252 30.9475 52.6488 31.1096C52.9725 31.2716 53.1979 31.5728 53.6487 32.1753L57.3083 37.0656C58.4319 38.5672 58.9938 39.3179 59.7605 39.3179C60.5272 39.3179 61.089 38.5672 62.2127 37.0656L65.8722 32.1753C66.3231 31.5728 66.5485 31.2716 66.8721 31.1096C67.1958 30.9475 67.572 30.9475 68.3244 30.9475H103.145C110.148 30.9475 113.65 30.9475 115.869 28.8269C115.953 28.7465 116.036 28.6641 116.116 28.58C118.237 26.3603 118.237 22.8589 118.237 15.856C118.237 8.85304 118.237 5.35158 116.116 3.13197C116.036 3.04778 115.953 2.96544 115.869 2.885C113.65 0.764404 110.148 0.764404 103.145 0.764404H15.7954C8.79249 0.764404 5.29103 0.764404 3.07142 2.885C2.98723 2.96544 2.90489 3.04778 2.82446 3.13197Z"
                    fill={fillColor || 'white'}
                    fillOpacity="0.6"
                /> */}
                <path
                    d="M2.82446 3.13197L2.44068 2.76531L2.44068 2.76531L2.82446 3.13197ZM2.82446 28.58L3.20823 28.2133L3.20823 28.2133L2.82446 28.58ZM3.07142 28.8269L2.70476 29.2107H2.70477L3.07142 28.8269ZM115.869 28.8269L115.502 28.4431L115.502 28.4431L115.869 28.8269ZM116.116 28.58L116.5 28.9466L116.5 28.9466L116.116 28.58ZM116.116 3.13197L116.5 2.76531L116.5 2.7653L116.116 3.13197ZM115.869 2.885L115.502 3.26877L115.502 3.26878L115.869 2.885ZM3.07142 2.885L2.70477 2.50123L2.70477 2.50123L3.07142 2.885ZM65.8722 32.1753L66.2972 32.4933L65.8722 32.1753ZM66.8721 31.1096L66.6345 30.635L66.8721 31.1096ZM57.3083 37.0656L56.8833 37.3836L57.3083 37.0656ZM62.2127 37.0656L62.6376 37.3836L62.2127 37.0656ZM59.7605 39.3179V39.8487V39.3179ZM53.6487 32.1753L53.2238 32.4933L53.6487 32.1753ZM52.6488 31.1096L52.4112 31.5842L52.6488 31.1096ZM1.23463 15.856C1.23463 12.34 1.23569 9.7548 1.49523 7.76901C1.75288 5.79759 2.25711 4.49414 3.20823 3.49862L2.44068 2.76531C1.2712 3.9894 0.715132 5.54649 0.442639 7.63144C0.172024 9.70201 0.173088 12.369 0.173088 15.856H1.23463ZM3.20823 28.2133C2.25711 27.2178 1.75288 25.9143 1.49523 23.9429C1.23569 21.9571 1.23463 19.372 1.23463 15.856H0.173088C0.173088 19.3429 0.172024 22.0099 0.442639 24.0805C0.715132 26.1654 1.2712 27.7225 2.44068 28.9466L3.20823 28.2133ZM3.43807 28.4431C3.35972 28.3683 3.28308 28.2917 3.20823 28.2133L2.44068 28.9466C2.52669 29.0366 2.61474 29.1247 2.70476 29.2107L3.43807 28.4431ZM15.7954 30.4167C12.2794 30.4167 9.69425 30.4157 7.70846 30.1562C5.73704 29.8985 4.43359 29.3943 3.43807 28.4431L2.70477 29.2107C3.92885 30.3802 5.48595 30.9362 7.57089 31.2087C9.64147 31.4794 12.3085 31.4783 15.7954 31.4783V30.4167ZM51.1965 30.4167H15.7954V31.4783H51.1965V30.4167ZM57.7332 36.7476L54.0737 31.8573L53.2238 32.4933L56.8833 37.3836L57.7332 36.7476ZM65.4473 31.8573L61.7877 36.7476L62.6376 37.3836L66.2972 32.4933L65.4473 31.8573ZM103.145 30.4167H68.3244V31.4783H103.145V30.4167ZM115.502 28.4431C114.507 29.3943 113.204 29.8985 111.232 30.1562C109.246 30.4157 106.661 30.4167 103.145 30.4167V31.4783C106.632 31.4783 109.299 31.4794 111.37 31.2087C113.455 30.9362 115.012 30.3802 116.236 29.2107L115.502 28.4431ZM115.732 28.2133C115.657 28.2917 115.581 28.3683 115.502 28.4431L116.236 29.2107C116.326 29.1247 116.414 29.0366 116.5 28.9466L115.732 28.2133ZM117.706 15.856C117.706 19.372 117.705 21.9571 117.445 23.9429C117.188 25.9143 116.683 27.2178 115.732 28.2133L116.5 28.9466C117.669 27.7225 118.225 26.1654 118.498 24.0805C118.769 22.0099 118.767 19.3429 118.767 15.856H117.706ZM115.732 3.49862C116.683 4.49414 117.188 5.79759 117.445 7.76901C117.705 9.7548 117.706 12.34 117.706 15.856H118.767C118.767 12.369 118.769 9.70201 118.498 7.63144C118.225 5.54649 117.669 3.9894 116.5 2.76531L115.732 3.49862ZM115.502 3.26878C115.581 3.34362 115.657 3.42026 115.732 3.49863L116.5 2.7653C116.414 2.6753 116.326 2.58725 116.236 2.50122L115.502 3.26878ZM103.145 1.29517C106.661 1.29517 109.246 1.29624 111.232 1.55577C113.204 1.81343 114.507 2.31766 115.502 3.26877L116.236 2.50123C115.012 1.33175 113.455 0.775679 111.37 0.503186C109.299 0.232571 106.632 0.233635 103.145 0.233635V1.29517ZM15.7954 1.29517H103.145V0.233635H15.7954V1.29517ZM3.43807 3.26877C4.43359 2.31766 5.73704 1.81343 7.70846 1.55577C9.69425 1.29624 12.2794 1.29517 15.7954 1.29517V0.233635C12.3085 0.233635 9.64146 0.232571 7.57089 0.503186C5.48594 0.775679 3.92885 1.33175 2.70477 2.50123L3.43807 3.26877ZM3.20823 3.49862C3.28309 3.42027 3.35972 3.34363 3.43807 3.26877L2.70477 2.50123C2.61474 2.58724 2.52669 2.67529 2.44068 2.76531L3.20823 3.49862ZM66.2972 32.4933C66.78 31.8481 66.9246 31.6768 67.1097 31.5842L66.6345 30.635C66.1723 30.8664 65.8661 31.2975 65.4473 31.8573L66.2972 32.4933ZM68.3244 30.4167C67.6253 30.4167 67.0967 30.4036 66.6345 30.635L67.1097 31.5842C67.2949 31.4915 67.5186 31.4783 68.3244 31.4783V30.4167ZM56.8833 37.3836C57.435 38.1208 57.883 38.7217 58.2936 39.1308C58.7136 39.5493 59.1734 39.8487 59.7605 39.8487V38.7872C59.5808 38.7872 59.3764 38.7112 59.0429 38.3789C58.7 38.0372 58.3052 37.512 57.7332 36.7476L56.8833 37.3836ZM61.7877 36.7476C61.2157 37.512 60.821 38.0372 60.4781 38.3789C60.1446 38.7112 59.9401 38.7872 59.7605 38.7872V39.8487C60.3475 39.8487 60.8074 39.5493 61.2274 39.1308C61.638 38.7217 62.086 38.1208 62.6376 37.3836L61.7877 36.7476ZM51.1965 31.4783C52.0023 31.4783 52.2261 31.4915 52.4112 31.5842L52.8865 30.635C52.4243 30.4036 51.8956 30.4167 51.1965 30.4167V31.4783ZM54.0737 31.8573C53.6548 31.2975 53.3486 30.8664 52.8865 30.635L52.4112 31.5842C52.5963 31.6768 52.741 31.8481 53.2238 32.4933L54.0737 31.8573Z"
                    fill="#181813"
                    mask="url(#path-1-inside-1_8_12964)"
                />
            </g>
            <defs>
                <clipPath id="bgblur_0_8_12964_clip_path">
                    <path
                        transform="translate(105.45 105.389)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.82446 3.13197C0.703857 5.35158 0.703857 8.85304 0.703857 15.856C0.703857 22.8589 0.703857 26.3603 2.82446 28.58C2.90489 28.6641 2.98723 28.7465 3.07142 28.8269C5.29103 30.9475 8.79249 30.9475 15.7954 30.9475H51.1965C51.949 30.9475 52.3252 30.9475 52.6488 31.1096C52.9725 31.2716 53.1979 31.5728 53.6487 32.1753L57.3083 37.0656C58.4319 38.5672 58.9938 39.3179 59.7605 39.3179C60.5272 39.3179 61.089 38.5672 62.2127 37.0656L65.8722 32.1753C66.3231 31.5728 66.5485 31.2716 66.8721 31.1096C67.1958 30.9475 67.572 30.9475 68.3244 30.9475H103.145C110.148 30.9475 113.65 30.9475 115.869 28.8269C115.953 28.7465 116.036 28.6641 116.116 28.58C118.237 26.3603 118.237 22.8589 118.237 15.856C118.237 8.85304 118.237 5.35158 116.116 3.13197C116.036 3.04778 115.953 2.96544 115.869 2.885C113.65 0.764404 110.148 0.764404 103.145 0.764404H15.7954C8.79249 0.764404 5.29103 0.764404 3.07142 2.885C2.98723 2.96544 2.90489 3.04778 2.82446 3.13197Z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

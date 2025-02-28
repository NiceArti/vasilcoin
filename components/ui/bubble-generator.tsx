'use client'

import Image from "next/image";
import { useMemo } from "react";

interface BubbleBackgroundProps {
    imageUrl: string;
    minSize?: number; // в пикселях
    maxSize?: number; // в пикселях
    bubbleCount?: number;
}

interface Bubble {
    id: number;
    size: number;
    left: number; // в процентах
    top: number; // в процентах
    rotationDuration: number;
    levitateDuration: number;
    rotationDelay: number;
    levitateDelay: number;
    flip: boolean;
    initialTilt: number;
}

const BubbleBackground: React.FC<BubbleBackgroundProps> = ({
    imageUrl,
    minSize = 20,
    maxSize = 80,
    bubbleCount = 60,
}) => {
    // Генерируем массив пузырьков с произвольными параметрами
    const bubbles = useMemo(() => {
        const bubblesArr: Bubble[] = [];
        for (let i = 0; i < bubbleCount; i++) {
            // Размер в диапазоне [minSize, maxSize]
            const size = Math.random() * (maxSize - minSize) + minSize;
            // Случайное положение в процентах относительно родительского контейнера
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            // Для зависимой от размера анимации: чем больше пузырёк, тем медленнее анимация
            const baseRotationDuration = 10; // базовая длительность поворота (сек)
            const baseLevitateDuration = 8;  // базовая длительность левитации (сек)
            // Вычисляем длительность как отношение: большие объекты движутся медленнее
            const rotationDuration = baseRotationDuration * (maxSize / size);
            const levitateDuration = baseLevitateDuration * (maxSize / size);
            // Случайная задержка для более хаотичного эффекта
            const rotationDelay = Math.random() * rotationDuration;
            const levitateDelay = Math.random() * levitateDuration;
            // Случайное горизонтальное отражение (flip)
            const flip = Math.random() < 0.5;
            // Случайный наклон от -10° до 10°
            const initialTilt = Math.random() * 20 - 10;
            bubblesArr.push({
                id: i,
                size,
                left,
                top,
                rotationDuration,
                levitateDuration,
                rotationDelay,
                levitateDelay,
                flip,
                initialTilt,
            });
        }
        return bubblesArr;
    }, [bubbleCount, minSize, maxSize]);

    return (
        <div className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Определяем глобальные keyframes для анимаций */}
            <style jsx global>{`
        @keyframes levitateAnim {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        @keyframes rotateAnim {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>

            {bubbles.map((bubble) => (
                <div
                    className="absolute"
                    key={bubble.id}
                    style={{
                        left: `${bubble.left}%`,
                        top: `${bubble.top}%`,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        transform: `rotate(${bubble.initialTilt}deg) ${bubble.flip ? "scaleX(-1)" : ""}`,
                    }}
                >
                    {/* Внешний контейнер для поворота */}
                    <div
                        className="w-full h-full"
                        style={{
                            animation: `rotateAnim ${bubble.rotationDuration}s linear infinite`,
                            animationDelay: `${bubble.rotationDelay}s`,
                        }}
                    >
                        {/* Внутренний контейнер для левитации */}
                        <div
                            className="w-full h-full"
                            style={{
                                width: "100%",
                                height: "100%",
                                animation: `levitateAnim ${bubble.levitateDuration}s ease-in-out infinite`,
                                animationDelay: `${bubble.levitateDelay}s`,
                            }}
                        >
                            <Image
                                src={imageUrl}
                                width={bubble.size}
                                height={bubble.size}
                                quality={100}
                                alt="Bubble Image Generated"
                                className="opacity-25"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BubbleBackground;

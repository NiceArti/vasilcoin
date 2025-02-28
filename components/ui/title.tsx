import React from "react";
import { cn } from "@/lib/utils"; // Функция для объединения классов, можно заменить на clsx или classnames

export const Title = React.forwardRef<
    HTMLHeadingElement,
    React.ComponentPropsWithoutRef<"h1">
>(({ className, ...props }, ref) => {
    return (
        <h1
            ref={ref}
            className={cn(
                "text-[32px] font-bold text-black sm:text-[36px] md:text-[52px] lg:text-[72px] lg:leading-snug",
                className
            )}
            {...props}
        />
    );
});

Title.displayName = "Title";

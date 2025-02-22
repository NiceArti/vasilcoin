import React from "react";
import { cn } from "@/lib/utils"; // Если нет, замени на clsx или classnames

export const Button = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<"button">
>(({ className, children, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "h-[72px] px-12 rounded-full bg-[#FBAC01] border border-black shadow-[3px_3px_0px_black] hover: bg - [#fb8f01] font - bold text - [22px] text-black transition-all duration-200 active:scale-95",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});
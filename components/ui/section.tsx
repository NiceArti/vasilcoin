import React from "react";
import { cn } from "@/lib/utils";

export const Section = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"section"> & {classNameInner?: string}
>(({ className, classNameInner, children, ...props }, ref) => {
    return (
        <section
            ref={ref}
            className={cn("w-full border-b-2 border-black sm:border-b-4 overflow-x-clip", className)}
            {...props}
        >
            <div className={cn("relative mx-auto max-w-7xl px-7 lg:overflow-x-visible", classNameInner)}>
                {children}
            </div>
        </section>
    );
});

Section.displayName = "Section";
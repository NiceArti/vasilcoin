import React from "react";
import { cn } from "@/lib/utils";

export const Section = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"section">
>(({ className, children, ...props }, ref) => {
    return (
        <section
            ref={ref}
            className={cn("w-full border-b-2 border-black sm:border-b-4", className)}
            {...props}
        >
            <div className="relative mx-auto max-w-6xl px-4 overflow-clip lg:overflow-visible">
                {children}
            </div>
        </section>
    );
});

Section.displayName = "Section";
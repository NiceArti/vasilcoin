import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const StyledLink = React.forwardRef<
    HTMLLinkElement,
    React.ComponentPropsWithoutRef<"a">
>(({ className, href, children, ...props }, ref) => {
    return (
        <Link
            href={href || '#'}
            className={cn(
                "inline-flex items-center justify-center gap-3 px-4 py-3 w-max whitespace-nowrap text-base font-bold rounded-full bg-primary border border-black shadow-[3px_3px_0px_black] transition-colors hover:bg-accent hover:text-accent-foreground",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
});

StyledLink.displayName = "StyledLink"
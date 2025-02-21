'use client'


import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "sonner";

export function CopyButton({ className, text, copyText }: { className?: string, text?: string, copyText?: string }) {
    const [buttonText, setButtonText] = useState(text);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | string | number | undefined;
        if (isCopied) {
            timer = setTimeout(() => {
                setButtonText(text);
                setIsCopied(false);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [isCopied, text]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(copyText || '');
            setButtonText('Скопировано');
            setIsCopied(true);
            toast.success("Текст скопирован успешно");
        } catch (err) {
            console.error('Ошибка при копировании текста: ', err);
        }
    };


    return (
        <Button 
            className={cn(
                "w-44 h-16 rounded-full bg-[#FBAC01] border border-black shadow-[3px_3px_0px_black] hover:bg-[#fb8f01] font-bold text-lg text-black",
                className
            )}
            onClick={handleCopy}
        >
            <div className="inline-flex justify-around items-center w-full">
                <IoCopyOutline className="scale-150" />{" "}
                {buttonText}
            </div>
        </Button>
    );
}

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
                "h-full text-lg px-6",
                className
            )}
            variant={'outline'}
            onClick={handleCopy}
        >
            <IoCopyOutline className="scale-150" />{" "}
            {buttonText}
        </Button>
    );
}

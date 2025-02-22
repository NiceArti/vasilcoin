import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function scrollToId(id?: string) {
  if(!id) {
    return;
  }
  
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({behavior: 'smooth', block: "center"});
  }
}
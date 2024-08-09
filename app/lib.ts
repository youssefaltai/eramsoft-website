import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type SupportedLocales = 'en' | 'ar';

export function cn(...args: ClassValue[]) {
    return twMerge(clsx(args));
}

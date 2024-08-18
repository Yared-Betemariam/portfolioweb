import { type ClassValue, clsx } from "clsx";
import { Outfit } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const font2 = Outfit({ subsets: ["latin"] });

export const fontWrapper = (className: ClassValue) => {
  return cn(className, font2.className);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

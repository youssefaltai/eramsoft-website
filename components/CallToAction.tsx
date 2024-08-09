import { cn } from "@/app/lib";
import { HTMLProps, PropsWithChildren } from "react";

type CallToActionProps = PropsWithChildren<HTMLProps<HTMLButtonElement>>;
export default function CallToAction({ className, children }: CallToActionProps) {
    const buttonCn = "flex justify-center items-center gap-1 rounded-full px-6 py-4 bg-[#2FA455] text-white";
    return (
        <button className={cn(buttonCn, className)}>
            {children}
        </button>
    );
}
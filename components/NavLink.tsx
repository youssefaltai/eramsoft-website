"use client";

import Link from "next/link";
import { HTMLProps } from "react";

import { usePathname } from 'next/navigation'

type NavLinkProps = HTMLProps<HTMLAnchorElement>;
export default function NavLink({ href, children }: NavLinkProps) {
    const currentPath = usePathname() || '/';
    const active = currentPath === href;
    const textColor = active ? "text-[#2FA455]" : '';

    return (
        <Link href={href as any} className={`${textColor} flex flex-col justify-center items-center gap-1`}>
            {children}
            {
                active &&
                <div className="w-4 h-1 bg-[#2FA455] rounded-full" />
            }
        </Link>
    );
}
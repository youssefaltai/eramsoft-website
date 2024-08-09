"use client";

import { PropsWithChildren, ReactNode, useState } from "react";

type DropdownProps = PropsWithChildren<{ label: ReactNode }>;

export default function Dropdown({ children, label }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-center items-center gap-1">
                {label}
            </button>
            {isOpen && <div className="absolute top-6 left-0 flex flex-col">
                {children}
            </div>}
        </div>
    );
}
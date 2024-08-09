"use client";

import { SupportedLocales } from "@/app/lib";
import { PropsWithChildren } from "react";
import { useChangeLocale } from "@/locales/client";

type LocaleLinkProps = PropsWithChildren<{
    locale: SupportedLocales;
}>;
export default function LocaleLink({ locale, children }: LocaleLinkProps) {
    const changeLocale = useChangeLocale();
    return (
        <button onClick={() => changeLocale(locale)}>
            {children}
        </button>
    );
}
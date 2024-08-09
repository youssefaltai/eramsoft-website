import Dropdown from "./Dropdown";
import LocaleLink from "./LocaleLink";
import Logo from "./Logo";
import CallToAction from "./CallToAction";
import { ArrowUpRightIcon, NavArrowDown } from "./Icons";
import { getCurrentLocale } from "@/locales/server";
import Menu from "./Menu";
import NavLink from "./NavLink";

export default function Header() {
    const locale = getCurrentLocale();
    const localeLabel = locale === "en" ? "English" : "العربية";

    return (
        <header className="flex justify-center items-center py-6 w-full">
            <div className="flex justify-between items-center gap-16 w-full max-w-screen-xl px-16">
                <Logo />
                <nav className="hidden lg:flex justify-between items-center w-full max-w-screen-sm">
                    <ul className="flex justify-between items-center w-full gap-4">
                        <li>
                            <NavLink href={"/"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={"/solutions"}>
                                Solutions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={"/portfolio"}>
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={"/about"}>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <Dropdown label={
                                <>
                                    {localeLabel}
                                    <NavArrowDown />
                                </>
                            }>
                                <LocaleLink locale="en">
                                    English
                                </LocaleLink>
                                <LocaleLink locale="ar">
                                    العربية
                                </LocaleLink>
                            </Dropdown>
                        </li>
                    </ul>
                </nav>
                <CallToAction className="hidden lg:flex">
                    Contact Us
                    <ArrowUpRightIcon />
                </CallToAction>
                <Menu />
            </div>
        </header>
    );
}
import Logo from "./Logo";
import CallToAction from "./CallToAction";
import { ArrowUpRightIcon } from "./Icons";
import Menu from "./Menu";
import NavLink from "./NavLink";

export default function Header() {
    return (
        <header className="flex justify-center items-center py-6 w-full">
            <div className="flex justify-between items-center gap-32 w-full max-w-screen-xl px-16">
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
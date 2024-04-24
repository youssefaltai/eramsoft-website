'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  title: string;
  href: string;
};

function NavLink({ title, href }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link href={href} className={`text-xl font-medium ${pathname === href ? "text-[--secondary-color]" : "text-[--teriary-color]"} flex flex-col gap-1
hover:text-[--secondary-color] hover:pb-1
transition-all duration-300 ease-in-out `}>
      {title}
      {pathname === href && <div className="h-1 w-full bg-[--secondary-color]" />}
    </Link>
  )
}

export default NavLink;

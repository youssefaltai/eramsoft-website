import Image from "next/image";
import NavLink from "./NavLink";

function Navbar() {
  return <nav className="py-16 w-full px-32 flex justify-between items-center">
    <Image src="/logo.svg" alt="EramSoft" width={200} height={50} />
    <div className="flex gap-8 justify-between items-center">
      <NavLink title="Home" href="#" />
      <NavLink title="Solutions" href="#solutions" />
      <NavLink title="Portfolio" href="#portfolio" />
      <NavLink title="About Us" href="#about" />
      <NavLink title="Contact Us" href="#contact" />
    </div>
  </nav >
}

export default Navbar;

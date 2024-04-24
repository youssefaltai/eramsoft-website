import Image from "next/image";
import Location from "./Location";
import Email from "./Email";
import Phone from "./Phone";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Link from "next/link";

function Footer() {
  return <footer className="flex flex-row gap-32 pb-16">
    <div className="flex flex-col gap-24 py-8 w-full">
      <Image src="/logo.svg" width={565} height={171} alt="logo" />
      <p className="text-2xl font-semibold">
        EramSoft is a boutique software development firm specializing in crafting bespoke software solutions tailored to your business needs.
      </p>
    </div>
    <div className="flex flex-col gap-32 pt-12 pb-8 w-full">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h4 className="font-medium text-2xl">
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            <Link href="https://goo.gl/maps/7Z8Z8Z8Z8Z8Z8Z8Z8">
              <ContactRow icon={<Location />} text="King Faisal Ibn Abd Al Aziz, Al Bandariyah, Al Khobar 34423, Saudi Arabia" />
            </Link>
            <Link href="mailto:inquiries@eramsoft.com">
              <ContactRow icon={<Email />} text="inquiries@eramsoft.com" />
            </Link>
            <Link href="tel:+966561234567">
              <ContactRow icon={<Phone />} text="+966 56 123 4567" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h4 className="font-medium text-2xl">
            Social
          </h4>
          <div className="flex flex-row gap-4">
            <Link href="https://facebook.com">
              <Facebook />
            </Link>
            <Link href="https://instagram.com">
              <Instagram />
            </Link>
            <Link href="https://linkedin.com">
              <LinkedIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

type ContactRowProps = {
  icon: JSX.Element;
  text: string;
}

function ContactRow({ icon, text }: ContactRowProps) {
  return <div className="flex flex-row gap-4 items-center">
    {icon}
    <p>{text}</p>
  </div>
}

export default Footer;

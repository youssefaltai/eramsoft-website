import CallToAction from "@/components/CallToAction";
import { ArrowRightCircle } from "@/components/Icons";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function OurMissionSection() {
    return (
        <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-[#F8FAFC] relative">
            <div className="flex flex-col md:flex-row justify-start items-start gap-8 w-full max-w-screen-xl px-16">
                <div className="w-full flex flex-col justify-start items-start gap-6">
                    <Logo />
                    <h2 className="text-5xl font-semibold text-[#1D0D47]">
                        Our mission is to make people happy
                    </h2>
                    <p className="text-base text-[#4B5565]">
                        Lorem ipsum dolor sit amet consectetur. Leo nisl ornare id sagittis arcu. Mauris eget gravida sed ligula feugiat. Phasellus arcu dictum mi sit. Donec nulla ut gravida ipsum sit ut lectus quam. Ut urna vehicula lectus non.
                        Quam viverra risus ut parturient iaculis.
                    </p>
                    <CallToAction className="bg-[#194595]">
                        Get in touch
                        <ArrowRightCircle />
                    </CallToAction>
                </div>
                <div className="w-full flex justify-end items-end">
                    <Image
                        src="/mockup.png"
                        width={470}
                        height={508}
                        alt="Mockup"
                    />
                </div>
            </div>
        </section>
    );
}
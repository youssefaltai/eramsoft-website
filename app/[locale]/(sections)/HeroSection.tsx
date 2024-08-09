import CallToAction from "@/components/CallToAction";
import { ArrowRightCircle } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="flex flex-col justify-center items-center py-16 w-full gap-16 relative">
            <svg
                width="251"
                height="572"
                viewBox="0 0 251 572"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0">
                <g opacity="0.2" filter="url(#filter0_f_11_292)">
                    <circle cx="-70.5" cy="250.5" r="154.5" fill="#F64D00" />
                </g>
                <defs>
                    <filter
                        id="filter0_f_11_292"
                        x="-391.937"
                        y="-70.9374"
                        width="642.875"
                        height="642.875"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB" >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="83.4687" result="effect1_foregroundBlur_11_292" />
                    </filter>
                </defs>
            </svg>
            <svg width="309" height="539" viewBox="0 0 309 539" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 right-0" >
                <g opacity="0.2" filter="url(#filter0_f_11_290)">
                    <circle cx="332" cy="332" r="167" fill="#45C646" />
                </g>
                <defs>
                    <filter id="filter0_f_11_290" x="0.305725" y="0.305725" width="663.389" height="663.389" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="82.3471" result="effect1_foregroundBlur_11_290" />
                    </filter>
                </defs>
            </svg>
            <HeroTop />
            <HeroMiddle />
            <HeroBottom />
        </section>
    );
}

function HeroTop() {
    return (
        <div className="flex flex-col justify-center items-center gap-8 w-full max-w-screen-xl px-16">
            <div className="rounded-full py-4 px-6 bg-[#FFF2EB] text-[#F64D00] uppercase font-medium text-center text-nowrap">
                All in one solutions
            </div>
            <h2 className="text-5xl font-semibold text-center leading-tight">
                Discover <span className="text-[#2FA455]">Innovation</span> with <span className="bg-[#DB3B2E] text-[#F8FAFC] px-2 rounded-3xl">Eram</span>Soft
            </h2>
            <p className="text-base text-[#697586] text-center">
                We are dedicated to providing cutting-edge technological solutions that align with your goals.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <Link href="/solutions" className="text-lg font-semibold text-[#263145]">
                    Explore our services
                </Link>
                <CallToAction className="bg-[#194595]">
                    Get in touch
                    <ArrowRightCircle />
                </CallToAction>
            </div>
        </div>
    );
}

function HeroMiddle() {
    return (
        <div className="flex justify-center items-center w-full max-w-screen-xl px-16">
            <Image
                src="/hero.png"
                width={1163}
                height={525}
                alt="Hero"
            />
        </div>
    );
}

function HeroBottom() {
    return (
        <div className="flex flex-col justify-center items-center gap-8 w-full max-w-screen-xl px-16">
            <h2 className="text-5xl font-semibold text-center leading-tight">
                Our clients
            </h2>
            <div className="flex-flex-col">
                <p className="text-base text-[#697586] text-center">
                    The cornerstone of our success and the heart of our business
                </p>
                <p className="text-base text-[#697586] text-center">
                    We always strive to deliver the best.
                </p>
            </div>
            <div className="flex w-full max-w-screen-lg justify-between items-center">
                <Image
                    src="/clients/Airbnb.png"
                    width={170}
                    height={96}
                    alt="Airbnb" />
                <Image
                    src="/clients/Google.png"
                    width={170}
                    height={96}
                    alt="Google" />
                <Image
                    src="/clients/Microsoft.png"
                    width={170}
                    height={96}
                    alt="Microsoft" />
                <Image
                    src="/clients/Loom.png"
                    width={170}
                    height={96}
                    alt="Loom" />
                <Image
                    src="/clients/Asana.png"
                    width={170}
                    height={96}
                    alt="Asana" />
            </div>
        </div>
    );
}
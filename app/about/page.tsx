import Image from "next/image";
import { ReactNode } from "react";
import FooterSection from "../(sections)/FooterSection";

export default function Page() {
    return (
        <>
            <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-white relative">
                <div className="flex flex-col md:flex-row justify-start items-start gap-8 w-full max-w-screen-xl px-16">
                    <div className="w-full flex flex-col justify-start items-start gap-6">
                        <h2 className="text-5xl font-semibold text-[#1D0D47]">
                            <span className="text-[#2FA455]">Welcome</span> to ERAM <span className="text-[#697586]">Soft</span>
                        </h2>
                        <p className="text-xl">
                            Integrated Solutions for Electronic Systems and Digital Marketing.
                        </p>
                        <p className="text-lg text-[#4B5565]">
                            We are a leading platform in the field of information technology, providing integrated and innovative solutions to meet our clients&apos; needs. We excel with extensive experience in designing and developing mobile applications and websites, in addition to digital marketing services and technology consulting. We are committed to achieving excellence and meeting our clients&apos; needs through innovation, quality, and professionalism.
                        </p>
                    </div>
                    <div className="w-full flex justify-start items-start gap-6">
                        <Image
                            src="/EramSoft2.png"
                            width={556}
                            height={470}
                            alt="Eram Soft"
                        />
                    </div>
                </div>
            </section>
            <AboutSubSection
                title="Our Vision"
                description="At Eram Soft, we strive to be at the forefront of information technology companies by using the latest technologies and facilitating operations to ensure the development of our services according to the highest standards. We aspire to innovate efficient, reliable, and easily implementable services at a reasonable cost, enhancing our competitive edge and ensuring our ability to meet the needs of our customers."
                image={
                    <Image
                        src="/illustration.png"
                        width={556}
                        height={470}
                        alt="Illustration"
                    />
                }
            />
            <AboutSubSection
                dir="rtl"
                title="Our Mission"
                description="To support our client&apos;s journey towards excellence in the digital business environment, we offer a comprehensive package of strategically designed technical services tailored specifically for companies and institutions. These services help them enhance their competitive capabilities in the market."
                image={
                    <Image
                        src="/illustration.png"
                        width={556}
                        height={470}
                        alt="Illustration"
                    />
                }
            />
            <AboutSubSection
                title="Our Values"
                description="At Eram Soft, we strive to be at the forefront of information technology companies by using the latest technologies and facilitating operations to ensure the development of our services according to the highest standards. We aspire to innovate efficient, reliable, and easily implementable services at a reasonable cost, enhancing our competitive edge and ensuring our ability to meet the needs of our customers."
                image={
                    <Image
                        src="/illustration.png"
                        width={556}
                        height={470}
                        alt="Illustration"
                    />
                }
            />
            <FooterSection />
        </>
    );
}

type AboutSubSectionProps = {
    title: string;
    description: string;
    image: ReactNode;
    dir?: "ltr" | "rtl";
};
function AboutSubSection(
    {
        title,
        description,
        image,
        dir = "ltr",
    }: AboutSubSectionProps
) {
    const text = <div className="w-full flex flex-col justify-start items-start gap-6">
        <h2 className="text-5xl font-medium">
            {title}
        </h2>
        <p className="text-[#697586]">
            {description}
        </p>
    </div>;
    const img = <div className="w-full flex justify-center items-center gap-6">
        {image}
    </div>
    return (
        <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-white relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-screen-xl px-16">
                {dir === "ltr" ? text : img}
                {dir === "ltr" ? img : text}
            </div>
        </section>
    );
}
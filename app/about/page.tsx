import Image from "next/image";
import { ReactNode } from "react";
import FooterSection from "../(sections)/FooterSection";
import ContactSection from "../(sections)/ContactSection";

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
                            Welcome to Eram Soft, a pioneering information technology and digital marketing company. We strive to provide advanced and innovative technological solutions to our clients. Our team is distinguished by extensive experience in mobile application and development, web design, digital marketing, and technical consulting services.
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
                description="At Eram Soft, we aim to be the leading destination in the field of information technology by providing innovative and advanced solutions that meet our clients' aspirations and help them achieve their goals."
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
                description="Our mission at Eram Soft is to deliver integrated and advanced technological services that enhance our client&apos;s ability to succeed and excel in digital marketing and information technology. We provide practical and innovative solutions that meet their aspirations and contribute to achieving their goals."
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
                description="We are committed to providing high-quality and distinguished services, placing our clients at the forefront of our priorities. Our team is characterized by efficiency, professionalism, and innovation. We work diligently to ensure client satisfaction and effectively achieve their goals."
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
                title="Why Choose Eram Soft?"
                description="Eram Soft stands out with its comprehensive technical solutions, experienced team, and commitment to client satisfaction. We ensure the delivery of exceptional services that meet and exceed our clients&apos; expectations."
                image={
                    <Image
                        src="/illustration.png"
                        width={556}
                        height={470}
                        alt="Illustration"
                    />
                }
            />
            <ContactSection />
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
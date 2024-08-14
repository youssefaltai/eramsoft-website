import Image from "next/image";

export default function WhySection() {
    return (
        <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-white relative">
            <div className="flex flex-col md:flex-row justify-start items-start gap-8 w-full max-w-screen-xl px-16">
                <div className="w-full flex justify-start items-start gap-6">
                    <Image
                        src="/illustration.png"
                        width={400}
                        height={327}
                        alt="Illustration"
                    />
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-6">
                    <h2 className="text-5xl font-semibold">
                        <span className="text-[#194595]">Why</span> Eram Soft?
                    </h2>&quot;
                    <p className="text-xl">
                        &quot;Your Trusted Partner in the World of Technology&quot;
                    </p>
                    <WhyRow
                        number={1}
                        title="Service Excellence"
                        description="We are committed to providing superior and innovative technological solutions that meet our clients&apos; needs."
                    />
                    <WhyRow
                        number={2}
                        title="Service Integration"
                        description="We offer a comprehensive range of technical services, including website , mobile application design , development and digital marketing solutions."
                    />
                    <WhyRow
                        number={3}
                        title="Innovation and Creativity"
                        description="Our team consists of creative professionals who constantly strive to provide new and effective solutions."
                    />
                    <WhyRow
                        number={4}
                        title="Customized Solutions"
                        description="We focus on delivering tailored solutions that precisely meet each client&apos;s needs."
                    />
                    <WhyRow
                        number={5}
                        title="Communication and Support"
                        description="We provide efficient and continuous customer support to ensure customer satisfaction and achieve their technological goals."
                    />
                </div>
            </div>
        </section>
    );
}

function WhyRow({
    number,
    title,
    description,
}: {
    number: number;
    title: string;
    description: string;
}) {
    return (
        <div className="flex justify-start items-start gap-4">
            <div className="flex justify-center items-center max-w-8 max-h-8 min-w-8 min-h-8 border-2 border-[#2FA455] rounded-full">
                <p className="font-semibold text-[#2FA455] ">{number}</p>
            </div>
            <div className="flex flex-col">
                <h3 className="text-2xl text-[#0D121C] font-medium">{title}</h3>
                <p className="text-[#4B5565]">{description}</p>
            </div>
        </div>
    );
}
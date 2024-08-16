import Image from "next/image";

export default function WhatWeOfferSection() {
    return (
        <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-white relative border-t-2 border-b-2 border-[#CDD5DF]">
            <div className="flex flex-col md:flex-row justify-start items-start gap-8 w-full max-w-screen-xl px-16">

                <div className="w-full flex flex-col justify-start items-start gap-6">
                    <h2 className="text-5xl font-semibold">
                        What we offer you
                    </h2>
                    <p className="text-[#697586]">
                        Time is a crucial element in our lives, helping us to structure and organize our daily activities into good habits. By understanding the value of time, we can gain valuable experience and develop ourselves.
                    </p>
                    <WhatWeOfferRow
                        number={1}
                        title="Web Development"
                    />
                    <WhatWeOfferRow
                        number={2}
                        title="Mobile Development"
                    />
                    <WhatWeOfferRow
                        number={3}
                        title="Custom Software Solutions"
                    />
                    <WhatWeOfferRow
                        number={4}
                        title="UI/UX Design"
                    />
                    <WhatWeOfferRow
                        number={5}
                        title="Quality Assurance and Testing"
                    />
                    <WhatWeOfferRow
                        number={6}
                        title="Consulting and Strategy"
                    />
                </div>

                <div className="w-full flex justify-end items-start gap-6">
                    <Image
                        src="/What We Offer.png"
                        width={469}
                        height={561}
                        alt="Tech Stack"
                    />
                </div>
            </div>
        </section>
    );
}

function WhatWeOfferRow({
    number,
    title,
}: {
    number: number;
    title: string;
}) {
    return (
        <div className="flex justify-start items-start gap-4">
            <div className="flex justify-center items-center max-w-8 max-h-8 min-w-8 min-h-8 border-2 border-[#2FA455] rounded-full">
                <p className="font-semibold text-[#2FA455] ">{number}</p>
            </div>
            <h3 className="text-xl text-[#0D121C] font-medium">{title}</h3>
        </div>
    );
}
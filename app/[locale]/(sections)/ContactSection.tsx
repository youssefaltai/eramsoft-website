import CallToAction from "@/components/CallToAction";
import { ArrowUpRightIcon } from "@/components/Icons";

export default function ContactSection() {
    return (
        <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-white relative">
            <div className="flex flex-col md:flex-row justify-start items-start gap-8 w-full max-w-screen-xl px-16">
                <div className="rounded-3xl flex flex-col justify-center items-center py-16 w-full gap-4 bg-[#0C1935]">
                    <h2 className="text-gradient-thing">
                        Contact Us For Any Query
                    </h2>
                    <p className="text-[#CDD5DF]">
                        Donec bibendum, dui id ultrices molestie, neque neque porta
                    </p>
                    <div className="flex flex-col gap-4 justify-start items-start">
                        <div className="flex justify-start items-start gap-2">
                            <div className="flex flex-col w-full gap-2">
                                <p className="text-[#F8FAFC]">
                                    Email
                                </p>
                                <input type="email" className="rounded-full p-2 w-80" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[#F8FAFC]">
                                    Message
                                </p>
                                <input className="rounded-full p-2 w-80" />
                            </div>
                        </div>
                        <CallToAction className="bg-[#E5A84A]">
                            Submit
                            <ArrowUpRightIcon />
                        </CallToAction >
                    </div>
                </div>
            </div>
        </section>
    );
}
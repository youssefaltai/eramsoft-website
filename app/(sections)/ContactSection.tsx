import CallToAction from "@/components/CallToAction";
import { ArrowUpRightIcon } from "@/components/Icons";

export default function ContactSection() {
    return (
        <section className="flex flex-col justify-center items-center md:py-16 w-full gap-16 bg-white relative">
            <div className="flex flex-col md:flex-row justify-start items-start gap-8 w-full max-w-screen-xl md:px-16">
                <div className="md:rounded-3xl flex flex-col justify-center items-center py-16 w-full gap-4 bg-[#0C1935]">
                    <h2 className="text-gradient-thing px-16">
                        Contact Us For Any Query
                    </h2>
                    <p className="text-[#CDD5DF] px-16">
                        Donec bibendum, dui id ultrices molestie, neque neque porta
                    </p>
                    <div className="flex flex-col w-full gap-4 justify-start md:justify-center items-start md:items-center px-16">
                        <div className="flex flex-col w-full md:flex-row justify-start md:justify-center items-start gap-2">
                            <div className="flex flex-col w-full  max-w-80 gap-2">
                                <p className="text-[#F8FAFC]">
                                    Email
                                </p>
                                <input type="email" className="rounded-full p-2 w-full" />
                            </div>
                            <div className="flex flex-col w-full  max-w-80 gap-2">
                                <p className="text-[#F8FAFC]">
                                    Message
                                </p>
                                <input className="rounded-full p-2  w-full" />
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
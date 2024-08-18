import CallToAction from "@/components/CallToAction";
import { ArrowUpRightIcon } from "@/components/Icons";

export default function ContactSection() {
    return (
        <section className="flex flex-col justify-center items-center md:py-16 w-full gap-16 bg-white relative">
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-screen-xl md:px-16">
                <div className="md:rounded-3xl flex flex-col py-16 w-full gap-4 bg-[#0C1935]">
                    <h2 className="text-gradient-thing px-16">
                        Contact Us For Any Query
                    </h2>
                    <div className="flex flex-col">
                        <p className="text-[#CDD5DF] px-16 ">
                            Ready to take your business to the next level?
                        </p>
                        <p className="text-[#CDD5DF] px-16 ">
                            Contact us now to discuss how Eram Soft can assist you in achieving your technical and marketing goals.
                        </p>
                    </div>
                    <div className="flex flex-col w-full gap-6 justify-start items-start px-16">
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex flex-col w-full max-w-96 gap-2">
                                <p className="text-[#F8FAFC]">
                                    Email
                                </p>
                                <input type="email" className="rounded-full p-2 w-full" />
                            </div>
                            <div className="flex flex-col w-full max-w-96 gap-2">
                                <p className="text-[#F8FAFC]">
                                    Message
                                </p>
                                <textarea className="rounded-xl p-2 w-full" />
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
import { ReactNode } from "react";
import FooterSection from "../(sections)/FooterSection";
import CallToAction from "@/components/CallToAction";
import { ArrowUpRightIcon } from "@/components/Icons";

export default function Page() {
    return (
        <>
            <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-white relative">
                <div className="flex flex-col justify-center items-center gap-8 w-full max-w-screen-xl px-16">
                    <h1 className="text-5xl font-bold text-[#1D0D47]">
                        We&apos;d Love To Hear
                        From You
                    </h1>
                    <p className="text-lg text-[#697586] text-center w-full max-w-2xl">
                        With we want to optimize the customization process so your
                        team can save time when building websites.
                    </p>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-white relative">
                <div className="flex flex-col justify-center items-start gap-8 w-full max-w-screen-xl px-16">
                    <div className="grid grid-cols-3 gap-16">
                        <ContactCard
                            icon={
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34.3668 14.0837C32.6168 6.38366 25.9002 2.91699 20.0002 2.91699C20.0002 2.91699 20.0002 2.91699 19.9835 2.91699C14.1002 2.91699 7.36683 6.36699 5.61683 14.067C3.66683 22.667 8.93349 29.9503 13.7002 34.5337C15.4668 36.2337 17.7335 37.0837 20.0002 37.0837C22.2668 37.0837 24.5335 36.2337 26.2835 34.5337C31.0502 29.9503 36.3168 22.6837 34.3668 14.0837ZM20.0002 22.4337C17.1002 22.4337 14.7502 20.0837 14.7502 17.1837C14.7502 14.2837 17.1002 11.9337 20.0002 11.9337C22.9002 11.9337 25.2502 14.2837 25.2502 17.1837C25.2502 20.0837 22.9002 22.4337 20.0002 22.4337Z" fill="#2FA455" />
                                </svg>
                            }
                            title="Address"
                            description="1234 Street Name, City Name, United States"
                        />
                        <ContactCard
                            icon={
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.3668 17.9163C28.6502 17.9163 28.0835 17.333 28.0835 16.633C28.0835 16.0163 27.4668 14.733 26.4335 13.6163C25.4168 12.533 24.3002 11.8997 23.3668 11.8997C22.6502 11.8997 22.0835 11.3163 22.0835 10.6163C22.0835 9.91634 22.6668 9.33301 23.3668 9.33301C25.0335 9.33301 26.7835 10.233 28.3168 11.8497C29.7502 13.3663 30.6668 15.2497 30.6668 16.6163C30.6668 17.333 30.0835 17.9163 29.3668 17.9163Z" fill="#2FA455" />
                                    <path d="M35.3834 17.9163C34.6668 17.9163 34.1001 17.333 34.1001 16.633C34.1001 10.7163 29.2834 5.91634 23.3834 5.91634C22.6668 5.91634 22.1001 5.33301 22.1001 4.63301C22.1001 3.93301 22.6668 3.33301 23.3668 3.33301C30.7001 3.33301 36.6668 9.29967 36.6668 16.633C36.6668 17.333 36.0834 17.9163 35.3834 17.9163Z" fill="#2FA455" />
                                    <path d="M18.4168 24.9163L15.3335 27.9997C14.6835 28.6497 13.6502 28.6497 12.9835 28.0163C12.8002 27.833 12.6168 27.6663 12.4335 27.483C10.7168 25.7497 9.16683 23.933 7.7835 22.033C6.41683 20.133 5.31683 18.233 4.51683 16.3497C3.7335 14.4497 3.3335 12.633 3.3335 10.8997C3.3335 9.76634 3.5335 8.68301 3.9335 7.68301C4.3335 6.66634 4.96683 5.73301 5.85016 4.89967C6.91683 3.84967 8.0835 3.33301 9.31683 3.33301C9.7835 3.33301 10.2502 3.43301 10.6668 3.63301C11.1002 3.83301 11.4835 4.13301 11.7835 4.56634L15.6502 10.0163C15.9502 10.433 16.1668 10.8163 16.3168 11.183C16.4668 11.533 16.5502 11.883 16.5502 12.1997C16.5502 12.5997 16.4335 12.9997 16.2002 13.383C15.9835 13.7663 15.6668 14.1663 15.2668 14.5663L14.0002 15.883C13.8168 16.0663 13.7335 16.283 13.7335 16.5497C13.7335 16.683 13.7502 16.7997 13.7835 16.933C13.8335 17.0663 13.8835 17.1663 13.9168 17.2663C14.2168 17.8163 14.7335 18.533 15.4668 19.3997C16.2168 20.2663 17.0168 21.1497 17.8835 22.033C18.0502 22.1997 18.2335 22.3663 18.4002 22.533C19.0668 23.183 19.0835 24.2497 18.4168 24.9163Z" fill="#2FA455" />
                                    <path d="M36.6167 30.5504C36.6167 31.0171 36.5333 31.5004 36.3667 31.9671C36.3167 32.1004 36.2667 32.2337 36.2 32.3671C35.9167 32.9671 35.55 33.5337 35.0667 34.0671C34.25 34.9671 33.35 35.6171 32.3333 36.0337C32.3167 36.0337 32.3 36.0504 32.2833 36.0504C31.3 36.4504 30.2333 36.6671 29.0833 36.6671C27.3833 36.6671 25.5667 36.2671 23.65 35.4504C21.7333 34.6337 19.8167 33.5337 17.9167 32.1504C17.2667 31.6671 16.6167 31.1837 16 30.6671L21.45 25.2171C21.9167 25.5671 22.3333 25.8337 22.6833 26.0171C22.7667 26.0504 22.8667 26.1004 22.9833 26.1504C23.1167 26.2004 23.25 26.2171 23.4 26.2171C23.6833 26.2171 23.9 26.1171 24.0833 25.9337L25.35 24.6837C25.7667 24.2671 26.1667 23.9504 26.55 23.7504C26.9333 23.5171 27.3167 23.4004 27.7333 23.4004C28.05 23.4004 28.3833 23.4671 28.75 23.6171C29.1167 23.7671 29.5 23.9837 29.9167 24.2671L35.4333 28.1837C35.8667 28.4837 36.1667 28.8337 36.35 29.2504C36.5167 29.6671 36.6167 30.0837 36.6167 30.5504Z" fill="#2FA455" />
                                </svg>
                            }
                            title="Support"
                            description="Mobile: 123 456 7890
Mail: support@stratix.com"
                        />
                        <ContactCard
                            icon={
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.0002 3.33301C10.8168 3.33301 3.3335 10.8163 3.3335 19.9997C3.3335 29.183 10.8168 36.6663 20.0002 36.6663C29.1835 36.6663 36.6668 29.183 36.6668 19.9997C36.6668 10.8163 29.1835 3.33301 20.0002 3.33301ZM27.2502 25.9497C27.0168 26.3497 26.6002 26.5663 26.1668 26.5663C25.9502 26.5663 25.7335 26.5163 25.5335 26.383L20.3668 23.2997C19.0835 22.533 18.1335 20.8497 18.1335 19.3663V12.533C18.1335 11.8497 18.7002 11.283 19.3835 11.283C20.0668 11.283 20.6335 11.8497 20.6335 12.533V19.3663C20.6335 19.9663 21.1335 20.8497 21.6502 21.1497L26.8168 24.233C27.4168 24.583 27.6168 25.3497 27.2502 25.9497Z" fill="#2FA455" />
                                </svg>
                            }
                            title="Hours of Operation"
                            description="Monday - Friday: 09:00 - 20:00
Sunday & Saturday: 10:30 - 22:00"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-white relative">
                <div className="flex flex-col justify-center items-center gap-8 w-full max-w-screen-xl px-16">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col bg-[#F8FAFC] p-8 justify-between rounded-l-2xl">
                            <h2 className="text-[#1D0D47] text-3xl font-semibold">
                                Contact Us For Any Query
                            </h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col w-full  max-w-80 gap-2">
                                    <p className="text-[#1D0D47]">
                                        Email
                                    </p>
                                    <input type="email" className="rounded-full p-2 w-full" />
                                </div>
                                <div className="flex flex-col w-full  max-w-80 gap-2">
                                    <p className="text-[#1D0D47]">
                                        Message
                                    </p>
                                    <textarea className="rounded-xl p-2 w-full" />
                                </div>
                            </div>
                            <CallToAction className="bg-[#194595] w-min">
                                Submit
                                <ArrowUpRightIcon />
                            </CallToAction >
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.880202481886!2d31.34216817995037!3d30.068968210221485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f5d223136f5%3A0xdb144b39077ed7e7!2sEram%20Media%20Group!5e0!3m2!1sen!2seg!4v1723969997170!5m2!1sen!2seg" width="600" height="450" style={{ border: 0 }}
                            allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            <FooterSection />
        </>
    );
}

function ContactCard({ icon, title, description }: {
    icon: ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex justify-start items-center gap-4">
                <div className="flex justify-center items-center bg-[#F8FAFC] rounded-xl min-w-20 min-h-20 max-w-20 max-h-20">
                    {icon}
                </div>
                <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold text-[#1D0D47]">
                        {title}
                    </h3>
                    <p className="text-base text-[#4B5565]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );

}
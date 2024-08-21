import Image from "next/image";

export default function TestimonialsSection() {
    return (
        <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-white relative">
            <div className="flex flex-col justify-center items-center gap-8 w-full max-w-screen-xl px-16">
                <div className="flex flex-col md:flex-row w-full gap-4 md:gap-0">
                    <h2 className="text-[#0D121C] text-5xl font-semibold w-full">
                        What Our Customer are Saying
                    </h2>
                    <div className="flex w-full gap-4 justify-end items-end">
                        <div className="max-w-12 max-h-12 min-w-12 min-h-12 border-2 border-[#194595] rounded-full flex justify-center items-center">
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.57495 14.5999L2.14162 9.16657C1.49995 8.5249 1.49995 7.4749 2.14162 6.83324L7.57495 1.3999" stroke="#194595" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="max-w-12 max-h-12 min-w-12 min-h-12 border-2 border-[#194595] rounded-full flex justify-center items-center">
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.42505 14.5999L6.85838 9.16657C7.50005 8.5249 7.50005 7.4749 6.85838 6.83324L1.42505 1.3999" stroke="#194595" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 ">
                    <div className="flex flex-col w-full gap-2">
                        <Stars />
                        <p className="text-xl">
                            Working with Eram Soft has been an absolute pleasure. Their team is incredibly professional, responsive, and innovative. They developed a mobile application for our company that exceeded our expectations. The sleek, user-friendly, and fully functional design has significantly improved our customer engagement. Their attention to detail and commitment to delivering top-quality solutions is unmatched. We highly recommend Eram Soft to anyone looking for a reliable and talented tech partner.
                        </p>
                        <Reviewer
                            image="/reviewer1.png"
                            name="Ahmed Al-Jaledan"
                            position="CEO, Eram Group"
                        />
                    </div>
                    <div
                        className="max-w-2 min-w-2 h-full bg-[#E3E8EF]"
                    />
                    <div className="flex flex-col w-full gap-2">
                        <Stars />
                        <p className="text-xl">
                            Eram Soft has been instrumental in the growth of our business. Their expertise in digital marketing and web development helped us revamp our online presence, significantly increasing traffic and conversions. The team at Eram Soft took the time to understand our specific needs and deliver tailored solutions that aligned perfectly with our business objectives. Their continuous support and dedication to our success have made them a valuable partner. We couldn't be more satisfied with their services
                        </p>
                        <Reviewer
                            image="/reviewer2.png"
                            name="Yasser Al-Sheikh"
                            position="Marketing Manager, Steed"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


function Stars() {
    return (
        <svg width="116" height="20" viewBox="0 0 116 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_9_2653)">
                <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#EEF2F6" />
                <g clipPath="url(#clip1_9_2653)">
                    <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#F9D783" />
                </g>
            </g>
            <g clipPath="url(#clip2_9_2653)">
                <path d="M33.5383 1.60996C33.7091 1.19932 34.2909 1.19932 34.4617 1.60996L36.5278 6.57744C36.5998 6.75056 36.7626 6.86885 36.9495 6.88383L42.3123 7.31376C42.7556 7.3493 42.9354 7.90256 42.5976 8.19189L38.5117 11.6919C38.3693 11.8139 38.3071 12.0053 38.3506 12.1876L39.5989 17.4208C39.7021 17.8534 39.2315 18.1954 38.8519 17.9635L34.2606 15.1592C34.1006 15.0615 33.8994 15.0615 33.7394 15.1592L29.1481 17.9635C28.7685 18.1954 28.2979 17.8534 28.4011 17.4208L29.6494 12.1876C29.6929 12.0053 29.6307 11.8139 29.4883 11.6919L25.4024 8.19189C25.0646 7.90256 25.2444 7.3493 25.6877 7.31376L31.0505 6.88383C31.2374 6.86885 31.4002 6.75056 31.4722 6.57744L33.5383 1.60996Z" fill="#EEF2F6" />
                <g clipPath="url(#clip3_9_2653)">
                    <path d="M33.5383 1.60996C33.7091 1.19932 34.2909 1.19932 34.4617 1.60996L36.5278 6.57744C36.5998 6.75056 36.7626 6.86885 36.9495 6.88383L42.3123 7.31376C42.7556 7.3493 42.9354 7.90256 42.5976 8.19189L38.5117 11.6919C38.3693 11.8139 38.3071 12.0053 38.3506 12.1876L39.5989 17.4208C39.7021 17.8534 39.2315 18.1954 38.8519 17.9635L34.2606 15.1592C34.1006 15.0615 33.8994 15.0615 33.7394 15.1592L29.1481 17.9635C28.7685 18.1954 28.2979 17.8534 28.4011 17.4208L29.6494 12.1876C29.6929 12.0053 29.6307 11.8139 29.4883 11.6919L25.4024 8.19189C25.0646 7.90256 25.2444 7.3493 25.6877 7.31376L31.0505 6.88383C31.2374 6.86885 31.4002 6.75056 31.4722 6.57744L33.5383 1.60996Z" fill="#F9D783" />
                </g>
            </g>
            <g clipPath="url(#clip4_9_2653)">
                <path d="M57.5383 1.60996C57.7091 1.19932 58.2909 1.19932 58.4617 1.60996L60.5278 6.57744C60.5998 6.75056 60.7626 6.86885 60.9495 6.88383L66.3123 7.31376C66.7556 7.3493 66.9354 7.90256 66.5976 8.19189L62.5117 11.6919C62.3693 11.8139 62.3071 12.0053 62.3506 12.1876L63.5989 17.4208C63.7021 17.8534 63.2315 18.1954 62.8519 17.9635L58.2606 15.1592C58.1006 15.0615 57.8994 15.0615 57.7394 15.1592L53.1481 17.9635C52.7685 18.1954 52.2979 17.8534 52.4011 17.4208L53.6494 12.1876C53.6929 12.0053 53.6307 11.8139 53.4883 11.6919L49.4024 8.19189C49.0646 7.90256 49.2444 7.3493 49.6877 7.31376L55.0505 6.88383C55.2374 6.86885 55.4002 6.75056 55.4722 6.57744L57.5383 1.60996Z" fill="#EEF2F6" />
                <g clipPath="url(#clip5_9_2653)">
                    <path d="M57.5383 1.60996C57.7091 1.19932 58.2909 1.19932 58.4617 1.60996L60.5278 6.57744C60.5998 6.75056 60.7626 6.86885 60.9495 6.88383L66.3123 7.31376C66.7556 7.3493 66.9354 7.90256 66.5976 8.19189L62.5117 11.6919C62.3693 11.8139 62.3071 12.0053 62.3506 12.1876L63.5989 17.4208C63.7021 17.8534 63.2315 18.1954 62.8519 17.9635L58.2606 15.1592C58.1006 15.0615 57.8994 15.0615 57.7394 15.1592L53.1481 17.9635C52.7685 18.1954 52.2979 17.8534 52.4011 17.4208L53.6494 12.1876C53.6929 12.0053 53.6307 11.8139 53.4883 11.6919L49.4024 8.19189C49.0646 7.90256 49.2444 7.3493 49.6877 7.31376L55.0505 6.88383C55.2374 6.86885 55.4002 6.75056 55.4722 6.57744L57.5383 1.60996Z" fill="#F9D783" />
                </g>
            </g>
            <g clipPath="url(#clip6_9_2653)">
                <path d="M81.5383 1.60996C81.7091 1.19932 82.2909 1.19932 82.4617 1.60996L84.5278 6.57744C84.5998 6.75056 84.7626 6.86885 84.9495 6.88383L90.3123 7.31376C90.7556 7.3493 90.9354 7.90256 90.5976 8.19189L86.5117 11.6919C86.3693 11.8139 86.3071 12.0053 86.3506 12.1876L87.5989 17.4208C87.7021 17.8534 87.2315 18.1954 86.8519 17.9635L82.2606 15.1592C82.1006 15.0615 81.8994 15.0615 81.7394 15.1592L77.1481 17.9635C76.7685 18.1954 76.2979 17.8534 76.4011 17.4208L77.6494 12.1876C77.6929 12.0053 77.6307 11.8139 77.4883 11.6919L73.4024 8.19189C73.0646 7.90256 73.2444 7.3493 73.6877 7.31376L79.0505 6.88383C79.2374 6.86885 79.4002 6.75056 79.4722 6.57744L81.5383 1.60996Z" fill="#EEF2F6" />
                <g clipPath="url(#clip7_9_2653)">
                    <path d="M81.5383 1.60996C81.7091 1.19932 82.2909 1.19932 82.4617 1.60996L84.5278 6.57744C84.5998 6.75056 84.7626 6.86885 84.9495 6.88383L90.3123 7.31376C90.7556 7.3493 90.9354 7.90256 90.5976 8.19189L86.5117 11.6919C86.3693 11.8139 86.3071 12.0053 86.3506 12.1876L87.5989 17.4208C87.7021 17.8534 87.2315 18.1954 86.8519 17.9635L82.2606 15.1592C82.1006 15.0615 81.8994 15.0615 81.7394 15.1592L77.1481 17.9635C76.7685 18.1954 76.2979 17.8534 76.4011 17.4208L77.6494 12.1876C77.6929 12.0053 77.6307 11.8139 77.4883 11.6919L73.4024 8.19189C73.0646 7.90256 73.2444 7.3493 73.6877 7.31376L79.0505 6.88383C79.2374 6.86885 79.4002 6.75056 79.4722 6.57744L81.5383 1.60996Z" fill="#F9D783" />
                </g>
            </g>
            <g clipPath="url(#clip8_9_2653)">
                <path d="M105.538 1.60996C105.709 1.19932 106.291 1.19932 106.462 1.60996L108.528 6.57744C108.6 6.75056 108.763 6.86885 108.949 6.88383L114.312 7.31376C114.756 7.3493 114.935 7.90256 114.598 8.19189L110.512 11.6919C110.369 11.8139 110.307 12.0053 110.351 12.1876L111.599 17.4208C111.702 17.8534 111.231 18.1954 110.852 17.9635L106.261 15.1592C106.101 15.0615 105.899 15.0615 105.739 15.1592L101.148 17.9635C100.769 18.1954 100.298 17.8534 100.401 17.4208L101.649 12.1876C101.693 12.0053 101.631 11.8139 101.488 11.6919L97.4024 8.19189C97.0646 7.90256 97.2444 7.3493 97.6877 7.31376L103.051 6.88383C103.237 6.86885 103.4 6.75056 103.472 6.57744L105.538 1.60996Z" fill="#EEF2F6" />
                <g clipPath="url(#clip9_9_2653)">
                    <path d="M105.538 1.60996C105.709 1.19932 106.291 1.19932 106.462 1.60996L108.528 6.57744C108.6 6.75056 108.763 6.86885 108.949 6.88383L114.312 7.31376C114.756 7.3493 114.935 7.90256 114.598 8.19189L110.512 11.6919C110.369 11.8139 110.307 12.0053 110.351 12.1876L111.599 17.4208C111.702 17.8534 111.231 18.1954 110.852 17.9635L106.261 15.1592C106.101 15.0615 105.899 15.0615 105.739 15.1592L101.148 17.9635C100.769 18.1954 100.298 17.8534 100.401 17.4208L101.649 12.1876C101.693 12.0053 101.631 11.8139 101.488 11.6919L97.4024 8.19189C97.0646 7.90256 97.2444 7.3493 97.6877 7.31376L103.051 6.88383C103.237 6.86885 103.4 6.75056 103.472 6.57744L105.538 1.60996Z" fill="#F9D783" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_9_2653">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
                <clipPath id="clip1_9_2653">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
                <clipPath id="clip2_9_2653">
                    <rect width="20" height="20" fill="white" transform="translate(24)" />
                </clipPath>
                <clipPath id="clip3_9_2653">
                    <rect width="20" height="20" fill="white" transform="translate(24)" />
                </clipPath>
                <clipPath id="clip4_9_2653">
                    <rect width="20" height="20" fill="white" transform="translate(48)" />
                </clipPath>
                <clipPath id="clip5_9_2653">
                    <rect width="20" height="20" fill="white" transform="translate(48)" />
                </clipPath>
                <clipPath id="clip6_9_2653">
                    <rect width="20" height="20" fill="white" transform="translate(72)" />
                </clipPath>
                <clipPath id="clip7_9_2653">
                    <rect width="20" height="20" fill="white" transform="translate(72)" />
                </clipPath>
                <clipPath id="clip8_9_2653">
                    <rect width="20" height="20" fill="white" transform="translate(96)" />
                </clipPath>
                <clipPath id="clip9_9_2653">
                    <rect width="10" height="20" fill="white" transform="translate(96)" />
                </clipPath>
            </defs>
        </svg>
    );
}

function Reviewer({
    image,
    name,
    position,
}: {
    image: string;
    name: string;
    position: string;
}) {
    return (
        <div className="flex flex-row gap-4 items-center">
            <div className="w-12 h-12">
                <Image
                    src={image}
                    width={48}
                    height={48}
                    alt="Reviewer"
                />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">
                    {name}
                </p>
                <p className="text-base text-[#697586]">
                    {position}
                </p>
            </div>
        </div>
    );
}
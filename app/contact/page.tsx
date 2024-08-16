import FooterSection from "../(sections)/FooterSection";

export default function Page() {
    return (
        <>
            <section className="flex flex-col justify-center items-center py-16 w-full gap-16 bg-white relative">
                <div className="flex flex-col justify-center items-center gap-8 w-full max-w-screen-xl px-16">
                    <h1 className="text-5xl font-medium text-[#1D0D47]">
                        We'd Love To Hear
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

                </div>
            </section>
            <FooterSection />
        </>
    );
}
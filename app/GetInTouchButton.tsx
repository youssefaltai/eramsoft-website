"use client";

import CallToAction from "@/components/CallToAction";
import { ArrowRightCircle } from "@/components/Icons";

export default function GetInTouchButton() {
    return <CallToAction className="bg-[#194595]" onClick={() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    }}>
        Get in touch
        <ArrowRightCircle />
    </CallToAction>
}
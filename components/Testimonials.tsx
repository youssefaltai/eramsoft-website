import Image from "next/image";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import HugeQuote from "./HugeQuote";
import Star from "./Star";

function Testimonials() {
  return <div className="flex flex-col gap-16">
    <h3>Word Of Mouth</h3>
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col p-8 gap-4 w-[900px] bg-[--primary-color] border-2 border-[--secondary-color] rounded-2xl">
        <div className="flex flex-row gap-6">
          <HugeQuote />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold">Jane Doe</p>
            <p className="text-xl font-bold">CEO, Company</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <p className="text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Image src="https://randomuser.me/api/portraits/men/75.jpg" alt="Testimonial 1" width={160} height={160} className="rounded-full" />
        </div>
        <div className="flex flex-row w-full justify-center items-center">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  </div>
}

export default Testimonials;

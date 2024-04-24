
function Hero() {
  return <div className="flex flex-col gap-12">
    <h2 className="w-[80%] text-6xl">
      Your Trusted Partner in Custom Software Solutions
    </h2>
    <p className="text-2xl text-[--tertiary-color]">
      EramSoft is a boutique software development firm specializing in crafting bespoke software solutions tailored to your business needs. Discover how we can turn your vision into reality.
    </p>
    <button
      className="w-max h-max bg-[--primary-color] text-[--tertiary-color] px-9 py-5 m-1 rounded-xl border-2 border-[--tertiary-color] hover:bg-[--tertiary-color] hover:text-[--primary-color] transition duration-300 ease-in-out text-2xl font-medium"
    >
      Get Started Today
    </button>
  </div>
}

export default Hero;

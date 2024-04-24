function ContactUs() {
  return <div className="flex flex-col gap-8">
    <h3 id="contact">Want In?</h3>
    <p className="text-2xl font-semibold">
      Have a question or need more information? Reach out to us!
    </p>
    <form className="flex flex-col gap-4 justify-center items-center">
      <input type="text" placeholder="Name" className="w-full p-4 border-2 border-[--secondary-color] bg-[--primary-color] rounded-lg  " />
      <input type="email" placeholder="Email" className="w-full p-4 border-2 border-[--secondary-color] bg-[--primary-color] rounded-lg" />
      <textarea placeholder="Message" className="w-full p-4 border-2 border-[--secondary-color] bg-[--primary-color] rounded-lg        " />
      <button className="w-max h-max bg-[--primary-color] text-[--tertiary-color] px-9 py-5 m-1 rounded-xl border-2 border-[--tertiary-color] hover:bg-[--tertiary-color] hover:text-[--primary-color] transition duration-300 ease-in-out text-2xl font-medium">Send Message</button>
    </form>
  </div>
}

export default ContactUs;

import FadeIn from "@/components/animation/FadeIn";
import Header from "@/components/core/Header";
import Title from "@/components/core/Title";
import type { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <>
      <Header title="Alumni" description="Alumni of IIC TMSL." />
      <div>
        <Title title="Contact Us" />
        <FadeIn delay={0.15}>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
            We are always happy to hear from you. Please feel free to contact.
          </h2>
        </FadeIn>
        <section className="relative text-zinc-600 dark:text-zinc-500">
          <FadeIn
            delay={0.6}
            className="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap"
          >
            <div className="relative flex items-end justify-start overflow-hidden rounded-lg p-10 sm:mr-10 md:w-1/2 lg:w-3/5">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d614.4632163219226!2d88.42704162451929!3d22.57620118387071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275eddf327213%3A0x309d8bee0a7fbbb2!2sInstitution&#39;s%20Innovation%20Council%20-%20Techno%20Main%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1674843658758!5m2!1sen!2sin"
              />
              <div className="relative flex flex-wrap rounded-md bg-white py-6 shadow-md dark:bg-black">
                <div className="px-6 lg:w-1/2">
                  <h2 className="text-xs font-semibold tracking-widest text-zinc-900 dark:text-zinc-100">
                    ADDRESS
                  </h2>
                  <address className="mt-1 text-blue-500">
                    4, TECHNO INDIA, 1, Eastern Metropolitan Bypass, EM Block,
                    Sector V, Bidhannagar, Kolkata, West Bengal 700091
                  </address>
                </div>
                <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                  <h2 className="text-xs font-semibold tracking-widest text-zinc-900 dark:text-zinc-100">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:iic.tmsl@gmail.com"
                    className="leading-relaxed text-blue-500"
                  >
                    iic.tmsl@gmail.com
                  </a>
                  <h2 className="mt-4 text-xs font-semibold tracking-widest text-zinc-900 dark:text-zinc-100">
                    PHONE
                  </h2>
                  <a
                    href="tel:+919903342634"
                    className="leading-relaxed text-blue-500"
                  >
                    +91 99033 42634
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex w-full flex-col  md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-2/5">
              <h2 className="mb-1 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Feedback
              </h2>
              <p className="mb-5 leading-relaxed text-zinc-600 dark:text-zinc-500">
                Send us your feedback
              </p>
              <form className="relative mb-4">
                <label
                  htmlFor="name"
                  className="text-sm leading-7 text-zinc-600 dark:text-zinc-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-zinc-300 bg-white py-1 px-3 text-base leading-8 text-zinc-700 outline-none transition-colors duration-200 ease-in-out focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:ring-zinc-500"
                />
              </form>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-zinc-600 dark:text-zinc-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-zinc-300 bg-white py-1 px-3 text-base leading-8 text-zinc-700 outline-none transition-colors duration-200 ease-in-out focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:ring-zinc-500"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-zinc-600 dark:text-zinc-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-32 w-full resize-none rounded-md border border-zinc-300 bg-white py-1 px-3 text-base leading-6 text-zinc-700 outline-none transition-colors duration-200 ease-in-out focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:ring-zinc-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-md border-0 bg-black py-2 px-6 text-lg text-white transition-colors duration-150 ease-in-out hover:bg-zinc-700 focus:outline-none dark:bg-white dark:text-black dark:hover:bg-zinc-300"
              >
                Send Message
              </button>
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  );
};

export default ContactPage;

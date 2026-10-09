"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import mail from "../../images/mail.png";
import profileicon from "../../images/icon.png";
import send from "../../images/send.png";
import trustpadi from "../../images/trustshield.png";
import dropdown from "../../images/chevron-down.png";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function contact() {
  const pageRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(page);

    return () => observer.disconnect();
  }, []);

  const reveal = (show, delay = 0, direction = "up") => ({
    opacity: show ? 1 : 0,
    transform: show
      ? "translate3d(0, 0, 0)"
      : direction === "left"
        ? "translate3d(-25px, 0, 0)"
        : direction === "right"
          ? "translate3d(25px, 0, 0)"
          : "translate3d(0, 20px, 0)",
    transition: `opacity 700ms ease ${delay}ms, transform 700ms ease ${delay}ms`,
  });

  return (
    <>
      <Header />

      <div
        ref={pageRef}
        className="min-h-screen bg-white font-sans flex justify-center py-16 px-6 text-gray-900 mt-20"
      >
        <main className="w-full max-w-6xl space-y-24">

          {/* SECTION 1: CONTACT US */}
          <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">

            {/* Right Column: Illustration - First on Mobile */}
            <div
              style={reveal(visible, 200, "right")}
              className="order-1 flex items-center justify-center lg:order-2"
            >
              <Image
                src={trustpadi}
                alt="TrustPadi"
                className="h-auto w-full max-w-[280px] object-contain sm:max-w-[340px] lg:max-w-none"
              />
            </div>

            {/* Left Column: Text & Form - Second on Mobile */}
            <div
              style={reveal(visible, 0, "left")}
              className="order-2 space-y-5 sm:space-y-7 lg:order-1 lg:space-y-8"
            >

              {/* Heading Area */}
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-blue-700 sm:text-lg">
                  Contact Us
                </h2>

                <h1 className="text-2xl font-light tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                  We'd love to hear from you!
                </h1>
              </div>

              {/* Form Card */}
              <div
                style={reveal(visible, 150)}
                className="space-y-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:space-y-6 sm:p-6 lg:p-8"
              >

                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-gray-700 sm:text-sm">
                    Full Name
                  </label>

                  <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white p-3 sm:p-4 transition duration-300 focus-within:border-blue-500 focus-within:shadow-sm">
                    <Image
                      src={profileicon}
                      alt=""
                      className="h-5 w-5 shrink-0 object-contain"
                    />

                    <input
                      type="text"
                      placeholder="John Mercie Brown"
                      className="w-full min-w-0 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-gray-700 sm:text-sm">
                    Email
                  </label>

                  <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white p-3 sm:p-4 transition duration-300 focus-within:border-blue-500 focus-within:shadow-sm">
                    <Image
                      src={mail}
                      alt=""
                      className="h-5 w-5 shrink-0 object-contain"
                    />

                    <input
                      type="email"
                      placeholder="johnmercy03@gmail.com"
                      className="w-full min-w-0 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-gray-700 sm:text-sm">
                    Message
                  </label>

                  <div className="rounded-lg border border-gray-300 bg-white p-3 sm:p-4 transition duration-300 focus-within:border-blue-500 focus-within:shadow-sm">
                    <textarea
                      placeholder="Type your message here"
                      className="h-24 w-full resize-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400 sm:h-28"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-blue-800 p-3 transition duration-300 hover:-translate-y-1 hover:bg-blue-900 hover:shadow-md sm:p-4"
                >
                  <span className="text-sm font-medium text-white">
                    Send Message
                  </span>

                  <Image
                    src={send}
                    alt=""
                    className="h-5 w-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </div>
            </div>
          </section>

          {/* SECTION 2: FAQS */}
          <section
            onMouseEnter={() => setFaqVisible(true)}
            className="space-y-12 pt-8"
          >

            {/* FAQ Header */}
            <div
              style={reveal(visible || faqVisible, 0)}
              className="text-center space-y-3"
            >
              <span className="text-blue-700 font-semibold text-sm block font-[Satoshi]">
                FAQS
              </span>

              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight font-[Satoshi]">
                Everything you need to know
                <br />
                about Trustpadi
              </h2>
            </div>

            {/* FAQ Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">

              {/* FAQ 1 */}
              <div
                style={reveal(visible || faqVisible, 0)}
                className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-sm text-gray-700 font-medium font-[Satoshi]">
                  Is there a free trial available for premium service?
                </span>
                <Image src={dropdown} alt="dropdown" className="cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>

              {/* FAQ 2 */}
              <div
                style={reveal(visible || faqVisible, 80)}
                className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-sm text-gray-700 font-medium font-[Satoshi]">
                  How can I get started with your service?
                </span>
                <Image src={dropdown} alt="dropdown" className="cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>

              {/* FAQ 3 */}
              <div
                style={reveal(visible || faqVisible, 160)}
                className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-sm text-gray-700 font-medium font-[Satoshi]">
                  What services do you provide?
                </span>
                <Image src={dropdown} alt="dropdown" className="cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>

              {/* FAQ 4 */}
              <div
                style={reveal(visible || faqVisible, 240)}
                className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-sm text-gray-700 font-medium font-[Satoshi]">
                  How much does your service cost?
                </span>
                <Image src={dropdown} alt="dropdown" className="cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>

              {/* FAQ 5 */}
              <div
                style={reveal(visible || faqVisible, 320)}
                className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-sm text-gray-700 font-medium font-[Satoshi]">
                  Can I cancel my subscription anytime?
                </span>
                <Image src={dropdown} alt="dropdown" className="cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>

              {/* FAQ 6 */}
              <div
                style={reveal(visible || faqVisible, 400)}
                className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-sm text-gray-700 font-medium font-[Satoshi]">
                  Do you provide customer support?
                </span>
                <Image src={dropdown} alt="dropdown" className="cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>

              {/* FAQ 7 */}
              <div
                style={reveal(visible || faqVisible, 480)}
                className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-sm text-gray-700 font-medium font-[Satoshi]">
                  How long does it take to complete a project?
                </span>
                <Image src={dropdown} alt="dropdown" className="cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>

              {/* FAQ 8 */}
              <div
                style={reveal(visible || faqVisible, 560)}
                className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-sm text-gray-700 font-medium font-[Satoshi]">
                  Can I request a custom service?
                </span>
                <Image src={dropdown} alt="dropdown" className="cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>

            </div>
          </section>

        </main>
      </div>

      <Footer />
    </>
  );
}
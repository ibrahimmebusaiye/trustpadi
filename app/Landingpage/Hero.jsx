import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-white mt-20">
      <div className="mx-auto grid min-h-[90vh] max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-[1fr_380px] lg:px-8">

        {/* LEFT CONTENT */}
        <div className="max-w-[700px]">

          {/* Trusted by */}
          <div className="mb-7 flex items-center gap-4">
            <span className="">
              <img src="/Rectangle 1084.png" alt="" />
            </span>

            <p className="whitespace-nowrap text-[18px] font-semibold text-[#111827]">
              Trusted by
            </p>

            <p className="whitespace-nowrap text-[20px] font-semibold text-[#0757a5]">
              40M+
            </p>

            <p className="whitespace-nowrap text-[18px] font-semibold text-[#111827]">
              Africans
            </p>

            <span className="">
              <img src="/Rectangle 1085.png" alt="" />
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[680px] text-[38px] font-normal leading-[1.05] tracking-[-1.5px] text-[#111827] sm:text-[46px] lg:text-[48px]">
            Africa’s Most Trusted Scam Checking and Identity Verification
            Platform
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[680px] text-[16px] leading-[1.4] text-[#374151] sm:text-[17px]">
            Quickly verify any profile, seller, or business before you pay.
            Our trusted platform helps you detect scams instantly, stay
            protected, and make safer decisions online.
          </p>

          {/* Store Buttons */}
          <div className="mt-14 flex items-center gap-7">

            <a href="#" className="cursor-pointer">
              <Image
                src="/Mobile app store badge.png"
                alt="Get it on Google Play"
                width={106}
                height={36}
                className="h-[36px] w-auto"
              />
            </a>

            <a href="#" className="cursor-pointer">
              <Image
                src="/Mobile app store badge (2).png"
                alt="Download on the App Store"
                width={106}
                height={36}
                className="h-[36px] w-auto"
              />
            </a>

          </div>
        </div>

        {/* RIGHT PHONE */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/Frame 2147225578.png"
            alt="TrustPadi mobile application"
            width={400}
            height={500}
            priority
            className="h-auto w-[300px] object-contain sm:w-[290px] lg:w-[330px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
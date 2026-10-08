import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white py-[10px] fixed z-10 ">
      <div className="mx-auto flex min-h-[68px] max-w-[1200px] items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <Image
            src="/Logo block.png"
            alt="TrustPadi"
            width={100}
            height={35}
            className="h-auto w-[85px] object-contain sm:w-[100px]"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-5 text-[12px] lg:gap-7 lg:text-[13px]">

            <li>
              <a
                href="/"
                className="border-b border-blue-600 pb-2 text-blue-700"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="text-gray-800 transition hover:text-blue-600"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="text-gray-800 transition hover:text-blue-600"
              >
                Contact Us
              </a>
            </li>

          </ul>
        </nav>

        {/* App Download Buttons */}
        <div className="hidden items-center gap-3 sm:flex lg:gap-6">

          <a href="#" className="cursor-pointer">
            <Image
              src="/Mobile app store badge.png"
              alt="Get it on Google Play"
              width={90}
              height={30}
              className="h-[27px] w-auto object-contain lg:h-[30px]"
            />
          </a>

          <a href="#" className="cursor-pointer">
            <Image
              src="/Mobile app store badge (2).png"
              alt="Download on the App Store"
              width={90}
              height={30}
              className="h-[27px] w-auto object-contain lg:h-[30px]"
            />
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-200 text-gray-700 md:hidden"
          aria-label="Open menu"
        >
          <span className="text-xl">☰</span>
        </button>

      </div>
    </header>
  );
};

export default Header;
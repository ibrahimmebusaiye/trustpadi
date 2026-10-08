import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 bg-[#141111] text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:items-start lg:px-8">

        {/* Brand */}
        <div>
          <a href="/" className="inline-flex items-center">
            <img
              src="/Logo block (1).png"
              alt="TrustPadi"
              className="h-auto w-[200px] object-contain"
            />
          </a>

          <p className="mt-2 max-w-[300px] text-[13px] leading-[1.5] text-gray-400">
            Protecting people from scams through community
            <br className="hidden sm:block" />
            reporting, education, and awareness.
          </p>

          {/* Social Media */}
          <div className="mt-5 flex items-center gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="cursor-pointer text-gray-300 transition hover:text-white"
            >
              <img src="/facebook.png" alt="" />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="cursor-pointer text-gray-300 transition hover:text-white"
            >
              <img src="/vector.png" alt="" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="cursor-pointer text-gray-300 transition hover:text-white"
            >
              <img src="/instagram.png" alt="" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="cursor-pointer text-gray-300 transition hover:text-white"
            >
              <img src="/linkdin.png" alt="" />
            </a>
          </div>
        </div>

        {/* Support */}
        <div>
          <ul className="space-y-5 text-[13px] text-gray-500">
            <li>
              <a
                href="/support"
                className="cursor-pointer transition hover:text-white"
              >
                Support
              </a>
            </li>

            <li>
              <a
                href="/contact-us"
                className="cursor-pointer transition hover:text-white"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <ul className="space-y-5 text-[13px] text-gray-500">
            <li>
              <a
                href="/terms-of-service"
                className="cursor-pointer transition hover:text-white"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                href="/privacy-policy"
                className="cursor-pointer transition hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="lg:flex lg:justify-end">
          <p className="text-[13px] text-gray-500 pt-6">
            © 2025 Trustpadi. All right reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
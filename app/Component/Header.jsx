"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside the header
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#trustpadi-header")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href) => pathname === href;

  const linkClass = (href) =>
    `block border-b-2 py-3 text-sm transition-colors duration-200 ${
      isActive(href)
        ? "border-blue-600 font-semibold text-blue-700"
        : "border-transparent text-gray-700 hover:border-blue-600 hover:text-blue-600"
    }`;

  return (
    <header
      id="trustpadi-header"
      className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white py-[10px]"
    >
      <div className="mx-auto flex min-h-[68px] max-w-[1200px] items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/Logo block.png"
            alt="TrustPadi"
            width={100}
            height={35}
            priority
            className="h-auto w-[85px] object-contain sm:w-[100px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={linkClass(link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* App Store Buttons */}
        <div className="hidden items-center gap-3 sm:flex lg:gap-5">
          <a href="#" aria-label="Get it on Google Play">
            <Image
              src="/Mobile app store badge.png"
              alt="Get it on Google Play"
              width={90}
              height={30}
              className="h-[27px] w-auto object-contain lg:h-[30px]"
            />
          </a>

          <a href="#" aria-label="Download on the App Store">
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
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-md border border-gray-200 text-gray-700 transition hover:bg-gray-50 md:hidden"
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">&times;</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[400px] opacity-100"
            : "pointer-events-none max-h-0 border-t-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="px-5 pb-4 pt-2" aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass(link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Store badges on mobile */}
          <div className="flex flex-wrap items-center gap-4 pt-4 sm:hidden">
            <a href="#" onClick={() => setMenuOpen(false)}>
              <Image
                src="/Mobile app store badge.png"
                alt="Get it on Google Play"
                width={100}
                height={34}
                className="h-[30px] w-auto object-contain"
              />
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              <Image
                src="/Mobile app store badge (2).png"
                alt="Download on the App Store"
                width={100}
                height={34}
                className="h-[30px] w-auto object-contain"
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
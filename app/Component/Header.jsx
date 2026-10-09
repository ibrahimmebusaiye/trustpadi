
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setHeaderVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  // Close mobile menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside the header
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Close menu using Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href) => pathname === href;

  const linkClass = (href) =>
    `block border-b-2 py-3 text-sm transition-colors duration-300 ${
      isActive(href)
        ? "border-blue-600 font-semibold text-blue-700"
        : "border-transparent text-gray-700 hover:border-blue-600 hover:text-blue-600"
    }`;

  const buttonClass =
    "inline-flex items-center justify-center rounded-lg border border-black bg-white px-3 py-2 text-sm text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-700 hover:text-blue-700 hover:shadow-md sm:text-base";

  const entrance = (visible, delay = 0, direction = "up") => ({
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translate3d(0, 0, 0)"
      : direction === "left"
      ? "translate3d(-18px, 0, 0)"
      : direction === "right"
      ? "translate3d(18px, 0, 0)"
      : "translate3d(0, -12px, 0)",
    transition: `opacity 550ms ease ${delay}ms, transform 550ms ease ${delay}ms`,
  });

  return (
    <header
      ref={headerRef}
      id="trustpadi-header"
      className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white py-[10px]"
      style={{
        ...entrance(headerVisible, 0, "up"),
        boxShadow: "0 2px 12px rgba(15, 23, 42, 0.035)",
      }}
    >
      <div className="mx-auto flex min-h-[68px] max-w-[1200px] items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.03]"
          style={entrance(headerVisible, 80, "left")}
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
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                style={entrance(headerVisible, 120 + index * 90)}
              >
                <Link
                  href={link.href}
                  aria-current={
                    isActive(link.href) ? "page" : undefined
                  }
                  className={linkClass(link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div
          className="hidden items-center gap-4 pt-1 md:flex"
          style={entrance(headerVisible, 350, "right")}
        >
          <Link
            href="/signin"
            className={buttonClass}
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-800 hover:bg-blue-800 hover:shadow-md sm:text-base"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-md border border-gray-200 text-gray-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 active:scale-95 md:hidden"
        >
          <span
            className="text-2xl leading-none transition-transform duration-300"
            style={{
              transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`overflow-hidden border-t border-gray-100 bg-white md:hidden ${
          menuOpen
            ? "max-h-[450px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 border-t-0 opacity-0"
        }`}
        style={{
          transition:
            "max-height 350ms ease, opacity 250ms ease, transform 350ms ease",
        }}
      >
        <nav
          className="px-5 pb-4 pt-2"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen
                    ? "translateX(0)"
                    : "translateX(-10px)",
                  transition: `opacity 250ms ease ${
                    menuOpen ? 80 + index * 70 : 0
                  }ms, transform 250ms ease ${
                    menuOpen ? 80 + index * 70 : 0
                  }ms`,
                }}
              >
                <Link
                  href={link.href}
                  aria-current={
                    isActive(link.href) ? "page" : undefined
                  }
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                  className={`${linkClass(link.href)} transition-[padding,color,border-color] duration-200 hover:pl-2`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Actions */}
          <div
            className="flex flex-wrap items-center gap-3 pt-4"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen
                ? "translateY(0)"
                : "translateY(8px)",
              transition: `opacity 250ms ease ${
                menuOpen ? 300 : 0
              }ms, transform 250ms ease ${
                menuOpen ? 300 : 0
              }ms`,
            }}
          >
            <Link
              href="/signin"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className={buttonClass}
            >
              Sign in
            </Link>

            <Link
              href="/signup"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 sm:text-base"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

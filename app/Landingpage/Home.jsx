'use client';

import React, { useEffect, useRef } from 'react'

import Image from 'next/image'

import Hero from './Hero'

import Testimonials from './Testimonials'



const Home = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const elements = root.querySelectorAll('[data-reveal]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const direction = element.dataset.reveal;
        const offset = direction === 'left' ? 'translateX(-28px)' : direction === 'right' ? 'translateX(28px)' : direction === 'zoom' ? 'scale(0.96)' : 'translateY(24px)';
        element.animate(
          [{ opacity: 0, transform: offset }, { opacity: 1, transform: 'none' }],
          { duration: 750, delay: Number(element.dataset.delay || 0), easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' }
        );
        observer.unobserve(element);
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (

    <div ref={pageRef}>

        <Hero />

        <Testimonials />

        <section className="w-full bg-white py-20">

            <div className="mx-auto max-w-[1250px] px-6">

                <div data-reveal="up" className="text-center">

                    <p className="text-[16px] font-semibold text-[#0757a5]">

                        Features

                    </p>



                    <h2 className="mx-auto mt-4 max-w-[600px] text-[36px] font-light leading-[1.05] tracking-[-1.5px] text-[#111827] sm:text-[40px]">

                        Smart features to protect

                        <br />

                        every deal you make

                    </h2>

                </div>

                <div className="mt-12 grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_1.05fr]">

                    <div data-reveal="left" className="relative flex justify-center">

                        <div >

                            <img

                                src="/Frame2.png"

                                alt="TrustPadi Escrow"

                                className="h-auto w-full object-contain"

                            />

                        </div>

                    </div>

                    <div className="flex flex-col gap-5">

                        <div data-reveal="right" data-delay="100">

                            <img

                                src="/frame3.png"

                                alt="Scam Check"

                                className="object-cover"

                            />

                        </div>

                        <div data-reveal="right" data-delay="220">

                            <img

                                src="/frame4.png"

                                alt="Scam Report"

                                className="object-cover"

                            />

                        </div>

                        </div>                                      

                    </div>

                </div>

            </section>

            <section className="w-full bg-[#8db9e5] py-16">

            <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-5 px-6 md:grid-cols-2 lg:grid-cols-3">



                {/* Scam Check */}

                <div data-reveal="up" data-delay="0" className="rounded-lg bg-white p-5">

                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#eaf3fc] text-[#0757a5] shadow-sm">

                    <span className="text-sm">⌁</span>

                </div>



                <h3 className="mt-5 text-[17px] font-semibold text-[#172033]">

                    Scam Check

                </h3>



                <p className="mt-1 text-[11px] leading-[1.5] text-gray-500">

                    With TrustPadi, you can instantly check if someone has been

                    reported for scam using their phone number, bank account

                    number, or social media handle.

                </p>

                </div>



                {/* Scam Report */}

                <div data-reveal="up" data-delay="130" className="rounded-lg bg-white p-5">

                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#eaf3fc] text-[#0757a5] shadow-sm">

                    <span className="text-sm">✎</span>

                </div>



                <h3 className="mt-5 text-[17px] font-semibold text-[#172033]">

                    Scam Report

                </h3>



                <p className="mt-1 text-[11px] leading-[1.5] text-gray-500">

                    With TrustPadi, you can easily report any scammer using their

                    phone number, bank account number, or social media handle.

                    Your report helps protect others by adding valuable

                    information to the database.

                </p>

                </div>



                {/* Escrow */}

                <div data-reveal="up" data-delay="260" className="rounded-lg bg-white p-5">

                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#eaf3fc] text-[#0757a5] shadow-sm">

                    <span className="text-sm">♢</span>

                </div>



                <h3 className="mt-5 text-[17px] font-semibold text-[#172033]">

                    Escrow

                </h3>



                <p className="mt-1 text-[11px] leading-[1.5] text-gray-500">

                    With TrustPadi Escrow, you can securely complete transactions

                    without worrying about scams. Funds are held safely until

                    both parties fulfill their obligations, ensuring trust and

                    peace of mind.

                </p>

                </div>



            </div>

            </section>  

            <section className='min-h-[100vh] bg-white items-center justify-center flex max-md:px-[6%]'>

                <div data-reveal="zoom">

                    <img src="/Property 1=Frame 2147225586.png" alt="" />

                </div>

            </section>

            <section className="w-full bg-white py-16">

            <div className="mx-auto max-w-[1000px] px-6">



                {/* Heading */}

                <div data-reveal="up" className="text-center">

                <p className="text-[16px] font-semibold text-[#0757a5]">

                    FAQS

                </p>



                <h2 className="mx-auto mt-4 max-w-[550px] text-[32px] font-light leading-[1.1] tracking-[-1px] text-black sm:text-[36px]">

                    Everything you need to know

                    <br />

                    about Trustpadi

                </h2>

                </div>



                {/* FAQ Grid */}

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">



                {/* FAQ 1 */}

                <details data-reveal="up" data-delay="0" className="group rounded-md border border-[#e5edf5]">

                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[11px] text-[#172033]">

                    <span>Is there a free trial available for premium service?</span>



                    <span className="ml-4 text-xl leading-none transition-transform duration-200 group-open:rotate-180">

                        <img src="/icon.png" alt="" />

                    </span>

                    </summary>



                    <div className="border-t border-[#e5edf5] px-4 py-4 text-[11px] leading-5 text-gray-500">

                    Yes, Trustpadi offers options for users to explore its premium

                    services. Contact support for more information.

                    </div>

                </details>



                {/* FAQ 2 */}

                <details data-reveal="up" data-delay="100" className="group rounded-md border border-[#e5edf5]">

                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[11px] text-[#172033]">

                    <span>Is there a free trial available for premium service?</span>



                    <span className="ml-4 text-xl leading-none transition-transform duration-200 group-open:rotate-180">

                        <img src="/icon.png" alt="" />

                    </span>

                    </summary>



                    <div className="border-t border-[#e5edf5] px-4 py-4 text-[11px] leading-5 text-gray-500">

                    Yes, Trustpadi offers options for users to explore its premium

                    services. Contact support for more information.

                    </div>

                </details>



                {/* FAQ 3 */}

                <details data-reveal="up" data-delay="0" className="group rounded-md border border-[#e5edf5]">

                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[11px] text-[#172033]">

                    <span>Is there a free trial available for premium service?</span>



                    <span className="ml-4 text-xl leading-none transition-transform duration-200 group-open:rotate-180">

                        <img src="/icon.png" alt="" />

                    </span>

                    </summary>



                    <div className="border-t border-[#e5edf5] px-4 py-4 text-[11px] leading-5 text-gray-500">

                    Yes, Trustpadi offers options for users to explore its premium

                    services. Contact support for more information.

                    </div>

                </details>



                {/* FAQ 4 */}

                <details data-reveal="up" data-delay="100" className="group rounded-md border border-[#e5edf5]">

                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[11px] text-[#172033]">

                    <span>Is there a free trial available for premium service?</span>



                    <span className="ml-4 text-xl leading-none transition-transform duration-200 group-open:rotate-180">

                        <img src="/icon.png" alt="" />

                    </span>

                    </summary>



                    <div className="border-t border-[#e5edf5] px-4 py-4 text-[11px] leading-5 text-gray-500">

                    Yes, Trustpadi offers options for users to explore its premium

                    services. Contact support for more information.

                    </div>

                </details>



                {/* FAQ 5 */}

                <details data-reveal="up" data-delay="0" className="group rounded-md border border-[#e5edf5]">

                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[11px] text-[#172033]">

                    <span>Is there a free trial available for premium service?</span>



                    <span className="ml-4 text-xl leading-none transition-transform duration-200 group-open:rotate-180">

                        <img src="/icon.png" alt="" />

                    </span>

                    </summary>



                    <div className="border-t border-[#e5edf5] px-4 py-4 text-[11px] leading-5 text-gray-500">

                    Yes, Trustpadi offers options for users to explore its premium

                    services. Contact support for more information.

                    </div>

                </details>



                {/* FAQ 6 */}

                <details data-reveal="up" data-delay="100" className="group rounded-md border border-[#e5edf5]">

                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[11px] text-[#172033]">

                    <span>Is there a free trial available for premium service?</span>



                    <span className="ml-4 text-xl leading-none transition-transform duration-200 group-open:rotate-180">

                        <img src="/icon.png" alt="" />

                    </span>

                    </summary>



                    <div className="border-t border-[#e5edf5] px-4 py-4 text-[11px] leading-5 text-gray-500">

                    Yes, Trustpadi offers options for users to explore its premium

                    services. Contact support for more information.

                    </div>

                </details>



                {/* FAQ 7 */}

                <details data-reveal="up" data-delay="0" className="group rounded-md border border-[#e5edf5]">

                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[11px] text-[#172033]">

                    <span>Is there a free trial available for premium service?</span>



                    <span className="ml-4 text-xl leading-none transition-transform duration-200 group-open:rotate-180">

                        <img src="/icon.png" alt="" />

                    </span>

                    </summary>



                    <div className="border-t border-[#e5edf5] px-4 py-4 text-[11px] leading-5 text-gray-500">

                    Yes, Trustpadi offers options for users to explore its premium

                    services. Contact support for more information.

                    </div>

                </details>



                {/* FAQ 8 */}

                <details data-reveal="up" data-delay="100" className="group rounded-md border border-[#e5edf5]">

                    <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[11px] text-[#172033]">

                    <span>Is there a free trial available for premium service?</span>



                    <span className="ml-4 text-xl leading-none transition-transform duration-200 group-open:rotate-180">

                        <img src="/icon.png" alt="" />

                    </span>

                    </summary>



                    <div className="border-t border-[#e5edf5] px-4 py-4 text-[11px] leading-5 text-gray-500">

                    Yes, Trustpadi offers options for users to explore its premium

                    services. Contact support for more information.

                    </div>

                </details>



                </div>

            </div>

            </section>

    </div>

  )

}



export default Home
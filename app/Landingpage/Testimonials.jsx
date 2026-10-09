"use client";

import React, { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const reveal = (delay = 0, direction = "up") => ({
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translate3d(0, 0, 0)"
      : direction === "left"
        ? "translate3d(-25px, 0, 0)"
        : "translate3d(0, 20px, 0)",
    transition: `opacity 700ms ease ${delay}ms, transform 700ms ease ${delay}ms`,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-blue-50 py-20"
    >
      <div className="mx-auto max-w-[1250px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[190px_1fr]">

          {/* LEFT CONTENT */}
          <div
            style={reveal(0, "left")}
            className="flex h-full flex-col justify-between"
          >
            <div>
              <p className="text-[16px] font-semibold text-[#0757a5]">
                Testimonials
              </p>

              <h2 className="mt-8 text-[36px] font-light leading-[1.05] tracking-[-1.5px] text-[#111827]">
                What People
                <br />
                Are Saying
              </h2>
            </div>

            {/* Navigation buttons */}
            <div className="mt-12 flex gap-4">
              <button className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-[#0757a5] text-2xl text-white transition duration-300 hover:-translate-y-1 hover:bg-[#06457f]">
                ‹
              </button>

              <button className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-[#0757a5] text-2xl text-white transition duration-300 hover:-translate-y-1 hover:bg-[#06457f]">
                ›
              </button>
            </div>
          </div>

          {/* TESTIMONIAL SCROLLER */}
          <div
            style={reveal(200)}
            className="overflow-hidden"
          >
            <div className="flex w-max animate-testimonial-scroll gap-10">

              {/* FIRST SET */}
              <div className="flex gap-6">

                {/* Card 1 */}
                <div
                  style={reveal(100)}
                  className="w-[280px] rounded-[6px] border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="text-[14px] tracking-[2px] text-orange-400">
                    ★★★★★
                  </div>

                  <p className="mt-5 text-[11px] leading-[1.45] text-gray-500">
                    As a small business owner, I sometimes get clients I don't
                    know. TrustPadi gives me a profile and reputation check
                    tool that helps me vet them before delivering services.
                    It’s become part of my onboarding process for new clients.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7f0fa] text-sm text-gray-600">
                      ZS
                    </div>

                    <div>
                      <h4 className="text-[10px] font-medium text-gray-900">
                        Zain Siphron
                      </h4>

                      <p className="text-[9px] text-gray-400">
                        Designer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  style={reveal(200)}
                  className="w-[280px] rounded-[6px] border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="text-[14px] tracking-[2px] text-orange-400">
                    ★★★★★
                  </div>

                  <p className="mt-5 text-[11px] leading-[1.45] text-gray-500">
                    As a small business owner, I sometimes get clients I don't
                    know. TrustPadi gives me a profile and reputation check
                    tool that helps me vet them before delivering services.
                    It’s become part of my onboarding process for new clients.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7f0fa] text-sm text-gray-600">
                      ZS
                    </div>

                    <div>
                      <h4 className="text-[10px] font-medium text-gray-900">
                        Zain Siphron
                      </h4>

                      <p className="text-[9px] text-gray-400">
                        Designer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  style={reveal(300)}
                  className="w-[280px] rounded-[6px] border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="text-[14px] tracking-[2px] text-orange-400">
                    ★★★★★
                  </div>

                  <p className="mt-5 text-[11px] leading-[1.45] text-gray-500">
                    As a small business owner, I sometimes get clients I don't
                    know. TrustPadi gives me a profile and reputation check
                    tool that helps me vet them before delivering services.
                    It’s become part of my onboarding process for new clients.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7f0fa] text-sm text-gray-600">
                      ZS
                    </div>

                    <div>
                      <h4 className="text-[10px] font-medium text-gray-900">
                        Zain Siphron
                      </h4>

                      <p className="text-[9px] text-gray-400">
                        Designer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div
                  style={reveal(400)}
                  className="w-[280px] rounded-[6px] border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="text-[14px] tracking-[2px] text-orange-400">
                    ★★★★★
                  </div>

                  <p className="mt-5 text-[11px] leading-[1.45] text-gray-500">
                    As a small business owner, I sometimes get clients I don't
                    know. TrustPadi gives me a profile and reputation check
                    tool that helps me vet them before delivering services.
                    It’s become part of my onboarding process for new clients.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7f0fa] text-sm text-gray-600">
                      ZS
                    </div>

                    <div>
                      <h4 className="text-[10px] font-medium text-gray-900">
                        Zain Siphron
                      </h4>

                      <p className="text-[9px] text-gray-400">
                        Designer
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Your original duplicate set remains commented out */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
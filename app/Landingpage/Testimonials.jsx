import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full overflow-hidden bg-blue-50 py-20">
      <div className="mx-auto max-w-[1250px] px-6">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[190px_1fr]">

          {/* LEFT CONTENT */}
          <div className="flex h-full flex-col justify-between">
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
              <button className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-[#0757a5] text-2xl text-white transition hover:bg-[#06457f]">
                ‹
              </button>

              <button className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-[#0757a5] text-2xl text-white transition hover:bg-[#06457f]">
                ›
              </button>
            </div>
          </div>

          {/* TESTIMONIAL SCROLLER */}
          <div className="overflow-hidden">
            <div className="flex w-max animate-testimonial-scroll gap-10">

              {/* FIRST SET */}
              <div className="flex gap-6">

                {/* Card 1 */}
                <div className=" w-[280px] border rounded-[6px] border-gray-200 bg-white p-4">
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
                <div className=" w-[280px] border rounded-[6px] border-gray-200 bg-white p-4">
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
                <div className=" w-[280px] border rounded-[6px] border-gray-200 bg-white p-4">
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
                <div className=" w-[280px] border rounded-[6px] border-gray-200 bg-white p-4">
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

              {/* DUPLICATE SET FOR SEAMLESS LOOP */}
              {/* <div className="flex gap-5">

                <div className="h-[228px] w-[225px] shrink-0 rounded-lg border border-gray-200 bg-white p-4">
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

                <div className=" border border-gray-200 bg-white p-8">
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

                <div className="h-[228px] w-[225px] shrink-0 rounded-lg border border-gray-200 bg-white p-4">
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

              </div>*/}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
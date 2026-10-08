import React from 'react';
import Image from 'next/image';

import iphone from '../../images/Free Transparent iPhone Air Mockup (Mockuuups Studio) (1).png';
import playstore from '../../images/Mobile app store badge.png';
import appstore from '../../images/Mobile app store badge (1).png';
import scan from '../../images/Avatars(3).png';
import scam from '../../images/Avatars (1).png';
import escrow from '../../images/Avatars.png';
import leftquote from '../../images/image 7.png';
import rightquote from '../../images/image 8.png';
import star from '../../images/Frame 1000007621.png';
import zain from '../../images/Avatars (2).png';
import next from '../../images/Primary Button (1).png';
import previous from '../../images/Primary Button.png';

import Header from '../Component/Header';
import Footer from '../Component/Footer';

export default function About() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white text-gray-900 font-sans mt-20">

        {/* ================= HERO / ABOUT SECTION ================= */}
        <section className="max-w-6xl mx-auto pt-12 sm:pt-16 pb-12 px-4 flex flex-col items-center text-center">

          {/* Main Heading & Paragraph */}
          <div className="w-full max-w-3xl mb-12 flex flex-col gap-4">
            <h1 className="font-[Satoshi] text-3xl sm:text-4xl md:text-5xl text-center md:text-start">
              About Us
            </h1>

            <p className="text-gray-600 w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[57vw] text-sm sm:text-base md:text-[16px] text-center md:text-start">
              At TrustPadi, we believe knowledge is the most powerful defense against scams. Our mission is to equip individuals and communities with the tools and insights needed to identify and prevent fraud.
            </p>
          </div>

          {/* Stats + Phone */}
          <div className="w-full flex flex-col sm:flex-row md:flex-row justify-center items-center gap-6 sm:gap-4 md:gap-6 relative md:mt-24 mt-20">

            <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="text-4xl sm:text-5xl">10k+</span>
              <span className="text-blue-600 font-medium text-sm sm:text-[15px]">
                Happy Users
              </span>
            </div>

            <div className="flex flex-col items-center mt-12 sm:mt-0 md:mt-0 w-36 sm:w-40">
              <span className="text-4xl sm:text-5xl">20k+</span>
              <span className="text-blue-600 font-medium text-sm sm:text-[15px] text-center">
                Total Download
              </span>
            </div>

            <div className="w-56 sm:w-60 md:w-64 h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center relative overflow-hidden">
              <Image
                src={iphone}
                alt="iphone"
                className="w-[55vw] sm:w-[35vw] md:w-[20vw] max-w-[280px] h-auto"
              />
            </div>

            <div className="flex flex-col items-center mt-0 sm:mt-0 md:mt-0 w-36 sm:w-40">
              <span className="text-4xl sm:text-5xl">4.9</span>
              <span className="text-blue-600 font-medium text-sm sm:text-[15px] text-center">
                User Rating
              </span>
            </div>

          </div>

          {/* Bottom Download CTA */}
          <div className="mt-16 sm:mt-20 md:mt-2 flex flex-col items-center gap-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center">
              Download Trustpadi Now
            </h2>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">

              <div className="rounded flex items-center justify-center w-32 sm:w-36 h-12">
                <Image src={playstore} alt="playstore" />
              </div>

              <div className="rounded flex items-center justify-center w-32 sm:w-36 h-12">
                <Image src={appstore} alt="appstore" />
              </div>

            </div>
          </div>

        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="bg-[#93bced] py-12 sm:py-16 md:py-20 px-4 mt-8 sm:mt-12">

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-4 min-h-[220px] sm:min-h-[240px] md:h-[33vh] rounded-xl shadow-sm flex flex-col gap-1">

              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                <Image src={scan} alt="scan" />
              </div>

              <h3 className="text-lg font-bold">
                Protect Yourself
              </h3>

              <p className="text-[12px] text-gray-600 leading-relaxed">
                With TrustPadi, you can instantly check if someone has been reported for scam using their phone number, bank account number, or social media handle.
              </p>

            </div>

            <div className="bg-white p-4 min-h-[220px] sm:min-h-[240px] md:h-[33vh] rounded-xl shadow-sm flex flex-col">

              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                <Image src={scam} alt="scam" />
              </div>

              <h3 className="text-lg font-bold">
                Scam Report
              </h3>

              <p className="text-[12px] text-gray-600 leading-relaxed">
                With TrustPadi, you can easily report any scammer using their phone number, bank account number, or social media handle. Your report helps protect others by adding valuable information to the database.
              </p>

            </div>

            <div className="bg-white p-4 min-h-[220px] sm:min-h-[240px] md:h-[33vh] rounded-xl shadow-sm flex flex-col">

              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                <Image src={escrow} alt="escrow" />
              </div>

              <h3 className="text-lg font-bold">
                Escrow
              </h3>

              <p className="text-[12px] text-gray-600 leading-relaxed">
                With TrustPadi Escrow, you can securely complete transactions without worrying about scams. Funds are held safely until both parties fulfill their obligations, ensuring trust and peace of mind.
              </p>

            </div>

          </div>

        </section>

        {/* ================= MISSION SECTION ================= */}
        <section className="py-16 sm:py-20 md:py-24 px-4 flex flex-col items-center text-center bg-white">

          <h2 className="text-lg text-blue-600 font-bold mb-8 sm:mb-10">
            Our Mission
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center max-w-4xl w-full gap-4 sm:gap-2">

            <div className="w-12 h-12 flex items-center justify-center text-3xl font-serif text-gray-400 shrink-0">
              <Image
                src={leftquote}
                alt="quote"
                className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24"
              />
            </div>

            <p className="text-base sm:text-lg md:text-[16px] text-gray-700 w-full max-w-[90vw] sm:max-w-[60vw] md:max-w-[50vw] mt-2 leading-relaxed text-center">
              We aim to reduce the impact of online scams by spreading awareness, encouraging reporting, and providing trusted resources for digital safety.
            </p>

            <div className="w-12 h-12 flex items-center justify-center text-3xl font-serif text-gray-400 shrink-0">
              <Image
                src={rightquote}
                alt="quote"
                className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24"
              />
            </div>

          </div>

        </section>

        {/* ================= TESTIMONIALS SECTION ================= */}
        <section className="py-12 sm:py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">

          <div className="w-full md:w-1/4 flex flex-col justify-between h-full pt-4">

            <div className="flex flex-col gap-4">

              <span className="text-sm text-blue-600 font-bold">
                Testimonials
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                What People Are Saying
              </h2>

            </div>

            <div className="flex gap-3 mt-8 sm:mt-12">

              <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                <Image src={previous} alt="previous" />
              </div>

              <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                <Image src={next} alt="next" />
              </div>

            </div>

          </div>

          <div className="w-full md:w-3/4 flex gap-4 overflow-hidden relative">

            <div className="min-w-[260px] sm:min-w-[280px] max-w-[300px] border border-gray-200 p-5 sm:p-6 rounded-xl bg-white shadow-sm flex flex-col gap-4">

              <Image src={star} alt="star" />

              <p className="text-sm text-gray-600 flex-1 leading-relaxed">
                As a small business owner, I sometimes get clients I don't know. TrustPadi gives me a profile and reputation check tool that helps me vet them before delivering services. It's become part of my onboarding process for new clients.
              </p>

              <div className="flex items-center gap-3 mt-4">

                <div className="w-10 h-10 flex items-center justify-center">
                  <Image src={zain} alt="Zain Siphron" />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-bold">
                    Zain Siphron
                  </span>

                  <span className="text-xs text-gray-500">
                    Designer
                  </span>
                </div>

              </div>

            </div>

            <div className="min-w-[260px] sm:min-w-[280px] max-w-[300px] border border-gray-200 p-5 sm:p-6 rounded-xl bg-white shadow-sm flex flex-col gap-4">

              <Image src={star} alt="star" />

              <p className="text-sm text-gray-600 flex-1 leading-relaxed">
                As a small business owner, I sometimes get clients I don't know. TrustPadi gives me a profile and reputation check tool that helps me vet them before delivering services. It's become part of my onboarding process for new clients.
              </p>

              <div className="flex items-center gap-3 mt-4">

                <div className="w-10 h-10 flex items-center justify-center">
                  <Image src={zain} alt="Zain Siphron" />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-bold">
                    Zain Siphron
                  </span>

                  <div className="flex flex-col">
                    <span className="text-sm font-bold">
                      Zain Siphron
                    </span>

                    <span className="text-xs text-gray-500">
                      Designer
                    </span>
                  </div>

                </div>

              </div>

            </div>

            <div className="min-w-[260px] sm:min-w-[280px] max-w-[300px] border border-gray-200 p-5 sm:p-6 rounded-xl bg-white shadow-sm flex flex-col gap-4">

              <Image src={star} alt="star" />

              <p className="text-sm text-gray-600 flex-1 leading-relaxed">
                As a small business owner, I sometimes get clients I don't know. TrustPadi gives me a profile and reputation check tool that helps me vet them before delivering services. It's become part of my onboarding process for new clients.
              </p>

              <div className="flex items-center gap-3 mt-4">

                <div className="w-10 h-10 flex items-center justify-center">
                  <Image src={zain} alt="Zain Siphron" />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-bold">
                    Zain Siphron
                  </span>

                  <span className="text-xs text-gray-500">
                    Designer
                  </span>
                </div>

              </div>

            </div>

            <div className="min-w-[260px] sm:min-w-[280px] max-w-[300px] border border-gray-200 p-5 sm:p-6 rounded-xl bg-white shadow-sm flex flex-col gap-4">

              <div className="text-yellow-500 text-sm">
                ★★★★★
              </div>

              <p className="text-sm text-gray-600 flex-1 leading-relaxed">
                As a small business owner, I sometimes get clients I don't know. TrustPadi gives me a profile and reputation check tool that helps me vet them...
              </p>

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}
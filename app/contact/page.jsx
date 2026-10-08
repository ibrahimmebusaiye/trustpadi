import React from 'react';
import Image from 'next/image';
import mail from '../../images/mail.png'
import profileicon from '../../images/icon.png'
import send from '../../images/send.png'
import trustpadi from '../../images/trustshield.png'
import dropdown from '../../images/chevron-down.png'

export default function contact() {
  return (
    <div className="min-h-screen bg-white font-sans flex justify-center py-16 px-6 text-gray-900">
      
      {/* MAIN CONTENT WRAPPER */}
      <main className="w-full max-w-6xl space-y-24">
        
        {/* ========================================== */}
        {/* SECTION 1: CONTACT US                      */}
        {/* ========================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- Left Column: Text & Form --- */}
          <div className="space-y-8">
            
            {/* Heading Area */}
            <div className="space-y-2">
              <h2 className="text-blue-700 font-semibold text-lg">Contact Us</h2>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">
                We'd love to hear from you!
              </h1>
            </div>

            {/* Form Card */}
              <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm space-y-6">

                  {/* Input Field 1 (Full Name) */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">
                      Full Name
                    </label>

                    <div className="border border-gray-300 p-4 rounded-lg bg-white flex items-center gap-3">
                      <Image src={profileicon} alt="profile" />

                      <input
                        type="text"
                        placeholder="John Mercie Brown"
                        className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Input Field 2 (Email) */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">
                      Email
                    </label>

                    <div className="border border-gray-300 p-4 rounded-lg bg-white flex items-center gap-3">
                      <Image src={mail} alt="mail" />

                      <input
                        type="email"
                        placeholder="johnmercy03@gmail.com"
                        className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Input Field 3 (Message) */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">
                      Message
                    </label>

                    <div className="border border-gray-300 p-4 rounded-lg bg-white">
                      <textarea
                        placeholder="Type your message here"
                        className="w-full h-24 outline-none resize-none text-sm text-gray-700 placeholder:text-gray-400"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-800 p-4 rounded-lg flex justify-center items-center gap-3 cursor-pointer hover:bg-blue-900 transition"
                  >
                    <span className="text-sm font-medium text-white">
                      Send Message
                    </span>

                    <Image src={send} alt="send" />
                  </button>

                </div>
          </div>

          {/* --- Right Column: Large Illustration --- */}
          <div className="flex justify-center items-center h-full min-h-[500px]">
           <Image src={trustpadi} alt='trustpadi' />
          </div>

        </section>

        {/* ========================================== */}
        {/* SECTION 2: FAQS                            */}
        {/* ========================================== */}
        <section className="space-y-12 pt-8">
          
          {/* FAQ Header */}
          <div className="text-center space-y-3">
            <span className="text-blue-700 font-semibold text-sm block font-[Satoshi] ">FAQS</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight font-[Satoshi] ">
              Everything you need to know<br />about Trustpadi
            </h2>
          </div>

          {/* FAQ Grid (2 Columns) */}
         {/* FAQ Grid (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">

            {/* FAQ 1 */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm">
              <span className="text-sm text-gray-700 font-medium font-[Satoshi] ">
                Is there a free trial available for premium service?
              </span>
               <Image src={dropdown} alt='dropdown' className='cursor-pointer' />
            </div>

            {/* FAQ 2 */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm">
              <span className="text-sm text-gray-700 font-medium font-[Satoshi] ">
                How can I get started with your service?
              </span>
                <Image src={dropdown} alt='dropdown' className='cursor-pointer' />
            </div>

            {/* FAQ 3 */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm">
              <span className="text-sm text-gray-700 font-medium font-[Satoshi] ">
                What services do you provide?
              </span>

              <Image src={dropdown} alt='dropdown' className='cursor-pointer' />
            </div>

            {/* FAQ 4 */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm">
              <span className="text-sm text-gray-700 font-medium font-[Satoshi] ">
                How much does your service cost?
              </span>

              <Image src={dropdown} alt='dropdown' className='cursor-pointer' />
            </div>

            {/* FAQ 5 */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm">
              <span className="text-sm text-gray-700 font-medium font-[Satoshi] ">
                Can I cancel my subscription anytime?
              </span>

              <Image src={dropdown} alt='dropdown' className='cursor-pointer' />
            </div>

            {/* FAQ 6 */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm">
              <span className="text-sm text-gray-700 font-medium font-[Satoshi] ">
                Do you provide customer support?
              </span>

              <Image src={dropdown} alt='dropdown' className='cursor-pointer' />
            </div>

            {/* FAQ 7 */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm">
              <span className="text-sm text-gray-700 font-medium font-[Satoshi] ">
                How long does it take to complete a project?
              </span>

              <Image src={dropdown} alt='dropdown' className='cursor-pointer' />
            </div>

            {/* FAQ 8 */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-center shadow-sm">
              <span className="text-sm text-gray-700 font-medium font-[Satoshi] ">
                Can I request a custom service?
              </span>

              <Image src={dropdown} alt='dropdown' className='cursor-pointer' />
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}
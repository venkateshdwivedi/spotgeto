import React from "react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#f6f3ee] py-20 lg:py-28 px-5 lg:px-12 border-y border-[#c6c6cf]/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#d97706] mb-2 font-extrabold">
            Simple &amp; Curated
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#1E2B4D] font-semibold tracking-tight mb-3">
            How Spotgeto Works
          </h2>
          <p className="text-base sm:text-lg text-[#45464e] max-w-xl leading-relaxed">
            Leave behind loud mega-tours and megaphone guides. Experience any city on your own terms.
          </p>
        </div>

        {/* 3 Step Progression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative items-stretch">
          {/* Step 1 */}
          <div className="bg-[#fcf9f4] rounded-2xl p-7 lg:p-9 shadow-sm border border-[#c6c6cf]/30 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-3">
                Step 01
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1E2B4D] mb-3">
                Pick Your City &amp; Zone
              </h3>
              <p className="text-sm sm:text-[15px] text-[#45464e] leading-relaxed">
                Choose from curated walking zones in live cities — each representing distinct eras,
                communities, and authentic local rhythms.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#c6c6cf]/20 flex items-center text-[#1E2B4D] text-sm font-bold">
              <span>Choose your atmosphere</span>
            </div>
          </div>

          {/* Step 2 (Stepped offset & highlighted) */}
          <div className="bg-[#fcf9f4] rounded-2xl p-7 lg:p-9 shadow-md border-2 border-[#FFC72C]/40 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative md:-mt-4 bg-gradient-to-b from-[#fcf9f4] to-[#f6f3ee]">
            <div className="absolute -top-3 right-6 bg-[#FFC72C] text-[#1E2B4D] text-[10px] uppercase font-extrabold px-3 py-1 rounded-full shadow-xs tracking-wider">
              Human Matching
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-3">
                Step 02
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1E2B4D] mb-3">
                Meet Your Spotmate
              </h3>
              <p className="text-sm sm:text-[15px] text-[#45464e] leading-relaxed">
                Pair with a vetted local resident or certified scholar who breathes that exact sector.
                No rehearsed script, just real conversation and authentic company.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#c6c6cf]/20 flex items-center text-[#1E2B4D] text-sm font-bold">
              <span>Hyper-curated pairing</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#fcf9f4] rounded-2xl p-7 lg:p-9 shadow-sm border border-[#c6c6cf]/30 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-3">
                Step 03
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1E2B4D] mb-3">
                Discover What Others Miss
              </h3>
              <p className="text-sm sm:text-[15px] text-[#45464e] leading-relaxed">
                Wander secluded alleys, taste generational flavors, and touch the living pulse of
                ancient and vibrant neighborhoods without tourist traps.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#c6c6cf]/20 flex items-center text-[#1E2B4D] text-sm font-bold">
              <span>Unfiltered immersion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


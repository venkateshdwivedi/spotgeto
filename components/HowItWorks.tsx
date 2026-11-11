import React from "react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#f5f1ea] py-16 lg:py-20 px-6 lg:px-12 border-y border-[#e5e0d8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Left-aligned, lighter heading (500-600), lighter subtext */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B4D] font-medium tracking-[-0.03em] mb-3">
            How Spotgeto Works
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#5f6368] font-normal">
            Leave behind loud mega-tours and megaphone guides. Experience any city on your own terms.
          </p>
        </div>

        {/* 3 Step Progression Cards: Flat, subtle border, no translate hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-8 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold text-[#8C3B24] block mb-3">
                01
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1E2B4D] mb-3">
                Pick Your City &amp; Zone
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#5f6368]">
                Choose from curated walking zones in live cities — each representing distinct eras,
                communities, and authentic local rhythms.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#e5e0d8] text-sm text-[#1E2B4D] font-medium">
              Choose your atmosphere
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-8 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold text-[#8C3B24] block mb-3">
                02
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1E2B4D] mb-3">
                Meet Your Spotmate
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#5f6368]">
                Pair with a vetted local resident or certified scholar who breathes that exact sector.
                No rehearsed script, just real conversation and authentic company.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#e5e0d8] text-sm text-[#1E2B4D] font-medium">
              Hyper-curated pairing
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-8 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold text-[#8C3B24] block mb-3">
                03
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1E2B4D] mb-3">
                Discover What Others Miss
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#5f6368]">
                Wander secluded alleys, taste generational flavors, and touch the living pulse of
                ancient and vibrant neighborhoods without tourist traps.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#e5e0d8] text-sm text-[#1E2B4D] font-medium">
              Unfiltered immersion
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

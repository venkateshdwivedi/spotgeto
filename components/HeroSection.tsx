"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./Toast";
import HeroSlideshow from "./HeroSlideshow";

export default function HeroSection() {
  const router = useRouter();
  const { showToast } = useToast();
  const [selectedCity, setSelectedCity] = useState<string>("varanasi");

  const handleCityClick = (citySlug: string, cityName: string, isLive: boolean) => {
    if (isLive) {
      setSelectedCity(citySlug);
    } else {
      showToast(`We're coming to ${cityName} soon! Stay tuned.`, "info");
    }
  };

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (selectedCity === "varanasi") {
      router.push(`/city/varanasi`);
    } else {
      showToast(`Please select an active city like Varanasi.`, "info");
    }
  };

  return (
    <section className="w-full px-6 lg:px-12 pt-6 sm:pt-8 lg:pt-10 pb-20 lg:pb-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Hero Left Column (7 Cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Main Serif Heading: noticeably bolder (700-800 weight) */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] lg:leading-[1.15] text-[#1E2B4D] font-extrabold tracking-[-0.03em] mb-6">
            Travel Like You <span className="italic font-normal text-[#d97706]">Know Someone</span> Here.
          </h1>

          {/* Subtext: lighter grey, font-normal, 17px, line-height 1.7 */}
          <p className="text-[17px] leading-[1.7] text-[#5f6368] max-w-xl mb-10 font-normal">
            Skip the tourist traps. Spotgeto pairs you with vetted Spotmates who show you the living
            city that locals love — secluded riverfront stairs, generational weavers, morning ragas,
            and alleys no algorithm maps.
          </p>

          {/* City Selector Container */}
          <div className="w-full max-w-xl flex flex-col gap-5 mb-10">
            <div className="bg-[#f5f1ea] rounded-xl p-5 border border-[#e5e0d8]">
              <div className="flex items-center justify-between mb-3 text-xs text-[#5f6368]">
                <span className="font-semibold text-[#1E2B4D]">Select a city</span>
                <span>1 Active · 3 Upcoming</span>
              </div>

              {/* City Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Varanasi (Live) */}
                <button
                  type="button"
                  onClick={() => handleCityClick("varanasi", "Varanasi", true)}
                  className={`p-3 rounded-lg bg-white border text-left flex items-center justify-between cursor-pointer transition-colors ${
                    selectedCity === "varanasi"
                      ? "border-[#1E2B4D]"
                      : "border-[#e5e0d8] hover:border-[#1E2B4D]/40"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1E2B4D] leading-tight">
                      Varanasi
                    </span>
                    <span className="text-xs text-[#5f6368] mt-0.5">3 Hubs Open</span>
                  </div>
                  <span className="bg-[#FFC72C] text-[#1E2B4D] text-xs px-2.5 py-0.5 rounded font-semibold">
                    Now Live
                  </span>
                </button>

                {/* Jaipur (Coming soon) */}
                <button
                  type="button"
                  onClick={() => handleCityClick("jaipur", "Jaipur", false)}
                  className="p-3 rounded-lg bg-[#f5f1ea] border border-[#e5e0d8] text-left flex items-center justify-between opacity-70 hover:opacity-100 cursor-pointer transition-opacity"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#5f6368] leading-tight">
                      Jaipur
                    </span>
                    <span className="text-xs text-[#80868b] mt-0.5">Old Pink City</span>
                  </div>
                  <span className="text-xs text-[#5f6368] px-2 py-0.5 font-medium">
                    Launching Q2
                  </span>
                </button>

                {/* Udaipur (Coming soon) */}
                <button
                  type="button"
                  onClick={() => handleCityClick("udaipur", "Udaipur", false)}
                  className="p-3 rounded-lg bg-[#f5f1ea] border border-[#e5e0d8] text-left flex items-center justify-between opacity-70 hover:opacity-100 cursor-pointer transition-opacity"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#5f6368] leading-tight">
                      Udaipur
                    </span>
                    <span className="text-xs text-[#80868b] mt-0.5">Lake Havelis</span>
                  </div>
                  <span className="text-xs text-[#5f6368] px-2 py-0.5 font-medium">
                    Launching Q3
                  </span>
                </button>

                {/* Rishikesh (Coming soon) */}
                <button
                  type="button"
                  onClick={() => handleCityClick("rishikesh", "Rishikesh", false)}
                  className="p-3 rounded-lg bg-[#f5f1ea] border border-[#e5e0d8] text-left flex items-center justify-between opacity-70 hover:opacity-100 cursor-pointer transition-opacity"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#5f6368] leading-tight">
                      Rishikesh
                    </span>
                    <span className="text-xs text-[#80868b] mt-0.5">Ganga Foothills</span>
                  </div>
                  <span className="text-xs text-[#5f6368] px-2 py-0.5 font-medium">
                    Launching Q3
                  </span>
                </button>
              </div>
            </div>

            {/* Action Buttons: flat, no shadow, no translate-y */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleExploreClick}
                className="text-sm bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Explore Varanasi
              </button>

              <a
                href="#how-it-works"
                className="text-sm bg-[#f5f1ea] hover:bg-[#eae4da] text-[#1E2B4D] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Trust Badges: Simple text with bullet separator, NO icons */}
          <div className="pt-6 border-t border-[#e5e0d8] text-sm text-[#5f6368] font-normal">
            Curated Local Hosts &nbsp;·&nbsp; 100% Private Walks &nbsp;·&nbsp; Zero Commercial Traps
          </div>
        </div>

        {/* Hero Right Column (5 Cols) */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <HeroSlideshow />
        </div>
      </div>
    </section>
  );
}

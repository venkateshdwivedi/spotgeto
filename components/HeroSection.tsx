"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapPin,
  CheckCircle2,
  Lock,
  Sparkles,
  ArrowRight,
  Route,
  Building2,
  Waves,
  Mountain,
  Landmark,
} from "lucide-react";
import { useToast } from "./Toast";
import GhatGraphic from "./GhatGraphic";

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
    <section className="relative w-full px-5 lg:px-12 pt-10 pb-20 lg:pb-28 overflow-hidden max-w-7xl mx-auto">
      {/* Ambient Decorative Watermark & Light Gradients */}
      <div className="absolute top-12 left-1/3 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -bottom-16 right-10 w-80 h-80 bg-[#dae2ff]/30 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Hero Left Column (7 Cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
          {/* Hyperlocal Heritage Pill */}
          <div className="inline-flex items-center gap-2 bg-[#f0ede9] px-4 py-1.5 rounded-full mb-6 shadow-sm border border-[#c6c6cf]/30">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
            <span className="text-xs uppercase tracking-wider text-[#1E2B4D] font-bold">
              Hyperlocal · Private · Curated
            </span>
          </div>

          {/* Main Serif Heading with Unscripted Emphasis */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] lg:leading-[64px] text-[#1E2B4D] font-semibold tracking-tight mb-5">
            Travel Like You <span className="italic font-normal text-[#d97706]">Know Someone</span> Here.
          </h1>

          {/* Editorial Rich Subtext */}
          <p className="text-base sm:text-lg text-[#45464e] max-w-xl mb-8 leading-relaxed font-normal">
            Skip the tourist traps. Spotgeto pairs you with vetted Spotmates who show you the living
            city that locals love — secluded riverfront stairs, generational weavers, morning ragas,
            and alleys no algorithm maps.
          </p>

          {/* Action Cluster */}
          <div className="w-full max-w-xl flex flex-col gap-4 mb-8">
            {/* City Selector Container */}
            <div className="bg-[#f0ede9] rounded-2xl p-4 sm:p-5 border border-[#c6c6cf]/40 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-[#45464e] font-bold flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#d97706]" /> Select Your City
                </span>
                <span className="text-xs text-[#1E2B4D] font-bold uppercase tracking-wider">
                  1 City Active · 3 Upcoming
                </span>
              </div>

              {/* City Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Varanasi (Live) */}
                <button
                  type="button"
                  onClick={() => handleCityClick("varanasi", "Varanasi", true)}
                  className={`p-3 rounded-xl bg-white border-2 text-left flex items-center justify-between shadow-sm cursor-pointer transition-all ${
                    selectedCity === "varanasi"
                      ? "border-[#FFC72C] ring-2 ring-[#FFC72C]/30"
                      : "border-transparent hover:border-[#FFC72C]/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-[#d97706]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#1E2B4D] leading-tight">
                        Varanasi
                      </span>
                      <span className="text-[11px] text-[#45464e]">4 Hubs Open</span>
                    </div>
                  </div>
                  <span className="bg-[#FFC72C] text-[#1E2B4D] text-[10px] px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wide shadow-xs">
                    Now Live
                  </span>
                </button>

                {/* Jaipur (Coming soon) */}
                <button
                  type="button"
                  onClick={() => handleCityClick("jaipur", "Jaipur", false)}
                  className="p-3 rounded-xl bg-[#ebe8e3]/60 border border-[#c6c6cf]/30 text-left flex items-center justify-between opacity-75 hover:opacity-100 cursor-pointer transition-all hover:bg-[#e5e2dd]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#f0ede9] flex items-center justify-center text-[#75777f]">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#45464e] leading-tight">
                        Jaipur
                      </span>
                      <span className="text-[11px] text-[#75777f]">Old Pink City</span>
                    </div>
                  </div>
                  <span className="bg-[#e5e2dd] text-[#45464e] text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                    Launching Q2
                  </span>
                </button>

                {/* Udaipur (Coming soon) */}
                <button
                  type="button"
                  onClick={() => handleCityClick("udaipur", "Udaipur", false)}
                  className="p-3 rounded-xl bg-[#ebe8e3]/60 border border-[#c6c6cf]/30 text-left flex items-center justify-between opacity-75 hover:opacity-100 cursor-pointer transition-all hover:bg-[#e5e2dd]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#f0ede9] flex items-center justify-center text-[#75777f]">
                      <Waves className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#45464e] leading-tight">
                        Udaipur
                      </span>
                      <span className="text-[11px] text-[#75777f]">Lake Havelis</span>
                    </div>
                  </div>
                  <span className="bg-[#e5e2dd] text-[#45464e] text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                    Launching Q3
                  </span>
                </button>

                {/* Rishikesh (Coming soon) */}
                <button
                  type="button"
                  onClick={() => handleCityClick("rishikesh", "Rishikesh", false)}
                  className="p-3 rounded-xl bg-[#ebe8e3]/60 border border-[#c6c6cf]/30 text-left flex items-center justify-between opacity-75 hover:opacity-100 cursor-pointer transition-all hover:bg-[#e5e2dd]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#f0ede9] flex items-center justify-center text-[#75777f]">
                      <Mountain className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#45464e] leading-tight">
                        Rishikesh
                      </span>
                      <span className="text-[11px] text-[#75777f]">Ganga Foothills</span>
                    </div>
                  </div>
                  <span className="bg-[#e5e2dd] text-[#45464e] text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                    Launching Q3
                  </span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={handleExploreClick}
                className="inline-flex items-center gap-2 text-base bg-[#FFC72C] text-[#1E2B4D] font-bold px-7 py-3.5 rounded-xl shadow-md hover:bg-[#F5BD1F] transition-all group transform hover:-translate-y-0.5"
              >
                <span>Explore Varanasi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-base bg-[#ebe8e3] text-[#1E2B4D] font-bold px-6 py-3.5 rounded-xl hover:bg-[#e5e2dd] transition-colors"
              >
                <Route className="w-4 h-4 text-[#d97706]" />
                <span>How It Works</span>
              </a>
            </div>
          </div>

          {/* Editorial Assurance Micro-Stats */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-[#c6c6cf]/40 text-[#45464e] text-xs font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-[#1E2B4D]">
              <CheckCircle2 className="w-4 h-4 text-[#d97706]" /> Curated Local Hosts
            </span>
            <span className="flex items-center gap-1.5 text-[#1E2B4D]">
              <Lock className="w-4 h-4 text-[#d97706]" /> 100% Private Walks
            </span>
            <span className="flex items-center gap-1.5 text-[#1E2B4D]">
              <Sparkles className="w-4 h-4 text-[#d97706]" /> Zero Commercial Traps
            </span>
          </div>
        </div>

        {/* Hero Right Column (5 Cols): Architectural Arched Portal */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          {/* Stepwell Tiered Visual Backdrop */}
          <div className="absolute -top-4 -right-4 w-full h-full bg-[#f0ede9] rounded-3xl -z-10 transform translate-x-2 translate-y-2 border border-[#c6c6cf]/20"></div>

          <div className="relative bg-[#f6f3ee] rounded-3xl p-4 sm:p-5 shadow-xl border border-[#c6c6cf]/30 overflow-hidden">
            {/* Arched Heritage Window Silhouette Container */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#1E2B4D]/5 p-2">
              <GhatGraphic />

              {/* Floating Artisan Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#fcf9f4]/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-[#c6c6cf]/30 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#1E2B4D] uppercase font-bold tracking-widest">
                    Alley &amp; Ghat Heritage
                  </span>
                  <span className="font-serif text-lg font-bold text-[#1E2B4D]">
                    Old Kashi Dawn Trail
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#FFC72C] flex items-center justify-center text-[#1E2B4D] shadow-sm">
                  <Landmark className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Stepped Ghat Accent Bar at Base */}
            <div className="mt-4 flex items-center justify-between px-2 text-[#45464e] text-xs font-medium">
              <span className="flex items-center gap-1.5 text-[#1E2B4D] font-bold">
                <span className="w-2 h-2 rounded-xs bg-[#FFC72C]"></span> 84 Historic Ghats
              </span>
              <span className="text-[#75777f]">Assi · Dashashwamedh · Manikarnika</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


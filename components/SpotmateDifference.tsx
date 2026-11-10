import React from "react";
import { Sparkles, Compass, ShieldCheck, Utensils } from "lucide-react";

export default function SpotmateDifference() {
  const uspItems = [
    {
      num: "01",
      category: "Unmapped Discoveries",
      title: "Hidden Gems",
      body: "Spots that aren't on Google Maps or Instagram. Secluded courtyards, subterranean shrines, and generational ateliers.",
      icon: Sparkles,
    },
    {
      num: "02",
      category: "Street Smarts",
      title: "Local Navigation",
      body: "Walks with you through lanes no GPS can map. Serpentine maze navigation perfected by those born within these stone walls.",
      icon: Compass,
    },
    {
      num: "03",
      category: "Honest Value",
      title: "Real Souvenirs",
      body: "Know what locals actually value, not tourist-trap commission shops. Direct pit-loom silk weavers, true brass smiths, and natural clay distillers.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      category: "Generational Taste",
      title: "Authentic Food",
      body: "The stalls with generations of history, not the ones with thousands of bought reviews. Pure ghee kachoris, clay-pot lassis, and melt-in-mouth pedas.",
      icon: Utensils,
    },
  ];

  return (
    <section
      id="spotmate-difference"
      className="w-full py-20 lg:py-28 px-5 lg:px-12 bg-[#fcf9f4]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#d97706] block mb-2 font-extrabold">
            The Spotmate Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#1E2B4D] font-semibold tracking-tight mb-3">
            What Makes a Spotmate Different
          </h2>
          <p className="text-base sm:text-lg text-[#45464e] leading-relaxed">
            Not a tour guide reciting a rehearsed script. A knowledgeable companion opening doors
            no guidebook can.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uspItems.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.num}
                className="bg-[#f6f3ee] rounded-2xl p-7 lg:p-9 border border-[#c6c6cf]/30 shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold">
                      {usp.num} · {usp.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center text-[#1E2B4D] shadow-2xs group-hover:bg-[#FFC72C] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1E2B4D] mb-2">
                    {usp.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#45464e] leading-relaxed">
                    {usp.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import React from "react";

export default function SpotmateDifference() {
  const uspItems = [
    {
      num: "01",
      category: "Unmapped Discoveries",
      title: "Hidden Gems",
      body: "Spots that aren't on Google Maps or Instagram. Secluded courtyards, subterranean shrines, and generational ateliers.",
    },
    {
      num: "02",
      category: "Street Smarts",
      title: "Local Navigation",
      body: "Walks with you through lanes no GPS can map. Serpentine maze navigation perfected by those born within these stone walls.",
    },
    {
      num: "03",
      category: "Honest Value",
      title: "Real Souvenirs",
      body: "Know what locals actually value, not tourist-trap commission shops. Direct pit-loom silk weavers, true brass smiths, and natural clay distillers.",
    },
    {
      num: "04",
      category: "Generational Taste",
      title: "Authentic Food",
      body: "The stalls with generations of history, not the ones with thousands of bought reviews. Pure ghee kachoris, clay-pot lassis, and melt-in-mouth pedas.",
    },
  ];

  return (
    <section
      id="spotmate-difference"
      className="w-full py-20 lg:py-24 px-6 lg:px-12 bg-[#fcf9f4]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Left-aligned, lighter heading (500-600), lighter subtext */}
        <div className="text-left max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B4D] font-medium tracking-[-0.03em] mb-3">
            What Makes a Spotmate Different
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#5f6368] font-normal">
            Not a tour guide reciting a rehearsed script. A knowledgeable companion opening doors
            no guidebook can.
          </p>
        </div>

        {/* 4 USP Cards: Text-only, 1px border, no icons, no scale/translate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uspItems.map((usp) => (
            <div
              key={usp.num}
              className="bg-[#f5f1ea] rounded-xl p-8 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-[#8C3B24] block mb-2">
                  {usp.num} · {usp.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1E2B4D] mb-3">
                  {usp.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#5f6368]">
                  {usp.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

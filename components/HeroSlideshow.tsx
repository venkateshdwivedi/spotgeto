"use client";

import React, { useState, useEffect } from "react";

interface Slide {
  src: string;
  alt: string;
  subtitle: string;
  title: string;
  zone: string;
}

const slides: Slide[] = [
  {
    src: "/varanasi-slide-2.jpg",
    alt: "Varanasi ghat stone steps at sunrise with wooden boats along the Ganges",
    subtitle: "Alley & Ghat Heritage",
    title: "Old Kashi Dawn Trail",
    zone: "Assi & Southern Ghats",
  },
  {
    src: "/varanasi-slide-1.jpg",
    alt: "Namo Ghat illuminated through sandstone pillars at twilight",
    subtitle: "Sacred Riverfront Gateway",
    title: "Namo Ghat Twilight Trail",
    zone: "Northern Riverfront",
  },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeSlide = slides[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="bg-[#f5f1ea] rounded-2xl p-4 border border-[#e5e0d8] text-left"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slideshow Image Frame */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#e5e0d8] bg-[#f5f1ea] select-none">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        {/* Subtle Slide Navigation Controls: clean text, no heavy icons */}
        <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-between pointer-events-auto">
          {/* Slide Indicator Bars */}
          <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-xs px-2.5 py-1 rounded-full">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? "w-5 bg-[#FFC72C]" : "w-1.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* Previous / Next Text Controls */}
          <div className="flex items-center gap-1 bg-black/35 backdrop-blur-xs px-2 py-0.5 rounded-full text-white text-xs">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="px-1.5 py-0.5 hover:text-[#FFC72C] transition-colors font-mono"
            >
              ‹
            </button>
            <span className="text-[10px] text-white/70 font-mono">
              0{currentIndex + 1}/0{slides.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="px-1.5 py-0.5 hover:text-[#FFC72C] transition-colors font-mono"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Floating Info Strip: dynamically displays active slide details */}
      <div className="mt-4 p-4 rounded-xl bg-white border border-[#e5e0d8] flex items-center justify-between">
        <div className="flex flex-col text-left">
          <span className="text-xs text-[#5f6368] font-medium transition-all">
            {activeSlide.subtitle}
          </span>
          <span className="font-serif text-lg font-bold text-[#1E2B4D] transition-all">
            {activeSlide.title}
          </span>
        </div>
        <span className="text-xs font-semibold text-[#1E2B4D] bg-[#f5f1ea] px-3 py-1.5 rounded-lg border border-[#e5e0d8]">
          Varanasi
        </span>
      </div>

      {/* Bottom Accent Bar */}
      <div className="mt-3 flex items-center justify-between px-1 text-xs text-[#5f6368]">
        <span className="font-medium text-[#1E2B4D]">84 Historic Ghats</span>
        <span>{activeSlide.zone}</span>
      </div>
    </div>
  );
}


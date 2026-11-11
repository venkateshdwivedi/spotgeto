"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hub } from "@/data/hubs";
import { City } from "@/data/cities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { ToastProvider, useToast } from "@/components/Toast";

interface HubClientViewProps {
  hub: Hub;
  city?: City;
}

function HubDetailContent({ hub, city }: HubClientViewProps) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { showToast } = useToast();

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard!", "success");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f4]" suppressHydrationWarning>
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1 pt-20 pb-20 px-6 lg:px-12 max-w-7xl mx-auto w-full text-left">
        {/* Breadcrumb Navigation: text only */}
        <nav className="flex items-center gap-2 text-xs text-[#5f6368] mb-6 flex-wrap font-normal">
          <Link href="/" className="hover:text-[#1E2B4D] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/city/${hub.city}`}
            className="hover:text-[#1E2B4D] transition-colors capitalize"
          >
            {city?.name || hub.city}
          </Link>
          <span>/</span>
          <span className="text-[#1E2B4D] font-medium">{hub.name}</span>
        </nav>

        {/* Hero Hub Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Left: Main Details (7 cols) */}
          <div className="lg:col-span-7">
            {/* Meta tags: no icons */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-[#1E2B4D] bg-[#f5f1ea] px-3 py-1 rounded border border-[#e5e0d8]">
                {city?.name || "Varanasi"} Zone
              </span>
              <span className="text-xs font-semibold text-[#1E2B4D] bg-[#f5f1ea] px-3 py-1 rounded border border-[#e5e0d8]">
                {hub.duration}
              </span>
              <span className="text-xs font-semibold text-[#8C3B24] bg-[#f5f1ea] px-3 py-1 rounded border border-[#e5e0d8]">
                Best at {hub.bestTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1E2B4D] tracking-[-0.03em] mb-4">
              {hub.name}
            </h1>

            <p className="text-[17px] leading-[1.7] text-[#5f6368] font-normal mb-6">
              {hub.description}
            </p>

            {/* Covered Landmarks */}
            <div className="p-4 rounded-xl bg-[#f5f1ea] border border-[#e5e0d8] mb-6">
              <span className="text-xs font-semibold text-[#5f6368] block mb-2">
                Landmarks Covered In This Walk
              </span>
              <div className="flex flex-wrap gap-2">
                {hub.destinations.map((dest, i) => (
                  <span
                    key={i}
                    className="bg-white text-[#1E2B4D] text-xs font-normal px-3 py-1.5 rounded-lg border border-[#e5e0d8]"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </div>

            {/* Italic Intrigue Teaser */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#f5f1ea] border-l-2 border-[#1E2B4D]">
              <p className="font-serif italic text-sm sm:text-base text-[#1E2B4D] leading-relaxed">
                &ldquo;{hub.teaser}&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Price & Fast Booking Card (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-[#e5e0d8]">
                <div>
                  <span className="text-xs text-[#5f6368] font-medium block">
                    Starting From
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2B4D]">
                      ₹{hub.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-[#5f6368]">/ person</span>
                  </div>
                </div>

                <span className="bg-[#f5f1ea] text-[#1E2B4D] text-xs font-semibold px-2.5 py-1 rounded border border-[#e5e0d8]">
                  100% Private
                </span>
              </div>

              {/* Inclusions list: simple dash/bullet, no icons */}
              <div className="space-y-2 mb-6 text-sm text-[#5f6368] font-normal">
                <div className="flex items-start gap-2">
                  <span className="text-[#1E2B4D]">·</span>
                  <span>Dedicated private Spotmate for you and your group</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#1E2B4D]">·</span>
                  <span>{hub.duration} slow immersive walking journey</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#1E2B4D]">·</span>
                  <span>Curated local tastings &amp; chai included</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#1E2B4D]">·</span>
                  <span>Strict zero-commission &amp; zero-shopping-trap policy</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#1E2B4D]">·</span>
                  <span>Free cancellation up to 24 hours before start</span>
                </div>
              </div>

              {/* Confirm & Book CTA: flat, no shadow */}
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="w-full bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold py-3.5 px-6 rounded-lg transition-colors text-sm sm:text-base cursor-pointer mb-3"
              >
                Confirm &amp; Book Walk
              </button>

              <div className="flex items-center justify-between text-xs text-[#5f6368]">
                <button
                  type="button"
                  onClick={handleShare}
                  className="hover:text-[#1E2B4D] transition-colors"
                >
                  Share Hub
                </button>
                <span>No advance payment required</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: WHY THIS SPOTMATE IS ASSIGNED */}
        <section className="mb-14 bg-[#f5f1ea] rounded-xl p-6 sm:p-8 lg:p-10 border border-[#e5e0d8]">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold text-[#8C3B24] block mb-2">
              Assigned Guide Profile
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E2B4D] tracking-[-0.03em] mb-3">
              Your Spotmate here is a{" "}
              <span className="text-[#1E2B4D] font-semibold">{hub.spotmateType}</span>
            </h2>

            <p className="text-[17px] leading-[1.7] text-[#5f6368] font-normal mb-8">
              {hub.spotmateReason}
            </p>

            {/* Spotmate Profile Card */}
            <div className="bg-white rounded-xl p-6 border border-[#e5e0d8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#1E2B4D] text-[#FFC72C] flex items-center justify-center font-serif text-lg font-bold shrink-0">
                  {hub.guideProfile.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-lg font-semibold text-[#1E2B4D]">
                      {hub.guideProfile.name}
                    </h3>
                    <span className="bg-[#f5f1ea] text-[#1E2B4D] text-xs font-medium px-2 py-0.5 rounded border border-[#e5e0d8]">
                      {hub.guideProfile.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#5f6368] mt-1 font-normal">
                    {hub.guideProfile.experienceYears} Years Guiding · Based in {hub.guideProfile.neighborhood}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-[#5f6368]">
                    <span className="font-medium text-[#1E2B4D]">Languages:</span>
                    {hub.guideProfile.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f5f1ea] text-[#1E2B4D] text-xs px-2 py-0.5 rounded border border-[#e5e0d8]"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#e5e0d8]">
                <span className="text-xs text-[#5f6368] font-medium block">
                  Vetted Status
                </span>
                <span className="text-xs text-[#1E2B4D] font-semibold mt-0.5 block">
                  Background Verified &amp; Certified
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: WHAT YOUR SPOTMATE WILL SHOW YOU */}
        <section className="mb-14">
          <div className="mb-8 max-w-2xl text-left">
            <span className="text-xs font-semibold text-[#8C3B24] block mb-1">
              Unscripted Discoveries
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E2B4D] tracking-[-0.03em] mb-2">
              What Your Spotmate Will Show You
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5f6368] font-normal">
              Intriguing moments you won&apos;t find pinned on tourist maps or algorithm feeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hub.highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#8C3B24] block mb-2">
                    0{index + 1} · {item.title}
                  </span>
                  <p className="text-[15px] leading-[1.7] text-[#5f6368]">
                    {item.teaser}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: STEPPED GHAT TIMELINE / ROUTE VIEW */}
        <section className="mb-14 bg-[#f5f1ea] rounded-xl p-6 sm:p-8 lg:p-10 border border-[#e5e0d8]">
          <div className="max-w-3xl text-left">
            <span className="text-xs font-semibold text-[#8C3B24] block mb-1">
              Route Progression
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E2B4D] tracking-[-0.03em] mb-2">
              Stepped Ghat Trail Flow
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#5f6368] mb-8 font-normal">
              A slow-paced, deliberate sequence curated to match the natural rhythm of the neighborhood.
            </p>

            <div className="relative pl-8 sm:pl-10 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:border-l-2 before:border-dashed before:border-[#8C3B24]/40">
              {hub.destinations.map((dest, i) => (
                <div key={i} className="relative">
                  {/* Stepped rectangular stone node */}
                  <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-4 h-3 bg-[#1E2B4D] rounded-[2px]"></div>
                  <div className="bg-white rounded-lg p-4 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#8C3B24]">
                        Checkpoint 0{i + 1}
                      </span>
                      <span className="text-[#5f6368]">
                        {i === 0
                          ? "Walk Commences"
                          : i === hub.destinations.length - 1
                          ? "Conclusion & Shared Chai"
                          : "Cultural Immersion"}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-semibold text-[#1E2B4D]">
                      {dest}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: 3 USP HIGHLIGHTS SPECIFIC TO THIS HUB */}
        <section className="mb-16">
          <div className="mb-8 text-left max-w-2xl">
            <span className="text-xs font-semibold text-[#8C3B24] block mb-1">
              Curated Highlights
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E2B4D] tracking-[-0.03em] mb-2">
              The Soul of {hub.name}
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#5f6368] font-normal">
              Three authentic dimensions that make this walking zone unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hidden Gems */}
            <div className="bg-[#f5f1ea] rounded-xl p-6 sm:p-7 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#8C3B24] block mb-2">
                  Unmapped
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1E2B4D] mb-3">
                  Hidden Gems
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#5f6368]">
                  {hub.hiddenGems}
                </p>
              </div>
            </div>

            {/* Local Food */}
            <div className="bg-[#f5f1ea] rounded-xl p-6 sm:p-7 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#8C3B24] block mb-2">
                  Generational Tastes
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1E2B4D] mb-3">
                  Authentic Local Food
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#5f6368]">
                  {hub.localFood}
                </p>
              </div>
            </div>

            {/* Real Souvenirs */}
            <div className="bg-[#f5f1ea] rounded-xl p-6 sm:p-7 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#8C3B24] block mb-2">
                  Honest Value
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1E2B4D] mb-3">
                  Real Souvenirs
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#5f6368]">
                  {hub.souvenirs}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM BOOKING PROMPT: Solid #1E2B4D, no gradient, flat button */}
        <section className="bg-[#1E2B4D] text-white rounded-xl p-8 sm:p-12 text-center border border-[#1E2B4D]">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-3 tracking-[-0.03em] text-white">
              Explore {hub.name} with {hub.guideProfile.name}
            </h2>
            <p className="text-white/80 text-[15px] leading-[1.7] mb-8 font-normal">
              Experience Varanasi with someone who knows every brick and stone. Match in 15 minutes,
              with zero advance deposit required.
            </p>
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold py-3.5 px-8 rounded-lg transition-colors text-sm sm:text-base cursor-pointer"
            >
              Confirm &amp; Book Walk (from ₹{hub.price.toLocaleString("en-IN")})
            </button>
          </div>
        </section>
      </main>

      <Footer onOpenBooking={() => setBookingOpen(true)} />

      {/* Floating Bottom Bar for Quick Booking (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#fcf9f4]/95 border-t border-[#e5e0d8] p-3 sm:hidden flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-[#5f6368] block">Starting from</span>
          <span className="font-serif text-lg font-bold text-[#1E2B4D]">
            ₹{hub.price.toLocaleString("en-IN")}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setBookingOpen(true)}
          className="bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold text-xs py-2 px-4 rounded-lg transition-colors"
        >
          Confirm &amp; Book
        </button>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultHubSlug={hub.slug}
        defaultCitySlug={hub.city}
      />
    </div>
  );
}

export default function HubClientView(props: HubClientViewProps) {
  return (
    <ToastProvider>
      <HubDetailContent {...props} />
    </ToastProvider>
  );
}

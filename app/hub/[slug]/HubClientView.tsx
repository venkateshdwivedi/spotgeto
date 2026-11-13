"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hub } from "@/data/hubs";
import { City } from "@/data/cities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { ToastProvider } from "@/components/Toast";

interface HubClientViewProps {
  hub: Hub;
  city?: City;
}

function HubDetailContent({ hub, city }: HubClientViewProps) {
  const [bookingOpen, setBookingOpen] = useState(false);

  const isProfessional = hub.spotmateTypeSlug === "professional-guide";
  const spotmateIntro = isProfessional
    ? "Your Spotmate here is a certified Professional Guide with archaeological credentials."
    : "Your Spotmate here is a Local Expert — someone who grew up in these neighborhoods.";

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

        {/* 2-Column Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Main Article Content (7 Cols) */}
          <article className="lg:col-span-7 space-y-12">
            {/* Header Block */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#5f6368] mb-3">
                <span className="font-semibold text-[#1E2B4D]">{city?.name || "Varanasi"}</span>
                <span>·</span>
                <span>{hub.duration}</span>
                {hub.bestTime && (
                  <>
                    <span>·</span>
                    <span>Best at {hub.bestTime}</span>
                  </>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E2B4D] tracking-[-0.03em] leading-tight mb-4">
                {hub.name}
              </h1>

              <p className="text-[17px] leading-[1.7] text-[#5f6368] font-normal mb-6">
                {hub.description}
              </p>

              {/* Italic Intrigue Teaser */}
              <div className="p-4 sm:p-5 rounded-lg bg-[#f5f1ea] border-l-2 border-[#1E2B4D]">
                <p className="font-serif italic text-[15px] sm:text-base text-[#1E2B4D] leading-relaxed">
                  &ldquo;{hub.teaser}&rdquo;
                </p>
              </div>
            </div>

            {/* What You'll See Section: magazine vertical list, no icon grid */}
            <section className="pt-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1E2B4D] mb-6">
                What You&apos;ll See
              </h2>

              <div className="space-y-6">
                {hub.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="pb-6 border-b border-[#e5e0d8] last:border-b-0 last:pb-0"
                  >
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1E2B4D] mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-[#5f6368] font-normal">
                      {highlight.teaser}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why This Spotmate Type Section */}
            <section className="pt-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1E2B4D] mb-4">
                Why This Spotmate Type
              </h2>

              <div className="bg-[#f5f1ea] rounded-xl p-6 sm:p-7 border border-[#e5e0d8] space-y-3">
                <p className="text-[15px] font-semibold text-[#1E2B4D]">
                  {spotmateIntro}
                </p>
                <p className="text-[15px] leading-[1.7] text-[#5f6368] font-normal">
                  {hub.spotmateReason}
                </p>
              </div>
            </section>

            {/* What Else Section: Hidden Gems, Food, Souvenirs in simple paragraphs */}
            <section className="pt-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1E2B4D] mb-6">
                What Else
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1E2B4D] mb-1.5">
                    Hidden Gems
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#5f6368] font-normal">
                    {hub.hiddenGems}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1E2B4D] mb-1.5">
                    Authentic Local Food
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#5f6368] font-normal">
                    {hub.localFood}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1E2B4D] mb-1.5">
                    Real Souvenirs
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#5f6368] font-normal">
                    {hub.souvenirs}
                  </p>
                </div>
              </div>
            </section>

            {/* Book Now Section at Bottom of Article */}
            <section className="pt-4">
              <div className="bg-[#1E2B4D] text-white rounded-xl p-6 sm:p-8 border border-[#1E2B4D]">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-2 text-white">
                  Ready to walk {hub.name}?
                </h2>
                <p className="text-white/80 text-[15px] leading-[1.7] mb-6 font-normal">
                  Private walk for you and your travel companions. No upfront payment required — match with your Spotmate and finalize details on WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base cursor-pointer"
                >
                  Book Spotmate (₹{hub.price.toLocaleString("en-IN")})
                </button>
              </div>
            </section>
          </article>

          {/* Clean Sticky Price Sidebar (5 Cols) */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-left">
              <span className="text-xs font-semibold text-[#1E2B4D] bg-[#f5f1ea] px-3 py-1 rounded border border-[#e5e0d8] inline-block mb-3">
                {hub.spotmateType}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E2B4D] mb-2">
                {hub.name}
              </h3>

              <div className="flex items-baseline gap-1.5 mb-5 pb-4 border-b border-[#e5e0d8]">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2B4D]">
                  ₹{hub.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-[#5f6368]">total · 100% private</span>
              </div>

              <div className="space-y-2 mb-6 text-sm text-[#5f6368] font-normal">
                <div className="flex items-start gap-2">
                  <span className="text-[#1E2B4D]">·</span>
                  <span>Duration: {hub.duration}</span>
                </div>
                {hub.bestTime && (
                  <div className="flex items-start gap-2">
                    <span className="text-[#1E2B4D]">·</span>
                    <span>Best Time: {hub.bestTime}</span>
                  </div>
                )}
                <div className="flex items-start gap-2">
                  <span className="text-[#1E2B4D]">·</span>
                  <span>Dedicated Spotmate for your private group</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#1E2B4D]">·</span>
                  <span>Zero commercial shopping traps or commissions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#1E2B4D]">·</span>
                  <span>Pay during the walk · Free cancellation</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="w-full bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold py-3.5 px-6 rounded-lg transition-colors text-sm sm:text-base cursor-pointer mb-3"
              >
                Book Spotmate
              </button>

              <p className="text-xs text-center text-[#5f6368]">
                Confirm in 2 minutes · No advance deposit
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer onOpenBooking={() => setBookingOpen(true)} />

      {/* Sticky mobile booking bar at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#fcf9f4] border-t border-[#e5e0d8] p-3 sm:hidden flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] text-[#5f6368] block">Total price</span>
          <span className="font-serif text-lg font-bold text-[#1E2B4D]">
            ₹{hub.price.toLocaleString("en-IN")}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setBookingOpen(true)}
          className="bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold text-xs py-2 px-4 rounded-lg transition-colors cursor-pointer"
        >
          Book Spotmate
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

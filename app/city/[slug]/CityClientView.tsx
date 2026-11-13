"use client";

import React, { useState } from "react";
import Link from "next/link";
import { City } from "@/data/cities";
import { Hub } from "@/data/hubs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubCard from "@/components/HubCard";
import BookingModal from "@/components/BookingModal";
import { ToastProvider, useToast } from "@/components/Toast";

interface CityClientViewProps {
  city: City;
  hubs: Hub[];
  recommendedHub?: Hub;
}

function CityViewContent({ city, hubs, recommendedHub }: CityClientViewProps) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedHubSlug, setSelectedHubSlug] = useState<string>(
    recommendedHub ? recommendedHub.slug : hubs[0]?.slug || ""
  );
  const [waitlistPhone, setWaitlistPhone] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleOpenBooking = (hubSlug?: string) => {
    if (hubSlug) setSelectedHubSlug(hubSlug);
    setBookingOpen(true);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistPhone.trim().length >= 10) {
      setWaitlistSubmitted(true);
      showToast(`You're on the list! We'll notify you when ${city.name} goes live.`, "success");
    } else {
      showToast("Please enter a valid 10-digit WhatsApp number.", "info");
    }
  };

  const isComingSoon = city.status === "coming-soon" || hubs.length === 0;

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f4]" suppressHydrationWarning>
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1 pt-20 pb-20 px-6 lg:px-12 max-w-7xl mx-auto w-full text-left">
        {/* Breadcrumb Navigation: text only */}
        <nav className="flex items-center gap-2 text-xs text-[#5f6368] mb-6 font-normal">
          <Link href="/" className="hover:text-[#1E2B4D] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span>Cities</span>
          <span>/</span>
          <span className="text-[#1E2B4D] font-medium">{city.name}</span>
        </nav>

        {/* City Header: Left-aligned, no icons */}
        <div className="mb-10 lg:mb-12 text-left">
          <div className="inline-block text-xs font-semibold text-[#1E2B4D] bg-[#f5f1ea] px-3 py-1 rounded mb-3 border border-[#e5e0d8]">
            {city.statusLabel || (isComingSoon ? "Coming Soon" : "Now Live")}
            {!isComingSoon && ` · ${hubs.length} Curated Hubs`}
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-[#1E2B4D] font-bold tracking-[-0.03em] mb-4">
            Explore {city.name}
          </h1>

          <p className="text-[15px] leading-[1.7] text-[#5f6368] max-w-2xl font-normal">
            {city.subtitle || city.tagline}
          </p>
        </div>

        {isComingSoon ? (
          /* COMING SOON VIEW: Flat, no icons */
          <div className="max-w-2xl text-left my-8">
            <div className="bg-[#f5f1ea] rounded-xl p-8 border border-[#e5e0d8]">
              <span className="text-xs font-semibold text-[#8C3B24] block mb-2">
                Curating Local Spotmates
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1E2B4D] mb-4">
                {city.name} is Launching Soon
              </h2>

              <p className="text-[15px] leading-[1.7] text-[#5f6368] mb-8 font-normal">
                We are actively vetting generational artisans, local historians, and neighborhood
                experts in {city.name} to bring you slow, unscripted walking journeys.
              </p>

              {waitlistSubmitted ? (
                <div className="bg-white rounded-lg p-5 border border-[#e5e0d8] mb-6">
                  <p className="text-sm font-semibold text-[#1E2B4D]">
                    You&apos;re on the priority notification list!
                  </p>
                  <p className="text-xs text-[#5f6368] mt-1">
                    We&apos;ll send you an invite as soon as the first {city.name} walking hubs go live.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleWaitlistSubmit}
                  className="flex flex-col sm:flex-row gap-3 mb-8"
                >
                  <div className="flex-1 flex items-center rounded-lg border border-[#e5e0d8] bg-white px-3.5 py-2.5">
                    <span className="text-xs text-[#5f6368] font-medium mr-2">+91</span>
                    <input
                      type="tel"
                      placeholder="WhatsApp phone number"
                      value={waitlistPhone}
                      onChange={(e) => setWaitlistPhone(e.target.value)}
                      className="w-full text-sm text-[#1E2B4D] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Notify Me
                  </button>
                </form>
              )}

              <div className="pt-6 border-t border-[#e5e0d8]">
                <p className="text-xs text-[#5f6368] mb-3">
                  Looking to travel today? Our full network of 3 hubs is live in Varanasi.
                </p>
                <Link
                  href="/city/varanasi"
                  className="text-sm font-semibold text-[#1E2B4D] hover:underline"
                >
                  Explore Varanasi Hubs →
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* LIVE HUBS VIEW: Clean, flat */
          <>
            {/* First Time Recommendation Banner: Solid #1E2B4D, no gradient, no blobs */}
            {recommendedHub && (
              <div className="mb-12 bg-[#1E2B4D] text-white rounded-xl p-6 sm:p-8 border border-[#1E2B4D] shadow-[0_1px_3px_rgba(0,0,0,0.06)] text-left">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 text-left">
                    <span className="text-xs text-[#FFC72C] font-semibold mb-2 block">
                      First time in {city.name}? Start here →
                    </span>

                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-3 text-white">
                      {recommendedHub.name}
                    </h2>

                    <p className="text-[15px] leading-[1.7] text-white/80 max-w-2xl mb-4 font-normal">
                      {recommendedHub.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                      <span>{recommendedHub.duration}</span>
                      <span>·</span>
                      <span className="font-semibold text-[#FFC72C]">
                        ₹{recommendedHub.price.toLocaleString("en-IN")} total
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-end">
                    <Link
                      href={`/hub/${recommendedHub.slug}`}
                      className="text-center text-sm bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold py-3 px-5 rounded-lg transition-colors"
                    >
                      View Hub Itinerary
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleOpenBooking(recommendedHub.slug)}
                      className="text-center text-sm bg-white/10 hover:bg-white/15 text-white font-medium py-2.5 px-5 rounded-lg transition-colors cursor-pointer"
                    >
                      Book Spotmate Directly
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Grid of Hub Cards: All hubs shown, no filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {hubs.map((hub) => (
                <HubCard
                  key={hub.slug}
                  hub={hub}
                  onBookNow={(slug) => handleOpenBooking(slug)}
                />
              ))}
            </div>

            {/* Bottom City Lore / Quote Callout */}
            <div className="p-8 rounded-xl bg-[#f5f1ea] border border-[#e5e0d8] text-left max-w-3xl">
              <span className="text-xs font-semibold text-[#8C3B24] block mb-2">
                The Spirit of {city.name}
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#1E2B4D] leading-relaxed mb-3">
                &ldquo;{city.accentQuote || "To walk here with someone who knows the stones is to step across thousands of years in a single morning."}&rdquo;
              </p>
              <p className="text-[15px] leading-[1.7] text-[#5f6368] font-normal">
                Every walk is 100% private. No megaphone crowds. No forced commission souvenir stalls.
              </p>
            </div>
          </>
        )}
      </main>

      <Footer onOpenBooking={() => handleOpenBooking()} />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultHubSlug={selectedHubSlug}
        defaultCitySlug={city.slug}
      />
    </div>
  );
}

export default function CityClientView(props: CityClientViewProps) {
  return (
    <ToastProvider>
      <CityViewContent {...props} />
    </ToastProvider>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Compass,
  Sparkles,
  ChevronRight,
  Clock,
  UserCheck,
  Check,
  Bell,
  Building2,
  Calendar,
} from "lucide-react";
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
  const [filterTag, setFilterTag] = useState<string>("all");
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

  // Filter hubs if filterTag is active
  const filteredHubs =
    filterTag === "all"
      ? hubs
      : hubs.filter((h) => h.tags.some((t) => t.toLowerCase().includes(filterTag.toLowerCase())));

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f4]">
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1 pt-24 pb-20 px-5 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-[#75777f] mb-6">
          <Link href="/" className="hover:text-[#1E2B4D] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1E2B4D] font-bold">Cities</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#d97706] font-bold">{city.name}</span>
        </nav>

        {/* City Header */}
        <div className="mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#f0ede9] px-3.5 py-1 rounded-full text-xs font-bold text-[#1E2B4D] uppercase tracking-wider mb-3 border border-[#c6c6cf]/30">
            <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
            {city.statusLabel || (isComingSoon ? "Coming Soon" : "Now Live")}
            {!isComingSoon && ` · ${hubs.length} Curated Hubs`}
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] text-[#1E2B4D] font-bold tracking-tight mb-4">
            Explore {city.name}
          </h1>

          <p className="text-base sm:text-lg text-[#45464e] max-w-2xl leading-relaxed">
            {city.subtitle || city.tagline}
          </p>
        </div>

        {isComingSoon ? (
          /* COMING SOON VIEW */
          <div className="max-w-3xl mx-auto my-8">
            <div className="bg-[#f0ede9] rounded-3xl p-8 sm:p-12 border border-[#c6c6cf]/40 shadow-sm text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-[#d97706] flex items-center justify-center mx-auto mb-6 shadow-xs">
                <Building2 className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-2">
                Curating Local Spotmates
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2B4D] mb-4">
                {city.name} is Launching Soon
              </h2>

              <p className="text-base text-[#45464e] max-w-xl mx-auto mb-8 leading-relaxed">
                We are actively vetting generational artisans, local historians, and neighborhood
                experts in {city.name} to bring you slow, unscripted walking journeys.
              </p>

              {waitlistSubmitted ? (
                <div className="bg-white rounded-2xl p-6 border border-[#c6c6cf]/30 max-w-md mx-auto mb-8">
                  <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-bold text-[#1E2B4D]">
                    You&apos;re on the priority notification list!
                  </p>
                  <p className="text-xs text-[#75777f] mt-1">
                    We&apos;ll send you an invite as soon as the first {city.name} walking hubs go live.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleWaitlistSubmit}
                  className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8"
                >
                  <div className="flex-1 flex items-center rounded-xl border border-[#c6c6cf]/60 bg-white overflow-hidden px-3.5 py-2.5">
                    <span className="text-xs text-[#75777f] font-bold mr-2">🇮🇳 +91</span>
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
                    className="bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-all whitespace-nowrap cursor-pointer"
                  >
                    Notify Me
                  </button>
                </form>
              )}

              <div className="pt-6 border-t border-[#c6c6cf]/30">
                <p className="text-xs text-[#75777f] mb-4">
                  Looking to travel today? Our full network of 4 hubs is live in Varanasi.
                </p>
                <Link
                  href="/city/varanasi"
                  className="inline-flex items-center gap-2 bg-[#1E2B4D] text-[#FFC72C] font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#2A3B66] transition-colors"
                >
                  <span>Explore Varanasi Hubs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* LIVE HUBS VIEW */
          <>
            {/* First Time Recommendation Banner */}
            {recommendedHub && (
              <div className="mb-12 bg-gradient-to-r from-[#1E2B4D] to-[#2A3B66] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC72C]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-bold text-[#FFC72C] mb-3 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      First time in {city.name}? Start here →
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-white">
                      {recommendedHub.name}
                    </h2>

                    <p className="text-sm sm:text-base text-white/85 max-w-2xl mb-4 leading-relaxed">
                      {recommendedHub.description} This dawn circuit offers the quintessential
                      initiation to Kashi: morning ragas across water, centuries-old mud akharas, and
                      sacred riverside banter.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                      <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-[#FFC72C]" />
                        {recommendedHub.duration}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg">
                        <UserCheck className="w-3.5 h-3.5 text-[#FFC72C]" />
                        Assigned: {recommendedHub.spotmateType}
                      </span>
                      <span className="font-bold text-[#FFC72C] text-sm">
                        ₹{recommendedHub.price.toLocaleString("en-IN")} / traveler
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                    <Link
                      href={`/hub/${recommendedHub.slug}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm group"
                    >
                      <span>View Hub Itinerary</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() => handleOpenBooking(recommendedHub.slug)}
                      className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm"
                    >
                      Book This Walk Directly
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Filter Pills */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setFilterTag("all")}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                    filterTag === "all"
                      ? "bg-[#1E2B4D] text-white shadow-sm"
                      : "bg-[#f0ede9] text-[#45464e] hover:bg-[#e5e2dd]"
                  }`}
                >
                  All Hubs ({hubs.length})
                </button>
                <button
                  onClick={() => setFilterTag("dawn")}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                    filterTag === "dawn"
                      ? "bg-[#1E2B4D] text-white shadow-sm"
                      : "bg-[#f0ede9] text-[#45464e] hover:bg-[#e5e2dd]"
                  }`}
                >
                  Dawn &amp; Morning
                </button>
                <button
                  onClick={() => setFilterTag("alleys")}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                    filterTag === "alleys"
                      ? "bg-[#1E2B4D] text-white shadow-sm"
                      : "bg-[#f0ede9] text-[#45464e] hover:bg-[#e5e2dd]"
                  }`}
                >
                  Labyrinth Galis
                </button>
                <button
                  onClick={() => setFilterTag("sacred")}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                    filterTag === "sacred"
                      ? "bg-[#1E2B4D] text-white shadow-sm"
                      : "bg-[#f0ede9] text-[#45464e] hover:bg-[#e5e2dd]"
                  }`}
                >
                  Sacred Rituals
                </button>
                <button
                  onClick={() => setFilterTag("archaeology")}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                    filterTag === "archaeology"
                      ? "bg-[#1E2B4D] text-white shadow-sm"
                      : "bg-[#f0ede9] text-[#45464e] hover:bg-[#e5e2dd]"
                  }`}
                >
                  Archaeological Forests
                </button>
              </div>

              <span className="text-xs text-[#75777f] font-medium">
                Showing {filteredHubs.length} curated walking{" "}
                {filteredHubs.length === 1 ? "zone" : "zones"}
              </span>
            </div>

            {/* Grid of Hub Cards (3-4 per city) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {filteredHubs.map((hub) => (
                <HubCard
                  key={hub.slug}
                  hub={hub}
                  onBookNow={(slug) => handleOpenBooking(slug)}
                />
              ))}
            </div>

            {/* Bottom City Lore / Quote Callout */}
            <div className="p-8 rounded-2xl bg-[#f0ede9] border border-[#c6c6cf]/30 text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-2">
                The Spirit of {city.name}
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#1E2B4D] leading-relaxed mb-4">
                &ldquo;{city.accentQuote || "To walk here with someone who knows the stones is to step across thousands of years in a single morning."}&rdquo;
              </p>
              <p className="text-xs text-[#75777f]">
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

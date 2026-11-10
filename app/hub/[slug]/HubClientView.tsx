"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Sparkles,
  UserCheck,
  Check,
  Shield,
  ArrowRight,
  ChevronRight,
  Gem,
  UtensilsCrossed,
  ShoppingBag,
  MessageCircle,
  Calendar,
  Share2,
} from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-[#fcf9f4]">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1 pt-24 pb-24 px-5 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-[#75777f] mb-6 flex-wrap">
          <Link href="/" className="hover:text-[#1E2B4D] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={`/city/${hub.city}`}
            className="hover:text-[#1E2B4D] transition-colors capitalize"
          >
            {city?.name || hub.city}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#d97706] font-bold">{hub.name}</span>
        </nav>

        {/* Hero Hub Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Left: Main Details (7 cols) */}
          <div className="lg:col-span-7">
            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-[#f0ede9] text-[#1E2B4D] px-3.5 py-1 rounded-full text-xs font-bold border border-[#c6c6cf]/30">
                <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
                {city?.name || "Varanasi"} Zone
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#f0ede9] text-[#1E2B4D] px-3 py-1 rounded-full text-xs font-bold border border-[#c6c6cf]/30">
                <Clock className="w-3.5 h-3.5 text-[#d97706]" />
                {hub.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-amber-50 text-[#d97706] px-3 py-1 rounded-full text-xs font-bold border border-[#FFC72C]/40">
                Best at {hub.bestTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[48px] lg:leading-[54px] font-bold text-[#1E2B4D] tracking-tight mb-4">
              {hub.name}
            </h1>

            <p className="text-base sm:text-lg text-[#45464e] leading-relaxed mb-6">
              {hub.description}
            </p>

            {/* Covered Landmarks */}
            <div className="p-4 rounded-2xl bg-[#f0ede9] border border-[#c6c6cf]/30 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#75777f] block mb-2">
                Landmarks Covered In This Walk
              </span>
              <div className="flex flex-wrap gap-2">
                {hub.destinations.map((dest, i) => (
                  <span
                    key={i}
                    className="bg-white text-[#1E2B4D] text-xs font-semibold px-3 py-1.5 rounded-xl border border-[#c6c6cf]/30 shadow-2xs"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </div>

            {/* Italic Intrigue Teaser */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#ebe8e3]/70 border-l-4 border-[#FFC72C]">
              <p className="font-serif italic text-sm sm:text-base text-[#1E2B4D] leading-relaxed">
                &ldquo;{hub.teaser}&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Price & Fast Booking Card (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#c6c6cf]/40 shadow-xl">
              <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-[#c6c6cf]/30">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#75777f] font-bold block">
                    Starting From
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2B4D]">
                      ₹{hub.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-[#75777f]">/ person</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block bg-[#FFC72C] text-[#1E2B4D] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-2xs">
                    100% Private
                  </span>
                </div>
              </div>

              {/* Inclusions Checkmarks */}
              <div className="space-y-2.5 mb-6 text-xs text-[#45464e]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>Dedicated private Spotmate for you and your group</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>{hub.duration} slow immersive walking journey</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>Curated local tastings &amp; chai included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>Strict zero-commission &amp; zero-shopping-trap policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>Free cancellation up to 24 hours before start</span>
                </div>
              </div>

              {/* Confirm & Book CTA */}
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-bold py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-base transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer mb-3"
              >
                <span>Confirm &amp; Book Walk</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-between text-xs text-[#75777f]">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 hover:text-[#1E2B4D] transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Hub</span>
                </button>
                <span>No advance payment required</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: WHY THIS SPOTMATE IS ASSIGNED */}
        <section className="mb-14 bg-[#f0ede9] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#c6c6cf]/30">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#1E2B4D] text-[#FFC72C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <UserCheck className="w-4 h-4" />
              Assigned Guide Profile
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2B4D] mb-4">
              Your Spotmate here is a{" "}
              <span className="text-[#d97706]">{hub.spotmateType}</span>
            </h2>

            {/* Explanation of WHY this type is assigned */}
            <p className="text-base sm:text-lg text-[#45464e] leading-relaxed mb-8">
              {hub.spotmateReason}
            </p>

            {/* Spotmate Profile Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#c6c6cf]/40 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1E2B4D] text-[#FFC72C] flex items-center justify-center font-serif text-xl font-bold shrink-0 shadow-sm">
                  {hub.guideProfile.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-lg font-bold text-[#1E2B4D]">
                      {hub.guideProfile.name}
                    </h3>
                    <span className="bg-[#f0ede9] text-[#1E2B4D] text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                      {hub.guideProfile.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#75777f] mt-0.5">
                    {hub.guideProfile.experienceYears} Years Guiding · Based in {hub.guideProfile.neighborhood}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-[#45464e]">
                    <span className="font-medium">Languages:</span>
                    {hub.guideProfile.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="bg-[#ebe8e3] text-[#1E2B4D] text-[11px] px-2 py-0.5 rounded-md font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#c6c6cf]/20">
                <span className="text-[11px] uppercase tracking-wider text-[#75777f] font-bold block">
                  Vetted Status
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[#1E2B4D] font-bold mt-1">
                  <Shield className="w-3.5 h-3.5 text-[#d97706]" />
                  Background Verified &amp; Certified
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: WHAT YOUR SPOTMATE WILL SHOW YOU */}
        <section className="mb-14">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-2">
              Unscripted Discoveries
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2B4D]">
              What Your Spotmate Will Show You
            </h2>
            <p className="text-sm sm:text-base text-[#45464e] mt-1">
              Intriguing moments you won&apos;t find pinned on tourist maps or algorithm feeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hub.highlights.map((item, index) => (
              <div
                key={index}
                className="bg-[#fcf9f4] rounded-2xl p-6 sm:p-7 border border-[#c6c6cf]/30 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#d97706] font-extrabold">
                      0{index + 1}
                    </span>
                    <span className="w-8 h-px bg-[#d97706]/40"></span>
                    <span className="text-xs font-bold text-[#1E2B4D]">{item.title}</span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-[#45464e] leading-relaxed">
                    {item.teaser}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: STEPPED GHAT TIMELINE / ROUTE VIEW */}
        <section className="mb-14 bg-[#f6f3ee] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#c6c6cf]/30">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-2">
              Route Progression
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2B4D] mb-2">
              Stepped Ghat Trail Flow
            </h2>
            <p className="text-sm text-[#45464e] mb-8">
              A slow-paced, deliberate sequence curated to match the natural rhythm of the neighborhood.
            </p>

            <div className="relative pl-8 sm:pl-10 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:border-l-2 before:border-dashed before:border-[#8C3B24]/40">
              {hub.destinations.map((dest, i) => (
                <div key={i} className="relative group">
                  {/* Stepped rectangular stone node inspired by ghat steps */}
                  <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-5 h-3 bg-[#1E2B4D] border border-[#FFC72C] rounded-[2px] shadow-2xs group-hover:bg-[#d97706] transition-colors"></div>
                  <div className="bg-[#fcf9f4] rounded-xl p-4 border border-[#c6c6cf]/25 shadow-2xs hover:shadow-xs transition-shadow">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-[#8C3B24] uppercase tracking-wider text-[11px]">
                        Checkpoint 0{i + 1}
                      </span>
                      <span className="text-[#75777f] text-[11px]">
                        {i === 0
                          ? "Walk Commences"
                          : i === hub.destinations.length - 1
                          ? "Conclusion & Shared Chai"
                          : "Cultural Immersion"}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-[#1E2B4D]">
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
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-2">
              Curated Highlights
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2B4D]">
              The Soul of {hub.name}
            </h2>
            <p className="text-sm text-[#45464e] mt-1">
              Three authentic dimensions that make this walking zone unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hidden Gems */}
            <div className="bg-[#f0ede9] rounded-2xl p-6 sm:p-7 border border-[#c6c6cf]/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#d97706] flex items-center justify-center mb-4">
                  <Gem className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-1">
                  Unmapped
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1E2B4D] mb-3">
                  Hidden Gems
                </h3>
                <p className="text-sm text-[#45464e] leading-relaxed">
                  {hub.hiddenGems}
                </p>
              </div>
            </div>

            {/* Local Food */}
            <div className="bg-[#f0ede9] rounded-2xl p-6 sm:p-7 border border-[#c6c6cf]/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#d97706] flex items-center justify-center mb-4">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-1">
                  Generational Tastes
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1E2B4D] mb-3">
                  Authentic Local Food
                </h3>
                <p className="text-sm text-[#45464e] leading-relaxed">
                  {hub.localFood}
                </p>
              </div>
            </div>

            {/* Real Souvenirs */}
            <div className="bg-[#f0ede9] rounded-2xl p-6 sm:p-7 border border-[#c6c6cf]/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#d97706] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold block mb-1">
                  Honest Value
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1E2B4D] mb-3">
                  Real Souvenirs
                </h3>
                <p className="text-sm text-[#45464e] leading-relaxed">
                  {hub.souvenirs}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM BOOKING PROMPT */}
        <section className="bg-gradient-to-tr from-[#1E2B4D] to-[#24355E] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#FFC72C] font-bold block mb-2">
              Reserved Walk Guarantee
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Explore {hub.name} with {hub.guideProfile.name}
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed">
              Experience Varanasi with someone who knows every brick and stone. Match in 15 minutes,
              with zero advance deposit required.
            </p>
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center gap-2 bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-bold py-4 px-8 rounded-xl shadow-lg transition-all text-base group cursor-pointer"
            >
              <span>Confirm &amp; Book Walk (from ₹{hub.price.toLocaleString("en-IN")})</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <Footer onOpenBooking={() => setBookingOpen(true)} />

      {/* Floating Bottom Bar for Quick Booking */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#fcf9f4]/95 backdrop-blur-md border-t border-[#c6c6cf]/40 p-3 sm:hidden shadow-lg flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#75777f] block">Starting from</span>
          <span className="font-serif text-lg font-bold text-[#1E2B4D]">
            ₹{hub.price.toLocaleString("en-IN")}
          </span>
        </div>
        <button
          onClick={() => setBookingOpen(true)}
          className="bg-[#FFC72C] text-[#1E2B4D] font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm"
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


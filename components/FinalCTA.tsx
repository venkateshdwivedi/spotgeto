"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onOpenBooking?: () => void;
}

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="w-full py-16 lg:py-24 px-5 lg:px-12 bg-[#f6f3ee]">
      <div className="max-w-5xl mx-auto bg-[#fcf9f4] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl text-center relative overflow-hidden border border-[#c6c6cf]/30">
        {/* Ghat Step Watermark Graphic */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/20 via-transparent to-[#dae2ff]/20 pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-[#1E2B4D] mb-2 font-extrabold bg-[#f0ede9] px-3.5 py-1 rounded-full border border-[#c6c6cf]/30">
            Begin Your Journey
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#1E2B4D] font-semibold tracking-tight mb-4">
            Ready to See the Real City?
          </h2>

          <p className="text-base sm:text-lg text-[#45464e] mb-8 leading-relaxed">
            Your Spotmate is just a tap away. No tourist traps, no scripted spiels — just Varanasi
            through the eyes of someone who calls it home.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/city/varanasi"
              className="inline-flex items-center gap-2.5 text-base sm:text-lg bg-[#FFC72C] text-[#1E2B4D] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#F5BD1F] transition-all group transform hover:-translate-y-0.5"
            >
              <span>Explore Varanasi Hubs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <button
              onClick={() => onOpenBooking?.()}
              className="inline-flex items-center gap-2 text-base text-[#1E2B4D] font-bold bg-[#ebe8e3] px-6 py-4 rounded-xl hover:bg-[#e5e2dd] transition-colors"
            >
              Instant Match Booking
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[#45464e] text-xs sm:text-sm font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#d97706]" />
              Free cancellation up to 24h prior
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#d97706]" />
              100% private walks only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


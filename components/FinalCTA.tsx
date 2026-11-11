"use client";

import React from "react";
import Link from "next/link";

interface FinalCTAProps {
  onOpenBooking?: () => void;
}

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="w-full py-20 lg:py-28 px-6 lg:px-12 bg-[#f5f1ea] border-t border-[#e5e0d8]">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-14 text-center border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B4D] font-semibold tracking-[-0.03em] mb-4">
            Ready to See the Real City?
          </h2>

          <p className="text-[17px] leading-[1.7] text-[#5f6368] mb-8 font-normal">
            Your Spotmate is just a tap away. No tourist traps, no scripted spiels — just Varanasi
            through the eyes of someone who calls it home.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <Link
              href="/city/varanasi"
              className="text-sm sm:text-base bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Explore Varanasi Hubs
            </Link>

            <button
              type="button"
              onClick={() => onOpenBooking?.()}
              className="text-sm sm:text-base text-[#1E2B4D] font-semibold bg-[#f5f1ea] hover:bg-[#eae4da] border border-[#e5e0d8] px-6 py-3.5 rounded-lg transition-colors"
            >
              Instant Match Booking
            </button>
          </div>

          <div className="mt-8 text-sm text-[#5f6368] font-normal">
            100% private walks only
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenBooking?: (hubSlug?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  return (
    <header className="fixed top-0 w-full z-40 bg-[#fcf9f4]/95 border-b border-[#e5e0d8]">
      <div className="h-16 w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Spotgeto logo */}
        <Link href="/" className="font-serif text-2xl font-bold text-[#1E2B4D] tracking-tight hover:opacity-90 transition-opacity">
          Spotgeto
        </Link>

        {/* Right: "Find Your Spotmate" CTA button */}
        <button
          type="button"
          onClick={() => onOpenBooking?.()}
          className="text-sm bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Find Your Spotmate
        </button>
      </div>
    </header>
  );
}

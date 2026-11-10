"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, User, Menu, X, ChevronDown, Compass } from "lucide-react";

interface NavbarProps {
  onOpenBooking?: (hubSlug?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-40 bg-[#fcf9f4]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(30,43,77,0.06)] border-b border-[#e5e2dd]/60 transition-all">
      <div className="h-20 w-full max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between gap-6">
        {/* Left: Brand Logo & Live City Pill */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#1E2B4D] flex items-center justify-center text-[#FFC72C] shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-serif text-2xl font-bold text-[#1E2B4D] tracking-tight">
              Spotgeto
            </span>
          </Link>

          {/* City Live Badge */}
          <Link
            href="/city/varanasi"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#1E2B4D] bg-[#f0ede9] px-3 py-1.5 rounded-full border border-[#c6c6cf]/40 cursor-pointer shadow-sm hover:bg-[#e5e2dd] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
            <span className="font-semibold">Varanasi</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC72C] animate-pulse"></span>
            <span className="text-[#1E2B4D] text-[10px] font-extrabold uppercase tracking-wider">
              Live
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#45464e]" />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-[#45464e] hover:text-[#1E2B4D] px-3 py-1.5 rounded-lg hover:bg-[#f0ede9] transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="/city/varanasi"
            className="text-sm font-semibold text-[#1E2B4D] bg-[#1E2B4D]/10 px-3.5 py-1.5 rounded-lg hover:bg-[#1E2B4D]/15 transition-colors"
          >
            Explore Hubs
          </Link>
          <Link
            href="/#spotmate-difference"
            className="text-sm font-medium text-[#45464e] hover:text-[#1E2B4D] px-3 py-1.5 rounded-lg hover:bg-[#f0ede9] transition-colors"
          >
            Why Spotgeto
          </Link>
        </nav>

        {/* Right: CTA & User Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenBooking?.()}
            className="inline-flex items-center justify-center text-sm bg-[#FFC72C] text-[#1E2B4D] font-bold px-4 sm:px-6 py-2.5 rounded-xl hover:bg-[#F5BD1F] shadow-[0_4px_14px_rgba(255,199,44,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Find Your Spotmate
          </button>

          <div
            className="w-9 h-9 rounded-full bg-[#1E2B4D] hidden sm:flex items-center justify-center text-white shadow-sm"
            title="Spotgeto Traveler"
          >
            <User className="w-4 h-4 text-[#FFC72C]" />
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#f0ede9] text-[#1E2B4D] hover:bg-[#e5e2dd] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f4] border-b border-[#e5e2dd] px-6 py-5 shadow-lg flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
          <Link
            href="/city/varanasi"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 rounded-xl bg-[#f0ede9] text-[#1E2B4D] font-semibold text-sm"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d97706]" />
              Explore Varanasi (Now Live)
            </span>
            <span className="text-[10px] uppercase font-bold bg-[#FFC72C] px-2 py-0.5 rounded-full">
              4 Hubs
            </span>
          </Link>
          <Link
            href="/#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 text-[#45464e] hover:text-[#1E2B4D] text-sm font-medium"
          >
            How it Works
          </Link>
          <Link
            href="/#spotmate-difference"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 text-[#45464e] hover:text-[#1E2B4D] text-sm font-medium"
          >
            Why Spotgeto & The Spotmate Difference
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking?.();
            }}
            className="w-full mt-2 text-center text-sm bg-[#FFC72C] text-[#1E2B4D] font-bold py-3 rounded-xl shadow-md"
          >
            Book a Spotmate Walk
          </button>
        </div>
      )}
    </header>
  );
}


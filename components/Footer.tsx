import React from "react";
import Link from "next/link";
import { Compass, MessageSquare, Camera, Heart } from "lucide-react";

interface FooterProps {
  onOpenBooking?: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="w-full bg-[#f6f3ee] border-t border-[#c6c6cf]/30 shadow-[0_-1px_12px_rgba(30,43,77,0.03)]">
      <div className="w-full max-w-7xl mx-auto px-5 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl font-bold text-[#1E2B4D]">Spotgeto</span>
              <span className="text-[11px] text-[#1E2B4D] font-extrabold uppercase tracking-wider bg-[#f0ede9] px-2.5 py-1 rounded-full border border-[#c6c6cf]/40">
                Curated Walking Journeys
              </span>
            </div>
            <p className="text-sm text-[#45464e] max-w-md leading-relaxed">
              A curated slow travel platform connecting curious wanderers with generational local
              experts and certified guides across timeless Indian cities.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="w-9 h-9 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#1E2B4D] hover:bg-[#1E2B4D] hover:text-white transition-colors cursor-pointer shadow-xs">
                <Compass className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#1E2B4D] hover:bg-[#1E2B4D] hover:text-white transition-colors cursor-pointer shadow-xs">
                <MessageSquare className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#1E2B4D] hover:bg-[#1E2B4D] hover:text-white transition-colors cursor-pointer shadow-xs">
                <Camera className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Discover Links (3 Cols) */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <span className="text-sm font-bold text-[#1E2B4D] uppercase tracking-wider mb-1">
              Discover
            </span>
            <Link
              href="/hub/assi-southern-akharas"
              className="text-sm text-[#45464e] hover:text-[#1E2B4D] transition-colors"
            >
              Assi &amp; Southern Akharas
            </Link>
            <Link
              href="/hub/old-kashi-gallis"
              className="text-sm text-[#45464e] hover:text-[#1E2B4D] transition-colors"
            >
              Old Kashi Labyrinth Galis
            </Link>
            <Link
              href="/hub/manikarnika-riverfront"
              className="text-sm text-[#45464e] hover:text-[#1E2B4D] transition-colors"
            >
              Manikarnika &amp; Sacred Fire
            </Link>
            <Link
              href="/hub/sarnath-sanctuary"
              className="text-sm text-[#45464e] hover:text-[#1E2B4D] transition-colors"
            >
              Sarnath Archaeological Forest
            </Link>
          </div>

          {/* Company Links (2 Cols) */}
          <div className="md:col-span-2 flex flex-col gap-2.5">
            <span className="text-sm font-bold text-[#1E2B4D] uppercase tracking-wider mb-1">
              Company
            </span>
            <Link
              href="/#spotmate-difference"
              className="text-sm text-[#45464e] hover:text-[#1E2B4D] transition-colors"
            >
              The Spotmate Difference
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm text-[#45464e] hover:text-[#1E2B4D] transition-colors"
            >
              How It Works
            </Link>
            <span className="text-sm text-[#75777f] cursor-default">
              Ethical Travel Code
            </span>
          </div>

          {/* Concierge (2 Cols) */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <span className="text-sm font-bold text-[#1E2B4D] uppercase tracking-wider mb-1">
              Concierge
            </span>
            <span className="text-xs text-[#45464e] leading-relaxed">
              Assi Ghat, Shivala
              <br />
              Varanasi, UP 221005
            </span>
            <button
              onClick={() => onOpenBooking?.()}
              className="text-xs text-[#1E2B4D] font-extrabold hover:text-[#d97706] transition-colors text-left mt-2 underline"
            >
              Begin Reservation →
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 pt-6 border-t border-[#c6c6cf]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#75777f] text-xs">
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-[#d97706] fill-[#d97706]" />
            <span>Made with love in Varanasi</span>
          </div>
          <div className="flex items-center gap-6">
            <span>© 2025 Spotgeto. All rights reserved.</span>
            <span className="hover:text-[#1E2B4D] transition-colors cursor-pointer">
              Privacy &amp; Sanctuary Protocol
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


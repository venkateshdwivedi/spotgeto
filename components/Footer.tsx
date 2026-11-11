import React from "react";
import Link from "next/link";

interface FooterProps {
  onOpenBooking?: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="w-full bg-[#f5f1ea] border-t border-[#e5e0d8]">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 text-left">
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <span className="font-serif text-2xl font-bold text-[#1E2B4D]">Spotgeto</span>
            <p className="text-[15px] leading-[1.7] text-[#5f6368] max-w-md font-normal">
              A curated slow travel platform connecting curious wanderers with generational local
              experts and certified guides across timeless Indian cities.
            </p>
          </div>

          {/* Discover Links (3 Cols) */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="text-sm font-semibold text-[#1E2B4D] mb-1">
              Discover
            </span>
            <Link
              href="/hub/assi-southern-akharas"
              className="text-sm text-[#5f6368] hover:text-[#1E2B4D] transition-colors"
            >
              Assi &amp; Southern Akharas
            </Link>
            <Link
              href="/hub/old-kashi-gallis"
              className="text-sm text-[#5f6368] hover:text-[#1E2B4D] transition-colors"
            >
              Old Kashi Labyrinth Galis
            </Link>
            <Link
              href="/hub/manikarnika-riverfront"
              className="text-sm text-[#5f6368] hover:text-[#1E2B4D] transition-colors"
            >
              Manikarnika &amp; Sacred Fire
            </Link>
            <Link
              href="/hub/sarnath-sanctuary"
              className="text-sm text-[#5f6368] hover:text-[#1E2B4D] transition-colors"
            >
              Sarnath Archaeological Forest
            </Link>
          </div>

          {/* Company Links (2 Cols) */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <span className="text-sm font-semibold text-[#1E2B4D] mb-1">
              Company
            </span>
            <Link
              href="/#spotmate-difference"
              className="text-sm text-[#5f6368] hover:text-[#1E2B4D] transition-colors"
            >
              The Spotmate Difference
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm text-[#5f6368] hover:text-[#1E2B4D] transition-colors"
            >
              How It Works
            </Link>
            <span className="text-sm text-[#80868b] cursor-default">
              Ethical Travel Code
            </span>
          </div>

          {/* Concierge (2 Cols) */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <span className="text-sm font-semibold text-[#1E2B4D] mb-1">
              Concierge
            </span>
            <span className="text-xs text-[#5f6368] leading-relaxed">
              Assi Ghat, Shivala
              <br />
              Varanasi, UP 221005
            </span>
            <button
              type="button"
              onClick={() => onOpenBooking?.()}
              className="text-xs text-[#1E2B4D] font-semibold hover:text-[#d97706] transition-colors text-left mt-2 underline"
            >
              Begin Reservation →
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-14 pt-6 border-t border-[#e5e0d8] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#80868b] text-xs">
          <div>Made with love in Varanasi</div>
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

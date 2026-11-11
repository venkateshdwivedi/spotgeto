import React from "react";
import Link from "next/link";
import { Hub } from "@/data/hubs";

interface HubCardProps {
  hub: Hub;
  onBookNow?: (hubSlug: string) => void;
}

export default function HubCard({ hub, onBookNow }: HubCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between overflow-hidden">
      <div>
        <div className="p-6 sm:p-7 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold text-[#1E2B4D] bg-[#f5f1ea] px-3 py-1 rounded border border-[#e5e0d8]">
              {hub.spotmateType}
            </span>

            <span className="text-sm font-semibold text-[#1E2B4D]">
              from ₹{hub.price.toLocaleString("en-IN")}
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1E2B4D] mb-2 hover:text-[#d97706] transition-colors">
            <Link href={`/hub/${hub.slug}`}>{hub.name}</Link>
          </h3>

          <p className="text-[15px] leading-[1.7] text-[#5f6368] mb-4">
            {hub.description}
          </p>

          {/* Destinations inside this Hub */}
          <div className="mb-4">
            <span className="text-xs font-medium text-[#80868b] block mb-1.5">
              Covers Key Landmarks:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {hub.destinations.map((dest, idx) => (
                <span
                  key={idx}
                  className="bg-[#f5f1ea] text-[#1E2B4D] text-xs font-normal px-2.5 py-1 rounded border border-[#e5e0d8]"
                >
                  {dest}
                </span>
              ))}
            </div>
          </div>

          {/* Italic Teaser Line */}
          <div className="p-3.5 rounded-lg bg-[#f5f1ea] border-l-2 border-[#1E2B4D] mb-2">
            <p className="italic text-xs text-[#1E2B4D] leading-relaxed">
              &ldquo;{hub.teaser}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Card Footer / Action */}
      <div className="px-6 sm:px-7 py-3.5 bg-[#f5f1ea] border-t border-[#e5e0d8] flex items-center justify-between gap-3">
        <div className="text-xs text-[#5f6368]">
          <span>{hub.duration}</span>
        </div>

        <div className="flex items-center gap-2">
          {onBookNow && (
            <button
              type="button"
              onClick={() => onBookNow(hub.slug)}
              className="text-xs font-semibold text-[#1E2B4D] hover:text-[#d97706] py-1.5 px-3 rounded hover:bg-white transition-colors"
            >
              Quick Book
            </button>
          )}

          <Link
            href={`/hub/${hub.slug}`}
            className="text-xs sm:text-sm bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold py-2 px-3.5 rounded-lg transition-colors"
          >
            See What You&apos;ll Discover →
          </Link>
        </div>
      </div>
    </div>
  );
}

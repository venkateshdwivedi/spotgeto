import React from "react";
import Link from "next/link";
import { Hub } from "@/data/hubs";

interface HubCardProps {
  hub: Hub;
  onBookNow?: (hubSlug: string) => void;
}

export default function HubCard({ hub, onBookNow }: HubCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e5e0d8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between overflow-hidden text-left">
      <div className="p-6 sm:p-7 pb-4">
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1E2B4D] mb-2 hover:text-[#d97706] transition-colors">
          <Link href={`/hub/${hub.slug}`}>{hub.name}</Link>
        </h3>

        <p className="text-[15px] leading-[1.7] text-[#5f6368] mb-4 font-normal">
          {hub.description}
        </p>

        {/* Italic Teaser Line */}
        <div className="p-3.5 rounded-lg bg-[#f5f1ea] border-l-2 border-[#1E2B4D] mb-2">
          <p className="italic text-xs text-[#1E2B4D] leading-relaxed">
            &ldquo;{hub.teaser}&rdquo;
          </p>
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
              className="text-xs font-semibold text-[#1E2B4D] hover:text-[#d97706] py-1.5 px-3 rounded hover:bg-white transition-colors cursor-pointer"
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

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Tag, Sparkles, UserCheck } from "lucide-react";
import { Hub } from "@/data/hubs";

interface HubCardProps {
  hub: Hub;
  onBookNow?: (hubSlug: string) => void;
}

export default function HubCard({ hub, onBookNow }: HubCardProps) {
  return (
    <div className="bg-[#fcf9f4] rounded-2xl border border-[#c6c6cf]/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Card Header & Badges */}
        <div className="p-6 sm:p-7 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 bg-[#f0ede9] text-[#1E2B4D] px-3 py-1 rounded-full text-xs font-bold border border-[#c6c6cf]/30">
              <UserCheck className="w-3.5 h-3.5 text-[#d97706]" />
              {hub.spotmateType}
            </span>

            <span className="text-sm font-extrabold text-[#1E2B4D] bg-[#FFC72C]/20 border border-[#FFC72C]/40 px-2.5 py-0.5 rounded-full">
              from ₹{hub.price.toLocaleString("en-IN")}
            </span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#1E2B4D] group-hover:text-[#d97706] transition-colors mb-2">
            <Link href={`/hub/${hub.slug}`}>{hub.name}</Link>
          </h3>

          <p className="text-sm text-[#45464e] leading-relaxed mb-4">
            {hub.description}
          </p>

          {/* Destinations inside this Hub */}
          <div className="mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#75777f] block mb-1.5 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#d97706]" /> Covers Key Landmarks:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {hub.destinations.map((dest, idx) => (
                <span
                  key={idx}
                  className="bg-[#ebe8e3] text-[#1E2B4D] text-xs font-medium px-2.5 py-1 rounded-lg border border-[#c6c6cf]/25"
                >
                  {dest}
                </span>
              ))}
            </div>
          </div>

          {/* Italic Teaser Line */}
          <div className="p-3.5 rounded-xl bg-[#f0ede9]/80 border-l-2 border-[#d97706] mb-2">
            <p className="italic text-xs text-[#1E2B4D] leading-relaxed">
              &ldquo;{hub.teaser}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Card Footer / Action */}
      <div className="px-6 sm:px-7 py-4 bg-[#f6f3ee] border-t border-[#c6c6cf]/25 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-[#75777f]">
          <Clock className="w-3.5 h-3.5 text-[#d97706]" />
          <span>{hub.duration}</span>
        </div>

        <div className="flex items-center gap-2">
          {onBookNow && (
            <button
              onClick={() => onBookNow(hub.slug)}
              className="text-xs font-bold text-[#1E2B4D] hover:text-[#d97706] py-1.5 px-3 rounded-lg hover:bg-[#ebe8e3] transition-colors"
            >
              Quick Book
            </button>
          )}

          <Link
            href={`/hub/${hub.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-bold py-2 px-3.5 rounded-xl shadow-xs transition-all group-hover:translate-x-0.5"
          >
            <span>See What You&apos;ll Discover</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}


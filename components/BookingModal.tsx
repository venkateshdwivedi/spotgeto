"use client";

import React, { useState, useEffect } from "react";
import { hubs } from "@/data/hubs";
import { cities } from "@/data/cities";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultHubSlug?: string;
  defaultCitySlug?: string;
}

interface BookingResponseData {
  bookingId: string;
  name: string;
  phone: string;
  hubName: string;
  city: string;
  date: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultHubSlug = "assi-southern-akharas",
  defaultCitySlug = "varanasi",
}: BookingModalProps) {
  const [citySlug, setCitySlug] = useState(defaultCitySlug);
  const [hubSlug, setHubSlug] = useState(defaultHubSlug);
  const [date, setDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingResponseData | null>(null);

  // Sync default props and calculate minimum date when modal opens (inside useEffect to avoid SSR prerender time skew)
  useEffect(() => {
    if (isOpen) {
      if (defaultHubSlug) setHubSlug(defaultHubSlug);
      if (defaultCitySlug) setCitySlug(defaultCitySlug);
      setConfirmedBooking(null);
      setError(null);

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
      const dd = String(tomorrow.getDate()).padStart(2, "0");
      const minDateStr = `${yyyy}-${mm}-${dd}`;
      setMinDate(minDateStr);
      setDate((prev) => prev || minDateStr);
    }
  }, [isOpen, defaultHubSlug, defaultCitySlug]);

  if (!isOpen) return null;

  const activeHub = hubs.find((h) => h.slug === hubSlug) || hubs[0];
  const activeCity = cities.find((c) => c.slug === citySlug) || cities[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    const cleanPhone = phone.trim().replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit WhatsApp number.");
      return;
    }
    if (!date) {
      setError("Please choose your preferred walk date.");
      return;
    }

    setLoading(true);

    try {
      const fullPhone = phone.startsWith("+") ? phone : `+91 ${phone.replace(/^91/, "")}`;

      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          phone: fullPhone,
          hubName: activeHub.name,
          hubSlug: activeHub.slug,
          city: activeCity.name,
          date,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to confirm your booking. Please try again.");
      }

      setConfirmedBooking(data.booking);
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const supportNumber = process.env.NEXT_PUBLIC_WHATSAPP_SUPPORT_PHONE || "919876543210";
  const waShareText = confirmedBooking
    ? encodeURIComponent(
        `Hello Spotgeto! I have booked a walk.\n\nBooking ID: ${confirmedBooking.bookingId}\nName: ${confirmedBooking.name}\nHub: ${confirmedBooking.hubName} (${confirmedBooking.city})\nDate: ${confirmedBooking.date}\n\nPlease connect me with my Spotmate!`
      )
    : "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#fcf9f4] rounded-xl border border-[#e5e0d8] shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden my-8">
        {/* Header Bar: Flat, clean */}
        <div className="bg-[#1E2B4D] text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white text-lg p-1 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>

          <span className="text-xs text-[#FFC72C] font-semibold mb-1 block">
            {activeHub.name} · {activeCity.name}
          </span>
          <h2 className="font-serif text-2xl font-semibold">
            {confirmedBooking ? "Booking Confirmed" : "Book Your Walk"}
          </h2>
          <p className="text-white/70 text-xs sm:text-sm mt-1">
            {confirmedBooking
              ? "We are preparing your personalized walking journey."
              : "Hand-matched local guides. 100% private. Zero commission traps."}
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto text-left">
          {confirmedBooking ? (
            /* Confirmation Screen: Simple, clean text */
            <div className="flex flex-col items-start text-left py-2">
              <h3 className="font-serif text-2xl font-semibold text-[#1E2B4D] mb-3">
                Your booking is confirmed!
              </h3>

              <p className="text-[15px] leading-[1.7] text-[#5f6368] mb-6 font-normal">
                We&apos;ll match you with the best available Spotmate and reach out on WhatsApp within 15–20 minutes.
              </p>

              {/* Simple summary box */}
              <div className="w-full bg-white rounded-lg p-5 border border-[#e5e0d8] text-left mb-6 space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#5f6368]">Hub:</span>
                  <span className="font-semibold text-[#1E2B4D]">{confirmedBooking.hubName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#5f6368]">Date:</span>
                  <span className="font-semibold text-[#1E2B4D]">{confirmedBooking.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#5f6368]">Name:</span>
                  <span className="font-semibold text-[#1E2B4D]">{confirmedBooking.name}</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={`https://wa.me/${supportNumber}?text=${waShareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-sm mb-3 cursor-pointer"
              >
                Chat with us on WhatsApp →
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full text-center text-xs font-semibold text-[#1E2B4D] hover:underline pt-2 cursor-pointer"
              >
                Done &amp; Close
              </button>
            </div>
          ) : (
            /* Booking Form: Only 3 fields */
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-red-800 text-xs border border-red-200">
                  {error}
                </div>
              )}

              {/* 1. Walk Date */}
              <div>
                <label className="block text-xs font-semibold text-[#1E2B4D] mb-1">
                  Walk Date
                </label>
                <input
                  type="date"
                  min={minDate || undefined}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-sm text-[#1E2B4D] focus:outline-none focus:border-[#1E2B4D]"
                />
              </div>

              {/* 2. Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#1E2B4D] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-sm text-[#1E2B4D] focus:outline-none focus:border-[#1E2B4D]"
                />
              </div>

              {/* 3. WhatsApp Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-[#1E2B4D] mb-1">
                  WhatsApp Phone Number
                </label>
                <div className="flex items-center rounded-lg border border-[#e5e0d8] bg-white overflow-hidden">
                  <span className="bg-[#f5f1ea] px-3 py-2 text-xs font-semibold text-[#1E2B4D] border-r border-[#e5e0d8]">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-sm text-[#1E2B4D] focus:outline-none"
                  />
                </div>
                <span className="text-[11px] text-[#80868b] mt-1 block">
                  We will reach out on WhatsApp within 15–20 minutes to confirm your walk details.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold py-3.5 px-6 rounded-lg transition-colors text-sm sm:text-base disabled:opacity-70 cursor-pointer mt-2"
              >
                {loading ? "Booking..." : "Book Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

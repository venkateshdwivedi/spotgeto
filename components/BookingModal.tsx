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
  timeSlot: string;
  travelers: number;
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
  const [timeSlot, setTimeSlot] = useState("Morning (6:00 AM – 9:00 AM)");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingResponseData | null>(null);

  // Sync default props when modal opens
  useEffect(() => {
    if (isOpen) {
      if (defaultHubSlug) setHubSlug(defaultHubSlug);
      if (defaultCitySlug) setCitySlug(defaultCitySlug);
      setConfirmedBooking(null);
      setError(null);

      // Default date to tomorrow if not set
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
      const dd = String(tomorrow.getDate()).padStart(2, "0");
      setDate(`${yyyy}-${mm}-${dd}`);
    }
  }, [isOpen, defaultHubSlug, defaultCitySlug]);

  if (!isOpen) return null;

  const activeHub = hubs.find((h) => h.slug === hubSlug) || hubs[0];
  const activeCity = cities.find((c) => c.slug === citySlug) || cities[0];

  const todayStr = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    const cleanPhone = phone.trim().replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
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
          timeSlot,
          travelers,
          notes: notes.trim(),
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
        `Hello Spotgeto! I have booked a walk with a Spotmate.\n\nBooking ID: ${confirmedBooking.bookingId}\nName: ${confirmedBooking.name}\nHub: ${confirmedBooking.hubName} (${confirmedBooking.city})\nDate: ${confirmedBooking.date}\nTime Slot: ${confirmedBooking.timeSlot}\nGuests: ${confirmedBooking.travelers}\n\nCould you please connect me with my assigned Spotmate?`
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
            className="absolute top-5 right-5 text-white/70 hover:text-white text-lg p-1 transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>

          <span className="text-xs text-[#FFC72C] font-semibold mb-1 block">
            Hyperlocal Private Walk
          </span>
          <h2 className="font-serif text-2xl font-semibold">
            {confirmedBooking ? "Booking Confirmed" : "Book Your Spotmate Walk"}
          </h2>
          <p className="text-white/70 text-xs sm:text-sm mt-1">
            {confirmedBooking
              ? "We are preparing your personalized walking journey."
              : "Hand-matched local guides. 100% private. Zero commission traps."}
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {confirmedBooking ? (
            /* Confirmation Screen: Text-only, clean, no icons */
            <div className="flex flex-col items-center text-center py-2">
              <span className="text-xs text-[#5f6368] font-semibold mb-2">
                Booking Reference: {confirmedBooking.bookingId}
              </span>

              <h3 className="font-serif text-2xl font-semibold text-[#1E2B4D] mb-3">
                You&apos;re All Set
              </h3>

              <p className="text-[15px] leading-[1.7] text-[#5f6368] max-w-md mb-6">
                Booking confirmed! We&apos;ll match you with the best Spotmate and notify you within
                <span className="font-semibold text-[#1E2B4D]"> 15 minutes</span> via WhatsApp.
              </p>

              {/* Booking Summary Box */}
              <div className="w-full bg-white rounded-lg p-5 border border-[#e5e0d8] text-left mb-6 space-y-2.5">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-[#e5e0d8]">
                  <span className="text-[#5f6368]">Selected Hub</span>
                  <span className="font-semibold text-[#1E2B4D]">{confirmedBooking.hubName}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-[#e5e0d8]">
                  <span className="text-[#5f6368]">City</span>
                  <span className="font-semibold text-[#1E2B4D]">{confirmedBooking.city}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-[#e5e0d8]">
                  <span className="text-[#5f6368]">Date &amp; Time</span>
                  <span className="font-semibold text-[#1E2B4D]">
                    {confirmedBooking.date} · {confirmedBooking.timeSlot.split(" ")[0]}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-[#e5e0d8]">
                  <span className="text-[#5f6368]">Traveler(s)</span>
                  <span className="font-semibold text-[#1E2B4D]">
                    {confirmedBooking.name} ({confirmedBooking.travelers} Guests)
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#5f6368]">WhatsApp Contact</span>
                  <span className="font-semibold text-[#1E2B4D]">{confirmedBooking.phone}</span>
                </div>
              </div>

              {/* WhatsApp Action Button: Flat, no icons */}
              <a
                href={`https://wa.me/${supportNumber}?text=${waShareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-sm mb-3"
              >
                Chat with Spotgeto Concierge on WhatsApp →
              </a>

              <p className="text-xs text-[#80868b] mb-4">
                Questions? Our Varanasi team is active on WhatsApp 6:00 AM – 10:00 PM.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="text-xs font-semibold text-[#1E2B4D] hover:underline"
              >
                Done &amp; Close
              </button>
            </div>
          ) : (
            /* Booking Form: Clean, flat, no icons */
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-red-800 text-xs border border-red-200">
                  {error}
                </div>
              )}

              {/* Hub Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#1E2B4D] mb-1">
                  Walking Trail / Hub
                </label>
                <select
                  value={hubSlug}
                  onChange={(e) => setHubSlug(e.target.value)}
                  className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-sm text-[#1E2B4D] focus:outline-none focus:border-[#1E2B4D]"
                >
                  {hubs.map((h) => (
                    <option key={h.slug} value={h.slug}>
                      {h.name} — from ₹{h.price.toLocaleString("en-IN")}/person
                    </option>
                  ))}
                </select>
                <div className="mt-1 flex items-center justify-between text-xs text-[#80868b]">
                  <span>Spotmate: {activeHub.spotmateType}</span>
                  <span>{activeHub.duration}</span>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#1E2B4D] mb-1">
                    Walk Date
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-sm text-[#1E2B4D] focus:outline-none focus:border-[#1E2B4D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E2B4D] mb-1">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-sm text-[#1E2B4D] focus:outline-none focus:border-[#1E2B4D]"
                  >
                    <option value="Morning (6:00 AM – 9:00 AM)">
                      Morning (6:00 AM – 9:00 AM) · Dawn Walk
                    </option>
                    <option value="Afternoon (2:00 PM – 5:00 PM)">
                      Afternoon (2:00 PM – 5:00 PM)
                    </option>
                    <option value="Evening (5:00 PM – 8:00 PM)">
                      Evening (5:00 PM – 8:00 PM) · Twilight Walk
                    </option>
                  </select>
                </div>
              </div>

              {/* Full Name & Number of Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                <div className="sm:col-span-8">
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

                <div className="sm:col-span-4">
                  <label className="block text-xs font-semibold text-[#1E2B4D] mb-1">
                    Guests
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-sm text-[#1E2B4D] focus:outline-none focus:border-[#1E2B4D]"
                  >
                    <option value={1}>1 Person</option>
                    <option value={2}>2 People</option>
                    <option value={3}>3 People</option>
                    <option value={4}>4 People</option>
                    <option value={5}>5 People</option>
                    <option value={6}>6+ (Private Group)</option>
                  </select>
                </div>
              </div>

              {/* WhatsApp Phone */}
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
                  Your Spotmate will contact you directly on WhatsApp 15 mins after booking.
                </span>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#1E2B4D] mb-1">
                  Special Interests or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Photography, morning wrestling, vegetarian food..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-[#e5e0d8] rounded-lg px-3 py-2 text-sm text-[#1E2B4D] focus:outline-none focus:border-[#1E2B4D]"
                />
              </div>

              {/* Price summary banner */}
              <div className="bg-[#f5f1ea] rounded-lg p-3 flex items-center justify-between text-xs text-[#1E2B4D]">
                <div>
                  <span className="font-semibold">Total:</span>{" "}
                  <span>
                    ₹{(activeHub.price * travelers).toLocaleString("en-IN")} ({travelers}{" "}
                    {travelers === 1 ? "guest" : "guests"})
                  </span>
                </div>
                <span className="text-[#8C3B24] font-medium">
                  Pay during walk · No deposit
                </span>
              </div>

              {/* Submit Button: Flat, no shadow, no translate */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-semibold py-3.5 px-6 rounded-lg transition-colors text-sm sm:text-base disabled:opacity-70 cursor-pointer"
              >
                {loading ? "Confirming with Spotmate Network..." : "Confirm Booking"}
              </button>

              <p className="text-[11px] text-center text-[#80868b]">
                100% Private walk guarantee &nbsp;·&nbsp; Free cancellation anytime before start
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

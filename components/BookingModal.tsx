"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  AlertCircle,
  Loader2,
  Users,
} from "lucide-react";
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

  // Min date is today
  const todayStr = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E2B4D]/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#fcf9f4] rounded-3xl shadow-2xl border border-[#c6c6cf]/40 overflow-hidden my-8">
        {/* Header Bar */}
        <div className="bg-[#1E2B4D] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-[#FFC72C] mb-2 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Hyperlocal Private Walk
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            {confirmedBooking ? "Booking Confirmed" : "Book Your Spotmate Walk"}
          </h2>
          <p className="text-white/75 text-xs sm:text-sm mt-1">
            {confirmedBooking
              ? "We are preparing your personalized walking journey."
              : "Hand-matched local guides. 100% private. Zero commission traps."}
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {confirmedBooking ? (
            /* Confirmation Screen */
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-[#d97706] flex items-center justify-center mb-5 shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="bg-[#f0ede9] text-[#1E2B4D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                Booking ID: {confirmedBooking.bookingId}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2B4D] mb-3">
                You&apos;re All Set!
              </h3>

              <p className="text-sm sm:text-base text-[#45464e] max-w-md mb-6 leading-relaxed">
                Booking confirmed! We&apos;ll match you with the best Spotmate and notify you within
                <span className="font-bold text-[#1E2B4D]"> 15 minutes</span> via WhatsApp.
              </p>

              {/* Booking Summary Box */}
              <div className="w-full bg-white rounded-2xl p-5 border border-[#c6c6cf]/30 shadow-xs text-left mb-6 space-y-3">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-[#c6c6cf]/20">
                  <span className="text-[#75777f]">Selected Hub</span>
                  <span className="font-bold text-[#1E2B4D]">{confirmedBooking.hubName}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-[#c6c6cf]/20">
                  <span className="text-[#75777f]">City</span>
                  <span className="font-bold text-[#1E2B4D]">{confirmedBooking.city}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-[#c6c6cf]/20">
                  <span className="text-[#75777f]">Date &amp; Time</span>
                  <span className="font-bold text-[#1E2B4D]">
                    {confirmedBooking.date} · {confirmedBooking.timeSlot.split(" ")[0]}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-[#c6c6cf]/20">
                  <span className="text-[#75777f]">Traveler(s)</span>
                  <span className="font-bold text-[#1E2B4D]">
                    {confirmedBooking.name} ({confirmedBooking.travelers} Guests)
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#75777f]">WhatsApp Contact</span>
                  <span className="font-bold text-[#1E2B4D]">{confirmedBooking.phone}</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={`https://wa.me/${supportNumber}?text=${waShareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm sm:text-base mb-3 group"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat with Spotgeto Concierge on WhatsApp</span>
              </a>

              <p className="text-[11px] text-[#75777f] mb-5">
                Questions or immediate start? Our Varanasi team is active on WhatsApp 6:00 AM – 10:00 PM.
              </p>

              <button
                onClick={onClose}
                className="text-xs font-bold text-[#1E2B4D] hover:text-[#d97706] transition-colors underline"
              >
                Done &amp; Close
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {error && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-50 text-red-800 text-xs border border-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{error}</span>
                </div>
              )}

              {/* Hub Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E2B4D] mb-1.5">
                  Select Hub / Walking Trail
                </label>
                <select
                  value={hubSlug}
                  onChange={(e) => setHubSlug(e.target.value)}
                  className="w-full bg-[#f0ede9] border border-[#c6c6cf]/50 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[#1E2B4D] focus:outline-none focus:ring-2 focus:ring-[#FFC72C] transition-all"
                >
                  {hubs.map((h) => (
                    <option key={h.slug} value={h.slug}>
                      {h.name} — from ₹{h.price.toLocaleString("en-IN")}/person
                    </option>
                  ))}
                </select>
                <div className="mt-1 flex items-center justify-between text-[11px] text-[#75777f]">
                  <span>Assigned Spotmate: {activeHub.spotmateType}</span>
                  <span>Duration: {activeHub.duration}</span>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E2B4D] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d97706]" /> Walk Date
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-white border border-[#c6c6cf]/50 rounded-xl px-3.5 py-2.5 text-sm text-[#1E2B4D] font-medium focus:outline-none focus:ring-2 focus:ring-[#FFC72C] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E2B4D] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d97706]" /> Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-white border border-[#c6c6cf]/50 rounded-xl px-3.5 py-2.5 text-sm text-[#1E2B4D] font-medium focus:outline-none focus:ring-2 focus:ring-[#FFC72C] transition-all"
                  >
                    <option value="Morning (6:00 AM – 9:00 AM)">
                      Morning (6:00 AM – 9:00 AM) · Dawn Walk
                    </option>
                    <option value="Afternoon (2:00 PM – 5:00 PM)">
                      Afternoon (2:00 PM – 5:00 PM)
                    </option>
                    <option value="Evening (5:00 PM – 8:00 PM)">
                      Evening (5:00 PM – 8:00 PM) · Aarti &amp; Twilight
                    </option>
                  </select>
                </div>
              </div>

              {/* Full Name & Number of Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E2B4D] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#d97706]" /> Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full bg-white border border-[#c6c6cf]/50 rounded-xl px-3.5 py-2.5 text-sm text-[#1E2B4D] font-medium focus:outline-none focus:ring-2 focus:ring-[#FFC72C] transition-all"
                  />
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E2B4D] mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#d97706]" /> Guests
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full bg-white border border-[#c6c6cf]/50 rounded-xl px-3.5 py-2.5 text-sm text-[#1E2B4D] font-medium focus:outline-none focus:ring-2 focus:ring-[#FFC72C] transition-all"
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

              {/* Phone with +91 prefix */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E2B4D] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#d97706]" /> WhatsApp Phone Number
                </label>
                <div className="flex items-center rounded-xl border border-[#c6c6cf]/50 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#FFC72C] transition-all">
                  <div className="bg-[#f0ede9] px-3.5 py-2.5 text-xs font-bold text-[#1E2B4D] border-r border-[#c6c6cf]/40 shrink-0">
                    🇮🇳 +91
                  </div>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-sm text-[#1E2B4D] font-medium focus:outline-none"
                  />
                </div>
                <span className="text-[11px] text-[#75777f] mt-1 block">
                  Your Spotmate will contact you directly on WhatsApp 15 mins after booking.
                </span>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E2B4D] mb-1.5">
                  Special Interests / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Interested in street photography, traditional wrestling, vegetarian food restrictions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-[#c6c6cf]/50 rounded-xl px-3.5 py-2 text-sm text-[#1E2B4D] focus:outline-none focus:ring-2 focus:ring-[#FFC72C] transition-all"
                />
              </div>

              {/* Pricing breakdown banner */}
              <div className="bg-[#f0ede9] rounded-xl p-3.5 flex items-center justify-between text-xs text-[#1E2B4D]">
                <div>
                  <span className="font-bold">Total Estimated:</span>{" "}
                  <span>
                    ₹{(activeHub.price * travelers).toLocaleString("en-IN")} ({travelers}{" "}
                    {travelers === 1 ? "traveler" : "travelers"})
                  </span>
                </div>
                <span className="text-[11px] text-[#d97706] font-bold">
                  Pay during walk · No advance deposit
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-1 bg-[#FFC72C] hover:bg-[#F5BD1F] text-[#1E2B4D] font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-base disabled:opacity-75 cursor-pointer disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Confirming with Spotmate Network...</span>
                  </>
                ) : (
                  <span>Confirm Booking</span>
                )}
              </button>

              <p className="text-[11px] text-center text-[#75777f]">
                🔒 100% Private walk guarantee. Free cancellation anytime before start.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}


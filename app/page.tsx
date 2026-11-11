"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import SpotmateDifference from "@/components/SpotmateDifference";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { ToastProvider } from "@/components/Toast";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingHub, setBookingHub] = useState<string>("assi-southern-akharas");

  const handleOpenBooking = (hubSlug?: string) => {
    if (hubSlug) setBookingHub(hubSlug);
    setBookingOpen(true);
  };

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-[#fcf9f4]" suppressHydrationWarning>
        {/* Navigation */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Main Content with top offset for fixed navbar */}
        <main className="flex-1 pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* How Spotgeto Works Section */}
          <HowItWorks />

          {/* What Makes a Spotmate Different (4 USPs) */}
          <SpotmateDifference />

          {/* Final Call To Action */}
          <FinalCTA onOpenBooking={() => handleOpenBooking()} />
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Global Booking Modal */}
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          defaultHubSlug={bookingHub}
          defaultCitySlug="varanasi"
        />
      </div>
    </ToastProvider>
  );
}

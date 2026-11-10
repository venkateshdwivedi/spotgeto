import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCityBySlug, cities } from "@/data/cities";
import { getHubsByCity, getHubBySlug } from "@/data/hubs";
import CityClientView from "./CityClientView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {
      title: "City Not Found — Spotgeto",
    };
  }

  return {
    title: `Explore ${city.name} Walking Hubs — Spotgeto`,
    description: `Curated hyperlocal walking hubs in ${city.name}. ${city.subtitle || city.tagline}`,
  };
}

async function CityContent({ params }: PageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const hubs = getHubsByCity(city.slug);
  const recommendedHub = city.recommendedHub ? getHubBySlug(city.recommendedHub) : hubs[0];

  return <CityClientView city={city} hubs={hubs} recommendedHub={recommendedHub} />;
}

export default function CityPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fcf9f4] flex items-center justify-center p-8">
          <div className="w-8 h-8 border-2 border-[#1E2B4D] border-t-[#FFC72C] rounded-full animate-spin"></div>
        </div>
      }
    >
      <CityContent params={params} />
    </Suspense>
  );
}

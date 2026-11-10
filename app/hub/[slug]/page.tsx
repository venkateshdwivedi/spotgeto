import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getHubBySlug, hubs } from "@/data/hubs";
import { getCityBySlug } from "@/data/cities";
import HubClientView from "./HubClientView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return hubs.map((h) => ({
    slug: h.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hub = getHubBySlug(slug);

  if (!hub) {
    return {
      title: "Hub Not Found — Spotgeto",
    };
  }

  return {
    title: `${hub.name} — Hyperlocal Walking Journey | Spotgeto`,
    description: `${hub.description} Assigned Spotmate: ${hub.spotmateType}. ${hub.teaser}`,
  };
}

async function HubContent({ params }: PageProps) {
  const { slug } = await params;
  const hub = getHubBySlug(slug);

  if (!hub) {
    notFound();
  }

  const city = getCityBySlug(hub.city);
  return <HubClientView hub={hub} city={city} />;
}

export default function HubDetailPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fcf9f4] flex items-center justify-center p-8">
          <div className="w-8 h-8 border-2 border-[#1E2B4D] border-t-[#FFC72C] rounded-full animate-spin"></div>
        </div>
      }
    >
      <HubContent params={params} />
    </Suspense>
  );
}

import type { Region } from "@/types";
import { mockRegions } from "@/services/mock/regions";

// Force MOCK data to true since the actual backend is not yet available.
// When the real backend is ready, change this back to: import.meta.env.VITE_USE_MOCK !== "false"
const USE_MOCK = true;
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export const fetchRegions = async (): Promise<Region[]> => {
  if (USE_MOCK) return mockRegions;
  const res = await fetch(`${BASE_URL}/regions`);
  if (!res.ok) throw new Error("Failed to fetch regions");
  return res.json();
};

export const fetchRegionBySlug = async (slug: string): Promise<Region> => {
  if (USE_MOCK) {
    const region = mockRegions.find((r) => r.slug === slug);
    if (!region) throw new Error(`Region not found: ${slug}`);
    return region;
  }
  const res = await fetch(`${BASE_URL}/regions/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch region");
  return res.json();
};

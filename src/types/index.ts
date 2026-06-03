export interface RegionMetrics {
  urban_growth_rate: number;
  permit_approval_rate: number;
  avg_land_price_xaf: number;
  investment_trend: "rising" | "stable" | "declining";
  active_developments: number;
}

export interface TaxProfile {
  residential_tax_rate: number;
  commercial_tax_rate: number;
  land_transfer_fee: number;
  permit_cost_xaf: number;
  land_registration_cost: number;
}

export type LawCategory =
  | "property_tax"
  | "land_ownership"
  | "construction_permits"
  | "zoning"
  | "foreign_investment"
  | "environmental";

export interface LawSection {
  id: string;
  title: string;
  category: LawCategory;
  content: string[];
  last_updated: string;
  reference_code: string;
}

export interface Region {
  id: string;
  slug: string;
  name: string;
  capital: string;
  area_km2: number;
  population: number;
  development_index: number;
  metrics: RegionMetrics;
  tax_profile: TaxProfile;
  laws: LawSection[];
}

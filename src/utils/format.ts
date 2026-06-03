export const formatXAF = (value: number): string => {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B XAF`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M XAF`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K XAF`;
  return `${value} XAF`;
};

export const formatNumber = (value: number): string => new Intl.NumberFormat("en-US").format(value);

export const formatPercent = (value: number, digits = 1): string => `${value.toFixed(digits)}%`;

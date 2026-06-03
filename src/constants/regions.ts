export const CAMEROON_REGIONS = [
  { name: "Centre", slug: "centre", capital: "Yaoundé" },
  { name: "Littoral", slug: "littoral", capital: "Douala" },
  { name: "West", slug: "west", capital: "Bafoussam" },
  { name: "South West", slug: "south-west", capital: "Buea" },
  { name: "North West", slug: "north-west", capital: "Bamenda" },
  { name: "South", slug: "south", capital: "Ebolowa" },
  { name: "East", slug: "east", capital: "Bertoua" },
  { name: "North", slug: "north", capital: "Garoua" },
  { name: "Far North", slug: "far-north", capital: "Maroua" },
  { name: "Adamawa", slug: "adamawa", capital: "Ngaoundéré" },
] as const;

export const ROUTES = {
  home: "/",
  regions: "/regions",
  about: "/about",
} as const;

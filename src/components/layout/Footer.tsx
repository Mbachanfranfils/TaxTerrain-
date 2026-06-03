import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-sm tracking-[0.18em]">
              <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
              <span className="font-medium uppercase">TaxTerrain</span>
            </Link>
            <p className="mt-6 max-w-md text-sm text-muted-foreground">
              A structured view into Cameroon's regional property taxation, land regulations, and
              investment landscape — designed for clarity, built for decision-makers.
            </p>
          </div>
          <FooterCol
            title="Navigate"
            items={[
              { label: "Home", to: "/" },
              { label: "Regions", to: "/regions" },
              { label: "About", to: "/about" },
            ]}
          />
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Sources</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>General Tax Code (CGI)</li>
              <li>MINHDU Urban Statistics</li>
              <li>National Investment Agency</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} TaxTerrain. All rights reserved.</p>
          <p className="tracking-[0.16em] uppercase">Yaoundé · Douala · Bamenda</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-foreground transition-opacity hover:opacity-60">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

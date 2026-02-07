import { people } from "./people";

export type SearchItem = {
  title: string;
  subtitle: string;
  href: string;
  tags: string[];
};

const staticItems: SearchItem[] = [
  { title: "Methodik & Ethik", subtitle: "Opferschutz, Redaktionen, Verifikationsregeln", href: "/methodik/", tags: ["ethik","methodik","redactions"] },
  { title: "Quellen", subtitle: "Primärquellen + Update-Log", href: "/quellen/", tags: ["doj","primärquelle","act"] },
  { title: "Angebote", subtitle: "Reale Affiliate-Programme (Privacy/Publishing)", href: "/angebote/", tags: ["affiliate","proton","ghost","vpn","security"] },
  { title: "Support", subtitle: "Funding, Newsletter, Transparenz", href: "/support/", tags: ["support","newsletter"] }
];

export const allSearchItems: SearchItem[] = [
  ...people.map(p => ({
    title: p.name,
    subtitle: p.type === "primär" ? "Primärperson (juristischer Kern)" : "Erwähnte Person (Erwähnung ≠ Beweis)",
    href: `/people/${p.slug}/`,
    tags: p.tags
  })),
  ...staticItems
];

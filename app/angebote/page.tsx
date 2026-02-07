import { Container } from "@/components/Container";
import { Card, CardBody, CardHeader } from "@/components/Card";
import { Badge } from "@/components/Badge";

export const metadata = {
  title: "Angebote (Affiliate) – Epstein Files Decoder"
};

type Offer = {
  title: string;
  why: string;
  commission: string;
  source: string;
  linkTemplate: string;
  highlight: string[];
};

const offers: Offer[] = [
  {
    title: "Proton Partners (Mail/VPN/Drive/Pass)",
    why: "Privacy-Stack für Recherche, sichere Kommunikation und Dokumenten-Handling.",
    commission: "„Bis zu 100%“ Commission (Programmaussage).",
    source: "https://proton.me/partners",
    linkTemplate: "https://YOUR-DOMAIN.tld/go/proton?src=efd",
    highlight: ["Sicheres Mail", "VPN", "Drive", "Pass", "Mission-driven"]
  },
  {
    title: "Ghost(Pro) Referral Program",
    why: "Publishing-Engine für investigativen Content: Memberships, Paywall, Newsletter.",
    commission: "30% recurring Commission auf Ghost(Pro) Payments.",
    source: "https://ghost.org/referrals/",
    linkTemplate: "https://YOUR-DOMAIN.tld/go/ghost?src=efd",
    highlight: ["Memberships", "Newsletter", "Paywall", "SEO-freundlich"]
  },
  {
    title: "NordVPN Affiliate",
    why: "Basic OPSEC für Leser/Researcher, die sicherer recherchieren wollen.",
    commission: "Bis zu 100% (1-Monat), 40% (1-2 Jahre), 30% Renewal (Programmaussage).",
    source: "https://nordvpn.com/affiliate/",
    linkTemplate: "https://YOUR-DOMAIN.tld/go/nordvpn?src=efd",
    highlight: ["Hohe Bekanntheit", "Recurring Renewal", "Global"]
  },
  {
    title: "Surfshark Affiliate",
    why: "Alternative VPN-Option, meist aggressiv bepreist → gute Conversion.",
    commission: "40% Commission (Programmaussage).",
    source: "https://surfshark.com/affiliate",
    linkTemplate: "https://YOUR-DOMAIN.tld/go/surfshark?src=efd",
    highlight: ["40% RevShare", "Gute Conversion", "Simple Funnel"]
  },
  {
    title: "1Password Affiliate",
    why: "Passwort-Manager als Standard-Empfehlung für jeden, der Accounts schützen will.",
    commission: "$2 pro Signup + 25% des ersten Jahres/Monats (Programmaussage).",
    source: "https://1password.com/affiliate/",
    linkTemplate: "https://YOUR-DOMAIN.tld/go/1password?src=efd",
    highlight: ["B2C/B2B", "Vertrauensmarke", "Security-Baseline"]
  },
  {
    title: "Fathom Analytics Affiliate",
    why: "Privacy-first Analytics als GA-Alternative; passt perfekt zu DSGVO-Fokus.",
    commission: "25% recurring Commission (Programmaussage).",
    source: "https://usefathom.com/affiliates",
    linkTemplate: "https://YOUR-DOMAIN.tld/go/fathom?src=efd",
    highlight: ["DSGVO-freundlich", "Leichtgewichtig", "Recurring"]
  }
];

export default function AngebotePage() {
  return (
    <Container className="py-10">
      <h1 className="text-3xl font-semibold">Angebote (Affiliate) – transparent & passend</h1>
      <p className="mt-3 text-zinc-300 max-w-3xl">
        Die Plattform kostet Zeit, Hosting und Indexing. Deshalb nutzen wir Affiliate-Links – aber mit klarer Offenlegung:
        Jede Empfehlung muss <span className="text-white">journalistisch/operativ sinnvoll</span> sein (Privacy, Publishing, Security).
      </p>

      <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-300">
        <span className="font-semibold text-white">Affiliate-Transparenz:</span> Wenn du über einen Link kaufst, erhalten wir ggf. eine Provision.
        Für dich entstehen keine Mehrkosten. Wir markieren alle Affiliate-Angebote eindeutig.
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {offers.map((o) => (
          <Card key={o.title}>
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">{o.title}</div>
                  <div className="text-xs text-zinc-500 mt-1">{o.why}</div>
                </div>
                <Badge>Affiliate</Badge>
              </div>
            </CardHeader>
            <CardBody>
              <div className="text-sm text-zinc-300">
                <div><span className="text-zinc-400">Provision:</span> {o.commission}</div>
                <div className="mt-2 text-xs text-zinc-400">
                  Quelle: <a href={o.source} target="_blank" rel="noreferrer">{o.source}</a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {o.highlight.map(h => (
                  <span key={h} className="text-[11px] rounded-full border border-zinc-800 px-3 py-1 text-zinc-300">{h}</span>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
                <div className="text-xs text-zinc-500">Tracking-Link (Template)</div>
                <div className="text-xs text-zinc-200 font-mono break-all mt-1">{o.linkTemplate}</div>
              </div>

              <div className="mt-4 text-xs text-zinc-500">
                Hinweis: Ersetze <span className="font-mono text-zinc-300">YOUR-DOMAIN.tld</span> und richte Redirects (z.B. Netlify redirects / Vercel rewrites) ein.
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
        <div className="text-sm font-semibold">High-Ticket-Strategie (ohne Bullshit)</div>
        <div className="mt-2 text-sm text-zinc-300 space-y-2">
          <p>• B2B/Team-Pläne hervorheben (Proton Business, 1Password Business, Ghost höhere Tiers).</p>
          <p>• Use Case statt Hype: „Secure research workflow“ + „Publish with memberships“ + „Privacy-first analytics“.</p>
          <p>• Trust-Boost: Offenlegung + klare, nützliche Empfehlungen erhöhen Conversion langfristig stärker als Tricks.</p>
        </div>
      </div>
    </Container>
  );
}

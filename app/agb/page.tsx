import { Container } from "@/components/Container";

export const metadata = {
  title: "AGB – Epstein Files Decoder"
};

export default function AgbPage() {
  return (
    <Container className="py-10 prose prose-invert max-w-3xl">
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>

      <p><strong>Hinweis:</strong> Diese AGB sind ein praxisnahes Muster für eine Content-/Membership-Plattform und ersetzen keine Rechtsberatung.</p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese AGB gelten für die Nutzung der Website „Epstein Files Decoder“ sowie für kostenpflichtige digitale Leistungen
        (z.B. Premium-Mitgliedschaften, digitale Exporte), sofern angeboten.
      </p>

      <h2>2. Leistungen</h2>
      <p>
        Wir stellen kuratierte Informationen, Kontext und Verweise auf Primärquellen bereit. Wir garantieren keine Vollständigkeit,
        da Datenbestände groß, redigiert und teils uneinheitlich sein können.
      </p>

      <h2>3. Nutzerpflichten</h2>
      <ul>
        <li>Keine Veröffentlichung oder Weitergabe sensibler personenbezogener Daten (insbesondere Betroffene/Zeugen).</li>
        <li>Keine Nutzung der Plattform zur Verleumdung, Hetze oder doxxing.</li>
        <li>Beachtung der Hinweis-Labels: „Erwähnung ≠ Beweis“.</li>
      </ul>

      <h2>4. Affiliate-Links</h2>
      <p>
        Wir nutzen Affiliate-Links zur Finanzierung. Alle entsprechenden Angebote sind transparent gekennzeichnet.
      </p>

      <h2>5. Haftung</h2>
      <p>
        Wir haften nicht für die Inhalte externer Links. Für eigene Inhalte haften wir nur im Rahmen der gesetzlichen Vorschriften.
      </p>

      <h2>6. Schlussbestimmungen</h2>
      <p>
        Es gilt deutsches Recht, soweit zulässig. Sollten einzelne Klauseln unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt.
      </p>

      <hr/>

      <h2>Kontakt / Anbieter</h2>
      <p>
        Wissens-Bank, Rolf Schwertfechter, Karklandsweg 1, 26553 Dornum, rps-vertrieb@t-online.de
      </p>
    </Container>
  );
}

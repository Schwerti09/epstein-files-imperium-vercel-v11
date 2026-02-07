import { Container } from "@/components/Container";

export const metadata = {
  title: "Datenschutz – Epstein Files Decoder"
};

export default function DatenschutzPage() {
  return (
    <Container className="py-10 prose prose-invert max-w-3xl">
      <h1>Datenschutzerklärung</h1>

      <p><strong>Verantwortlicher</strong><br/>
        Wissens-Bank<br/>
        Rolf Schwertfechter<br/>
        Karklandsweg 1<br/>
        26553 Dornum<br/>
        E-Mail: rps-vertrieb@t-online.de
      </p>

      <h2>1. Grundsatz</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website erforderlich ist oder eine Einwilligung vorliegt.
        Diese Seite ist als statische Website gebaut (kein serverseitiges User-Tracking im MVP).
      </p>

      <h2>2. Server-Logfiles</h2>
      <p>
        Beim Aufruf der Website werden durch den Hosting-Provider technisch bedingt Logdaten (z.B. IP-Adresse, Zeitpunkt, User-Agent) verarbeitet.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Betrieb/Sicherheit).
      </p>

      <h2>3. Cookies</h2>
      <p>
        Wir verwenden einen lokalen Consent-Speicher (LocalStorage) für die Cookie-Einstellungen. Technisch notwendige Funktionen laufen ohne Tracking.
        Optionale Analytics werden nur nach Einwilligung aktiviert.
      </p>

      <h2>4. Analytics (optional)</h2>
      <p>
        Wenn du zustimmst, können wir datensparsame Analytics einsetzen (z.B. Fathom/Plausible). Details (Anbieter, Daten, Speicherdauer)
        sind vor Live-Schaltung zu ergänzen, sobald der konkrete Dienst feststeht. Ohne Einwilligung wird kein Analytics geladen.
      </p>

      <h2>5. Affiliate-Links</h2>
      <p>
        Einige Links sind Affiliate-Links. Beim Klick kann der Partner Cookies setzen, um eine Provision zuzuordnen.
        Wir kennzeichnen Affiliate-Angebote transparent. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Finanzierung/Betrieb).
        Soweit Einwilligungen für Cookies erforderlich sind, erfolgt dies über den Consent-Banner.
      </p>

      <h2>6. Kontaktaufnahme</h2>
      <p>
        Wenn du uns per E-Mail kontaktierst, verarbeiten wir die von dir übermittelten Daten zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b/f DSGVO).
        Bitte sende keine sensiblen personenbezogenen Daten.
      </p>

      <h2>7. Betroffenenrechte</h2>
      <ul>
        <li>Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit</li>
        <li>Widerspruch gegen Verarbeitung</li>
        <li>Beschwerde bei einer Aufsichtsbehörde</li>
      </ul>

      <h2>8. Opferschutz & Content-Policy</h2>
      <p>
        Wir veröffentlichen keine Opferidentifikationsdaten und hosten keine ungeschwärzten Originaldokumente.
        Meldungen zu möglichen Verstößen nehmen wir prioritär entgegen.
      </p>

      <hr/>

      <p><strong>Stand:</strong> 06.02.2026</p>
    </Container>
  );
}

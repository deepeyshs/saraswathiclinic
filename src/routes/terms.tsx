import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "./privacy";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Website Terms | Saraswathi Clinic Hennur" },
      { name: "description", content: "Website terms for Saraswathi Clinic in Hennur, Bengaluru." },
      { property: "og:title", content: "Website Terms | Saraswathi Clinic" },
      { property: "og:description", content: "Website terms for the Saraswathi Clinic website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalPage title="Website Terms"><p>The information on this website is general and is not a substitute for medical advice, diagnosis, or treatment. Call the clinic to ask about consultation availability and current timings.</p><p>Clinic hours and listing information can change. Please confirm by calling <a className="font-semibold text-primary" href="tel:+917204435914">072044 35914</a> before visiting.</p></LegalPage>;
}
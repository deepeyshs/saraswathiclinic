import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Saraswathi Clinic Hennur" },
      { name: "description", content: "Privacy information for the Saraswathi Clinic website in Hennur, Bengaluru." },
      { property: "og:title", content: "Privacy Policy | Saraswathi Clinic" },
      { property: "og:description", content: "Privacy information for the Saraswathi Clinic website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalPage title="Privacy Policy"><p>This website does not collect health information or offer online appointment booking. When you use a phone or maps link, the relevant service provider may process information under its own privacy terms.</p><p>For questions about this website or the clinic, call <a className="font-semibold text-primary" href="tel:+917204435914">072044 35914</a>.</p></LegalPage>;
}

function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <main className="min-h-screen bg-clinic-wash px-4 py-16"><article className="mx-auto max-w-2xl rounded-xl border border-border bg-background p-7 shadow-card sm:p-10"><Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft className="size-4" />Back to clinic</Link><h1 className="text-3xl font-bold text-clinic-deep">{title}</h1><div className="mt-6 space-y-4 leading-7 text-muted-foreground">{children}</div></article></main>;
}

export { LegalPage };
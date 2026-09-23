import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Cross,
  HeartHandshake,
  HeartPulse,
  MapPin,
  MessageCircleMore,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import clinicCareImage from "@/assets/saraswathi-clinic-care.jpg";

const phoneDisplay = "072044 35914";
const phoneHref = "tel:+917204435914";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Saraswathi+Clinic+Gouder+Colony+Hennur+Village+Road+Bengaluru+560043";
const reviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Saraswathi+Clinic+Hennur+Bengaluru";

const services = [
  { icon: Stethoscope, title: "General Consultation", text: "Discuss health concerns and understand suitable next steps." },
  { icon: Users, title: "Family Healthcare", text: "Accessible general medical care for individuals and families." },
  { icon: ShieldCheck, title: "Preventive Health Guidance", text: "Practical conversations about maintaining everyday wellbeing." },
  { icon: CalendarCheck, title: "Health Check-ups", text: "Call ahead to enquire about general health check-ups." },
  { icon: Activity, title: "Common Illness Consultation", text: "Consultation for common health concerns and symptoms." },
  { icon: HeartPulse, title: "Chronic Condition Management", text: "Ongoing consultation and guidance for long-term health concerns." },
  { icon: CheckCircle2, title: "Follow-up Consultation", text: "Continue the conversation and review progress after a visit." },
  { icon: MessageCircleMore, title: "General Medical Advice", text: "Clear guidance to help you better understand your health." },
];

const benefits = [
  { icon: HeartHandshake, title: "Patient-Focused Consultation", text: "Space to explain your concerns and feel heard." },
  { icon: MessageCircleMore, title: "Clear Communication", text: "Medical information explained in a more understandable way." },
  { icon: MapPin, title: "Convenient Location", text: "Located in Hennur Gardens, Bengaluru." },
  { icon: Users, title: "Family-Friendly Care", text: "Accessible general healthcare for individuals and families." },
  { icon: Phone, title: "Easy Contact", text: "A direct clinic number and simple directions when you need them." },
];

const faqs = [
  {
    question: "Where is Saraswathi Clinic located?",
    answer:
      "Saraswathi Clinic is located in Gouder Colony on Hennur Village Road, near DX Max Susheela Scion Apartment, Punappa Layout, Hennur Gardens, Bengaluru.",
  },
  {
    question: "What time does the clinic close?",
    answer:
      "The provided listing shows the clinic open until 9 PM. Timings can change, so please call before visiting.",
  },
  { question: "How can I contact Saraswathi Clinic?", answer: `Call ${phoneDisplay} to speak with the clinic.` },
  {
    question: "How can I reach the clinic?",
    answer: "Use the Get Directions button on this page to open navigation to the clinic in Google Maps.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saraswathi Clinic Hennur | Family Medical Clinic Bengaluru" },
      {
        name: "description",
        content:
          "Visit Saraswathi Clinic in Hennur Gardens, Bengaluru for accessible family medical care. Rated 4.8/5 from 234 Google reviews. Call 072044 35914.",
      },
      { property: "og:title", content: "Saraswathi Clinic | Trusted Family Healthcare in Hennur" },
      {
        property: "og:description",
        content: "Compassionate medical care, clear guidance and convenient access for you and your family in Hennur, Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Saraswathi Clinic",
          telephone: "+91 72044 35914",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Gouder Colony, Hennur Village Road, near DX Max Susheela Scion Apartment, Punappa Layout, Hennur Gardens",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560043",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "234" },
        }),
      },
    ],
  }),
  component: ClinicPage,
});

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Saraswathi Clinic home">
      <span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-clinic">
        <Cross className="size-5" strokeWidth={2.5} />
      </span>
      <span>
        <span className="block font-display text-sm font-extrabold leading-none text-clinic-deep sm:text-base">SARASWATHI CLINIC</span>
        <span className="mt-1 block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Family medical care</span>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, center = false }: { eyebrow: string; title: string; copy?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight text-clinic-deep sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{copy}</p> : null}
    </div>
  );
}

function ClinicPage() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background pb-20 text-foreground md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="section-shell flex h-18 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground lg:flex" aria-label="Main navigation">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#services" className="transition-colors hover:text-primary">Services</a>
            <a href="#reviews" className="transition-colors hover:text-primary">Reviews</a>
            <a href="#location" className="transition-colors hover:text-primary">Location</a>
          </nav>
          <Button variant="clinic" size="clinic" asChild className="hidden sm:inline-flex">
            <a href={phoneHref}><Phone />Call {phoneDisplay}</a>
          </Button>
          <a href={phoneHref} aria-label="Call Saraswathi Clinic" className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground sm:hidden">
            <Phone className="size-5" />
          </a>
        </div>
      </header>

      <main>
        <section className="relative border-b border-border/70 bg-clinic-wash subtle-grid">
          <div className="section-shell grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
            <div className="reveal-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-3 py-2 text-xs font-bold text-primary shadow-sm sm:text-sm">
                <span className="size-2 rounded-full bg-primary" />Medical Clinic · Hennur Gardens
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] text-clinic-deep sm:text-5xl lg:text-6xl">
                Trusted Family Healthcare in Hennur, Bengaluru
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Compassionate medical care, clear guidance and convenient access for you and your family.
              </p>
              <a href={reviewsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-clinic-deep">
                <span className="flex text-clinic-gold" aria-hidden="true">★★★★★</span>
                <span>4.8/5 Google Rating</span><span className="font-medium text-muted-foreground">· 234 Reviews</span>
              </a>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="clinic" size="clinic" asChild><a href={phoneHref}><Phone />Call the Clinic</a></Button>
                <Button variant="clinicOutline" size="clinic" asChild><a href={mapsUrl} target="_blank" rel="noreferrer"><Navigation />Get Directions</a></Button>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground"><HeartHandshake className="size-4 text-primary" />Serving families in Hennur and nearby Bengaluru communities.</p>
            </div>
            <div className="relative reveal-up lg:pl-4">
              <div className="overflow-hidden rounded-2xl border-8 border-background shadow-card">
                <img src={clinicCareImage} alt="A family discussing healthcare with a doctor in a bright clinic" width={1600} height={1200} fetchPriority="high" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="absolute -bottom-4 left-3 flex items-center gap-3 rounded-lg border border-border bg-background p-3 shadow-card sm:left-0 sm:p-4">
                <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary"><BadgeCheck className="size-5" /></span>
                <div><p className="text-xs font-medium text-muted-foreground">Patient rated</p><p className="font-display text-sm font-bold text-clinic-deep">4.8 out of 5 on Google</p></div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Clinic highlights" className="border-b border-border bg-background">
          <div className="section-shell grid grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
            {[
              { icon: Star, strong: "4.8/5", text: "Google Rating" },
              { icon: Stethoscope, strong: "Family", text: "Medical Care" },
              { icon: MapPin, strong: "Hennur", text: "Convenient Location" },
              { icon: Clock3, strong: "Until 9 PM", text: "Current Listing" },
            ].map(({ icon: Icon, strong, text }) => <div key={strong} className="flex items-center gap-3 px-3 py-5 sm:px-6"><Icon className="size-5 shrink-0 text-primary" /><div><p className="font-display text-sm font-bold text-clinic-deep sm:text-base">{strong}</p><p className="text-xs text-muted-foreground sm:text-sm">{text}</p></div></div>)}
          </div>
        </section>

        <section id="about" className="py-20 sm:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <SectionHeading eyebrow="About Saraswathi Clinic" title="Healthcare That Puts You First" />
            <div className="border-l-2 border-primary/25 pl-6 sm:pl-10">
              <p className="text-xl leading-9 text-clinic-deep">Saraswathi Clinic provides accessible medical care with an emphasis on listening, clear explanations, and helping patients understand their treatment.</p>
              <p className="mt-5 leading-7 text-muted-foreground">Whether you are seeking a general consultation, following up on a health concern, or looking for family medical guidance, the clinic aims to make each conversation clear and approachable. Please call to confirm the right consultation for your needs.</p>
              <Button variant="link" asChild className="mt-5 h-auto px-0 text-base font-bold"><a href={phoneHref}>Speak with the clinic <ArrowRight /></a></Button>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-border bg-clinic-wash py-20 sm:py-28">
          <div className="section-shell">
            <SectionHeading center eyebrow="General Healthcare" title="Care for Everyday Health Needs" copy="General consultation categories to help you start the right conversation. Call the clinic to confirm availability for your needs." />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text }) => <article key={title} className="group rounded-xl border border-border bg-background p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"><span className="grid size-11 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-bold text-clinic-deep">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
            </div>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"><span className="font-semibold text-clinic-deep">Need medical advice?</span><Button variant="clinic" asChild><a href={phoneHref}><Phone />Call the clinic</a></Button></div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <SectionHeading eyebrow="Thoughtful, Accessible Care" title="Why Patients Choose Us" copy="Simple qualities that help make a clinic visit feel more approachable." />
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, text }, index) => <div key={title} className={index === benefits.length - 1 ? "sm:col-span-2" : ""}><div className="flex gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Icon className="size-5" /></span><div><h3 className="font-bold text-clinic-deep">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div></div></div>)}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-clinic-deep py-20 text-primary-foreground sm:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-clinic-soft">Google Reviews</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trusted by Patients in Hennur</h2>
              <div className="mt-7 flex items-end gap-3"><span className="font-display text-6xl font-extrabold">4.8</span><div className="pb-1"><div className="text-xl text-clinic-gold">★★★★★</div><p className="mt-1 text-sm text-primary-foreground/70">234 Google Reviews</p></div></div>
              <Button variant="clinicLight" size="clinic" asChild className="mt-8"><a href={reviewsUrl} target="_blank" rel="noreferrer"><Star />View Google Reviews</a></Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Patients mention that the doctor listens patiently and explains clearly.", "Some reviews describe effective treatment.", "One review describes the clinic as a good family physician in the HBR Layout and Hennur area."].map((theme) => <div key={theme} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 p-6"><Sparkles className="size-5 text-clinic-soft" /><p className="mt-5 text-sm leading-7 text-primary-foreground/85">{theme}</p></div>)}
              <p className="text-xs leading-5 text-primary-foreground/60 sm:col-span-3">Review themes are summaries of publicly shared feedback, not direct quotations. Individual experiences can vary.</p>
            </div>
          </div>
        </section>

        <section id="location" className="py-20 sm:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Hennur Gardens, Bengaluru" title="Visit Saraswathi Clinic" copy="Conveniently located off Hennur Village Road. Please call before visiting to confirm current clinic timings." />
            <div className="mt-10 grid overflow-hidden rounded-2xl border border-border bg-background shadow-card lg:grid-cols-2">
              <iframe title="Map showing Saraswathi Clinic in Hennur, Bengaluru" src="https://www.google.com/maps?q=Saraswathi%20Clinic%2C%20Gouder%20Colony%2C%20Hennur%20Village%20Road%2C%20Bengaluru%20560043&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 lg:h-full" />
              <div className="p-7 sm:p-10">
                <span className="grid size-12 place-items-center rounded-lg bg-secondary text-primary"><MapPin /></span>
                <address className="mt-6 not-italic text-lg leading-8 text-clinic-deep">Gouder Colony, Hennur Village Road<br />Near DX Max Susheela Scion Apartment<br />Punappa Layout, Hennur Gardens<br />Bengaluru, Karnataka 560043</address>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="clinic" size="clinic" asChild><a href={mapsUrl} target="_blank" rel="noreferrer"><Navigation />Get Directions</a></Button>
                  <Button variant="clinicOutline" size="clinic" asChild><a href={phoneHref}><Phone />Call {phoneDisplay}</a></Button>
                </div>
                <div className="mt-7 flex items-start gap-3 border-t border-border pt-6"><Clock3 className="mt-0.5 size-5 text-primary" /><div><p className="font-bold text-clinic-deep">Current listing: Open · Closes 9 PM</p><p className="mt-1 text-sm text-muted-foreground">Clinic timings can change. Call before visiting.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-clinic-wash py-16 sm:py-20">
          <div className="section-shell flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
            <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Contact the clinic</p><h2 className="mt-2 text-3xl font-bold text-clinic-deep">Need a Doctor? We’re Here to Help.</h2><p className="mt-3 max-w-2xl text-muted-foreground">Call Saraswathi Clinic to enquire about consultation availability and clinic timings.</p></div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><Button variant="clinic" size="clinic" asChild><a href={phoneHref}><Phone />Call {phoneDisplay}</a></Button><Button variant="clinicOutline" size="clinic" asChild><a href={mapsUrl} target="_blank" rel="noreferrer"><Navigation />Get Directions</a></Button></div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <SectionHeading eyebrow="Helpful Information" title="Frequently Asked Questions" />
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map(({ question, answer }) => <AccordionItem key={question} value={question}><AccordionTrigger className="py-6 text-base font-bold text-clinic-deep hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-base leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </div>
        </section>

        <section className="section-shell mb-20 overflow-hidden rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-clinic sm:px-12 sm:py-16">
          <HeartPulse className="mx-auto size-9" />
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Your Health Deserves Attention.</h2>
          <p className="mt-3 text-primary-foreground/80">Speak with Saraswathi Clinic today.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button variant="clinicLight" size="clinic" asChild><a href={phoneHref}><Phone />Call Now</a></Button><Button variant="clinicLight" size="clinic" asChild><a href={mapsUrl} target="_blank" rel="noreferrer"><Navigation />Get Directions</a></Button></div>
        </section>
      </main>

      <footer className="border-t border-border bg-clinic-deep py-12 text-primary-foreground">
        <div className="section-shell grid gap-9 md:grid-cols-[1fr_1fr] md:items-end">
          <div><p className="font-display text-lg font-extrabold">SARASWATHI CLINIC</p><p className="mt-2 text-sm text-primary-foreground/70">Medical Clinic · Hennur, Bengaluru</p><p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/60">Gouder Colony, Hennur Village Road, Hennur Gardens, Bengaluru, Karnataka 560043</p></div>
          <div className="md:text-right"><div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold md:justify-end"><a href={phoneHref}>Call</a><a href={mapsUrl} target="_blank" rel="noreferrer">Directions</a><a href={reviewsUrl} target="_blank" rel="noreferrer">Google Reviews</a><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms</Link></div><p className="mt-6 text-xs text-primary-foreground/50">© {new Date().getFullYear()} Saraswathi Clinic. Clinic information may change; please call to confirm.</p></div>
        </div>
      </footer>

      <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background p-2 shadow-card md:hidden">
        <a href={phoneHref} className="flex h-14 items-center justify-center gap-2 rounded-lg bg-primary font-bold text-primary-foreground"><Phone className="size-5" />Call Now</a>
        <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex h-14 items-center justify-center gap-2 font-bold text-primary"><Navigation className="size-5" />Directions</a>
      </nav>
    </div>
  );
}
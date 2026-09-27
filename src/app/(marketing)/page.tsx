import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { PracticeAreaIcon } from "@/components/marketing/practice-area-icon";
import { AttorneyPortrait } from "@/components/marketing/attorney-portrait";
import { SITE_WORDMARK } from "@/lib/site-config";
import { practiceAreas } from "@/lib/content/practice-areas";
import { attorneys } from "@/lib/content/attorneys";
import { caseResults } from "@/lib/content/case-results";
import { testimonials } from "@/lib/content/testimonials";

const stats = [
  { label: "Years serving clients", value: "15+" },
  { label: "Matters opened", value: "5,100+" },
  { label: "Practice areas", value: `${practiceAreas.length}` },
  { label: "Client portal uptime", value: "99.98%" },
];

const portalSteps = [
  {
    title: "We open your matter",
    body: "Once your intake is reviewed and accepted, we create your secure case file and portal access.",
  },
  {
    title: "Track it in real time",
    body: "See your case status, next key date, and stage on your personal Docket Board, no phone tag required.",
  },
  {
    title: "Stay in the loop",
    body: "Documents, messages, and status changes all land in one place, with email notifications you control.",
  },
];

const learnMore = [
  { href: "/about", title: "About the Firm", body: "Our story, our values, and what clients say." },
  { href: "/case-results", title: "Case Results", body: "A sample of outcomes we've secured for clients." },
  { href: "/faq", title: "FAQ", body: "Answers to the questions we hear most often." },
  { href: "/locations", title: "Locations", body: "Office addresses, hours, and how to reach us." },
];

const featuredSlugs = [
  "multi-vehicle-collision-settlement",
  "series-a-financing",
  "unlawful-search-dismissal",
] as const;

const featuredResults = featuredSlugs.map(
  (slug) => caseResults.find((r) => r.slug === slug)!
);

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#0c0a08]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0c0a08] via-[#0c0a08]/70 to-[#0c0a08]/20" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent-2">
            {SITE_WORDMARK} — Chicago, IL
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-[#f5f2ea] sm:text-6xl lg:text-7xl">
            Steady counsel,<br />clearly communicated.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-[#f5f2ea]/70">
            Dwight Davis & Associates helps families and founders move through legal
            complexity with a practical plan, honest timelines, and a portal
            built to keep you informed at every step.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" transitionTypes={["nav-forward"]}>
              <Button variant="primary" className="rounded-none bg-[#f5f2ea] text-[#10233d] hover:opacity-90">
                Request a Consultation
              </Button>
            </Link>
            <Link href="/login" transitionTypes={["nav-forward"]}>
              <Button variant="secondary" className="rounded-none border-[#f5f2ea]/30 text-[#f5f2ea] hover:border-[#f5f2ea] hover:bg-[#f5f2ea]/10">
                Client Portal Login
              </Button>
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#f5f2ea]/15 pt-8 text-xs tracking-wide text-[#f5f2ea]/50 uppercase">
            <span>Licensed in:</span>
            <span className="font-mono">Illinois</span>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60} className="px-6 py-10 sm:px-8">
              <p className="font-display text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="practice-areas" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">01 — What We Handle</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Practice Areas</h2>
          </div>
        </Reveal>
        <div className="mt-12 divide-y divide-border border-t border-border">
          {practiceAreas.map((area, i) => (
            <Reveal key={area.slug} delay={(i % 5) * 60}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-card"
              >
                <div className="flex items-center gap-5">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <PracticeAreaIcon slug={area.slug} className="h-5 w-5 text-accent" />
                  <div>
                    <h3 className="font-display text-xl">{area.name}</h3>
                    <p className="mt-1 hidden max-w-xl text-sm text-muted-foreground sm:block">
                      {area.blurb}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
                  aria-hidden
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-2">In Their Words</p>
            <blockquote className="mt-6 font-display text-2xl leading-snug italic sm:text-3xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-background/60">— {testimonials[0].context}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">02 — Track Record</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl">Cases We&apos;ve Won</h2>
              </div>
              <Link
                href="/case-results"
                className="inline-flex items-center gap-1 text-sm text-foreground hover:text-accent"
              >
                See all results <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {featuredResults.map((result, i) => (
              <Reveal key={result.slug} delay={i * 80} className="bg-background p-8">
                <p className="font-display text-4xl text-accent">{result.figure}</p>
                <p className="mt-4 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {practiceAreas.find((a) => a.slug === result.practiceArea)?.name}
                </p>
                <p className="mt-2 font-medium text-foreground">{result.summary}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Prior results do not guarantee a similar outcome in your matter.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">03 — The Client Portal</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              How It Works
            </h2>
            <div className="mt-10 space-y-8">
              {portalSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 80} className="flex gap-5">
                  <span className="font-mono text-sm text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal direction="right" className="relative aspect-4/5 w-full overflow-hidden lg:aspect-3/4">
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">04 — The Team</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Our Attorneys</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {attorneys.map((attorney, i) => (
              <Reveal key={attorney.slug} delay={i * 80}>
                <Link href={`/attorneys/${attorney.slug}`} className="group block h-full">
                  <AttorneyPortrait name={attorney.name} image={attorney.image} />
                  <h3 className="mt-5 font-display text-xl">{attorney.name}</h3>
                  <p className="mt-1 text-sm text-accent">{attorney.title}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{attorney.bio}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-foreground group-hover:text-accent">
                    View profile <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">05 — Learn More</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Explore the Firm</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 divide-y divide-border border-t border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {learnMore.map((item, i) => (
              <Reveal key={item.href} delay={(i % 4) * 60} className="py-6 sm:px-8 sm:py-0">
                <Link href={item.href} className="group block h-full py-2">
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-foreground group-hover:text-accent">
                    Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

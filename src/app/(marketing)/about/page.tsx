import Image from "next/image";
import { testimonials } from "@/lib/content/testimonials";
import { practiceAreas } from "@/lib/content/practice-areas";
import { Reveal } from "@/components/motion/reveal";

export const metadata = {
  title: "About",
  description:
    "Dwight Davis & Associates has served clients since 2011 across family law, business, personal injury, real estate, estate planning, and more, with a client portal that always shows you where your matter stands.",
};

const stats = [
  { label: "Years serving clients", value: "15+" },
  { label: "Matters opened", value: "4,200+" },
  { label: "Practice areas", value: `${practiceAreas.length}` },
  { label: "Client portal uptime", value: "99.9%" },
];

const values = [
  {
    title: "Responsive Communication",
    body: "You will never wonder if your call was received. Every attorney and staff member commits to a same-business-day response.",
  },
  {
    title: "Transparent Billing",
    body: "Fee arrangements are agreed to in writing before work begins, whether that's hourly, flat-fee, or contingency.",
  },
  {
    title: "Real Trial Experience",
    body: "Our attorneys prepare every matter as though it could go to trial, which tends to produce better settlements too.",
  },
  {
    title: "A Portal That Keeps You Informed",
    body: "Status changes, documents, and messages all land in one secure place, not scattered across email and voicemail.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#0c0a08]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0c0a08] via-[#0c0a08]/60 to-[#0c0a08]/20" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-2">
            Est. 2011 — Chicago
          </p>
          <h1 className="mt-4 font-display text-5xl text-[#f5f2ea] sm:text-6xl">
            About Dwight Davis & Associates
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[#f5f2ea]/70">
            Dwight Davis & Associates was founded in Chicago in 2011 on a
            simple premise: clients deserve a straight answer and to always
            know where their matter stands. More than a decade later,
            that&apos;s still what sets us apart: steady counsel, clearly
            communicated, backed by a portal that keeps you informed without
            having to ask.
          </p>
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

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal direction="left" className="relative aspect-4/5 w-full overflow-hidden lg:aspect-3/4">
          <Image
            src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b"
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Why Dwight Davis & Associates</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            A different kind of counsel
          </h2>
          <div className="mt-10 space-y-8">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 4) * 80}>
                <h3 className="font-display text-lg">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-2">What Clients Say</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.quote} delay={i * 80} className="border-l border-background/20 pl-6">
                <p className="font-display text-lg leading-snug italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm text-background/60">
                  — {testimonial.context}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-xs text-background/50">
            Testimonials reflect individual experiences and do not guarantee
            a similar outcome for your matter.
          </p>
        </div>
      </section>
    </div>
  );
}

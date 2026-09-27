import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CaseResultsExplorer } from "@/components/marketing/case-results-explorer";
import { caseResultStats } from "@/lib/content/case-results";

export const metadata = {
  title: "Case Results",
  description:
    "A sample of case results Dwight Davis & Associates has secured for clients: settlements, dismissals, and closed deals across every practice area.",
};

export default function CaseResultsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#0c0a08]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0c0a08] via-[#0c0a08]/65 to-[#0c0a08]/20" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-2">
            Track Record
          </p>
          <h1 className="mt-4 font-display text-5xl text-[#f5f2ea] sm:text-6xl">
            Cases We&apos;ve Won
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[#f5f2ea]/70">
            A sample of outcomes we&apos;ve secured for clients across every
            practice area, from seven-figure settlements to dismissed
            charges to deals closed on deadline.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-[#f5f2ea]/50">
            Prior results do not guarantee a similar outcome in your matter.
            Every case depends on its own facts.
          </p>
          <Link href="/contact" className="mt-8 inline-block" transitionTypes={["nav-forward"]}>
            <Button variant="primary" className="rounded-none bg-[#f5f2ea] text-[#10233d] hover:opacity-90">
              Discuss Your Case
            </Button>
          </Link>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
          {caseResultStats.map((stat) => (
            <div key={stat.label} className="px-6 py-10 sm:px-8">
              <p className="font-display text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <CaseResultsExplorer />
      </section>
    </div>
  );
}

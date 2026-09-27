import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/lib/content/practice-areas";
import { offices } from "@/lib/content/offices";
import { Wordmark } from "@/components/brand/wordmark";
import { SITE_CONTACT_EMAIL, SITE_NAME } from "@/lib/site-config";

const firmLinks = [
  { href: "/about", label: "About the Firm" },
  { href: "/attorneys", label: "Our Attorneys" },
  { href: "/case-results", label: "Case Results" },
  { href: "/faq", label: "FAQ" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/attorney-advertising", label: "Attorney Advertising Disclaimer" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 border-b border-background/15 pb-14 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-lg font-display text-3xl leading-tight sm:text-4xl">
            Ready to talk about your matter?
          </h2>
          <Link href="/contact" transitionTypes={["nav-forward"]}>
            <Button
              variant="primary"
              className="rounded-none bg-background text-foreground hover:opacity-90"
            >
              Request a Consultation
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Wordmark size="md" textClassName="text-background" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-background/65">
              Built for people and companies who want legal strategy without
              fog. You get practical guidance and a portal that keeps every
              deadline, document, and update in view.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest text-accent-2 uppercase">
              Practice Areas
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-background/65 hover:text-background"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest text-accent-2 uppercase">
              Firm
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {firmLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/65 hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest text-accent-2 uppercase">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-background/65">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden />
                <span className="font-mono">{SITE_CONTACT_EMAIL}</span>
              </li>
            </ul>
            <ul className="mt-5 space-y-3 text-xs text-background/65">
              {offices.map((office) => (
                <li key={office.name}>
                  <p className="font-medium text-background">{office.name}</p>
                  <p>{office.address}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-background/15 pt-8 text-sm text-background/65">
          <p className="max-w-2xl">
            Attorney Advertising. Prior results do not guarantee a similar
            outcome. This site is for general information only and does not
            constitute legal advice.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-background">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-6">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

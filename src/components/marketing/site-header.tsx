"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/brand/wordmark";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/case-results", label: "Case Results" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md">
      <div className="hidden border-b border-border lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 font-mono text-xs tracking-wide text-muted-foreground">
          <span>Legal counsel for families and founders — Chicago, IL</span>
          <div className="flex items-center gap-6">
            <Link href="/login" className="hover:text-foreground">
              Client Portal Login
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <Wordmark size="lg" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  transitionTypes={["nav-forward"]}
                  className={cn(
                    "font-mono text-xs tracking-widest uppercase transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" transitionTypes={["nav-forward"]}>
              <Button variant="primary" className="rounded-none">
                Request a Consultation
              </Button>
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>
      <div className="accent-rule" aria-hidden />

      {menuOpen && (
        <nav
          aria-label="Primary mobile"
          className="border-b border-border bg-background px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1 text-sm">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    transitionTypes={["nav-forward"]}
                    className={cn(
                      "block px-3 py-2.5",
                      isActive
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="border border-primary px-4 py-2.5 text-center text-sm text-primary"
            >
              Client Portal
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} transitionTypes={["nav-forward"]}>
              <Button variant="primary" className="w-full rounded-none">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

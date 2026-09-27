import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { offices } from "@/lib/content/offices";

export const metadata = {
  title: "Locations",
  description:
    "Dwight Davis & Associates office locations and hours. Walk-ins accepted by appointment; portal clients can message their attorney directly.",
};

const officeImages = [
  "https://images.unsplash.com/photo-1546436836-07a91091f160",
];

export default function LocationsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#0c0a08]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522083165195-3424ed129620"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0c0a08] via-[#0c0a08]/60 to-[#0c0a08]/20" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-2">
            Visit Us
          </p>
          <h1 className="mt-4 font-display text-5xl text-[#f5f2ea] sm:text-6xl">Our Offices</h1>
          <p className="mt-8 max-w-2xl text-lg text-[#f5f2ea]/70">
            Our office accepts walk-ins by appointment. Portal clients can
            also message their attorney directly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {offices.map((office, i) => (
            <Reveal key={office.name} delay={i * 100}>
              <Card className="lift h-full overflow-hidden rounded-none p-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={officeImages[i % officeImages.length]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="font-display text-xl">{office.name}</h2>
                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {office.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {office.hours}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="lift mt-6 inline-flex items-center gap-1.5 border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    Get in Touch
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

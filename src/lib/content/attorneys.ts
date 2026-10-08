// Placeholder demo content — swap for real attorney bios when available.
// Mirrors the eventual `Attorney` table (M2).
export const attorneys = [
  {
    slug: "dwight-davis",
    name: "Dwight Davis",
    title: "Founding Partner",
    image: "/images/attorneys/dwight-davis.jpg" as string | undefined,
    practiceAreas: ["business-corporate", "employment-law"],
    bio: "Dwight founded the firm on the idea that business owners deserve a lawyer who understands the deal, not just the document.",
    longBio:
      "Dwight has spent over two decades advising founders and employers on formation, contracts, financing, and workplace policy, helping clients avoid disputes before they start and resolve them efficiently when they can't.",
    education: [
      { school: "Northwestern University Pritzker School of Law", degree: "JD", year: "1999" },
      { school: "University of Illinois Urbana-Champaign", degree: "B.A., Economics", year: "1996" },
    ],
    barAdmissions: ["Illinois"],
    notableMatters: [
      "Advised a founding team through a Series A financing",
      "Negotiated the sale of a regional logistics company to a national acquirer",
    ],
  },
  {
    slug: "renee-castellano",
    name: "Renee Castellano",
    title: "Founding Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" as string | undefined,
    practiceAreas: ["family-law", "immigration-law"],
    bio: "Renee co-founded the firm on the idea that clients deserve a straight answer, not a runaround.",
    longBio:
      "Renee has spent nearly two decades advising families through divorce, custody, and immigration matters, from straightforward uncontested filings to complex cross-border cases. She's known for translating dense legal language into a decision clients can actually make.",
    education: [
      { school: "University of Chicago Law School", degree: "JD", year: "2003" },
      { school: "DePaul University", degree: "B.A., Political Science", year: "2000" },
    ],
    barAdmissions: ["Illinois"],
    notableMatters: [
      "Negotiated a parenting plan preserving joint custody across a cross-border relocation",
      "Represented a family through a complex sponsorship and permanent residency application",
    ],
  },
  {
    slug: "marcus-whitfield",
    name: "Marcus Whitfield",
    title: "Attorney at Law, Head of Wills, Estates and Trusts",
    image: "/images/attorneys/marcus-whitfield.jpg" as string | undefined,
    practiceAreas: ["estate-planning"],
    bio: "Marcus leads the Wills, Estates and Trusts practice at Dwight Davis & Associates, advising clients across Illinois on wills, estate planning, and trust administration.",
    longBio:
      "Marcus Whitfield, Esq. heads the Wills, Estates and Trusts group at Dwight Davis & Associates, based in Chicago. He advises individuals and families on wills, estate planning, and trust administration.",
    education: [] as { school: string; degree: string; year: string }[],
    barAdmissions: ["Illinois"],
    notableMatters: [] as string[],
  },
] as const;

export type AttorneySlug = (typeof attorneys)[number]["slug"];

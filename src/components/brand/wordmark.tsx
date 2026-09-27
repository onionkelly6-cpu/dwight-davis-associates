import { cn } from "@/lib/utils";
import { SITE_WORDMARK } from "@/lib/site-config";

const sizes = {
  sm: { box: 32, stroke: 18, gap: "gap-2", text: "text-base" },
  md: { box: 40, stroke: 22, gap: "gap-2.5", text: "text-lg" },
  lg: { box: 56, stroke: 30, gap: "gap-3", text: "text-2xl" },
  xl: { box: 88, stroke: 46, gap: "gap-4", text: "text-3xl" },
} as const;

type WordmarkProps = {
  size?: keyof typeof sizes;
  showText?: boolean;
  className?: string;
  textClassName?: string;
};

/**
 * Scale-of-justice mark in a ringed circle, matching the favicon in
 * src/app/icon.tsx so the browser tab icon and the in-page mark are the
 * same design.
 */
export function Wordmark({ size = "md", showText = true, className, textClassName }: WordmarkProps) {
  const { box, stroke, gap, text } = sizes[size];

  return (
    <span className={cn("inline-flex items-center", gap, className)}>
      <span
        className="flex shrink-0 items-center justify-center rounded-full"
        style={{
          width: box,
          height: box,
          background: "#f5f2ea",
          border: "1px solid #b8863b",
        }}
      >
        <svg
          width={stroke}
          height={stroke}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10233d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 3v18" />
          <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
          <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
          <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
          <path d="M7 21h10" />
        </svg>
      </span>
      {showText && (
        <span
          className={cn(
            "font-display leading-none tracking-tight text-foreground",
            text,
            textClassName
          )}
        >
          {SITE_WORDMARK}
        </span>
      )}
    </span>
  );
}

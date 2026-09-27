import Image from "next/image";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Portrait-crop treatment for editorial team grids (homepage, attorneys
 * index, attorney profile). Distinct from AttorneyAvatar, which stays a
 * small circular mark for compact/inline mentions (mini attorney lists).
 */
export function AttorneyPortrait({
  name,
  image,
  className,
}: {
  name: string;
  image?: string;
  className?: string;
}) {
  if (image) {
    return (
      <div className={cn("relative aspect-4/5 w-full overflow-hidden bg-muted", className)}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "flex aspect-4/5 w-full items-center justify-center bg-muted font-display text-5xl text-muted-foreground",
        className
      )}
    >
      {getInitials(name)}
    </div>
  );
}

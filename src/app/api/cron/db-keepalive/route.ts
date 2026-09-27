import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// Free-tier Postgres (Neon/Supabase-style) suspends or pauses the project
// after a period with no queries. Vercel Cron hits this route on a schedule
// so the database sees regular activity and never gets paused for inactivity.
export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  await prisma.$queryRaw`SELECT 1`;

  return NextResponse.json({ ok: true, pingedAt: new Date().toISOString() });
}

"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/lib/auth";

// Mirrors the role -> landing page mapping proxy.ts already uses when it
// bounces a signed-in user off a path their role can't see, so a fresh
// login lands in the same place the middleware would send them anyway.
function defaultPathForRole(role: string | undefined) {
  if (role === "client") return "/dashboard";
  if (role === "attorney") return "/firm/matters";
  return "/firm/leads"; // staff, admin
}

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const callbackUrlRaw = formData.get("callbackUrl");
  const callbackUrl =
    typeof callbackUrlRaw === "string" && callbackUrlRaw.startsWith("/")
      ? callbackUrlRaw
      : null;

  try {
    // redirect: false so we can pick the destination by role below instead
    // of always landing on /dashboard (the client portal) regardless of who
    // just signed in.
    await signIn("credentials", { email, password, redirect: false });
  } catch (error) {
    if (error instanceof AuthError) {
      const params = new URLSearchParams({ error: "invalid", callbackUrl: callbackUrl ?? "/dashboard" });
      redirect(`/login?${params.toString()}`);
    }
    throw error;
  }

  if (callbackUrl) {
    redirect(callbackUrl);
  }

  const session = await auth();
  redirect(defaultPathForRole(session?.user?.role));
}

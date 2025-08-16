"use server";
import { auth } from "@/features/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function signIn() {
	console.log("[!] - Signing in...");
	const data = await auth.api.signInWithOAuth2({
		headers: await headers(),
		body: {
			providerId: "42-school",
			callbackURL: "/",
		},
	});
	redirect(data.url);
}

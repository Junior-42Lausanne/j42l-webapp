"use server";
import { auth } from "@/features/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function signIn() {
	console.log("[!] - Signing in with 42 OAuth...");
	console.log(`[!] - BETTER_AUTH_URL = ${process.env.BETTER_AUTH_URL}`);
	const data = await auth.api.signInWithOAuth2({
		headers: await headers(),
		body: {
			providerId: "42-school",
			callbackURL: `${process.env.BETTER_AUTH_URL || "http://j42l-app.local/"}`,
		},
	});
	console.log(`[!] - data's url = ${data.url}`);
	redirect(data.url);
}

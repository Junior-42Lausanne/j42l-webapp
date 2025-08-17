'use server';
import { auth } from '@/features/auth/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signIn() {
	console.log('[!] - Signing in with 42 OAuth...');
	const data = await auth.api.signInWithOAuth2({
		headers: await headers(),
		body: {
			providerId: '42-school',
		},
	});
	console.log(`[!] - data's url = ${data.url}`);
	redirect(data.url);
}

export async function signOut() {
	const returnValue = await auth.api.signOut({
		headers: await headers(),
	});

	console.log(returnValue);
}

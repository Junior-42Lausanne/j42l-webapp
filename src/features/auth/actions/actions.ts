'use server';

import { auth } from '@/features/auth/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { FullSessionUser, Role } from '../types/types';
import { isUserRoleSufficient } from '../utils/utils';
import z from 'zod';
import {
	defaultAuthenticatedRoute,
	defaultGuestRoute,
	orderedRoles,
} from '../constants/constants';

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
}

export async function assertMinUserRole(
	minRole: Role
): Promise<FullSessionUser | null> {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		redirect(defaultGuestRoute);
		return null;
	}

	// Make sure that the session.user.role is a valid role
	const result = z.safeParse(z.enum(orderedRoles), session.user.role);

	if (!result.success) {
		redirect(defaultAuthenticatedRoute);
		return null;
	}

	if (!isUserRoleSufficient(result.data, minRole)) {
		redirect(defaultAuthenticatedRoute);
		return null;
	}

	return session.user;
}

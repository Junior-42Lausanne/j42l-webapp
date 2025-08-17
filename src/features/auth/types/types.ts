import { orderedRoles } from '../constants/constants';
import { auth } from '../lib/auth';

export type Role = (typeof orderedRoles)[number];

export type FullSession = Exclude<
	Awaited<ReturnType<typeof auth.api.getSession>>,
	null
>;
export type FullSessionUser = FullSession['user'];

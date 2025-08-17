/* Roles ordered by least permissions to most permissions.
 ** The order is important because it is used to verify whether a user
 ** has access to a resource.
 */
export const orderedRoles = [
	'user',
	'junior-member',
	'junior-admin',
	'app-admin',
] as const;

export const defaultGuestRoute = '/';
export const defaultAuthenticatedRoute = '/projects';

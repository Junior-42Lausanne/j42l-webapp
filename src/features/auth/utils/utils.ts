import { orderedRoles } from '../constants/constants';
import { Role } from '../types/types';

export function isUserRoleSufficient(userRole: Role, minRole: Role) {
	const userRoleIndex = orderedRoles.indexOf(userRole);
	const minRoleIndex = orderedRoles.indexOf(minRole);

	return (
		userRoleIndex > -1 && minRoleIndex > -1 && userRoleIndex >= minRoleIndex
	);
}

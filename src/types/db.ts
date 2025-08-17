import {
	ColumnType,
	Generated,
	Insertable,
	Selectable,
	Updateable,
} from 'kysely';
import type { Role } from 'better-auth/plugins/access';

export interface Database {
	user: UserTable;
	session: SessionTable;
	account: AccountTable;
	verification: VerificationTable;
	junior: JuniorTable;
	project: ProjectTable;
	projectPosition: ProjectPositionTable;
	application: ApplicationTable;
}

export interface UserTable {
	id: string;
	name: string;
	email: string;
	emailVerified: boolean;
	login: string | null;
	role: Role;
	image: string | null;
	imageSmall: string | null;
	createdAt: ColumnType<Date, string | undefined, never>;
	updatedAt: ColumnType<Date, string | undefined, string | undefined>;
}

// Utility types for working with user data
export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;

export interface SessionTable {
	id: string;
	userId: string;
	token: string;
	expiresAt: ColumnType<Date, string | undefined, never>;
	ipAddress: string | null;
	userAgent: string | null;
	createdAt: ColumnType<Date, string | undefined, never>;
	updatedAt: ColumnType<Date, string | undefined, string | undefined>;
}

// Utility types for working with session data
export type Session = Selectable<SessionTable>;
export type NewSession = Insertable<SessionTable>;
export type SessionUpdate = Updateable<SessionTable>;

export interface AccountTable {
	id: string;
	userId: string;
	accountId: string;
	providerId: string;
	accessToken: string | null;
	refreshToken: string | null;
	accessTokenExpiresAt: ColumnType<Date, string | undefined, never> | null;
	refreshTokenExpiresAt: ColumnType<Date, string | undefined, never> | null;
	scope: string | null;
	idToken: string | null;
	password: string | null;
	createdAt: ColumnType<Date, string | undefined, never>;
	updatedAt: ColumnType<Date, string | undefined, string | undefined>;
}

// Utility types for working with account data
export type Account = Selectable<AccountTable>;
export type NewAccount = Insertable<AccountTable>;
export type AccountUpdate = Updateable<AccountTable>;

export interface VerificationTable {
	id: string;
	identifier: string;
	value: string;
	expiresAt: ColumnType<Date, string | undefined, never>;
	createdAt: ColumnType<Date, string | undefined, never>;
	updatedAt: ColumnType<Date, string | undefined, string | undefined>;
}

// Utility types for working with verification data
export type Verification = Selectable<VerificationTable>;
export type NewVerification = Insertable<VerificationTable>;
export type VerificationUpdate = Updateable<VerificationTable>;

export interface JuniorTable {
	id: Generated<string>;
	schoolIdentifier: string;
	name: string;
	description: string;
	image: string | null;
	createdAt: ColumnType<Date, string | undefined, never>;
	updatedAt: ColumnType<Date, string | undefined, string | undefined>;
}

// Utility types for working with junior data
export type Junior = Selectable<JuniorTable>;
export type NewJunior = Insertable<JuniorTable>;
export type JuniorUpdate = Updateable<JuniorTable>;

export interface ProjectTable {
	id: Generated<string>;
	juniorId: string;
	name: string;
	description: string;
	status: string;
	createdAt: ColumnType<Date, string | undefined, never>;
	createdBy: string | null;
	updatedAt: ColumnType<Date, string | undefined, string | undefined>;
}

// Utility types for working with project data
export type Project = Selectable<ProjectTable>;
export type NewProject = Insertable<ProjectTable>;
export type ProjectUpdate = Updateable<ProjectTable>;

export interface ProjectPositionTable {
	id: Generated<string>;
	projectId: string;
	name: string;
	description: string;
	count: number;
	createdAt: ColumnType<Date, string | undefined, never>;
	updatedAt: ColumnType<Date, string | undefined, string | undefined>;
}

// Utility types for working with project position data
export type ProjectPosition = Selectable<ProjectPositionTable>;
export type NewProjectPosition = Insertable<ProjectPositionTable>;
export type ProjectPositionUpdate = Updateable<ProjectPositionTable>;

export interface ApplicationTable {
	id: Generated<string>;
	userId: string | null;
	positionId: string;
	createdAt: ColumnType<Date, string | undefined, never>;
	updatedAt: ColumnType<Date, string | undefined, string | undefined>;
}

// Utility types for working with application data
export type Application = Selectable<ApplicationTable>;
export type NewApplication = Insertable<ApplicationTable>;
export type ApplicationUpdate = Updateable<ApplicationTable>;

import { betterAuth } from 'better-auth';
import { genericOAuth } from 'better-auth/plugins';
import { nextCookies } from 'better-auth/next-js';
import { Pool } from 'pg';

export const auth = betterAuth({
	database: new Pool({
		connectionString: process.env.DATABASE_URL,
	}),
	user: {
		additionalFields: {
			login: {
				type: 'string',
			},
			role: {
				type: 'string',
				defaultValue: 'user',
			},
			imageSmall: {
				type: 'string',
			},
		},
	},
	account: {
		accountLinking: {
			enabled: true,
			trustedProviders: ['42-school'],
		},
	},
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: '42-school',
					authorizationUrl: 'https://api.intra.42.fr/oauth/authorize',
					authorizationUrlParams: {
						scope: 'public',
					},
					clientId: process.env.BETTER_AUTH_CLIENT_ID || '',
					clientSecret: process.env.BETTER_AUTH_CLIENT_SECRET,
					tokenUrl: 'https://api.intra.42.fr/oauth/token',
					userInfoUrl: 'https://api.intra.42.fr/v2/me',
					mapProfileToUser(profile) {
						return {
							id: profile.id.toString(),
							name: profile.usual_full_name,
							email: profile.email,
							login: profile.login,
							role: 'user',
							image: profile.image.link,
							imageSmall: profile.image.versions.small || null,
						};
					},
				},
			],
		}),
		nextCookies(),
	],
});

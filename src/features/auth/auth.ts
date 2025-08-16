import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";
import { Pool } from "pg";

export const auth = betterAuth({
	database: new Pool({
		connectionString: `postgresql://some_db_user:some_db_password@localhost:5432/some_db_name`, // TODO: use env variable
	}),
	account: {
		accountLinking: {
			enabled: true,
			trustedProviders: ["42-school"],
		},
	},
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: "42-school",
					authorizationUrl: "https://api.intra.42.fr/oauth/authorize",
					authorizationUrlParams: {
						scope: "public",
					},
					clientId:
						"u-s4t2ud-4f3746ce24475536be6b082ace1f4e7d08993980130c37aab3f8246e50230b45",
					// TODO: use env variable
					clientSecret:
						"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",
					// TODO: use env variable
					tokenUrl: "https://api.intra.42.fr/oauth/token",
					userInfoUrl: "https://api.intra.42.fr/v2/me",
					mapProfileToUser(profile) {
						return {
							id: profile.id.toString(),
							name: profile.usual_full_name,
							email: profile.email,
							image: profile.image.link,
						};
					},
				},
			],
		}),
	],
});

import { createAuthClient } from "better-auth/client";
import { genericOAuthClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
	baseURL: "http://j42l-app.local/", // TODO: add final url for deployment
	plugins: [genericOAuthClient()],
});

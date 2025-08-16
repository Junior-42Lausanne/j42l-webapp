import { Button } from "@/components/ui/button";
import signIn from "@/features/auth/signIn";

export default async function Home() {
	return (
		<div>
			<form action={signIn}>
				<Button>Login with 42 Network</Button>
			</form>
		</div>
	);
}

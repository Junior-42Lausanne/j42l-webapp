import { Button } from '@/components/ui/button';
import { auth } from '@/features/auth/lib/auth';
import { signIn, signOut } from '@/features/auth/actions/actions';
import { headers } from 'next/headers';

export default async function Home() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	console.log(session?.user);

	return (
		<div>
			{session ? (
				<div>
					<p>You are logged in as {session.user.name}</p>
					<form action={signOut}>
						<Button>Sign out</Button>
					</form>
				</div>
			) : (
				<form action={signIn}>
					<Button>Login with 42 Network</Button>
				</form>
			)}
		</div>
	);
}

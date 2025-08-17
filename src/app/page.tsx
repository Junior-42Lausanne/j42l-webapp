import { Button } from '@/components/ui/button';
import { auth } from '@/features/auth/lib/auth';
import { signIn, signOut } from '@/features/auth/actions/actions';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	console.log(session);

	if (session) {
		redirect(`${process.env.WEB_APP_URL || ''}/projects`);
	}

	return (
		<div>
			<form action={signIn}>
				<Button>Login with 42 Network</Button>
			</form>
		</div>
	);
}

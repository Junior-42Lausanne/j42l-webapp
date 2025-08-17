import { Button } from '@/components/ui/button';
import { auth } from '@/features/auth/lib/auth';
import { signIn } from '@/features/auth/actions/actions';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { defaultAuthenticatedRoute } from '@/features/auth/constants/constants';

export default async function Home() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	console.log(session);

	if (session) {
		redirect(defaultAuthenticatedRoute);
	}

	return (
		<Card className="mx-auto mt-32">
			<CardHeader>
				<CardTitle className="text-center">
					Recrutement Junior 42
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-center text-lg">
					Bienvenue à la plateforme de recrutement des Juniors 42.
				</p>
				<p className="text-center text-lg">
					Vous pouvez vous connecter avec votre login 42.
				</p>
			</CardContent>
			<form className="mt-4 text-center" action={signIn}>
				<Button className="mx-auto">Login with 42 Network</Button>
			</form>
		</Card>
	);
}

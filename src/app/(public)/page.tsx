import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
	return (
		<main className="mt-16">
			<Card className="mx-auto max-w-2xl">
				<CardHeader className="flex flex-col items-center gap-4">
					<div className="my-4">
						<Image
							src="/j42l_logo.svg"
							alt="J42L Logo"
							width={140}
							height={30}
						/>
					</div>
					<CardTitle className="text-center text-2xl font-semibold">
						Junior Projects Portal
					</CardTitle>
					<CardDescription className="text-center text-lg">
						This application is designed for students and members of
						the 42 School network who want to participate in
						projects organized by Junior organizations of the 42
						network.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<p className="text-center">
						Get started by setting up your profile and exploring the
						latest opportunities to collaborate, learn, and grow
						within the 42 community!
					</p>
				</CardContent>
				<CardFooter className="flex justify-center pt-2">
					<Button
						asChild
						size="lg"
						className="px-8 py-3 text-base font-semibold"
					>
						<Link href="/authenticated/projects">
							Sign in with 42 Network
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</main>
	);
};

export default HomePage;

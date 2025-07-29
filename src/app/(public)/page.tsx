import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col">
			<main className="flex-1 flex items-center justify-center px-4">
				<Content />
			</main>
		</div>
	);
}

function Content() {
	return (
		<Card className="max-w-2xl w-full mx-auto">
			<CardHeader className="flex flex-col items-center gap-3 pb-0 border-none">
				<div className="p-4 my-2">
					<Image src="/j42l_logo.svg" alt="J42L Logo" width={140} height={30} />
				</div>
				<CardTitle className="text-2xl font-semibold tracking-tight text-center w-full">Junior Projects Portal</CardTitle>
				<CardDescription className="text-lg text-center">
					This application is designed for students and members of the 42 School network who want to participate in projects organized by Junior organizations.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4 pt-0">
				<ul className="list-disc list-inside text-left mx-auto max-w-md text-base text-foreground/90 space-y-1">
					<li>Create and manage your personal profile</li>
					<li>Browse and view open projects from various Junior organizations</li>
					<li>Apply directly to projects that interest you</li>
				</ul>
				<p className="text-base text-muted-foreground text-center">
					Get started by setting up your profile and exploring the latest opportunities to collaborate, learn, and grow within the 42 community!
				</p>
			</CardContent>
			<CardFooter className="flex justify-center pt-2">
				<Button size="lg" className="text-base font-semibold px-8 py-3">Sign in with 42 Network</Button>
			</CardFooter>
		</Card>
	);
}

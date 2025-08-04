import PageTitle from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import { File, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
	return (
		<div>
			<PageTitle title="Profile Page">
				<Button asChild>
					<Link href="/authenticated/profile/edit">Edit</Link>
				</Button>
			</PageTitle>

			<div className="flex items-center gap-8">
				<div className="size-16 rounded-full border border-gray-700 bg-gray-300"></div>
				<div className="flex-1">
					<h2 className="text-xl font-bold">John Doe</h2>
					<p className="text-sm text-gray-700 italic">
						Ecole 42 Lausanne
					</p>
				</div>
			</div>
			<h2 className="mt-4 text-lg font-semibold">Presentation</h2>
			<div>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
				saepe laudantium deleniti, delectus iusto obcaecati at autem ad
				iste officiis aliquam dolores itaque molestiae? Qui at fugiat
				culpa reiciendis animi.
			</div>

			<div className="grid grid-cols-2">
				<div>
					<h2 className="mt-4 text-lg font-semibold">Socials</h2>
					<ul>
						<li className="mt-2 flex cursor-pointer items-center gap-1 text-blue-700">
							<Linkedin className="size-4" />
							LinkedIn
						</li>
						<li className="mt-2 flex cursor-pointer items-center gap-1 text-blue-700">
							<Github className="size-4" />
							GitHub
						</li>
					</ul>
				</div>
				<div>
					<h2 className="mt-4 text-lg font-semibold">Documents</h2>
					<ul>
						<li className="mt-2 flex cursor-pointer items-center gap-1 text-blue-700">
							<File className="size-4" />
							CV
						</li>
						<li className="mt-2 flex cursor-pointer items-center gap-1 text-blue-700">
							<File className="size-4" />
							Lettre de recommandation XYZ
						</li>
						<li className="mt-2 flex cursor-pointer items-center gap-1 text-blue-700">
							<File className="size-4" />
							Certificat Kubernetes
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

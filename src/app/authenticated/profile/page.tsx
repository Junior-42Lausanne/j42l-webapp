import PageTitle from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import UserProfile from "@/components/users/user-profile";
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

			<UserProfile />
		</div>
	);
}

import PageTitle from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import UserProfile from "@/components/users/user-profile";
import Link from "next/link";

const SelfProfilePage = () => {
	return (
		<div>
			<PageTitle title="Profile Page">
				<Button asChild>
					<Link href="/profile/edit">Edit</Link>
				</Button>
			</PageTitle>

			<UserProfile />
		</div>
	);
};

export default SelfProfilePage;

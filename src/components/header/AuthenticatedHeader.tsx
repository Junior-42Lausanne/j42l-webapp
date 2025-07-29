import Link from "next/link";
import { Button } from "../ui/button";
import BaseHeader from "./base-header";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { User } from "lucide-react";

const AuthenticatedHeader = () => {
	return (
		<BaseHeader>
			<div className="flex items-center gap-4">
				<Button asChild variant="ghost">
					<Link href="/authenticated/projects">Projects</Link>
				</Button>
				<Button asChild variant="ghost">
					<Link href="/authenticated/applications">
						My Applications
					</Link>
				</Button>
				<Button asChild variant="ghost">
					<Link href="/authenticated/juniors">Juniors</Link>
				</Button>
				<Button asChild variant="ghost">
				</Button>
			</div>
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="rounded-full size-8">
							<User />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem asChild>
							<Link href="/authenticated/profile">Profile</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>Sign Out</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</BaseHeader>
	);
};

export default AuthenticatedHeader;

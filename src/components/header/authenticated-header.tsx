import Link from "next/link";
import { Button } from "../ui/button";
import BaseHeader from "./base-header";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "../ui/dropdown-menu";
import { User } from "lucide-react";
import { redirect } from "next/navigation";

const AuthenticatedHeader = () => {
	async function signout() {
		"use server";

		redirect("/");
	}

	return (
		<BaseHeader>
			<div className="flex items-center gap-4">
				<Button asChild variant="ghost">
					<Link href="/projects">Projects</Link>
				</Button>
				<Button asChild variant="ghost">
					<Link href="/applications">My Applications</Link>
				</Button>
				<Button asChild variant="ghost">
					<Link href="/users">Users</Link>
				</Button>
			</div>
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="size-8 rounded-full">
							<User />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem asChild>
							<Link href="/profile" className="w-full">
								Profile
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<form action={signout}>
								<button className="w-full text-left">
									Sign Out
								</button>
							</form>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</BaseHeader>
	);
};

export default AuthenticatedHeader;

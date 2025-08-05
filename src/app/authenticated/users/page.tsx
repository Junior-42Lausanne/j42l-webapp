import Pagination from "@/components/pagination";
import PageTitle from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

const UserListPage = () => {
	return (
		<div>
			<PageTitle title="Users" description="Find users" />
			<div className="flex items-center">
				<Input className="flex-1 rounded-r-none" />
				<Button className="rounded-l-none">Search</Button>
			</div>
			<div className="mt-4">
				<ul className="divide-y border-t border-b">
					<Link
						href="/authenticated/users/1"
						className="block px-4 py-4 hover:bg-gray-100"
					>
						<li className="flex justify-between">
							John Doe (jdoe)
							<Image
								src="/42_Logo.svg"
								alt="42 logo"
								width={20}
								height={20}
							/>
						</li>
					</Link>
					<Link
						href="/authenticated/users/1"
						className="block px-4 py-4 hover:bg-gray-100"
					>
						<li>Jane Hamilton</li>
					</Link>
				</ul>
			</div>
			<Pagination />
		</div>
	);
};

export default UserListPage;

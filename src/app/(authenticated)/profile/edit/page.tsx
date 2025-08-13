import PageTitle from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileUp, Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const EditProfilePage = () => {
	async function submit() {
		"use server";

		redirect("/profile");
	}

	return (
		<div>
			<PageTitle title="Edit profile" />
			<form action={submit} className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<h2 className="text-xl font-bold">Basic information</h2>
					<div className="mt-2">
						<Label className="font-semibold">First Name</Label>
						<Input className="mt-2" />
					</div>
					<div>
						<Label className="font-semibold">Last Name</Label>
						<Input className="mt-2" />
					</div>
					<div>
						<Label className="font-semibold">Presentation</Label>
						<Textarea className="mt-2" />
					</div>
				</div>
				<div>
					<h2 className="text-xl font-bold">Socials</h2>
					<div className="mt-2 flex items-center gap-2">
						<Input className="flex-1" placeholder="Social name" />
						<Input
							className="flex-1"
							placeholder="Link"
							type="url"
						/>
						<Button type="button" variant="ghost">
							<Plus className="size-4" />
						</Button>
					</div>
				</div>
				<div>
					<h2 className="text-xl font-bold">Files</h2>
					<div className="mt-2 grid h-32 cursor-pointer items-center justify-center rounded-md border-4 border-dashed border-gray-200 text-lg text-gray-400 hover:border-gray-300 hover:text-gray-500">
						<div className="flex gap-2">
							<FileUp className="size-8" />
							Upload file
						</div>
					</div>
				</div>
				<div className="flex gap-2">
					<Button>Submit</Button>
					<Button asChild variant="outline" type="button">
						<Link href="/profile">Cancel</Link>
					</Button>
				</div>
			</form>
		</div>
	);
};

export default EditProfilePage;

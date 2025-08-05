import PageTitle from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { projects } from "@/fake-data/projects";
import { FileUp, PlusCircle } from "lucide-react";
import { redirect } from "next/navigation";

const CreateProjectPage = async ({}: {}) => {
	// Authenticate user as junior member or junior admin

	async function submit() {
		"use server";

		redirect(`/authenticated/projects/1`);
	}

	return (
		<div>
			<PageTitle title="Create project" />

			<form action={submit} className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<h2 className="text-xl font-bold">Basic info</h2>
					<div className="flex flex-col gap-2">
						<Label className="font-semibold">Project Name</Label>
						<Input />
					</div>
					<div className="flex flex-col gap-2">
						<Label className="font-semibold">
							Project Description
						</Label>
						<Textarea />
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<h2 className="text-xl font-bold">Documents</h2>
					<div className="grid h-32 cursor-pointer items-center justify-center rounded-md border-4 border-dashed border-gray-200 text-lg text-gray-400 hover:border-gray-300 hover:text-gray-500">
						<div className="flex gap-2">
							<FileUp className="size-8" />
							Upload files
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<h2 className="text-xl font-bold">Project jobs</h2>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center justify-between">
								New position
								<Button variant="outline">Add</Button>
							</CardTitle>
							<CardContent className="flex flex-col gap-4">
								<Input placeholder="Position name" />
								<Textarea placeholder="Position description" />
								<div className="flex gap-2">
									<Input
										placeholder="Add skill"
										className="flex-1 text-xs"
									/>
									<Button variant="ghost" size="sm">
										<PlusCircle className="size-4" />
									</Button>
								</div>
							</CardContent>
						</CardHeader>
					</Card>
				</div>
				<div>
					<Button>Submit</Button>
				</div>
			</form>
		</div>
	);
};

export default CreateProjectPage;

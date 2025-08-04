import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Job } from "@/lib/types";
import { redirect } from "next/navigation";

type JobApplicationFormProps = {
	job: Job;
	className?: string;
};

const JobApplicationForm = ({
	job,
	className = "",
}: JobApplicationFormProps) => {
	async function submit() {
		"use server";

		redirect("/authenticated/applications");
	}

	return (
		<div className={className}>
			<div className={className}>
				<h2 className="text-xl font-bold">Application form</h2>
			</div>

			<form action={submit} className="mt-4 space-y-6">
				<div className="space-y-2">
					<Label className="italic">
						Why do you think that you are a good fit for this
						project, and why do you find it interesting?
					</Label>
					<Textarea />
				</div>
				<div className="space-y-2">
					<Label className="italic">
						You can provide additional documents
					</Label>
					<Input type="file" />
				</div>
				<div className="space-y-2">
					<Label className="italic">
						Which of the following relevant skills do you already
						have?
					</Label>
					{job.skills.map((skill) => (
						<div
							key={skill}
							className="flex items-center space-x-2"
						>
							<Checkbox />
							<Label>{skill}</Label>
						</div>
					))}
				</div>
				<Button>Send your application</Button>
			</form>
		</div>
	);
};

export default JobApplicationForm;

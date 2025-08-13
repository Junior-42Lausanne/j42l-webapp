import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { projects } from "@/fake-data/projects";
import { Job, Project } from "@/types/types";
import JobApplicationForm from "./new/job-application-form";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/utils";

const ApplicationList = () => {
	const applications = getApplicationList();

	return (
		<div className="space-y-4">
			{applications.map((application) => (
				<ApplicationCard
					key={application.job.id}
					application={application}
				/>
			))}
		</div>
	);
};

function getApplicationList() {
	const applications: { project: Project; job: Job }[] = [];

	for (const project of projects) {
		for (const job of project.jobs) {
			if (job.applicationStatus !== null) {
				applications.push({
					project,
					job,
				});
			}
		}
	}

	return applications;
}

type ApplicationCardProps = {
	application: {
		project: Project;
		job: Job;
	};
};

const ApplicationCard = ({
	application: { project, job },
}: ApplicationCardProps) => {
	const badgeColor =
		job.applicationStatus === "ongoing"
			? "bg-blue-700"
			: job.applicationStatus === "rejected"
				? "bg-red-700"
				: job.applicationStatus === "accepted"
					? "bg-green-700"
					: "";

	return (
		<Card className="relative">
			<CardHeader>
				<CardTitle>{job.title}</CardTitle>
				<CardDescription>{project.title}</CardDescription>
			</CardHeader>
			<CardContent>{job.description}</CardContent>
			<Badge
				className={cn(
					"absolute top-4 right-4 rounded-full",
					badgeColor,
				)}
			>
				{job.applicationStatus}
			</Badge>
		</Card>
	);
};

export default ApplicationList;

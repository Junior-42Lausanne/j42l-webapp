import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { Job, Project } from "@/lib/types";

type ProjectPositionsProps = {
	project: Project;
	className?: string;
};

const ProjectPositions = ({
	project,
	className = "",
}: ProjectPositionsProps) => {
	return (
		<div className={cn("flex flex-col gap-4", className)}>
			{project.jobs.map((job) => (
				<JobCard key={job.id} job={job} />
			))}
		</div>
	);
};

type JobCardProps = {
	job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
	return (
		<Card key={job.id} className="relative">
			<CardHeader>
				<CardTitle className="mb-2">{job.title}</CardTitle>
				<CardDescription className="mr-16">
					{job.description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex justify-end gap-2">
					{job.skills.map((skill) => (
						<Badge key={skill} variant="secondary">
							{skill}
						</Badge>
					))}
				</div>
			</CardContent>
			<Button
				asChild
				className="absolute top-4 right-4"
				variant="default"
				size="sm"
			>
				<Link href={`/authenticated/applications/new?job=${job.id}`}>
					Apply
				</Link>
			</Button>
		</Card>
	);
};

export default ProjectPositions;

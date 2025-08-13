import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/types";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Link href={`/projects/${project.id}`} className="focus:outline-none">
			<Card className="hover:border-primary bg-card/80 border-2 border-transparent transition-shadow duration-200 hover:shadow-lg">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-lg font-semibold">
						{project.title}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground mb-4 min-h-[48px]">
						{project.description}
					</p>
					<ul className="space-y-2">
						{project.jobs.map((job) => (
							<li
								key={job.id}
								className="flex items-center justify-between rounded-lg border bg-white/80 px-3 py-2 shadow-sm"
							>
								<span className="flex items-center gap-2">
									{job.applicationStatus !== null ? (
										<CheckCircle className="h-4 w-4 text-green-500" />
									) : (
										<Circle className="h-4 w-4 text-gray-300" />
									)}
									{job.title}
								</span>
								{job.applicationStatus !== null && (
									<Badge variant="secondary">
										applied ({job.applicationStatus})
									</Badge>
								)}
							</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</Link>
	);
};

export default ProjectCard;

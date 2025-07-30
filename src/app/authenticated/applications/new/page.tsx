import { projects } from "@/fake-data/projects";
import { Job, Project } from "@/lib/types";
import { redirect } from "next/navigation";
import ProjectDescription from "./project-description";
import JobDescription from "./job-description";
import JobApplicationForm from "./job-application-form";

type NewApplicationPageProps = {
	searchParams: Promise<{ job: string }>;
};

const NewApplicationPage = async ({
	searchParams,
}: NewApplicationPageProps) => {
	const { job: jobId } = await searchParams;

	if (!jobId) {
		redirect("/authenticated/projects");
	}

	const projectAndJob = getProjectAndJobFromJobId(Number(jobId));

	if (!projectAndJob) {
		redirect("/authenticated/projects");
	}

	const { project, job } = projectAndJob;

	return (
		<div className="mb-8">
			<div className="mb-10">
				<h1 className="text-primary text-3xl font-bold">
					New job application
				</h1>
				<p className="text-muted-foreground mt-2 italic">
					Apply to a job position
				</p>
			</div>
			<div className="space-y-8">
				<ProjectDescription project={project} />
				<JobDescription job={job} />
				<JobApplicationForm job={job} />
			</div>
		</div>
	);
};

function getProjectAndJobFromJobId(
	jobId: number,
): { project: Project; job: Job } | null {
	for (const project of projects) {
		for (const job of project.jobs) {
			if (job.id === jobId) {
				return { project, job };
			}
		}
	}

	return null;
}
export default NewApplicationPage;

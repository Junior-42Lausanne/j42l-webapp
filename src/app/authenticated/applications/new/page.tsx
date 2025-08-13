import { projects } from "@/fake-data/projects";
import { Job, Project } from "@/types/types";
import { redirect } from "next/navigation";
import ProjectDescription from "./project-description";
import JobDescription from "./job-description";
import JobApplicationForm from "./job-application-form";
import PageTitle from "@/components/shared/page-title";

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
			<PageTitle
				title="New job application"
				description="Apply to a job position"
			/>
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

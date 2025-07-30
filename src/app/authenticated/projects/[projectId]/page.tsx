import ProjectPositions from "@/components/projects/project-positions";
import PageTitle from "@/components/shared/page-title";
import { projects } from "@/fake-data/projects";
import { notFound } from "next/navigation";

const ProjectDetailsPage = async ({
	params,
}: {
	params: Promise<{ projectId: string }>;
}) => {
	const { projectId } = await params;
	const project = projects.find(
		(project) => project.id === Number(projectId),
	);

	if (!project) {
		notFound();
	}

	return (
		<div>
			<PageTitle title={project.title}>{project.description}</PageTitle>
			<div className="mt-10">
				<h2 className="text-primary text-xl font-bold">
					Project Positions
				</h2>
				<ProjectPositions className="mt-4" project={project} />
			</div>
		</div>
	);
};

export default ProjectDetailsPage;

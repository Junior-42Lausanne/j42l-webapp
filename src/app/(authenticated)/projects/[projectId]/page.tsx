import ProjectPositions from "@/components/projects/project-positions";
import PageTitle from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import { projects } from "@/fake-data/projects";
import { File } from "lucide-react";
import Link from "next/link";
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
			<PageTitle title={project.title} description={project.description}>
				{/* Only show button for junior members or junior admins */}
				<Button asChild>
					<Link href={`/projects/${projectId}/edit`}>Edit</Link>
				</Button>
			</PageTitle>
			<div className="mt-10">
				<h2 className="text-primary text-xl font-bold">Documents</h2>
				<ul className="mt-2 flex gap-2">
					<li className="flex cursor-pointer items-center gap-1 rounded bg-gray-200 px-4 py-1 text-sm hover:bg-gray-300">
						<File className="size-4" />
						Project brief
					</li>
					<li className="flex cursor-pointer items-center gap-1 rounded bg-gray-200 px-4 py-1 text-sm hover:bg-gray-300">
						<File className="size-4" />
						Wireframes
					</li>
					<li className="flex cursor-pointer items-center gap-1 rounded bg-gray-200 px-4 py-1 text-sm hover:bg-gray-300">
						<File className="size-4" />
						User flow
					</li>
				</ul>
			</div>
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

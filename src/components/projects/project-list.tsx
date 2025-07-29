import type { Project } from "@/lib/types";
import ProjectCard from "./project-card";
import Pagination from "../pagination";

type ProjectListProps = {
	projects: Project[];
};

const ProjectList = ({ projects }: ProjectListProps) => {
	return (
		<div>
			<div className="flex flex-col gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
			<Pagination />
		</div>
	);
};

export default ProjectList;

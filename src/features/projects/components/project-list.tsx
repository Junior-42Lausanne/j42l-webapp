import type { Project } from "@/types/types";
import ProjectCard from "./project-card";
import Pagination from "../../../components/pagination";

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

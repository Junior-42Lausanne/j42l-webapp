import { Project } from "@/lib/types";

type ProjectDescriptionProps = {
	project: Project;
	className?: string;
};

const ProjectDescription = ({
	project,
	className = "",
}: ProjectDescriptionProps) => {
	return (
		<div className={className}>
			<h2 className="text-xl font-bold">Project description</h2>
			<h3 className="mt-4 font-bold">{project.title}</h3>
			<p className="mt-2">{project.description}</p>
		</div>
	);
};

export default ProjectDescription;

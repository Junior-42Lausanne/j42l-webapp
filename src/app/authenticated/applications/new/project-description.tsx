import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
			<h3 className="mt-2 font-bold">Documents</h3>
			<div className="mt-2 space-x-4">
				{project.documents.map((document) => (
					<Button variant="secondary" size="sm" key={document.id}>
						{document.name}
					</Button>
				))}
			</div>
		</div>
	);
};

export default ProjectDescription;

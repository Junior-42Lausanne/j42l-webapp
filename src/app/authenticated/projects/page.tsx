import { projects } from "@/fake-data/projects";
import ProjectList from "../../../components/projects/project-list";
import ProjectSearch from "@/components/projects/project-search";

const ProjectListPage = async () => {
	return (
		<div className="min-h-screen bg-white px-8 py-10">
			<div className="mb-10">
				<h1 className="text-primary text-3xl font-bold">Projects</h1>
				<p className="text-muted-foreground mt-2 italic">
					Search for open projects and explore available
					opportunities.
				</p>
			</div>
			<ProjectSearch className="mb-4" />
			<ProjectList projects={projects} />
		</div>
	);
};

export default ProjectListPage;

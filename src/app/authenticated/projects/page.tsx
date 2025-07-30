import { projects } from "@/fake-data/projects";
import ProjectList from "../../../components/projects/project-list";
import ProjectSearch from "@/components/projects/project-search";
import PageTitle from "@/components/shared/page-title";

const ProjectListPage = async () => {
	return (
		<div className="min-h-screen bg-white px-8 py-10">
			<PageTitle title="Projects">
				Search for open projects and explore available opportunities.
			</PageTitle>
			<ProjectSearch className="mb-4" />
			<ProjectList projects={projects} />
		</div>
	);
};

export default ProjectListPage;

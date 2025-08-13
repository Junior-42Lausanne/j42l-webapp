import { projects } from "@/fake-data/projects";
import ProjectList from "../../../components/projects/project-list";
import ProjectSearch from "@/components/projects/project-search";
import PageTitle from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectListPage = async () => {
	return (
		<div className="min-h-screen bg-white px-8 py-10">
			<PageTitle
				title="Projects"
				description="Search for open projects and explore available opportunities."
			>
				{/* Button visible only for junior admin and jumior members */}
				<Button asChild>
					<Link href="/projects/create">Create</Link>
				</Button>
			</PageTitle>
			<ProjectSearch className="mb-4" />
			<ProjectList projects={projects} />
		</div>
	);
};

export default ProjectListPage;

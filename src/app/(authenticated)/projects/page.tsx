import { projects } from "@/fake-data/projects";
import ProjectSearchBar from "@/features/projects/components/project-search-bar";
import PageTitle from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "@/features/projects/components/project-card";
import Pagination from "@/components/pagination";

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
			<ProjectSearchBar className="mb-4" />
			<div className="mt-4 flex flex-col gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
			<Pagination />
		</div>
	);
};

export default ProjectListPage;

import Pagination from '@/components/Pagination';
import ProjectList from '@/features/projects/components/project-list';
import ProjectSearch from '@/features/projects/components/project-search';

const ProjectListPage = () => {
	return (
		<div>
			<ProjectSearch />
			<ProjectList />
			<Pagination />
		</div>
	);
};

export default ProjectListPage;

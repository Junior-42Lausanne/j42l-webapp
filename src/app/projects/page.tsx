import Pagination from '@/components/Pagination';
import ProjectList from '@/features/projects/components/ProjectList';
import ProjectSearch from '@/features/projects/components/ProjectSearch';

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

import Pagination from '@/components/Pagination';
import ProjectList from '@/features/projects/components/project-list';
import ProjectSearch from '@/features/projects/components/project-search';
import Header from '@/components/header';

const ProjectListPage = () => {
	return (
		<div>
			<Header />
			<ProjectSearch />
			<ProjectList />
			<Pagination />
		</div>
	);
};

export default ProjectListPage;

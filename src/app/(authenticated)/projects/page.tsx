import Pagination from '@/components/Pagination';
import ProjectList from '@/features/projects/components/project-list';
import ProjectSearch from '@/features/projects/components/project-search';
import PageTitle from '@/components/page-title';
import { assertMinUserRole } from '@/features/auth/actions/actions';

const ProjectListPage = async () => {
	await assertMinUserRole('user');

	return (
		<div>
			<PageTitle title="Projects" />
			<ProjectSearch />
			<ProjectList />
			<Pagination />
		</div>
	);
};

export default ProjectListPage;

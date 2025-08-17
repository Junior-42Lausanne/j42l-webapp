import Pagination from '@/components/Pagination';
import ProjectList from '@/features/projects/components/project-list';
import ProjectSearch from '@/features/projects/components/project-search';
import PageTitle from '@/components/page-title';
import { auth } from '@/features/auth/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const ProjectListPage = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		redirect('/');
	}

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

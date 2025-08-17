import PageTitle from '@/components/page-title';
import { Button } from '@/components/ui/button';
import ProjectFullDescription from '@/features/projects-details/components/project-full-description';
import ProjectPosition from '@/features/projects-details/components/project-positions';
import { User } from 'lucide-react';

export default async function ProjectDetailsPage({
	params,
}: {
	params: Promise<{ projectId: string }>;
}) {
	const { projectId } = await params;
	return (
		<>
			<PageTitle
				title={`Project ${projectId}`}
				image={
					<User className="w-full h-full rounded-full border" />
				}
				actions={<Button>Edit</Button>}
			/>
			<ProjectFullDescription />
			<p className="text-xl mb-3 font-bold">Positions</p>
			<ProjectPosition />
			<ProjectPosition />
		</>
	);
}

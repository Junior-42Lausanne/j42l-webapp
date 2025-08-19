import PageTitle from '@/components/page-title';
import { Button } from '@/components/ui/button';
import { auth } from '@/features/auth/lib/auth';
import ProjectFullDescription from '@/features/projects-details/components/project-full-description';
import ProjectPosition from '@/features/projects-details/components/project-positions';
import { User } from 'lucide-react';
import InputFile from '@/features/projects-details/components/input-files';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ProjectDetailsPage({
	params,
}: {
	params: Promise<{ projectId: string }>;
}) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		redirect('/');
	}

	const { projectId } = await params;

	return (
		<>
			<PageTitle
				title={`Project ${projectId}`}
				image={<User className="w-full h-full rounded-full border" />}
				actions={<Button>Edit</Button>}
			/>
			<ProjectFullDescription />
			<InputFile />
			<p className="text-xl mb-3 font-bold">Positions</p>
			<ProjectPosition />
			<ProjectPosition />
		</>
	);
}

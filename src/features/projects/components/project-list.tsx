import Link from 'next/link';
import ProjectCard from './project-card';

const ProjectList = () => {
	return (
		<div>
			<Link href={`/projects/1`}>
				<ProjectCard />
			</Link>
			<Link href={`/projects/2`}>
				<ProjectCard />
			</Link>
		</div>
	);
};

export default ProjectList;

import Link from 'next/link';
import ProjectCard from './project-card';

const ProjectList = () => {
	return (
		<div>
			<Link href={`/projects/1`}>
				<ProjectCard />
			</Link>
			<ProjectCard />
		</div>
	);
};

export default ProjectList;

import { Card } from '@/components/ui/card';
import ProjectDetailsInfo from '@/features/projects-details/components/project-details-info';
import ProjectFullDescription from '@/features/projects-details/components/project-full-description';

const ProjectDetails = () => {
	return (
		<>
			<ProjectDetailsInfo />
			<ProjectFullDescription />
		</>
	)
}

export default ProjectDetails;
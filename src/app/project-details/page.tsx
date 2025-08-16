import ProjectDetailsInfo from '@/features/projects-details/components/project-details-info';
import ProjectFullDescription from '@/features/projects-details/components/project-full-description';
import ProjectPosition from '@/features/projects-details/components/project-positions';

const ProjectDetails = () => {
	return (
		<>
			<ProjectDetailsInfo />
			<ProjectFullDescription />
			<ProjectPosition />
			<ProjectPosition />
		</>
	)
}

export default ProjectDetails;
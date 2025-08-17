import { User } from 'lucide-react';
import PageTitle from '@/components/pageTitle';

const ProjectDetailsInfo = ({projectName} : {projectName: string}) => {
	return (
		<div className='mt-10 mb-5 flex items-center'>
			<User className='mr-8 w-15 h-15 rounded-full border'></User>
			<PageTitle pageTitle={`Project ${projectName}`}></PageTitle>
		</div>
	)
}

export default ProjectDetailsInfo;
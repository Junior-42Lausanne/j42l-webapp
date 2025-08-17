import { User } from 'lucide-react';

const ProjectDetailsInfo = ({projectName} : {projectName: string}) => {
	return (
		<div className='mt-10 mb-5 flex items-center'>
			<User className='mr-8 w-15 h-15 rounded-full border'></User>
			<p className='text-2xl font-bold'>Project {projectName}</p>
		</div>
	)
}

export default ProjectDetailsInfo;
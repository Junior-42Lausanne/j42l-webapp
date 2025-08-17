import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter
} from '@/components/ui/card';

import { User } from 'lucide-react';
import ProjectPositionSampleCard from './project-position-sample-card';


const ProjectCard = () => {
	return (
		<Card className='mb-10'>
			<CardHeader>
				<div className='flex items-start'>
					<User className='w-10 h-10 rounded-full border mr-8'></User>
					<div className='flex-1'>
						<CardTitle className='mb-2'>
							Project title
						</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							ipsam ducimus quod recusandae quasi! Blanditiis vitae
							temporibus illo facilis, hic repellat eos laboriosam
							accusamus saepe, tempore quibusdam provident, illum
							deleniti!
						</CardDescription>
					</div>
				</div>
			</CardHeader>
			<CardFooter className="flex-col gap-2">
				<ProjectPositionSampleCard positionName='Job position 1'></ProjectPositionSampleCard>
				<ProjectPositionSampleCard positionName='Job position 2'></ProjectPositionSampleCard>
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;

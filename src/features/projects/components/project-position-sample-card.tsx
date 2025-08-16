import { Card } from '@/components/ui/card';
import SkillsBadge from './skills-badge';

const ProjectPositionSampleCard = ({ positionName } : {positionName: string}) => {
	return (
		<Card className='flex flex-row justify-between w-full px-8'>
			{positionName}
			<SkillsBadge />
		</Card>
	)
}

export default ProjectPositionSampleCard;
import {
	Card
} from '@/components/ui/card';

const ProjectPositionSampleCard = ({ positionName } : {positionName: string}) => {
	return (
		<Card className='w-full px-8 text-center'>{positionName}</Card>
	)
}

export default ProjectPositionSampleCard;
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ProjectSearch = () => {
	return (
		<div className="flex">
			<Input className="flex-1 rounded-r-none" />
			<Button className="rounded-l-none">Search</Button>
		</div>
	);
};

export default ProjectSearch;

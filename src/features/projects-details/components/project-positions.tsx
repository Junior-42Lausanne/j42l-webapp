import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectPosition = () => {
	return (
		<div className='mb-10'>
			<Card className="flex flex-row items-center justify-between px-10">
				<div>
					<p className="pb-3">Name</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque dolore, ullam assumenda, molestiae voluptas iste explicabo, quae harum animi molestias blanditiis qui architecto distinctio porro. Velit quia amet aut assumenda!</p>
				</div>
				<Button>Apply</Button>
			</Card>
		</div>
	)
}

export default ProjectPosition;
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardAction,
	CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SkillsBadge from "@/features/projects/components/skills-badge";

const ProjectPosition = () => {
	return (
		<div className='mb-10'>
			<Card>
				<CardHeader>
					<CardTitle>Name</CardTitle>
					<CardDescription>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque dolore, ullam assumenda, molestiae voluptas iste explicabo, quae harum animi molestias blanditiis qui architecto distinctio porro. Velit quia amet aut assumenda!
					</CardDescription>
					<CardAction>
						<Button>Apply</Button>
					</CardAction>
					<CardContent className="px-0">
						<SkillsBadge />
					</CardContent>
				</CardHeader>
			</Card>
		</div>
	)
}

export default ProjectPosition;
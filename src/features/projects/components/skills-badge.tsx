import { Badge } from "@/components/ui/badge"

function SkillsBadge() {
	return (
		<div className="flex gap-2">
			<Badge variant="secondary" className="bg-orange-500 text-white">
				JavaScript
			</Badge>
			<Badge variant="secondary" className="bg-neutral-500 text-white">
				React
			</Badge>
			<Badge variant="secondary" className="bg-neutral-500 text-white">
				Next.js
			</Badge>
		</div>
	)
}

export default SkillsBadge;
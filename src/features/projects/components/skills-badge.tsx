import { Badge } from "@/components/ui/badge"

function SkillsBadge() {
	return (
		<div className="flex gap-2">
			<Badge variant="secondary" className="bg-orange-500 text-white">
				JavaScript
			</Badge>
			<Badge variant="secondary" className="bg-blue-500 text-white">
				React
			</Badge>
			<Badge variant="destructive">
				Next.js
			</Badge>
		</div>
	)
}

export default SkillsBadge;
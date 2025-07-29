import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ className = "" }) => {
	return (
		<div
			className={cn("flex items-center justify-between py-4", className)}
		>
			<Button variant="secondary">
				<ChevronLeft />
			</Button>
			<span>Page 1 / 10</span>
			<Button variant="secondary">
				<ChevronRight />
			</Button>
		</div>
	);
};

export default Pagination;

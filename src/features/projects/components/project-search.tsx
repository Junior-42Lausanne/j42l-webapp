"use client";

import { cn } from "@/utils/utils";
import { Input } from "../../../components/ui/input";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Button } from "../../../components/ui/button";
import { ChevronDown } from "lucide-react";
import { Badge } from "../../../components/ui/badge";

const ProjectSearch = ({ className = "" }) => {
	return (
		<div className={cn("gap-2, flex", className)}>
			<Input className="flex-1 rounded-r-none" placeholder="Search" />
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className="rounded-l-none" variant="outline">
						Skills
						<ChevronDown />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="max-w-xs">
					<div className="p-1">
						<Input className="w-full" />
					</div>
					<DropdownMenuSeparator />
					<div className="space-x-2 p-1">
						<Badge className="cursor-pointer">react</Badge>
						<Badge className="cursor-pointer">svelte</Badge>
						<Badge className="cursor-pointer">docker</Badge>
						<Badge className="cursor-pointer">docker</Badge>
						<Badge className="cursor-pointer">docker</Badge>
						<Badge className="cursor-pointer">docker</Badge>
						<Badge className="cursor-pointer">docker</Badge>
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default ProjectSearch;

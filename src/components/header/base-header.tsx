import { cn } from "@/lib/utils";
import React from "react";

type BaseHeaderProps = React.PropsWithChildren<{ className?: string }>;

const BaseHeader = ({ children, className = "" }: BaseHeaderProps) => {
	return (
		<header
			className={cn(
				"mb-8 flex items-center justify-between px-8 py-4",
				className,
			)}
		>
			{children}
		</header>
	);
};

export default BaseHeader;

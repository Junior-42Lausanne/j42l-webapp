import React from "react";

type PageTitleProps = React.PropsWithChildren<{
	title: string;
	description?: string;
}>;

const PageTitle = ({ title, description, children }: PageTitleProps) => {
	return (
		<div className="mb-10">
			<div className="flex items-center justify-between">
				<h1 className="text-primary text-3xl font-bold">{title}</h1>
				{children && (
					<div className="flex items-center gap-2">{children}</div>
				)}
			</div>
			{description && (
				<p className="text-muted-foreground mt-2 italic">
					{description}
				</p>
			)}
		</div>
	);
};

export default PageTitle;

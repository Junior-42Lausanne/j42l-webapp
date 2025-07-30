import React from "react";

type PageTitleProps = React.PropsWithChildren<{
	title: string;
}>;

const PageTitle = ({ title, children }: PageTitleProps) => {
	return (
		<div className="mb-10">
			<h1 className="text-primary text-3xl font-bold">{title}</h1>
			{children && (
				<p className="text-muted-foreground mt-2 italic">{children}</p>
			)}
		</div>
	);
};

export default PageTitle;

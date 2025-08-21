import { User } from 'lucide-react';
import React from 'react';

type PageTitleProps = {
	title: string;
	image?: React.ReactNode;
	actions?: React.ReactNode;
};

const PageTitle = ({ title, image, actions }: PageTitleProps) => {
	return (
		<div className="flex items-center">
			{image && (
				<div className="flex items-center w-10 h-10 mr-6">{image}</div>
			)}
			<h1 className="flex-1 my-5 font-bold text-2xl">{title}</h1>
			{actions && (
				<div className="flex items-center gap-2">{actions}</div>
			)}
		</div>
	);
};

export default PageTitle;

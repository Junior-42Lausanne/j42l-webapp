import AuthenticatedHeader from "@/components/header/authenticated-header";
import React from "react";

const RootLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="min-h-screen pb-4">
			<AuthenticatedHeader />
			<main className="mx-auto max-w-3xl">{children}</main>
		</div>
	);
};

export default RootLayout;

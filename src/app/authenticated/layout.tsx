import AuthenticatedHeader from "@/components/header/AuthenticatedHeader";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<AuthenticatedHeader />
			<main className="mx-auto max-w-3xl">{children}</main>
		</>
	);
}

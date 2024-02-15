export default function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="h-screen px-8 py-2">{children}</div>;
}

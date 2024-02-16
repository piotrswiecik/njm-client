export default function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="2xl:p-6">{children}</div>;
}

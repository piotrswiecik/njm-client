export default function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <article className="2xl:p-6">{children}</article>;
}

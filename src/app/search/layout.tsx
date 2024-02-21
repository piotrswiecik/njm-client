export default function ProductDashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    <div className="w-10/12 max-w-7xl mx-auto">
				{children}
    </div>
	);
}
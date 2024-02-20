export default function ProductDashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    <div className="max-w-7xl mx-auto">
				{children}
    </div>
	);
}
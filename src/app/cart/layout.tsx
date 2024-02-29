export default function CartLayout({
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
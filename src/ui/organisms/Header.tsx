import Link from "next/link";

export const Header = () => {
	return (
		<div className="flex w-full flex-col items-center p-4 sm:flex-row sm:items-baseline">
			<h1 className="text-2xl font-bold text-slate-800 mb-6 sm:mb-0">NJM RECORD STORE</h1>
			<nav className="mx-8">
				<Link href="#" className="px-4 text-slate-800 hover:text-slate-500">
					Home
				</Link>
				<Link href="#" className="px-4 text-slate-800 hover:text-slate-500">
					All
				</Link>
			</nav>
		</div>
	);
};

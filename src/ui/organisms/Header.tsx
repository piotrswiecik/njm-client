import ActiveLink from "@/ui/atoms/ActiveLink";

export const Header = () => {
	const activeClassName = "font-bold underline";
	return (
		<div className="flex w-full flex-col items-center p-4 sm:flex-row sm:items-baseline">
			<h1 className="mb-6 text-2xl font-bold text-slate-800 sm:mb-0">
				NJM RECORD STORE
			</h1>
			<nav className="mx-8">
				<ActiveLink
					href="/"
					exact={true}
					className="px-4 text-slate-800 hover:text-slate-500"
					activeClassName={activeClassName}
				>
					Home
				</ActiveLink>
				<ActiveLink
					href="/products"
					exact={false}
					className="px-4 text-slate-800 hover:text-slate-500"
					activeClassName={activeClassName}
				>
					All
				</ActiveLink>
			</nav>
		</div>
	);
};

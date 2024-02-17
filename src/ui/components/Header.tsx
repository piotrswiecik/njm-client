import ActiveLink from "@/ui/atoms/ActiveLink";
import ShoppingCartLink from "@/ui/atoms/ShoppingCartLink";

export const Header = () => {
	const activeClassName = "font-bold underline";
	return (
		<div className="min-w-full bg-gradient-to-b from-slate-400 to-slate-200">
			<div className="mx-auto max-w-7xl px-12 py-8">
				<div className="flex flex-col items-center sm:flex-row sm:items-baseline">
					<div className="text-2xl font-bold text-slate-800">
						NJM Record Store
					</div>
					<nav className="mx-8 mt-4 sm:mt-0" role="navigation">
						<ActiveLink
							href="/"
							exact={true}
							className="px-4 text-slate-800 hover:text-slate-500"
							activeClassName={activeClassName}
						>
							Home
						</ActiveLink>
						<ActiveLink
							href={`/products`}
							exact={false}
							className="px-4 text-slate-800 hover:text-slate-500"
							activeClassName={activeClassName}
						>
							All
						</ActiveLink>
					</nav>
					<div className="grow" />
					<ShoppingCartLink />
				</div>
			</div>
		</div>
	);
};

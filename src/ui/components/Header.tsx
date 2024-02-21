// import ActiveLink from "@/ui/atoms/ActiveLink";
// import ShoppingCartLink from "@/ui/atoms/ShoppingCartLink";
import HeaderNavContainer from "@/ui/components/HeaderNavContainer";

export const Header = () => {

	// const activeClassName = "font-bold underline";
	

	return (
		// side to side
		<div className="min-w-full bg-gradient-to-b from-slate-400 to-slate-200">
			{/* centered container wrapped around client component */}
			<div className="mx-auto max-w-7xl px-12 py-8">
				<HeaderNavContainer />
			</div>
		</div>
		// <div className="min-w-full bg-gradient-to-b from-slate-400 to-slate-200">
		// 	<div className="mx-auto max-w-7xl px-12 py-8">
		// 		<div className="flex flex-col items-center sm:flex-row sm:items-baseline">
		// 			<div className="text-2xl font-bold text-slate-800">
		// 				NJM Record Store
		// 			</div>
		// 			<nav className="mt-4 mx-4 sm:mt-0" role="navigation">
		// 				<ul className="flex flex-col items-center sm:flex-row sm:items-baseline text-sm sm:text-base">
		// 					<li key="home">
		// 						<ActiveLink
		// 							href="/"
		// 							exact={true}
		// 							className="px-4 text-slate-800 hover:text-slate-500"
		// 							activeClassName={activeClassName}
		// 						>
		// 							Home
		// 						</ActiveLink>
		// 					</li>
		// 					<li key="all">
		// 						<ActiveLink
		// 							href={`/products`}
		// 							exact={false}
		// 							className="px-4 text-slate-800 hover:text-slate-500"
		// 							activeClassName={activeClassName}
		// 						>
		// 							All
		// 						</ActiveLink>
		// 					</li>
		// 					{availableCategories.map((category) => (
		// 						<li key={category}>
		// 							<ActiveLink
		// 								key={category}
		// 								href={`/categories/${category}/1`}
		// 								exact={false}
		// 								className="px-4 text-slate-800 hover:text-slate-500"
		// 								activeClassName={activeClassName}
		// 							>
		// 								{category
		// 									.split("")
		// 									.map((char, index) =>
		// 										index === 0 ? char.toUpperCase() : char,
		// 									)}
		// 							</ActiveLink>
		// 						</li>
		// 					))}
		// 				</ul>
		// 			</nav>
		// 			<div className="grow" />
		// 			<ShoppingCartLink />
		// 		</div>
		// 	</div>
		// </div>
	);
};

import ActiveLink from "@/ui/atoms/ActiveLink";
import ShoppingCartLink from "@/ui/atoms/ShoppingCartLink";

type HeaderNavDesktopProps = {
	categories: string[];
};

const HeaderNavDesktop = async ({ categories }: HeaderNavDesktopProps) => {
	const linkClassName = "text-slate-800 hover:text-slate-500 px-2 lg:px-4";
	const linkActiveClassName = "font-bold underline px-2 lg:px-4";

	return (
		<div className="hidden flex-row items-center sm:flex">
			{/* todo use compact and wide variants */}
			<h1 className="grow-0">
				<ActiveLink
					href="/"
					className="hover:opacity-75"
					activeClassName="hover:opacity-75"
					exact={true}
					label="Home"
				>
					<div className="flex flex-row items-center">
						<img
							src="/vinyl-svgrepo-com.svg"
							alt="NJM Record Store"
							className="aspect-square max-w-16"
						/>
						<span className="max-w-28 pl-4 text-xl font-bold lg:pr-8">
							NJM Records
						</span>
					</div>
				</ActiveLink>
			</h1>
			<div className="grow" />
			<ul className="flex max-w-lg grow list-none flex-row items-center justify-evenly text-sm lg:text-base">
				<li key="all">
					<ActiveLink
						href={`/products`}
						className={linkClassName}
						activeClassName={linkActiveClassName}
					>
						All
					</ActiveLink>
				</li>
				{categories.map((category) => (
					<li key={category}>
						<ActiveLink
							href={`/categories/${category}/1`}
							exact={false}
							className={linkClassName}
							activeClassName={linkActiveClassName}
						>
							{category
								.split("")
								.map((char, index) => (index === 0 ? char.toUpperCase() : char))
								.join("")}
						</ActiveLink>
					</li>
				))}
			</ul>
			<div className="grow" />
			<ShoppingCartLink />
		</div>
	);
};

export default HeaderNavDesktop;
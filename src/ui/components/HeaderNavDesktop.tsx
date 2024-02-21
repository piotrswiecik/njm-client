import ActiveLink from "@/ui/atoms/ActiveLink";
import ShoppingCartLink from "@/ui/atoms/ShoppingCartLink";

type HeaderNavDesktopProps = {
	categories: string[];
};

const HeaderNavDesktop = async ({ categories }: HeaderNavDesktopProps) => {
	const linkClassName = "text-slate-800 hover:text-slate-500";
	const linkActiveClassName = "font-bold underline";

	return (
		<div className="hidden flex-row items-center sm:flex">
			{/* todo use compact and wide variants */}
			<h1 className="grow-0">
				<div className="flex flex-row items-center">
					<img
						src="/vinyl-svgrepo-com.svg"
						alt="NJM Record Store"
						className="aspect-square max-w-16"
					/>
					<span className="px-4 text-xl font-bold">NJM Records</span>
				</div>
			</h1>
			<ul className="flex grow list-none flex-row items-center justify-evenly max-w-lg">
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
								.map((char, index) =>
									index === 0 ? char.toUpperCase() : char,
								)}
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

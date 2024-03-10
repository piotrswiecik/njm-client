import { Suspense } from "react";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import Link from "next/link";
import { type Route } from "next";
import ActiveLink from "@/ui/atoms/ActiveLink";
import SearchBar from "@/ui/molecules/SearchBar";
import ShoppingCartLinkWrap from "@/ui/atoms/ShoppingCartLinkWrap";

type HeaderNavDesktopProps = {
	categories: string[];
	cartItemsCount: number;
};

const HeaderNavDesktop = async ({
	categories,
	cartItemsCount,
}: HeaderNavDesktopProps) => {
	const linkClassName = "text-slate-800 hover:text-slate-500 px-2 lg:px-4";
	const linkActiveClassName =
		"font-bold border-b-2 border-slate-600 px-2 py-1 lg:px-4";

	return (
		<div className="hidden flex-row items-center sm:flex">
			<nav>
				{/* wrapper for reactive searchbar layout */}
				<div className="flex flex-col items-center lg:flex-row">
					<ul className="flex list-none flex-row items-center text-sm xl:text-base">
						{/* home page link + logo */}
						<li>
							<ActiveLink
								href="/"
								className="hover:opacity-75"
								activeClassName="hover:opacity-75"
								exact={true}
								label="Home"
							>
								<div className="flex flex-row items-center">
									<Image
										src="/vinyl-svgrepo-com.svg"
										alt="NJM Record Store"
										className="aspect-square max-w-16"
										width={64}
										height={64}
									/>
									<span className="max-w-28 pl-4 text-xl font-bold lg:pr-8">
										NJM Records
									</span>
								</div>
							</ActiveLink>
						</li>
						{/* all products link -> "/products" */}
						<li key="all">
							<ActiveLink
								href={`/products`}
								className={linkClassName}
								activeClassName={linkActiveClassName}
							>
								All
							</ActiveLink>
						</li>
						{/* categories map */}
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
										)
										.join("")}
								</ActiveLink>
							</li>
						))}
					</ul>
					{/* search bar component */}
					<div id="search-bar" className="self-end lg:self-center">
						<Suspense>
							<SearchBar />
						</Suspense>
					</div>
				</div>
			</nav>
			<div className="grow"></div>
			{/* login / profile component */}
			<div id="clerk" className="self-center px-4">
				<SignedOut>
					<Link href={"/sign-in" as Route}>
						<button className="p-4">
							<User
								color="#334155"
								strokeWidth={2}
								size={36}
								className="inline-block transition-opacity duration-300 hover:opacity-50 sm:flex"
							/>
						</button>
					</Link>
				</SignedOut>
				<SignedIn>
					<span className="p-2 transition-opacity duration-300 hover:opacity-50">
						<UserButton afterSignOutUrl="/" />
					</span>
				</SignedIn>
			</div>
			{/* shopping cart component */}
			<div id="cart" className="self-center">
				<Suspense>
					<ShoppingCartLinkWrap count={cartItemsCount} />
				</Suspense>
			</div>

			<div className="flex flex-col xl:flex-row">
				<ul className="flex max-w-lg grow list-none flex-row items-center justify-evenly text-sm lg:text-base"></ul>

				<div className="mt-4 xl:mt-0">
					<div className="mx-8"></div>
				</div>
			</div>
			<div className="grow" />
			<div className="flex flex-row items-center"></div>
		</div>
	);
};

export default HeaderNavDesktop;

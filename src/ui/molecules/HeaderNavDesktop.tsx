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

const HeaderNavDesktop = async ({ categories, cartItemsCount }: HeaderNavDesktopProps) => {
	const linkClassName = "text-slate-800 hover:text-slate-500 px-2 lg:px-4";
	const linkActiveClassName =
		"font-bold border-b-2 border-slate-600 px-2 py-1 lg:px-4";

	return (
		<nav className="hidden flex-row items-center sm:flex">
			<div className="grow-0">
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
			</div>
			<div className="grow" />
			<div className="flex flex-col xl:flex-row">
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
										.map((char, index) =>
											index === 0 ? char.toUpperCase() : char,
										)
										.join("")}
								</ActiveLink>
							</li>
						))}
					</ul>
				<div className="mt-4 xl:mt-0">
					<div className="mx-8">
						<Suspense>
							<SearchBar />
						</Suspense>
					</div>
				</div>
			</div>
			<div className="grow" />
			<div className="flex flex-row items-center">
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
				<Suspense>
					<ShoppingCartLinkWrap count={cartItemsCount} />
				</Suspense>
			</div>
		</nav>
	);
};

export default HeaderNavDesktop;

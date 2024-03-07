"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { User } from "lucide-react";
import { type Route } from "next";
import ShoppingCartLinkWrap from "@/ui/atoms/ShoppingCartLinkWrap";
import SearchBar from "@/ui/molecules/SearchBar";
import ActiveLink from "@/ui/atoms/ActiveLink";

type HeaderNavMobileProps = {
	categories: string[];
	cartItemsCount: number;
};

const HeaderNavMobile = ({
	categories,
	cartItemsCount,
}: HeaderNavMobileProps) => {
	const [active, setActive] = useState<boolean>(false);

	const handleMenuToggle = () => {
		setActive(!active);
	};

	const linkClassName = "text-slate-800 hover:text-slate-500";
	const linkActiveClassName = "font-bold underline";

	return (
		<div className="flex flex-col sm:hidden">
			<div className="flex flex-row">
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
							<span className="px-4 text-xl font-bold">NJM Records</span>
						</div>
					</ActiveLink>
				</div>
				<span className="grow"></span>
				<button
					type="button"
					className="hover:opacity-50"
					onClick={handleMenuToggle}
					aria-controls="mobile-menu"
					aria-expanded={active ? "true" : "false"}
				>
					{active ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					)}
				</button>
			</div>
			<div
				id="mobile-menu"
				className={`${active ? "h-[260px] py-6" : "h-0"} overflow-hidden transition-all duration-700`}
			>
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
				<div className="my-4 xl:mt-0">
					<div className="">
						<Suspense>
							<SearchBar />
						</Suspense>
					</div>
				</div>
				<ul className="list-none pl-2">
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
			</div>
		</div>
	);
};

export default HeaderNavMobile;

"use client";
import { useState } from "react";
import ActiveLink from "@/ui/atoms/ActiveLink";

type HeaderNavMobileProps = {
	categories: string[];
};
// const activeClassName = "font-bold underline";
{
	/* <ActiveLink */
}
// 							href="/"
// 							exact={true}
// 							className="px-4 text-slate-800 hover:text-slate-500"
// 							activeClassName={activeClassName}
// 						>

const HeaderNavMobile = ({ categories }: HeaderNavMobileProps) => {
	const [active, setActive] = useState<boolean>(false);

	const handleMenuToggle = () => {
		setActive(!active);
	};

	const linkClassName = "text-slate-800 hover:text-slate-500";
	const linkActiveClassName = "font-bold underline";

	return (
		<div className="flex flex-col sm:hidden">
			<div className="flex flex-row">
				<h1 className="grow-0">
					<div className="flex flex-row items-center">
					<img src="/vinyl-svgrepo-com.svg" alt="NJM Record Store" className="max-w-16 aspect-square"/>
					<span className="font-bold text-xl px-4">NJM Records</span>
					</div>
				</h1>
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
							stroke-width="1.5"
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
				className={`${active ? "h-[200px] py-6" : "h-0"} overflow-hidden transition-all duration-700`}
			>
				<ul className="list-none">
					<li key="home">
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
								{category.split("").map((char, index) => (index === 0 ? char.toUpperCase() : char))}
							</ActiveLink>
						</li>
					))}
				</ul>
			</div>
			{/* <button
      type="button"
      className="hover:opacity-50"
				aria-expanded="false"
        aria-controls="mobile-menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button> */}
			{/* <div className="" id="mobileMenu" data-mobile-menu-collapse-item>
        <div>xwrr</div>
      </div> */}
		</div>
	);
};

export default HeaderNavMobile;

"use client";

import { useState } from "react";

type HeaderNavMobileProps = {
	categories: string[];
};

const HeaderNavMobile = ({ categories }: HeaderNavMobileProps) => {
	const [active, setActive] = useState<boolean>(false);

	const handleMenuToggle = () => {
		setActive(!active);
	};

	return (
		<div className="flex flex-col sm:hidden">
			<div className="flex flex-row">
				<h1 className="grow-0">logo</h1>
				<span className="grow"></span>
				<button
					type="button"
					className="hover:opacity-50"
					onClick={handleMenuToggle}
					aria-controls="mobile-menu"
					aria-expanded={active ? "true" : "false"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			<div
				id="mobile-menu"
				className={`${active ? "h-[200px]" : "h-0"} overflow-hidden transition-all duration-700`}
			>
				<ul>
				<li key="home">
							<a href={`/products`}>All</a>
						</li>
					{categories.map((category) => (
						<li key={category}>
							<a href={`/categories/${category}/1`}>{category}</a>
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

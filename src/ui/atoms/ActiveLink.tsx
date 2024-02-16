"use client";

import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type ActiveLinkProps = {
	href: Route;
	children: React.ReactNode;
	className: string;
	activeClassName: string;
	exact?: boolean;
};

const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact = true,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	let active;
	if (exact) {
		active = pathname === href;
	} else {
		active = pathname.startsWith(href);
	}
	return (
		<Link
			href={href}
			className={`${active ? activeClassName : className} ${active ? "aria-current" : null}`}
		>
			{children}
		</Link>
	);
};

export default ActiveLink;

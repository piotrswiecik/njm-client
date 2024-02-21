"use client";

import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	className: string;
	activeClassName: string;
	exact?: boolean;
	label?: string;
};

const ActiveLink = <T extends string>({
	href,
	children,
	className,
	activeClassName,
	exact = true,
	label,
}: ActiveLinkProps<T>) => {

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
			className={`${active ? activeClassName : className}`}
			aria-current={active ? "page" : undefined}
			role="link"
			aria-label={label}
		>
			{children}
		</Link>
	);
};

export default ActiveLink;

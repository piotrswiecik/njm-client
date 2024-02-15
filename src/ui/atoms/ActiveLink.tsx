"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ActiveLinkProps = {
	href: string;
	children: React.ReactNode;
	className: string;
	activeClassName: string;
};

const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const active = pathname === href;
	return (
		<Link
			href={href}
			className={`${className} ${active ? activeClassName : null} ${active ? "aria-current" : null}`}
		>
			{children}
		</Link>
	);
};

export default ActiveLink;

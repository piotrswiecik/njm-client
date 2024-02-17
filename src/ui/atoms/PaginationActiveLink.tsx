"use client";

import { type Route } from "next";
import ActiveLink from "@/ui/atoms/ActiveLink";

export type PaginationActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
};

const PaginationActiveLink = <T extends string>({
	href,
	children,
}: PaginationActiveLinkProps<T>) => {
	return (
		<ActiveLink
			href={href}
			className="rounded-md text-gray-400 transition-all duration-300"
			activeClassName="rounded-md hover:bg-slate-100 bg-slate-200 transition-all duration-300 text-gray-400 font-bold"
			exact={true}
		>
			{children}
		</ActiveLink>
	);
};

export default PaginationActiveLink;

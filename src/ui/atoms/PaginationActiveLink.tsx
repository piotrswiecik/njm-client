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
			className="m-0 px-2 py-1 rounded-md text-gray-400 hover:bg-slate-100 transition-all duration-300"
			activeClassName="m-0 px-2 py-1 rounded-md hover:bg-slate-100 bg-slate-200 transition-all duration-300 text-gray-400 font-bold"
			exact={true}
		>
			{children}
		</ActiveLink>
	);
};

export default PaginationActiveLink;

// client component capabilities required to parse path
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import ActiveLink from "@/ui/atoms/ActiveLink";

const Pagination = ({ totalPages }: { totalPages: number }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page") || 1);

	const paginationLinkClass =
		"rounded-md px-4 py-2 hover:bg-slate-100 transition-all duration-300 text-gray-400";

	const paginationLinkActiveClass =
		"rounded-md px-4 py-2 bg-slate-200 transition-all duration-300 text-gray-400 font-bold";

	console.log("Pagination totalPages:", totalPages);
	return (
		<div className="flex items-center justify-between border-t border-gray-300 p-4 sm:px-6">
			{currentPage === 1 ? (
				<span aria-hidden="true" className="rounded-md px-4 py-2 text-gray-200">
					&laquo;
				</span>
			) : (
				<ActiveLink href="#" className={paginationLinkClass} activeClassName="">
					<span aria-hidden="true">&laquo;</span>
				</ActiveLink>
			)}
			<ActiveLink
				href={"/products"}
				className={paginationLinkClass}
				activeClassName={paginationLinkActiveClass}
			>
				<span aria-hidden="true">{currentPage}</span>
			</ActiveLink>
			<ActiveLink
				href="#"
				className={paginationLinkClass}
				activeClassName={paginationLinkActiveClass}
			>
				<span aria-hidden="true">{currentPage}</span>
			</ActiveLink>
			<ActiveLink
				href="#"
				className={paginationLinkClass}
				activeClassName={paginationLinkActiveClass}
			>
				<span aria-hidden="true">{currentPage}</span>
			</ActiveLink>
			{currentPage === totalPages ? (
				<span aria-hidden="true" className="rounded-md px-4 py-2 text-gray-200">
					&laquo;
				</span>
			) : (
				<ActiveLink href="#" className={paginationLinkClass} activeClassName="">
					<span aria-hidden="true">&raquo;</span>
				</ActiveLink>
			)}
		</div>
	);
};

export default Pagination;

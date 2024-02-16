// client component capabilities required to parse path
"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import ActiveLink from "@/ui/atoms/ActiveLink";

const Pagination = ({ totalPages }: { totalPages: number }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page") || 1);

	const paginationLinkClass =
		"rounded-md px-4 py-2 hover:bg-neutral-200 transition-all duration-300";

	console.log("Pagination totalPages:", totalPages);
	return (
		<div className="flex items-center justify-between border-t border-gray-300 p-4 sm:px-6">
			<ActiveLink href="#" className={paginationLinkClass} activeClassName="">
				<span aria-hidden="true" className="text-gray-500">
					&laquo;
				</span>
			</ActiveLink>
			<ActiveLink href="#" className={paginationLinkClass} activeClassName="">
				<span aria-hidden="true" className="text-gray-500">
					{currentPage}
				</span>
			</ActiveLink>
      <ActiveLink href="#" className={paginationLinkClass} activeClassName="">
				<span aria-hidden="true" className="text-gray-500">
					{currentPage}
				</span>
			</ActiveLink>
      <ActiveLink href="#" className={paginationLinkClass} activeClassName="">
				<span aria-hidden="true" className="text-gray-500">
					{currentPage}
				</span>
			</ActiveLink>
			<ActiveLink href="#" className={paginationLinkClass} activeClassName="">
				<span aria-hidden="true" className="text-gray-500">
					&raquo;
				</span>
			</ActiveLink>
		</div>
	);
};

export default Pagination;

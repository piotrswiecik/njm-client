// client component capabilities required to parse path
"use client";

import { usePathname } from "next/navigation";
import PaginationPlaceholderArrow from "@/ui/atoms/PaginationPlaceholderArrow";
import PaginationPlaceholderDots from "@/ui/atoms/PaginationPlaceholderDots";
import PaginationActiveLink from "@/ui/atoms/PaginationActiveLink";

const Pagination = ({ totalPages }: { totalPages: number }) => {
	// TODO handle case when totalPages is something nonsensical / out of range
	const pathname = usePathname();
	const currentPage = Number(pathname.split("/products/")[1] || 1);

	return (
		<div aria-label="pagination" className="flex max-w-md justify-center gap-4 border-t border-gray-300 px-4 pt-2 sm:px-8">
			{/* l-arrow always visible */}
			{currentPage === 1 ? (
				<PaginationPlaceholderArrow dir="left" />
			) : (
				<PaginationActiveLink href={`/products/${currentPage - 1}`}>
					<span aria-hidden="true">&laquo;</span>
				</PaginationActiveLink>
			)}

			{/* link to page 1 always visible */}
			<PaginationActiveLink href="/products/1">1</PaginationActiveLink>

			{/* left dots visible when page > 3 */}
			{currentPage > 3 && <PaginationPlaceholderDots />}

			{/* core links */}
			{currentPage <= 2 && (
				<>
					<PaginationActiveLink href="/products/2">2</PaginationActiveLink>
					<PaginationActiveLink href="/products/3">3</PaginationActiveLink>
				</>
			)}
			{currentPage > 2 && currentPage < totalPages - 1 && (
				<>
					<PaginationActiveLink href={`/products/${currentPage - 1}`}>
						{currentPage - 1}
					</PaginationActiveLink>
					<PaginationActiveLink href={`/products/${currentPage}`}>
						{currentPage}
					</PaginationActiveLink>
					<PaginationActiveLink href={`/products/${currentPage + 1}`}>
						{" "}
						{currentPage + 1}
					</PaginationActiveLink>
				</>
			)}
			{currentPage >= totalPages - 1 && (
				<>
					<PaginationActiveLink href={`/products/${totalPages - 2}`}>
						{totalPages - 2}
					</PaginationActiveLink>
					<PaginationActiveLink href={`/products/${totalPages - 1}`}>
						{totalPages - 1}
					</PaginationActiveLink>
				</>
			)}

			{/* right dots visible when page < n - 2 */}
			{currentPage < totalPages - 2 && <PaginationPlaceholderDots />}

			{/* item n always visible */}
			<PaginationActiveLink href={`/products/${totalPages}`}>
				{totalPages}
			</PaginationActiveLink>

			{/* r-arrow always visible */}
			{currentPage === totalPages ? (
				<PaginationPlaceholderArrow dir="right" />
			) : (
				<PaginationActiveLink href={`/products/${currentPage + 1}`}>
					<span aria-hidden="true">&raquo;</span>
				</PaginationActiveLink>
			)}
		</div>
	);
};

export default Pagination;

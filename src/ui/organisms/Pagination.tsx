"use client";

import { usePathname } from "next/navigation";
import { type Route } from "next";
import PaginationPlaceholderArrow from "@/ui/atoms/PaginationPlaceholderArrow";
import PaginationPlaceholderDots from "@/ui/atoms/PaginationPlaceholderDots";
import PaginationActiveLink from "@/ui/atoms/PaginationActiveLink";

type PaginationProps = {
	totalPages: number;
	corePathSegment: string;
};

const Pagination = ({ totalPages, corePathSegment }: PaginationProps) => {
	// TODO handle case when totalPages is something nonsensical / out of range
	const pathname = usePathname();
	const currentPage = Number(pathname.split(`/${corePathSegment}/`)[1] || 1);

	if (totalPages < 6) {
		return (
			<div
				aria-label="pagination"
				className="flex max-w-md justify-center gap-4 border-t border-gray-300 px-4 pt-2 sm:px-8"
			>
				{/* l-arrow always visible */}
				{currentPage === 1 ? (
					<PaginationPlaceholderArrow dir="left" />
				) : (
					<PaginationActiveLink
						href={`/${corePathSegment}/${currentPage - 1}` as Route}
					>
						<span aria-hidden="true">&laquo;</span>
					</PaginationActiveLink>
				)}

				{/* core links */}
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<PaginationActiveLink
						key={page}
						href={`/${corePathSegment}/${page}` as Route}
					>
						{page}
					</PaginationActiveLink>
				))}

				{/* r-arrow always visible */}
				{currentPage === totalPages ? (
					<PaginationPlaceholderArrow dir="right" />
				) : (
					<PaginationActiveLink
						href={`/${corePathSegment}/${currentPage + 1}` as Route}
					>
						<span aria-hidden="true">&raquo;</span>
					</PaginationActiveLink>
				)}
			</div>
		);
	}

	return (
		<div
			aria-label="pagination"
			className="flex max-w-md justify-center gap-4 border-t border-gray-300 px-4 pt-2 sm:px-8"
		>
			{/* l-arrow always visible */}
			{currentPage === 1 ? (
				<PaginationPlaceholderArrow dir="left" />
			) : (
				<PaginationActiveLink
					href={`/${corePathSegment}/${currentPage - 1}` as Route}
				>
					<span aria-hidden="true">&laquo;</span>
				</PaginationActiveLink>
			)}

			{/* link to page 1 always visible */}
			<PaginationActiveLink href={`/${corePathSegment}/1` as Route}>
				1
			</PaginationActiveLink>

			{/* left dots visible when page > 3 */}
			{currentPage > 3 && <PaginationPlaceholderDots />}

			{/* core links */}
			{currentPage <= 2 && (
				<>
					<PaginationActiveLink href={`/${corePathSegment}/2` as Route}>
						2
					</PaginationActiveLink>
					<PaginationActiveLink href={`/${corePathSegment}/3` as Route}>
						3
					</PaginationActiveLink>
				</>
			)}
			{currentPage > 2 && currentPage < totalPages - 1 && (
				<>
					<PaginationActiveLink
						href={`/${corePathSegment}/${currentPage - 1}` as Route}
					>
						{currentPage - 1}
					</PaginationActiveLink>
					<PaginationActiveLink
						href={`/${corePathSegment}/${currentPage}` as Route}
					>
						{currentPage}
					</PaginationActiveLink>
					<PaginationActiveLink
						href={`/${corePathSegment}/${currentPage + 1}` as Route}
					>
						{" "}
						{currentPage + 1}
					</PaginationActiveLink>
				</>
			)}
			{currentPage >= totalPages - 1 && (
				<>
					<PaginationActiveLink
						href={`/${corePathSegment}/${totalPages - 2}` as Route}
					>
						{totalPages - 2}
					</PaginationActiveLink>
					<PaginationActiveLink
						href={`/${corePathSegment}/${totalPages - 1}` as Route}
					>
						{totalPages - 1}
					</PaginationActiveLink>
				</>
			)}

			{/* right dots visible when page < n - 2 */}
			{currentPage < totalPages - 2 && <PaginationPlaceholderDots />}

			{/* item n always visible */}
			<PaginationActiveLink href={`/${corePathSegment}/${totalPages}` as Route}>
				{totalPages}
			</PaginationActiveLink>

			{/* r-arrow always visible */}
			{currentPage === totalPages ? (
				<PaginationPlaceholderArrow dir="right" />
			) : (
				<PaginationActiveLink
					href={`/${corePathSegment}/${currentPage + 1}` as Route}
				>
					<span aria-hidden="true">&raquo;</span>
				</PaginationActiveLink>
			)}
		</div>
	);
};

export default Pagination;

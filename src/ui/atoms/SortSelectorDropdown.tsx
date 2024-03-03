"use client";

import { type Route } from "next";
import { usePathname, useRouter } from "next/navigation";

const SortSelectorDropdown = ({ action }: { action: () => void }) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (type: string) => {
		let params: { sort: string; order: string } | null = null;
		switch (type) {
			case "rating-desc":
				params = {
					sort: "rating",
					order: "desc",
				};
				break;
			case "rating-asc":
				params = {
					sort: "rating",
					order: "asc",
				};
				break;
			case "price-desc":
				params = {
					sort: "price",
					order: "desc",
				};
				break;
			case "price-asc":
				params = {
					sort: "price",
					order: "asc",
				};
				break;
			default:
				params = null;
		}
		// this action revalidates cache before new query params are loaded
		action();
		router.replace(
			`${pathname}${params === null ? "" : `?sort=${params.sort}&order=${params.order}`}` as Route,
		);
	};

	return (
		<div className="pb-3">
			<span className="pr-1 text-sm text-slate-600">Sort:</span>
			<select
				name="sort-selector"
				id="sort-selector"
				className="bg-inherit text-sm text-slate-600"
				onChange={(e) => {
					handleChange(e.target.value);
				}}
			>
				<option value="no-sort">---</option>
				<option value="rating-desc" data-testid="sort-by-rating">
					Rating ↓
				</option>
				<option value="rating-asc" data-testid="sort-by-rating">
					Rating ↑
				</option>
				<option value="price-desc" data-testid="sort-by-price">
					Price ↓
				</option>
				<option value="price-asc" data-testid="sort-by-price">
					Price ↑
				</option>
			</select>
		</div>
	);
};

export default SortSelectorDropdown;

import { handleSortAction } from "@/actions/handleSortAction";
import SortSelectorDropdown from "@/ui/atoms/SortSelectorDropdown";

const SortSelectorBar = () => {
	const handleSortSelect = async () => {
		"use server";
		await handleSortAction();
	};

	return (
		<div className="flex flex-row justify-end">
			<SortSelectorDropdown action={handleSortSelect} />
		</div>
	);
};

export default SortSelectorBar;

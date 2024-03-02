const SortSelectorDropdown = () => {
	return (
		<div className="pb-3">
			<span className="pr-1 text-sm text-slate-600">Sort:</span>
			<select
				name="sort-selector"
				id="sort-selector"
				className="bg-inherit text-sm text-slate-600"
			>
				<option value="newest">---</option>
				<option value="newest">Rating</option>
				<option value="oldest">Price</option>
			</select>
		</div>
	);
};

export default SortSelectorDropdown;

const PaginationPlaceholderArrow = ({ dir }: { dir: "left" | "right" }) => {
	return (
		<span aria-hidden="true" className="rounded-md text-gray-500">
			{dir === "left" ? "«" : "»"}
		</span>
	);
};

export default PaginationPlaceholderArrow;

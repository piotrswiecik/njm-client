import { type ProductDetailsFragment } from "@/graphql/generated/graphql";

const ProductInfoTable = ({ product }: { product: ProductDetailsFragment }) => {
	return (
		<table className="border-separate border-spacing-y-2">
			<tbody>
				<tr>
					<td>Category:</td>
					<td className="capitalize italic text-slate-600">
						{product.category.name}
					</td>
				</tr>
				<tr>
					<td>Released:</td>
					{/* todo util to reformat date to year */}
					<td className="italic text-slate-600">
						{product.releaseDate.slice(0, 4)}
					</td>
				</tr>
				<tr>
					<td>Tracks:</td>
					<td className="italic text-slate-600">{product.tracks.length}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default ProductInfoTable;

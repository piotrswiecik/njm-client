import { type Product } from "@/graphql/generated/graphql";
import { formatPrice, getBasicVariantPrice } from "@/utils/utils";

type ProductDetailsProps = {
	product: Product;
};

// TODO maybe refactor into subcomponents - atoms
const ProductInfoPanel = ({ product }: ProductDetailsProps) => {
	return (
		<>
			<header className="border-b border-slate-400 pb-2">
				<h1 className="text-lg font-semibold">{product.title}</h1>
				<p className="italic text-slate-600">{product.artist.name}</p>
			</header>
			<section className="my-4">
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
				<div className="my-4">
					Select format:
					<div className="flex flex-row py-2">
						<button
							type="button"
							className="mb-2 me-2 rounded-lg border border-gray-800 px-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
						>
							CD
						</button>
						<button
							type="button"
							className="mb-2 me-2 rounded-lg border border-gray-800 px-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
						>
							LP
						</button>
					</div>
					<div className="flex flex-row items-baseline justify-between">
						<div className="text-xl">
							{formatPrice(getBasicVariantPrice(product))}
						</div>
						<button
							type="button"
							className="mb-2 me-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
						>
							Add to cart
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductInfoPanel;

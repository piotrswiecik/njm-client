import { type ProductDetailsDto } from "@/api/models";
import { formatPrice } from "@/utils/utils";

type ProductDetailsProps = {
	product: ProductDetailsDto;
};

// TODO maybe refactor into subcomponents - atoms
const ProductInfoPanel = ({ product }: ProductDetailsProps) => {
	console.log(product);
	return (
		<>
			<div className="border-b border-slate-400 pb-2">
				<h1 className="text-lg font-semibold">{product.title}</h1>
				<div className="italic text-slate-600">{product.artist}</div>
			</div>
			<table className="table-auto mt-6">
				<tbody>
					
					
					<tr>
						<td className="font-semibold">Category:</td>
						<td className="capitalize italic text-slate-600">{product.category}</td>
					</tr>
					<tr>
						<td className="font-semibold">Released:</td>
						<td className="capitalize italic text-slate-600">{product.releaseDate.slice(0,4)}</td>
					</tr>
				</tbody>

				

			</table>
<div className="flex flex-row mt-4">
					<div className="font-semibold">

					
					Format:</div>
					<button
					type="button"
					className="mb-2 me-2 px-2 rounded-lg border border-gray-800 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
				>
					CD
				</button>
				<button
					type="button"
					className="mb-2 me-2 px-2 rounded-lg border border-gray-800 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
				>
					LP
				</button>
					</div>
			{/* <div className="">
				<div className="mb-2">Tracks:</div>
				<ol className="list-decimal p-4 text-xs">
					{product.tracks.map((track) => (
						<li key={track.name}>{track.name}</li>
					))}
				</ol>
			</div> */}
			<div className="flex flex-row items-baseline justify-between">
				<div className="text-xl">{formatPrice(product.price)}</div>
				<button
					type="button"
					className="mb-2 me-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
				>
					Add to cart
				</button>
			</div>
		</>
	);
};

export default ProductInfoPanel;

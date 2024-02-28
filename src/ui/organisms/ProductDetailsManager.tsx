// TODO: simplify with use client

import { type ProductDetailsFragment } from "@/graphql/generated/graphql";
import { defaultVariant, formatPrice, productAvailable, variantInStock } from "@/utils/utils";

const ProductDetailsManager = ({
	product,
	addItemToCartHandler,
}: {
	product: ProductDetailsFragment;
	addItemToCartHandler: (data: FormData) => Promise<void>;
}) => {
	const variantEnabledClassName = `hover:bg-slate-300 cursor-pointer peer-checked:text-red-500 mb-2 me-2 rounded-lg border border-gray-800 px-2 text-center text-sm font-medium text-gray-900 peer-checked:bg-gray-900 peer-checked:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800`;
	const variantDisabledClassName = `mb-2 me-2 rounded-lg border border-gray-400 px-2 text-center text-sm font-medium text-gray-400 dark:border-gray-600 dark:text-gray-400`;
	const inStockClassName = `mb-2 me-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800`;
	const outOfStockClassName = `mb-2 me-2 cursor-default rounded-lg border border-gray-400 px-5 py-2.5 text-center text-sm font-medium text-gray-400 dark:border-gray-600 dark:text-gray-400`;

	

	return (
		<>
			<form action={addItemToCartHandler}>
				<input type="hidden" name="productId" value={product.id} />
				<input
					type="hidden"
					name="lpVariantId"
					value={product.variants.find((v) => v.name === "lp")?.id}
				/>
				<div className="my-4">
					Select format:
					<ul className="flex flex-row py-2">
						<li>
							<input
								id="variant-cd"
								name="variant"
								type="radio"
								value="cd"
								defaultChecked={defaultVariant(product) === "cd"}
								disabled={!variantInStock(product, "cd")}
								className={`peer hidden`}
							/>
							<label
								htmlFor="variant-cd"
								className={
									!variantInStock(product, "cd")
										? variantDisabledClassName
										: variantEnabledClassName
								}
							>
								CD
							</label>
						</li>
						<li>
							<input
								id="variant-lp"
								name="variant"
								type="radio"
								value="lp"
								defaultChecked={defaultVariant(product) === "lp"}
								disabled={!variantInStock(product, "lp")}
								className={`peer hidden`}
							/>
							<label
								htmlFor="variant-lp"
								className={
									!variantInStock(product, "lp")
										? variantDisabledClassName
										: variantEnabledClassName
								}
							>
								LP
							</label>
						</li>
					</ul>
					<div className="m-0 flex flex-row items-center py-8">
						<div className="m-0 p-0 text-xl">
							{formatPrice(product.variants)}
						</div>

						<button
							type="submit"
							disabled={!productAvailable(product)}
							className={`${
								productAvailable(product)
									? inStockClassName
									: outOfStockClassName
							} ml-8`}
						>
							{productAvailable(product) ? "Add to cart" : "Out of stock"}
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ProductDetailsManager;

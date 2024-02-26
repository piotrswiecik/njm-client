import { cookies } from "next/headers";
import { OrderCreateDocument, type ProductDetailsFragment } from "@/graphql/generated/graphql";
import { formatPrice, getBasicVariantPrice } from "@/utils/utils";
import { queryGraphql } from "@/api/queryGraphql";

type ProductDetailsProps = {
	product: ProductDetailsFragment;
};

// TODO: refactor into subcomponents & atoms, create reusable server actions
const ProductInfoPanel = ({ product }: ProductDetailsProps) => {
	/**
	 * For given product and variant type, checks if variant is in stock.
	 */
	const variantInStock = (
		product: ProductDetailsFragment,
		type: "cd" | "lp",
	) => {
		const variant = product.variants.find((v) => v.name === type);
		if (!variant) return false;
		return variant.stock > 0;
	};

	/**
	 * Checks if any variant of product is in stock.
	 */
	const productAvailable = (product: ProductDetailsFragment) => {
		return product.variants.some((v) => v.stock > 0);
	};

	/**
	 * Set default active variant based on stock availability.
	 */
	const defaultVariant = (product: ProductDetailsFragment) => {
		if (!productAvailable(product)) return null;
		if (!variantInStock(product, "cd")) return "lp";
		if (!variantInStock(product, "lp")) return "cd";
		return "cd";
	};

	/**
	 * Try to fetch existing cart by cookie id via graphql query.
	 * @param cartId cart id stored as client side cookie.
	 * @returns
	 */
	// const getCart = async (cartId: string) => {
	// 	"use server";
	// 	return "cart";
	// };

	const createCart = async () => {
		"use server";
		try {
			// FIXME: no error boundary set for this
			const { createOrder } = await queryGraphql(OrderCreateDocument, { userId: "50e868b9-7534-4831-89e5-654da68286ae" });
			console.log(createOrder);
			return createOrder;
		} catch (err) {
			throw new Error("Failed to create cart");
		}
	};

	/**
	 * Get existing cart from backend based on cookie id or create a new cart and set cookie.
	 */
	const getOrCreateCart = async () => {
		"use server";
		const cartId = cookies().get("cartId")?.value;
		console.log(`cookie cartId: ${cartId}`);
		// if (cartId) {
		// 	console.log(`got cart id from cookie: ${cartId}`);
		// 	const cart = await getCart(cartId);
		// 	if (cart) {
		// 		console.log(`got cart from server: ${cart}`);
		// 		return cart;
		// 	}
		// }

		// // path #2: create new cart
		const cart = await createCart();
		if (!cart) {
			// FIXME: no error boundary set for this
			throw new Error("Failed to create cart");
		}
		cookies().set("cartId", cart.id);
		return cart;
	};

	const addItemToCart = async (data: FormData) => {
		"use server";
		const variant = data.get("variant");
		const cart = await getOrCreateCart();
		console.log(`addItemToCart: cart=${cart}`);
		// await addItemToCart(cart.id, product.id, variant);
	};

	const variantEnabledClassName = `hover:bg-slate-300 cursor-pointer peer-checked:text-red-500 mb-2 me-2 rounded-lg border border-gray-800 px-2 text-center text-sm font-medium text-gray-900 peer-checked:bg-gray-900 peer-checked:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800`;
	const variantDisabledClassName = `mb-2 me-2 rounded-lg border border-gray-400 px-2 text-center text-sm font-medium text-gray-400 dark:border-gray-600 dark:text-gray-400`;
	const inStockClassName = `mb-2 me-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800`;
	const outOfStockClassName = `mb-2 me-2 cursor-default rounded-lg border border-gray-400 px-5 py-2.5 text-center text-sm font-medium text-gray-400 dark:border-gray-600 dark:text-gray-400`;

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

				{/* TODO: probably a good idea to create a separate component for this */}
				<form action={addItemToCart}>
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
						<div className="flex flex-row items-baseline justify-between">
							<div className="text-xl">
								{formatPrice(getBasicVariantPrice(product))}
							</div>

							<button
								type="submit"
								disabled={!productAvailable(product)}
								className={
									productAvailable(product)
										? inStockClassName
										: outOfStockClassName
								}
							>
								{productAvailable(product) ? "Add to cart" : "Out of stock"}
							</button>
						</div>
					</div>
				</form>
			</section>
		</>
	);
};

export default ProductInfoPanel;

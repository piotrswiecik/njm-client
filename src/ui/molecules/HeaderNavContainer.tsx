import { cookies } from "next/headers";
import { getOrderById } from "@/api/cart";
import HeaderNavDesktop from "@/ui/molecules/HeaderNavDesktop";
import HeaderNavMobile from "@/ui/molecules/HeaderNavMobile";

const availableCategories = [
	"rock",
	"jazz",
	"classical",
	"electronic",
	"rap",
	"metal",
];

const HeaderNavContainer = async () => {
	let cartItemsCount = 0;
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getOrderById(cartId);
		if (cart && cart.orderItems) {
			cartItemsCount = cart.orderItems.reduce(
				(acc, item) => acc + item.quantity,
				0,
			);
		}
	}

	return (
		<>
			<HeaderNavDesktop
				categories={availableCategories}
				cartItemsCount={cartItemsCount}
			/>
			<HeaderNavMobile
				categories={availableCategories}
				cartItemsCount={cartItemsCount}
			/>
		</>
	);
};

export default HeaderNavContainer;

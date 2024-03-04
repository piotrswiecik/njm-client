import { type OrderDetailsFragment } from "@/graphql/generated/graphql";

type OrderSubmitButtonProps = {
	order: OrderDetailsFragment;
};

const OrderSubmitButton = async ({ order }: OrderSubmitButtonProps) => {
	// TODO: make this reusable in global styles
	const inStockClassName = `mb-2 me-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800`;
	const outOfStockClassName = `mb-2 me-2 cursor-default rounded-lg border border-gray-400 px-5 py-2.5 text-center text-sm font-medium text-gray-400 dark:border-gray-600 dark:text-gray-400`;

	const isDisabled = () => {
		if (order.total === 0) {
			return true;
		}
		return false;
	};

	return (
		<>
			<button
				type="submit"
				disabled={isDisabled()}
				className={`${isDisabled() ? outOfStockClassName : inStockClassName}`}
			>
				Order
			</button>
		</>
	);
};

export default OrderSubmitButton;

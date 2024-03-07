import { revalidateTag } from "next/cache";
import { queryGraphql } from "@/api/queryGraphql";
import {
	OrderSetStatusDocument,
	type StatusEnum,
} from "@/graphql/generated/graphql";

export const setOrderStatus = async ({
	id,
	status,
}: {
	id: string;
	status: StatusEnum;
}) => {
	// TODO: error boundary
	const { setOrderStatus } = await queryGraphql({
		query: OrderSetStatusDocument,
		variables: {
			where: id,
			status,
		},
		next: {
			tags: ["order", "status"],
		},
	});
	if (!setOrderStatus || !setOrderStatus.id) {
		throw new Error("Order status not updated");
	}
	revalidateTag("status");
	revalidateTag("order");
};

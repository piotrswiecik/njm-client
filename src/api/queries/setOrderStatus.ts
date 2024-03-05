import { queryGraphql } from "@/api/queryGraphql";
import { OrderSetStatusDocument, type StatusEnum } from "@/graphql/generated/graphql";

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
  });
  if (!setOrderStatus || !setOrderStatus.id) {
    throw new Error("Order status not updated");
  }
};

import Image from "next/image";
import { type OrderDetailsFragment } from "@/graphql/generated/graphql";
import { USD } from "@/lib/utils";

const OrderCard = async ({
	orderDetails,
	paymentStatus,
	subtotal,
	shipping,
	total,
}: {
	orderDetails: OrderDetailsFragment | null;
	paymentStatus: string;
	subtotal: number;
	shipping: number;
	total: number;
}) => {
	return (
		<div className="flex flex-col rounded-lg bg-slate-50 p-4 shadow-sm">
			<h2 className="mb-4 border-b pb-2 font-semibold">Order summary:</h2>
			<table className="mb-6 max-w-60">
				<tbody>
					<tr>
						<td>Payment status:</td>
						<td>
							<span
								className={`${paymentStatus === "PAID" ? "text-green-600" : "text-red-500"}`}
							>
								{paymentStatus}
							</span>{" "}
						</td>
					</tr>
					<tr>
						<td>Subtotal:</td>
						<td>{USD.format(subtotal)}</td>
					</tr>
					<tr>
						<td>Shipping:</td>
						<td>{USD.format(shipping)}</td>
					</tr>
					<tr>
						<td className="font-semibold">Total:</td>
						<td className="font-semibold">{USD.format(total)}</td>
					</tr>
				</tbody>
			</table>
			{orderDetails && (
				<div>
					<h2 className="mb-4 border-b pb-2 font-semibold">Items:</h2>
					<ul>
						{orderDetails.orderItems?.map((item) => (
							// <li key={item.id}>
							// 	{item.quantity} x {item.variant.product.title}
							// </li>
							<li key={item.id} className="mb-4 list-none border-b pb-4">
								<div className="flex flex-row">
									<Image
										src={item.variant.product.coverImageUrl}
										alt={item.variant.product.title}
										width={160}
										height={160}
									/>
									<div className="px-4 flex flex-col">
										<p>
											
											{item.variant.product.title}
										</p>
										<p className="italic text-slate-500">
											{item.variant.product.artist.name}
										</p>
                    <div className="grow"></div>
                    <p><span className="font-semibold">{item.quantity} x</span>{" "} {USD.format(item.variant.price)}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default OrderCard;

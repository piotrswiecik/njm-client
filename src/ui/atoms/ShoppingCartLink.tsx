import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartLink = () => {
	return (
		<div className="m-0 hidden flex-row items-baseline p-0 sm:flex">
			<Link href="#">
				<ShoppingCart color="#334155" strokeWidth={2} size={36} className="inline-block" />
			</Link>
		</div>
	);
};

export default ShoppingCartLink;

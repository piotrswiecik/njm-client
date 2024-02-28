import Image from "next/image";
import { getProductsByCollection } from "@/api/getProductsByCollection";

type CollectionCardProps = {
	name: string;
};

const CollectionCard = async ({ name }: CollectionCardProps) => {
	const products = await getProductsByCollection(name);

	// FIXME: temporary, add descriptions to database later
	const namesMapping = [
		{ name: "new", description: "New arrivals" },
		{ name: "staffpicks", description: "Staff picks" },
		{ name: "bestsellers", description: "Best selling" },
	];

	return (
		<div className="flex flex-col border-b border-slate-300 py-8 sm:my-0 sm:flex-row sm:border-none sm:pr-12">
			<div className="flex flex-col">
				<div>
					<h2 className="mb-2 font-bold xl:text-lg">
						{namesMapping.find((item) => item.name === name)?.description}
					</h2>
				</div>
				<div>
					<Image
						src={products[0].coverImageUrl}
						alt={products[0].title}
						width={400}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
};

export default CollectionCard;

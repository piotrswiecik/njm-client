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
		<div className="flex flex-col sm:flex-row sm:my-0 sm:pr-12 py-8 border-b sm:border-none border-slate-300">
			<div className="flex flex-col">
				<div>
					<h2 className="xl:text-lg font-bold mb-2">
						{namesMapping.find((item) => item.name === name)?.description}
					</h2>
				</div>
				<div>
					<img src={products[0].coverImageUrl} width={400} height={400} />
				</div>
			</div>
		</div>
	);
};

export default CollectionCard;

import Image from "next/image";
import Link from "next/link";
import { type Route } from "next";
import { getProductsByCollection } from "@/api/queries/getProductsByCollection";

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
		<div className="flex flex-col border-b border-slate-300 py-8 sm:my-0 sm:flex-row sm:border-none sm:p-4">
			<div className="flex flex-col">
				<div>
					<h2 className="mb-2 font-bold xl:text-lg">
						{namesMapping.find((item) => item.name === name)?.description}
					</h2>
				</div>
				<div>
					<Link
						href={`/collections/${name}` as Route}
						className="transition-all duration-300 hover:opacity-75"
					>
						<Image
							src={products[0].coverImageUrl}
							alt={products[0].title}
							width={400}
							height={400}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CollectionCard;

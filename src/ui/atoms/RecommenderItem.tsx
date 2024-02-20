type RecommenderItemProps = {
	item: {
		title: string;
		artist: string;
		image: {
			url: string;
		};
	};
};

const RecommenderItem = ({ item }: RecommenderItemProps) => {
	return (
		<div className="flex flex-col">
			<h2 className="order-2">{item.title}</h2>
			<p className="order-3 text-slate-600">{item.artist}</p>
			<img
				className="order-1 aspect-square transition-all duration-300 group-hover:opacity-75 sm:max-w-[200px]"
				src={item.image.url}
				alt={item.title}
			/>
		</div>
	);
};

export default RecommenderItem;

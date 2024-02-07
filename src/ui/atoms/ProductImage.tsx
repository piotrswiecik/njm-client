type ProductImageProps = {
	coverImage: {
		url: string;
		alt: string;
	};
};

export const ProductImage = ({ coverImage }: ProductImageProps) => {
	return (
		<div className="w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
			<img
				src={coverImage.url}
				alt={coverImage.alt}
				className="object-cover object-center"
			/>
		</div>
	);
};

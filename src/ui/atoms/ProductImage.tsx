type ProductImageProps = {
	coverImage: {
		url: string;
		alt: string;
	};
};

export const ProductImage = ({ coverImage }: ProductImageProps) => {
	return (
		<div className="w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 h-80">
			<img
				src={coverImage.url}
				alt={coverImage.alt}
				className="object-fit object-center"
			/>
		</div>
	);
};

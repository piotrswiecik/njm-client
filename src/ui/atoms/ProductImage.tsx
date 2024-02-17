type ProductImageProps = {
	url: string;
	alt: string;
};

const ProductImage = ({ url, alt }: ProductImageProps) => {
	return (
		// keep the aspect ratio of the image
		<div className="aspect-square overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 transition-all duration-300">
			<img
				src={url}
				alt={alt}
				// stretch the image to fill the container
				className="h-full w-full object-cover"
			/>
		</div>
	);
};

export default ProductImage;

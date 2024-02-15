type ProductImageProps = {
	url: string;
	alt: string;
};

const ProductImage = ({ url, alt }: ProductImageProps) => {
	return (
		<div className="w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
			<img
				src={url}
				alt={alt}
				className="h-80 w-80 object-cover"
			/>
		</div>
	);
};

export default ProductImage;
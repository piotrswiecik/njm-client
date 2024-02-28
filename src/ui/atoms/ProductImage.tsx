import Image from "next/image";

type ProductImageProps = {
	url: string;
	alt: string;
	width?: number;
	height?: number;
};

const ProductImage = ({ url, alt, width = 600, height = 600}: ProductImageProps) => {
	return (
		// keep the aspect ratio of the image
		<div className="aspect-square overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 transition-all duration-300">
			<Image
				src={url}
				alt={alt}
				width={width}
				height={height}
				// stretch the image to fill the container
				className="aspect-square object-cover"
			/>
		</div>
	);
};

export default ProductImage;

import { type Product } from "@/app/models";
import ProductDetails from "@/ui/atoms/ProductDetails";
import ProductImage from "@/ui/atoms/ProductImage";

type ProductDetailsCardProps = {
  product: Product;
};

const ProductDetailsCard = ({ product }: ProductDetailsCardProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <ProductImage url={product.image} alt={product.title} />
        <ProductDetails product={product} />
      </div>
    </>
  );
};

export default ProductDetailsCard;
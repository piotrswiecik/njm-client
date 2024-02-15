import { type Product } from "@/app/models";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      <div>
        test product details
      </div>
    </>
  );
};

export default ProductDetails;
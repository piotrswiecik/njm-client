const ProductDetailsHeader = ({ name }: { name: string }) => {
  return (
    <>
      <h1 className="font-semibold text-lg">{ name }</h1>
    </>
  );
};

export default ProductDetailsHeader;
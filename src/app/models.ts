export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  coverImage: {
    url: string;
    alt: string;
  };
  description: string;
};

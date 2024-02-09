export type Product = {
  id: string;
  title: string;
  artist: string;
  price: number;
  slug: string; // TODO maybe better as computed property
  genre: string;  // TODO to enum
  format: string;  // TODO to enum
  coverImage: {
    url: string;
    alt: string;
  };
  description: string;
};

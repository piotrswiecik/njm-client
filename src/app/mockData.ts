import type { Product } from "@/app/models";

export const mockData: Product[] = [
  {
    id: "1",
    name: "Machined Pen",
    slug: "machined-pen",
    description: "Black pen.",
    price: 48,
    coverImage: {
      url: "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      alt: "Black pen.",
    },
  },
  {
    id: "2",
    name: "Earthen Mug",
    slug: "earthen-mug",
    description: "For coffee.",
    price: 48,
    coverImage: {
      url: "https://tailwindui.com/img/ecommerce-images/home-page-02-product-02.jpg",
      alt: "Just a mug.",
    },
  },
  {
    id: "3",
    name: "Leatherbound Daily Journal",
    slug: "leatherbound-daily-journal",
    description: "Use it to make notes.",
    price: 48,
    coverImage: {
      url: "https://tailwindui.com/img/ecommerce-images/home-page-02-product-04.jpg",
      alt: "A black journal.",
    },
  },
  {
    id: "4",
    name: "Organize Pen Holder",
    slug: "organize-pen-holder",
    description: "Put some stuff in it.",
    price: 48,
    coverImage: {
      url: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
      alt: "A white pen holder.",
    },
  }
];

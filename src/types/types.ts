import type * as prismic from "@prismicio/client";

export interface BannerType {
  title: string;
  banner_content: prismic.RichTextField; //  RichTextField
  old_price: number;
  new_price: number;
  promo_image: string; // URL jest stringiem
  color: string;
}

export type Category = "pizza" | "pasta";

export interface MenuType {
  title: string;
  ingredients: string;
  price: number;
  image: string;
  category: Category;
}

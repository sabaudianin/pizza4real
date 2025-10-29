export type Category = "pizza" | "pasta";

export interface MenuType {
  title: string;
  ingredients: string;
  price: number;
  image: string;
  category: Category;
}

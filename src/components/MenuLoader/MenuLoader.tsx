import { client } from "@/lib/prismicio";
import { Menu } from "../Menu/Menu";
import { MenuType, Category } from "@/types/types";
import { MenuItemDocument } from "../../../prismicio-types";
import * as prismic from "@prismicio/client";

export const MenuLoader = async () => {
  const menuResponse = await client.getAllByType<MenuItemDocument>(
    "menu_item",
    {
      orderings: [
        //prefix my.
        { field: "my.menu_item.category", direction: "asc" },
        { field: "my.menu_item.title", direction: "asc" },
      ],
    }
  );

  const menuItems: MenuType[] = menuResponse
    .map((item) => {
      const data = item.data;
      const title = prismic.isFilled.keyText(data.title)
        ? data.title
        : "Brak tytułu";
      const ingredients = prismic.isFilled.keyText(data.ingredients)
        ? data.ingredients
        : "Składniki nieokreślone";

      const price = (data.price || 0) as number;
      const image = prismic.isFilled.image(data.image)
        ? data.image.url
        : "/placeholder-pizza.png";
      const category = (data.category || "pizza") as Category;

      return {
        title,
        ingredients,
        price,
        image,
        category,
      };
    })
    .filter((filterItem) => filterItem.title && filterItem.price);

  return <Menu menuData={menuItems} />;
};

import { client } from "@/lib/prismicio";
import { Menu } from "../Menu/Menu";
import { MenuType } from "@/types/types";

export const MenuLoader = async () => {
  const menuResponse = await client.getAllByType("menu_item", {
    orderings: [
      { field: "my.menu_item.category", direction: "asc" },
      { field: "my.menu_item.title", direction: "asc" },
    ],
  });

  const menuItems: MenuType[] = menuResponse
    .map((item) => {
      const data = item.data as any;
      return {
        title: data.title || "Brak tytułu",
        ingredients: data.ingredients,
        price: data.price as number,
        image: data.image?.url,
        category: data.category as "pizza" | "pasta",
      };
    })
    .filter((filterItem) => filterItem.title && filterItem.price);

  return <Menu menuData={menuItems} />;
};

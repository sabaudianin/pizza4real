import { client } from "@/lib/prismicio";
import { Menu } from "../Menu/Menu";
import { MenuType } from "@/types/types";

export const MenuLoader = async () => {
  const menuResponse = await client.getAllByType("menu_item", {
    orderings: [
      { field: "menu_item.category", direction: "asc" },
      { field: "menu_item.title", direction: "asc" },
    ],
  });

  const MenuItems: MenuType[] = menuResponse
    .map((item) => {
      const data = item.data as any;
      return {
        title: data.title,
        ingredients: data.ingredients,
        price: data.price,
        image: data.image,
        category: data.category,
      };
    })
    .filter((filterItem) => filterItem.title & filterItem.price);

  return <Menu menuData={menuItems} />;
};

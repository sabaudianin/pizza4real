import { client } from "@/lib/prismicio";
import { Menu } from "../Menu/Menu";
import type { Category } from "@/types/types";
import { MenuType } from "@/types/types";

export const MenuLoader = async () => {
  const menuResponse = await client.getAllByType("menu_item", {
    orderings: [
      { field: "menu_item.category", direction: "asc" },
      { field: "menu_item.title", direction: "asc" },
    ],
  });
};

"use server";

import { revalidatePath } from "next/cache";
import { incrementItemQuantity } from "@db/bag";

export async function addMenuItemAction(productId: string) {
  await incrementItemQuantity(productId);

  revalidatePath("/order/menu/[category]", "layout");
}

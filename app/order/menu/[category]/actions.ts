"use server";

import { revalidatePath } from "next/cache";
import { incrementItemQuantity } from "@/lib/service/bag";

export async function addMenuItemAction(productId: string) {
  await incrementItemQuantity(productId);

  revalidatePath("/order/menu/[category]", "layout");
}

"use server";

import { revalidatePath } from "next/cache";
import { decrementItemQuantity, incrementItemQuantity } from "@db/bag";

export async function incrementItemQuantityAction(productId: string) {
  await incrementItemQuantity(productId);

  revalidatePath("/order/bag");
}

export async function decrementItemQuantityAction(productId: string) {
  await decrementItemQuantity(productId);

  revalidatePath("/order/bag");
}

"use server";

import { revalidatePath } from "next/cache";
import {
  clearBag,
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemFromBag,
} from "@db/bag";

export async function incrementItemQuantityAction(productId: string) {
  await incrementItemQuantity(productId);

  revalidatePath("/order/bag", "page");
}

export async function decrementItemQuantityAction(productId: string) {
  await decrementItemQuantity(productId);

  revalidatePath("/order/bag", "page");
}

export async function removeItemFromBagAction(productId: string) {
  await removeItemFromBag(productId);

  revalidatePath("/order/bag", "page");
}

export async function clearBagAction() {
  await clearBag();

  revalidatePath("/order/bag", "page");
}

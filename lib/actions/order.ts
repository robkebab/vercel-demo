"use server";

import { revalidatePath } from "next/cache";
import { createBag, getBag } from "../db/bag";
import { prisma } from "../db/prisma/client";

export async function addMenuItemAction(productId: string) {
  const bag = (await getBag()) ?? (await createBag());

  const existingItem = bag.items.find((item) => item.productId === productId);

  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.cartItem.create({
      data: { cartId: bag.id, productId, quantity: 1 },
    });
  }

  revalidatePath("/order/menu/[category]");
}

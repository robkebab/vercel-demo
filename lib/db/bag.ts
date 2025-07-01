import { auth } from "@/auth";
import { cookies } from "next/headers";
import { prisma } from "./prisma/prisma";
import { CartItem, Prisma } from "@db/prisma/client";

export type OrderBagWithItems = Prisma.CartGetPayload<{
  include: {
    items: {
      include: {
        product: true;
      };
    };
  };
}>;

export type OrderBag = OrderBagWithItems & {
  size: number;
  subtotal: number;
};

export async function createBag(): Promise<OrderBag> {
  const session = await auth();

  const cartAssociation = session?.user ? { userId: session.user.id } : {};

  const newBag = await prisma.cart.create({
    data: cartAssociation,
  });

  (await cookies()).set("bagId", newBag.id);

  return {
    ...newBag,
    items: [],
    size: 0,
    subtotal: 0,
  };
}

async function getAnonymousBag(): Promise<OrderBagWithItems | null> {
  const localBagId = (await cookies()).get("bagId")?.value;
  if (!localBagId) return null;
  return prisma.cart.findUnique({
    where: {
      id: localBagId,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
}

async function getUserBag(userId: string): Promise<OrderBagWithItems | null> {
  return prisma.cart.findFirst({
    where: { userId },
    include: { items: { include: { product: true } } },
  });
}

export async function getBag(): Promise<OrderBag | null> {
  const session = await auth();

  const bag = session?.user?.id
    ? await getUserBag(session.user.id)
    : await getAnonymousBag();

  if (!bag) return null;

  return {
    ...bag,
    size: bag.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: bag.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0,
    ),
  };
}

export async function mergeCarts(userId: string) {
  const localBag = await getAnonymousBag();
  if (!localBag) return;

  const userBag = await getUserBag(userId);

  await prisma.$transaction(async (tx) => {
    if (userBag) {
      const mergedItems = mergeCartItems(localBag.items, userBag.items);
      await tx.cartItem.deleteMany({
        where: { cartId: localBag.id },
      });
      await tx.cartItem.createMany({
        data: mergedItems.map(({ productId, quantity }) => ({
          cartId: userBag.id,
          productId,
          quantity,
        })),
      });
    } else {
      await tx.cart.create({
        data: {
          userId,
          items: {
            createMany: {
              data: localBag.items.map(({ productId, quantity }) => ({
                productId,
                quantity,
              })),
            },
          },
        },
      });
    }

    await tx.cart.delete({
      where: { id: localBag.id },
    });

    (await cookies()).set("bagId", "");
  });
}

function mergeCartItems(...cartItems: CartItem[][]) {
  return cartItems.reduce((acc, item) => {
    item.forEach((item) => {
      const existingItem = acc.find((i) => i.productId === item.productId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }
    });
    return acc;
  }, [] as CartItem[]);
}

export async function getBagCount(): Promise<number> {
  const session = await auth();
  const userId = session?.user?.id;
  const bagId = (await cookies()).get("bagId")?.value;
  if (!userId && !bagId) return 0;

  const relation = userId ? { cart: { userId } } : { cart: { id: bagId } };

  return prisma.cartItem
    .findMany({
      where: relation,
    })
    .then((items) => items.reduce((acc, item) => acc + item.quantity, 0));
}

export async function adjustItemQuantity({
  productId,
  adjustBy,
}: {
  productId: string;
  adjustBy: number;
}): Promise<void> {
  if (adjustBy === 0) return;
  const isIncrement = adjustBy > 0;

  const bag = (await getBag()) ?? (await createBag());

  const existingItem = bag.items.find((item) => item.productId === productId);

  const existingQuantity = existingItem?.quantity ?? 0;
  const safeDecrement = Math.max(0, existingQuantity - Math.abs(adjustBy));

  const adjustment = isIncrement
    ? { increment: adjustBy }
    : { decrement: safeDecrement };

  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: adjustment },
    });
  } else if (isIncrement) {
    await prisma.cartItem.create({
      data: { cartId: bag.id, productId, quantity: 1 },
    });
  }
}

export async function incrementItemQuantity(productId: string): Promise<void> {
  await adjustItemQuantity({ productId, adjustBy: 1 });
}

export async function decrementItemQuantity(productId: string): Promise<void> {
  await adjustItemQuantity({ productId, adjustBy: -1 });
}

export async function removeItemFromBag(productId: string): Promise<boolean> {
  const bag = await getBag();

  if (!bag) return false;

  const item = bag.items.find((item) => item.productId === productId);
  if (!item) return false;

  await prisma.cartItem.delete({
    where: {
      id: item.id,
    },
  });

  return true;
}

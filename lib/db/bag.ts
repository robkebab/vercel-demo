import { cookies } from "next/headers";
import { prisma } from "./prisma/client";
import { Prisma } from "./prisma/generated-client";

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
  const newBag = await prisma.cart.create({
    data: {},
  });
  const cookieStore = await cookies();
  cookieStore.set("bagId", newBag.id);
  return {
    ...newBag,
    items: [],
    size: 0,
    subtotal: 0,
  };
}

export async function getBag(): Promise<OrderBag | null> {
  const localBagId = (await cookies()).get("bagId")?.value;
  const bag = localBagId
    ? await prisma.cart.findUnique({
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
      })
    : null;

  if (bag) {
    return {
      ...bag,
      size: bag.items.reduce((acc, item) => acc + item.quantity, 0),
      subtotal: bag.items.reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0,
      ),
    };
  }

  return null;
}

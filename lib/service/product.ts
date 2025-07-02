import { prisma } from "../db/prisma/prisma";

export async function getProductsByCategory(categoryId: string) {
  return prisma.product.findMany({
    where: {
      categoryId,
    },
  });
}

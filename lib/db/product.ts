import { prisma } from "./prisma/prisma";

export async function getProductsByCategory(categoryId: string) {
  return prisma.product.findMany({
    where: {
      categoryId,
    },
  });
}

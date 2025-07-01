import { prisma } from "./prisma/prisma";

export async function listCategories() {
  return prisma.productCategory.findMany();
}

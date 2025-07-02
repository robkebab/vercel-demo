import { prisma } from "../db/prisma/prisma";

export async function listCategories() {
  return prisma.productCategory.findMany();
}

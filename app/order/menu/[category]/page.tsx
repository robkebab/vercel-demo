import {
  MenuItems,
  MenuItemsSkeleton,
} from "@/app/order/menu/[category]/menu-items";
import { Sidenav } from "@/app/order/menu/[category]/sidenav";
import { Suspense } from "react";
import { prisma } from "@/lib/db/prisma/prisma";

interface IOrderMenuPageProps {
  params: Promise<{ category: string }>;
}

const parseCategoryName = (categoryPath: string) => {
  const words = categoryPath.split("-");
  const result = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return result;
};

export default async function OrderMenuPage({ params }: IOrderMenuPageProps) {
  const { category } = await params;
  const categories = await prisma.productCategory.findMany();
  const activeCategoryId =
    categories.find((cat) => parseCategoryName(category) === cat.name)?.id ||
    "";

  return (
    <>
      <div className="flex">
        <Sidenav categories={categories} activeId={activeCategoryId} />
        <Suspense fallback={<MenuItemsSkeleton />}>
          <MenuItems categoryId={activeCategoryId} />
        </Suspense>
      </div>
    </>
  );
}

import {
  MenuItems,
  MenuItemsSkeleton,
} from "@/app/order/menu/[category]/menu-items";
import { Sidenav } from "@/app/order/menu/[category]/sidenav";
import { Suspense } from "react";
import { listCategories } from "@/lib/db/category";

interface IOrderMenuPageProps {
  params: Promise<{ category: string }>;
}

const parseCategoryName = (categoryPath: string) => {
  const words = categoryPath.split("-");
  const result = words
    .map((word) => {
      if (word === "%26") {
        return "&";
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  return result;
};

export default async function OrderMenuPage({ params }: IOrderMenuPageProps) {
  const { category } = await params;
  const categories = await listCategories();
  const activeCategoryId =
    categories.find((cat) => parseCategoryName(category) === cat.name)?.id ||
    "";

  return (
    <>
      <div className="flex items-start justify-between max-w-screen-2xl mx-auto">
        <Sidenav categories={categories} activeId={activeCategoryId} />
        <Suspense fallback={<MenuItemsSkeleton />}>
          <MenuItems categoryId={activeCategoryId} />
        </Suspense>
      </div>
    </>
  );
}

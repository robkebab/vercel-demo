import { MenuItems, MenuItemsSkeleton } from "@/components/order/menu-items";
import { Sidenav } from "@/components/order/sidenav";
import { Suspense } from "react";

interface IOrderMenuPageProps {
  params: Promise<{ category: string }>;
}

export default async function OrderMenuPage({ params }: IOrderMenuPageProps) {
  const { category } = await params;

  return (
    <>
      <div className="flex">
        <Sidenav category={category} />
        <Suspense fallback={<MenuItemsSkeleton />}>
          <MenuItems category={category} />
        </Suspense>
      </div>
    </>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddToBagButton from "./add-to-bag";
import Image from "next/image";
import { Product } from "@/lib/db/prisma/generated-client";
import { Skeleton } from "@/components/ui/skeleton";
import { prisma } from "@/lib/db/prisma/client";
import { addMenuItemAction } from "@/app/order/menu/[category]/actions";

interface MenuItemsProps {
  categoryId: string;
}

function MenuItemSkeleton() {
  return (
    <Card className="flex flex-col items-center bg-background rounded-xl border border-border p-6 shadow-sm">
      <CardHeader className="w-32 h-32 relative">
        <Skeleton className="w-full h-full rounded-lg" />
      </CardHeader>
      <CardTitle>
        <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
      </CardTitle>
      <CardContent className="text-center w-full">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-6 w-1/3 mx-auto mb-4" />
        <Skeleton className="h-10 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}

function MenuItem({ item }: { item: Product }) {
  const priceInDollars = item.price / 100;
  return (
    <Card
      key={item.id}
      className="flex flex-col items-center bg-background rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <CardHeader className="w-32 h-32 relative">
        <Image
          src="/images/wings.png"
          alt={item.name}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </CardHeader>
      <CardTitle className="text-lg font-semibold text-primary">
        {item.name}
      </CardTitle>
      <CardContent className="text-center w-full">
        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
        <div className="text-base font-bold text-primary mb-4">
          ${priceInDollars.toFixed(2)}
        </div>
        <AddToBagButton
          productId={item.id}
          addMenuItemAction={addMenuItemAction}
        />
      </CardContent>
    </Card>
  );
}

export function MenuItemsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {Array.from({ length: 6 }).map((_, index) => (
        <MenuItemSkeleton key={index} />
      ))}
    </div>
  );
}

export async function MenuItems({ categoryId }: MenuItemsProps) {
  const items = await prisma.product.findMany({
    where: {
      categoryId,
    },
  });

  if (items.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        No items found for this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

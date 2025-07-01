import { Button } from "../../../../components/ui/button";
import { Icon } from "../../../../components/ui/icon";
import { Badge } from "../../../../components/ui/badge";
import { getBagCount } from "@/lib/db/bag";
import { Suspense } from "react";
import Link from "next/link";

async function BagCount() {
  const count = await getBagCount();
  return (
    count > 0 && (
      <Badge
        variant="default"
        className="absolute -top-2 -right-2 bg-primary text-primary-foreground border-2 border-primary shadow text-xs px-1.5 py-0.5 font-bold min-w-[1.25rem] h-5 flex items-center justify-center"
        style={{ minWidth: "1.25rem" }}
      >
        {count}
      </Badge>
    )
  );
}

export function YourOrderButton() {
  return (
    <Button
      variant="gradient"
      className="rounded-full px-4 md:px-6 flex items-center gap-2 font-semibold text-primary relative"
      aria-label="Your Order"
      asChild
    >
      <Link href="/order/bag">
        <span className="relative">
          <Icon.ShoppingBag />
          <Suspense fallback={null}>
            <BagCount />
          </Suspense>
        </span>
        <span className="hidden md:inline">Your Order</span>
      </Link>
    </Button>
  );
}

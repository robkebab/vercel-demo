import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { Badge } from "../ui/badge";
import { getBagCount } from "@/lib/db/bag";
import { Suspense } from "react";

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
      variant="default"
      className="rounded-full px-4 md:px-6 flex items-center gap-2 bg-primary text-primary-foreground relative"
      aria-label="Your Order"
    >
      <span className="relative">
        <Icon.ShoppingBag />
        <Suspense fallback={null}>
          <BagCount />
        </Suspense>
      </span>
      <span className="hidden md:inline">Your Order</span>
    </Button>
  );
}

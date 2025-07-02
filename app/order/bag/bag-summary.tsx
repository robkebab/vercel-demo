import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { clearBagAction, removeItemFromBagAction } from "./actions";
import { getBag } from "@/lib/service/bag";
import Image from "next/image";
import { QuantityButtonGroup } from "./quantity-button-group";
import {
  decrementItemQuantityAction,
  incrementItemQuantityAction,
} from "./actions";

export async function BagSummary() {
  const bag = await getBag();
  const totalItems = bag ? bag.size : 0;

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Your Order</CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          {totalItems === 0
            ? "No items in your order."
            : `You have ${totalItems} item${totalItems > 1 ? "s" : ""} in your order.`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {bag && bag.items.length > 0 ? (
          <ul className="flex flex-col gap-6">
            {bag.items
              .sort((a, b) => (a.product.name > b.product.name ? 1 : -1))
              .map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 items-center border-b last:border-b-0 pb-4 last:pb-0"
                >
                  <div className="w-24 h-24 relative flex-shrink-0">
                    <Image
                      src={item.product.imageUrl ?? "/images/wings.png"}
                      alt={item.product.name}
                      fill
                      className="object-contain rounded-lg bg-muted"
                      sizes="96px"
                      priority={false}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-lg text-foreground">
                      {item.product.name}
                    </div>
                    <div className="text-sm text-muted-foreground line-clamp-2">
                      {item.product.description}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Qty: {item.quantity}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 min-w-[80px]">
                    <div className="font-bold text-base text-foreground">
                      ${((item.product.price * item.quantity) / 100).toFixed(2)}
                    </div>
                    <div className="flex gap-2">
                      <form
                        action={removeItemFromBagAction.bind(
                          null,
                          item.productId,
                        )}
                      >
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-destructive px-2 py-1 h-7"
                        >
                          Delete
                        </Button>
                      </form>
                      <QuantityButtonGroup
                        item={item}
                        decrementAction={decrementItemQuantityAction}
                        incrementAction={incrementItemQuantityAction}
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <div className="text-center text-muted-foreground py-8">
            Your bag is empty.
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <form action={clearBagAction}>
          <Button
            variant="outline"
            className="text-destructive border-destructive hover:bg-destructive/10"
            type="submit"
            disabled={bag?.items.length === 0}
          >
            Cancel order
          </Button>
        </form>
        <div className="text-xs text-muted-foreground">
          Order must be picked up on the same day.
        </div>
      </CardFooter>
    </Card>
  );
}

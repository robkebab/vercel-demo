"use client";

import { OrderBag } from "@/lib/service/bag";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useOptimistic } from "react";

export function QuantityButtonGroup({
  item,
  decrementAction,
  incrementAction,
}: {
  item: OrderBag["items"][number];
  decrementAction: (productId: string) => Promise<void>;
  incrementAction: (productId: string) => Promise<void>;
}) {
  const [quantity, setQuantity] = useOptimistic(
    item.quantity,
    (_state, action: number) => {
      return action;
    },
  );

  const decrementItemQuantityAction = async (formData: FormData) => {
    const quantity = formData.get("quantity") as string;
    const newQuantity = parseInt(quantity) - 1;
    setQuantity(newQuantity);
    await decrementAction(item.productId);
  };

  const incrementItemQuantityAction = async (formData: FormData) => {
    const quantity = formData.get("quantity") as string;
    const newQuantity = parseInt(quantity) + 1;
    setQuantity(newQuantity);
    await incrementAction(item.productId);
  };

  return (
    <div className="flex items-center border rounded-md text-primary">
      <form action={decrementItemQuantityAction}>
        <input type="hidden" name="quantity" value={quantity} />
        <Button
          size="sm"
          variant="ghost"
          className="px-2 py-1 h-7 rounded-r-none border-r cursor-pointer"
          type="submit"
          disabled={item.quantity === 1}
        >
          <Icon.Minus className="w-4 h-4 text-primary" />
        </Button>
      </form>
      <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
        {quantity}
      </span>
      <form action={incrementItemQuantityAction}>
        <input type="hidden" name="quantity" value={quantity} />
        <Button
          size="sm"
          variant="ghost"
          className="px-2 py-1 h-7 rounded-l-none border-l cursor-pointer"
          type="submit"
        >
          <Icon.Plus className="w-4 h-4 text-primary" />
        </Button>
      </form>
    </div>
  );
}

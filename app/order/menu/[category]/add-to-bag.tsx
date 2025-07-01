"use client";

import { useState, useTransition } from "react";
import { Button } from "../../../../components/ui/button";

interface AddToBagButtonProps {
  productId: string;
  addMenuItemAction: (productId: string) => Promise<void>;
}

export default function AddToBagButton({
  productId,
  addMenuItemAction,
}: AddToBagButtonProps) {
  const [isPending, startTransition] = useTransition();
  const setIsAdded = useState(false)[1];

  return (
    <Button
      variant="ghost"
      className="w-full mt-auto text-primary hover:text-primary/80 bg-foreground/10"
      onClick={() => {
        setIsAdded(false);
        startTransition(async () => {
          await addMenuItemAction(productId);
          setIsAdded(true);
        });
      }}
      disabled={isPending}
    >
      {isPending ? "Adding..." : "Add to Bag"}
    </Button>
  );
}

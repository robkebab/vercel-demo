"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../../../../components/ui/button";
import { addMenuItemAction } from "./actions";
import { Loader2 } from "lucide-react";

interface AddToBagButtonProps {
  productId: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="ghost"
      className="w-full mt-auto text-primary hover:text-primary/80 bg-foreground/10"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Adding...
        </>
      ) : (
        "Add to Bag"
      )}
    </Button>
  );
}

export default function AddToBagButton({ productId }: AddToBagButtonProps) {
  return (
    <form action={addMenuItemAction.bind(null, productId)}>
      <SubmitButton />
    </form>
  );
}

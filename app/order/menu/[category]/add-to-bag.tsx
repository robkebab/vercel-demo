import { Button } from "../../../../components/ui/button";
import { addMenuItemAction } from "./actions";

interface AddToBagButtonProps {
  productId: string;
}

export default function AddToBagButton({ productId }: AddToBagButtonProps) {
  return (
    <form action={addMenuItemAction.bind(null, productId)}>
      <Button
        variant="ghost"
        className="w-full mt-auto text-primary hover:text-primary/80 bg-foreground/10"
        type="submit"
      >
        Add to Bag
      </Button>
    </form>
  );
}

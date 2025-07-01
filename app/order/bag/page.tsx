import { getBag } from "@/lib/db/bag";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import {
  decrementItemQuantityAction,
  incrementItemQuantityAction,
} from "./actions";

export default async function BagPage() {
  const bag = await getBag();
  const taxRate = 0.0825; // Example tax rate
  const estimatedTax = bag ? bag.subtotal * taxRate : 0;
  const subtotal = bag ? bag.subtotal : 0;
  const totalItems = bag ? bag.size : 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-2 md:px-8 py-6 w-full max-w-7xl mx-auto">
      {/* Left: Order Details */}
      <div className="flex-1 min-w-0">
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
                          src={"/images/wings.png"}
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
                          $
                          {((item.product.price * item.quantity) / 100).toFixed(
                            2,
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-destructive px-2 py-1 h-7"
                            disabled
                          >
                            Delete
                          </Button>
                          <div className="flex items-center border rounded-md text-primary">
                            <form
                              action={decrementItemQuantityAction.bind(
                                null,
                                item.productId,
                              )}
                            >
                              <Button
                                size="sm"
                                variant="ghost"
                                className="px-2 py-1 h-7 rounded-r-none border-r cursor-pointer"
                                type="submit"
                              >
                                <Icon.Minus className="w-4 h-4 text-primary" />
                              </Button>
                            </form>
                            <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <form
                              action={incrementItemQuantityAction.bind(
                                null,
                                item.productId,
                              )}
                            >
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
            <Button
              variant="outline"
              className="text-destructive border-destructive hover:bg-destructive/10"
              disabled
            >
              Cancel order
            </Button>
            <div className="text-xs text-muted-foreground">
              Order must be picked up on the same day.
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Right: Order Summary & Actions */}
      <div className="w-full max-w-md flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Order</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 text-base">
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>${(subtotal / 100).toFixed(2)}</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" disabled>
                Add items
              </Button>
              <Button variant="gradient" className="flex-1" disabled>
                Check out
              </Button>
            </div>
          </CardContent>
        </Card>
        <Alert className="mt-2">
          <AlertTitle>
            You could receive{" "}
            <span className="text-primary font-bold">126 points</span> for this
            purchase.
          </AlertTitle>
          <AlertDescription>
            <span>
              <a href="#" className="underline text-primary">
                Sign in
              </a>{" "}
              or{" "}
              <a href="#" className="underline text-primary">
                sign up
              </a>{" "}
              for a Tommy Want Wingy account.
            </span>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

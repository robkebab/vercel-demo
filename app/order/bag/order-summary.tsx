import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getBag } from "@/lib/service/bag";
import Link from "next/link";

export async function OrderSummary() {
  const bag = await getBag();
  const taxRate = 0.0825; // Example tax rate
  const estimatedTax = bag ? (bag.subtotal / 100) * taxRate : 0;
  const subtotal = bag ? bag.subtotal / 100 : 0;

  return (
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
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 text-primary" asChild>
            <Link href="/order/menu/combos">Add more</Link>
          </Button>
          <Button variant="gradient" className="flex-1" disabled>
            Check out
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

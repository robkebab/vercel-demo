import { getBag } from "@/lib/service/bag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { PointsAlert, PointsAlertSkeleton } from "./points-alert";
import { Suspense } from "react";
import { BagSummary } from "./bag-summary";

export default async function BagPage() {
  const bag = await getBag();
  const taxRate = 0.0825; // Example tax rate
  const estimatedTax = bag ? (bag.subtotal / 100) * taxRate : 0;
  const subtotal = bag ? bag.subtotal / 100 : 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-2 md:px-8 py-6 w-full max-w-7xl mx-auto">
      <div className="flex-1 min-w-0">
        <BagSummary />
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
        <Suspense fallback={<PointsAlertSkeleton />}>
          <PointsAlert />
        </Suspense>
      </div>
    </div>
  );
}

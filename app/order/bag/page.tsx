import { PointsAlert, PointsAlertSkeleton } from "./points-alert";
import { Suspense } from "react";
import { BagSummary } from "./bag-summary";
import { OrderSummary } from "./order-summary";

export default async function BagPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-2 md:px-8 py-6 w-full max-w-7xl mx-auto">
      <div className="flex-1 min-w-0">
        <BagSummary />
      </div>
      <div className="w-full max-w-md flex flex-col gap-6">
        <OrderSummary />
        <Suspense fallback={<PointsAlertSkeleton />}>
          <PointsAlert />
        </Suspense>
      </div>
    </div>
  );
}

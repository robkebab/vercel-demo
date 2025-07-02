import { SignInLink } from "@/components/auth/auth-buttons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { auth } from "@/auth";

export function PointsAlertSkeleton() {
  return (
    <div className="mt-2 rounded-lg border bg-background p-4">
      <div className="flex flex-col space-y-2">
        {/* Title skeleton */}
        <div className="flex flex-wrap items-center gap-1">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-16" />
        </div>
        {/* Description skeleton */}
        <div className="flex items-center gap-1">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </div>
  );
}

export async function PointsAlert() {
  const session = await auth();

  const message = session?.user ? "Congrats! You'll earn" : "You could receive";

  return (
    <Alert className="mt-2">
      <AlertTitle>
        {message} <span className="text-primary font-bold">126 points</span> for
        this purchase.
      </AlertTitle>
      {!session?.user && (
        <AlertDescription>
          <span>
            <SignInLink /> for a Tommy Want Wingy account.
          </span>
        </AlertDescription>
      )}
    </Alert>
  );
}

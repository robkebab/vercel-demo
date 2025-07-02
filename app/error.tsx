"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center space-y-6 text-center max-w-md">
        <div className="flex flex-col items-center space-y-4">
          <AlertTriangle className="h-12 w-12 text-destructive" />
          <h1 className="text-2xl font-bold text-primary font-rubik-distressed">
            Oops! Something went wrong
          </h1>
        </div>

        <p className="text-muted-foreground">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={reset} className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>

          <Button
            variant="outline"
            className="text-primary"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="w-full text-left">
            <summary className="cursor-pointer text-sm text-muted-foreground hover:text-primary">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-xs text-muted-foreground bg-muted p-3 rounded-md overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

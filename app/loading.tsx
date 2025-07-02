import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <h1 className="text-2xl font-bold text-primary font-rubik-distressed">
          Tommy Want Wingy
        </h1>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

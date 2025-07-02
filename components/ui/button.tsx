import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-base",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10",
        lg: "h-12 px-6 text-lg",
        sm: "h-9 px-3",
      },
      variant: {
        default: "cursor-pointer",
        ghost:
          "cursor-pointer bg-transparent hover:bg-accent hover:text-accent-foreground",
        gradient:
          "cursor-pointer bg-[linear-gradient(to_right,_#fc2547_0%,_#ff5a00_50%,_#fc2547_100%)] text-primary font-semibold hover:brightness-110",
        subtleGradient:
          "cursor-pointer bg-gradient-to-r from-pink-500 to-orange-400 text-primary rounded-full hover:brightness-110",
        outline:
          "cursor-pointer border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ className, size, variant }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

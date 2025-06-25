import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      primary: "leading-7 [&:not(:first-child)]:mt-6",
      secondary: "text-sm text-muted-foreground",
    },
  },
});

type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "span"
  | "div";

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: TypographyElement;
}

function Typography({
  className,
  variant,
  asChild = false,
  as,
  ...props
}: TypographyProps) {
  const Comp = asChild ? Slot : as || getDefaultElement(variant);

  return (
    <Comp
      className={cn(typographyVariants({ className, variant }))}
      {...props}
    />
  );
}

function getDefaultElement(variant?: string | null): TypographyElement {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "primary":
    case "secondary":
    default:
      return "p";
  }
}

export { Typography, typographyVariants };

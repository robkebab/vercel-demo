"use client";

import * as React from "react";
import { Button } from "@/components/atoms/button";

interface CallToActionProps {
  title: string;
  description: string;
  buttonLabel: string;
  onClick?: () => void;
}

export function CallToAction({
  title,
  description,
  buttonLabel,
}: CallToActionProps) {
  return (
    <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-sm w-full max-w-md">
      <h2 className="text-2xl font-bold text-foreground font-sans text-center">
        {title}
      </h2>
      <p className="text-base text-muted-foreground text-center font-sans">
        {description}
      </p>
      <Button
        className="mt-2 w-full sm:w-auto"
        onClick={() => {}}
        variant="default"
      >
        {buttonLabel}
      </Button>
    </div>
  );
}

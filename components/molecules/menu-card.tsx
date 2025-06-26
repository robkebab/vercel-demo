import * as React from "react";
import { Button } from "@/components/atoms/button";
import { Card } from "@/components/molecules/card";
import Image from "next/image";

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  cta?: string;
  onCtaClick?: () => void;
}

export function MenuCard({
  image,
  title,
  description,
  cta,
  onCtaClick,
}: MenuCardProps) {
  return (
    <Card className="flex flex-col items-center gap-4 p-6 w-full max-w-xs bg-card text-card-foreground">
      <Image
        src={image}
        alt={title}
        width={160}
        height={120}
        className="rounded-lg object-cover"
        style={{ background: "var(--color-muted)" }}
      />
      <h3 className="text-lg font-bold text-foreground font-sans">{title}</h3>
      <p className="text-sm text-muted-foreground text-center font-sans">
        {description}
      </p>
      {cta && (
        <Button className="mt-2 w-full" onClick={onCtaClick} variant="default">
          {cta}
        </Button>
      )}
    </Card>
  );
}

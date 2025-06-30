import { Navbar } from "@/app/order/menu/[category]/navbar";
import type { ReactNode } from "react";

interface OrderLayoutProps {
  children: ReactNode;
}

export default function OrderLayout({ children }: OrderLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

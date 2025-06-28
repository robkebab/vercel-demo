import { Navbar } from "@/components/order/navbar";
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

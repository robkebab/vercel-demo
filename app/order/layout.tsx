import { Navbar } from "@/app/order/menu/[category]/navbar";
import type { ReactNode } from "react";
import { Footer } from "../../components/footer";

interface OrderLayoutProps {
  children: ReactNode;
}

export const experimental_ppr = true;

export default function OrderLayout({ children }: OrderLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
}
